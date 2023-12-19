import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { In } from "typeorm";
import { Block, Log, Context, Transaction, ETH_ADDRESS } from "./processor";
import { assertNotNull } from "@subsquid/evm-processor";
import { getSwapTransactionModel } from "../schema/getSwapTransactionModel";
import fs from "fs";
import { renderInOutToken } from "../utils";
import { getPoolModel } from "./getPoolModel";
import { readJsonFromFile, writeJsonToFile } from "../utils";
import * as balancerV1EthFactoryAbi from "../abi/balancer_v2_ethereum_factory";
import * as balancerV1EthPoolAbi from "../abi/balancer_v2_ethereum_pool";

// import PoolPostgre from "./pool.model";
// import SwapPostgre from "../model/generated/swap.model";



const renderDataFromJson = (obj: { [key: string]: any }, network: string) => {
  let arr: Array<any> = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key == network) {
        arr = obj[key];
      }
    }
  }
  return arr;
};

// let PoolModel = getPoolModel();
let factoryPools = new Set<string>();
let PoolData: Array<any> = [];
// let address: Object = readJsonFromFile("output.json") || { eth: [] };
// let result: Array<any> = renderDataFromJson(address, "eth");
let cacheTrans: Object = { txHash: "", data: {} };
interface PoolData {
  id: string;
  token0: string;
  token1: string;
}
interface SwapData {
  id: string;
  block: Block;
  transaction: Transaction;
  pool: string;
  amount0: bigint;
  amount1: bigint;
  recipient: string;
  sender: string;
  amount0In: bigint;
  amount0Out: bigint;
  amount1In: bigint;
  amount1Out: bigint;
}

const PoolModel = getPoolModel();
const SwapModel = getSwapTransactionModel();



// const SwapNoPoolModel = getSwapTransactionNoPoolModel();

processor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: "eth_processor_balancerV2",
  }),
  async (ctx) => {
    // await PoolPostgre.sync()
    // await SwapPostgre.sync()
    if (!factoryPools) {
      // factoryPools = await PoolPostgre.findAll().then(
      //   (pools: any) => new Set(pools.map((pool: any) => pool.address))
      // );

      factoryPools = await PoolModel.find({}).then(
        (pools: any) => new Set(pools.map((pool: any) => pool.address))
      );

      // PoolData= await PoolModel.find({})
      // factoryPools = new Set(PoolData.map((pool: any) => pool.address))
    }
    let swapsData: Array<any> = [];
    let swapsNoPoolData = [];
    let poolsData = [];
    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        // if (
        //   log.topics[0] == uniswapV3EthFactoryAbi.events.PoolCreated.topic &&
        //   ETH_ADDRESS==log.address
        // ) {
        //   //process log data
        //   let poolData = getPoolData(log, "uniswapv3");
        //   poolsData.push(poolData);
        // } else

        if (
          log.topics[0] == balancerV1EthFactoryAbi.events.PoolCreated.topic &&
          ETH_ADDRESS == log.address
        ) {
          let poolData = getPoolData(log);
          poolsData.push(poolData);
        }

        // if (
        //   log.topics[0] == uniswapV3EthPoolAbi.events.Swap.topic &&
        //   factoryPools.has(log.address)
        // ) {
        //   //process swap data
        //   let swapData = getSwapData(log, "uniswapv3");
        //   swapsData.push(swapData);
        // } else
        if (
          log.topics[0] == balancerV1EthPoolAbi.events.Swap.topic 
          // &&
          // factoryPools.has(log.address)
        ) {
          let swapData = getSwapData(log);
          swapsData.push(swapData);
        }
        // else if (log.topics[0] == uniswapV3EthPoolAbi.events.Swap.topic) {
        //   let swapData = getSwapData(log);
        //   swapsNoPoolData.push(swapData);
        // }
      }
    }
    await saveSwaps(ctx, swapsData);
    // await savePools(ctx, poolsData).then(async () => {
    //   await saveSwaps(ctx, swapsData);
    // });

    // await saveSwapsNoPool(ctx, swapsNoPoolData);
  }
);

function decodePoolLog(log: Log) {
  let event;

  event = balancerV1EthFactoryAbi.events.PoolCreated.decode(log);
  return {
    pool: event.pool,
  };
}

function decodeSwapLog(log: Log) {
  let event;
  event = balancerV1EthPoolAbi.events.Swap.decode(log);
  return {
    token0 : event.tokenIn,
    token1: event.tokenOut,
    amount0: event.amountIn,
    amount1: event.amountOut,
  };
}

function getPoolData(log: Log): any {
  let event = decodePoolLog(log);
  factoryPools.add(event?.pool.toLowerCase());
  return {
    id: event?.pool.toLowerCase()
  };
}

function getSwapData(log: Log) {
  let transaction = assertNotNull(
    log.transaction,
    "Swap log without transaction"
  );
  let event = decodeSwapLog(log);
  return {
    id: log.id,
    block: log.block,
    token0 : event.token0,
    transaction: transaction,
    token1: event.token1,
    amount0: event.amount0,
    amount1: event.amount1,
  };
}

async function savePools(ctx: Context, poolsData: PoolData[]) {
  let pools: Array<any> = [];
  for (let data of poolsData) {
    let pool = {
      id: data.id,
      token0: data.token0,
      token1: data.token1,
    };

    pools.push(pool);
    factoryPools.add(data.id);
  }
  // await PoolPostgre.bulkCreate(pools,{ignoreDuplicates:true})
  await PoolModel.insertMany(pools, { ordered: false })
    .then(() => {
      console.log("ETH pools inserted successfully", pools.length);
    })
    .catch((error: Error) => {
      console.error("Error inserting ETH pools:", error);
    });
}

async function saveSwaps(ctx: Context, swapsData: Array<any>) {
  // let poolIds = new Set<string>();

  // // const SwapModel = getSwapTransactionModel();
  // for (let data of swapsData) {
  //   poolIds.add(data.pool);
  // }
  // // let pools = PoolData.filter((pool)=>Array.from(poolIds).includes(pool.id))

  // let pools = await PoolModel.find({ id: { $in: Array.from(poolIds) } });
  // // let pools = await PoolPostgre.findAll({ where: { address: Array.from(poolIds) } });
  // // console.log("eth",pools[0])
  // let poolMap: Map<string, any> = new Map(
  //   pools.map((pool: any) => [pool.id, pool])
  // );
  // let swaps: Swap[] = [];
  let Swaps: Array<any> = [];
  for (let data of swapsData) {
    let {
      id,
      block,
      transaction,
      pool,
      token0,
      token1,
      amount0,
      amount1,
    } = data;

    // let poolEntity = assertNotNull(poolMap.get(pool));
    // let poolEntity = poolMap.get(pool);
    let document;
    // if(poolEntity!==undefined&&poolEntity!==null){
    document = {
      id,
      blockNumber: block.height,
      timestamp: new Date(block.timestamp),
      txHash: transaction.hash,
      pool_id: pool,
      // pool_token0: poolEntity.token0,
      // pool_token1: poolEntity.token1,
      pool_token0: token0.toString(),
      pool_token1: token1.toString(),
      amount0: amount0.toString(),
      amount1: amount1.toString(),
      // recipient,
      // sender,
      from: transaction.from,
    };
    Swaps.push(document);
    //}
    // else{
    //   document = {
    //     id,
    //     blockNumber: block.height,
    //     timestamp: new Date(block.timestamp),
    //     txHash: transaction.hash,
    //     pool_id: pool,
    //     pool_token0: null,
    //     pool_token1: null,
    //     amount0: amount0.toString(),
    //     amount1: amount1.toString(),
    //     recipient,
    //     sender,
    //     from: transaction.from,
    //   };
    // }
  
   

 
  }

  // await SwapPostgre.bulkCreate(Swaps,{ignoreDuplicates:true}).then(() => {
  //   console.log('ETH swaps inserted successfully',Swaps.length);

  // })

  await SwapModel.insertMany(Swaps, { ordered: false }).then(async () => {
    console.log("ETH swaps 2 inserted successfully", Swaps.length);

   
  });
  // .catch((error:Error) => {
  //   console.error('Error inserting ETH swaps:', error);
  // });
}

// async function saveSwapsNoPool(ctx: Context, swapsData: Array<any>) {
//   // let poolIds = new Set<string>();

//   // // const SwapModel = getSwapTransactionModel();
//   // for (let data of swapsData) {
//   //   poolIds.add(data.pool);
//   // }

//   // // let pools = await PoolModel.find({ id: { $in: Array.from(poolIds) } });
//   // let pools = await PoolPostgre.findAll({ where: { address: Array.from(poolIds) } });
//   // // console.log("eth",pools[0])
//   // let poolMap: Map<string, any> = new Map(
//   //   pools.map((pool: any) => [pool.address, pool])
//   // );
//   // let swaps: Swap[] = [];
//   let Swaps: Array<any> = [];
//   for (let data of swapsData) {
//     let {
//       id,
//       block,
//       transaction,
//       pool,
//       amount0,
//       amount1,
//       amount0In,
//       amount0Out,
//       amount1In,
//       amount1Out,
//       recipient,
//       sender,
//     } = data;
//     // let poolEntity = assertNotNull(poolMap.get(pool));
//     let document;
//     document = {
//       idSquid: id,
//       blockNumber: block.height,
//       timestamp: new Date(block.timestamp),
//       txHash: transaction.hash,
//       pool_id: pool,
//       // pool_token0: poolEntity.token0,
//       // pool_token1: poolEntity.token1,
//       amount0: amount0.toString(),
//       amount1: amount1.toString(),
//       recipient,
//       sender,
//       from: transaction.from,
//     };

//     Swaps.push(document);
//   }

//   // await SwapPostgre.bulkCreate(Swaps,{ignoreDuplicates:true}).then(() => {
//   //   console.log('ETH swaps inserted successfully',Swaps.length);
//   // })

//   await SwapNoPoolModel.insertMany(Swaps, { ordered: false }).then(() => {
//     console.log("ETH swapsnopool inserted successfully", Swaps.length);
//   });
//   // .catch((error:Error) => {
//   //   console.error('Error inserting ETH swaps:', error);
//   // });
// }
