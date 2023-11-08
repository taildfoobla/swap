import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { In } from "typeorm";
import { Block, Log, Context, Transaction, BSC_ADDRESS } from "./processor";
import { assertNotNull } from "@subsquid/evm-processor";
import { getSwapTransactionModel } from "../schema/getSwapTransactionModel";
import fs from "fs";
import { renderInOutToken } from "../utils";
import { getPoolModel } from "../schema/getPoolModel";
import { readJsonFromFile,writeJsonToFile } from "../utils";
import * as pancakeswapV3BscFactoryAbi from '../abi/pancakeswap_v3_binance_factory'
import * as pancakeswapV3BscPoolAbi from '../abi/pancakeswap_v3_binance_pool'
import * as pancakeswapV2BscFactoryAbi from '../abi/pancakeswap_v2_binance_factory'
import * as pancakeswapV2BscPoolAbi from '../abi/pancakeswap_v2_binance_pool'
import PoolPostgre from "../model/generated/pool.model";
import SwapPostgre from "../model/generated/swap.model";


const renderDataFromJson = (
    obj: { [key: string]: any },
    network: string
  ) => {
    let arr:Array<any>=[]
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
// let address: Object = readJsonFromFile("output.json") || { bsc: [] };
// let result: Array<any> = renderDataFromJson(address,"bsc");
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
processor.run(new TypeormDatabase({ supportHotBlocks: true,stateSchema: 'bsc_processor' }), async (ctx) => {
  if (!factoryPools) {
    // factoryPools = await ctx.store
    //   .findBy(Pool, {})
    //   .then((pools) => new Set(pools.map((pool) => pool.id)));
    factoryPools = await PoolPostgre.findAll().then(
      (pools: any) => new Set(pools.map((pool: any) => pool.id))
    );
  }
  let swapsData = [];
  let poolsData = [];
  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      if (
        log.topics[0] == pancakeswapV3BscFactoryAbi.events.PoolCreated.topic &&
        BSC_ADDRESS.includes(log.address)
      ) {
        //process log data
        let poolData = getPoolData(log, "pancakeswapv3");
        poolsData.push(poolData);
      } else if (
        log.topics[0] == pancakeswapV2BscFactoryAbi.events.PairCreated.topic &&
        BSC_ADDRESS.includes(log.address)
      ) {
        let poolData = getPoolData(log, "pancakeswapv2");
        poolsData.push(poolData);
      }
      if (
        log.topics[0] == pancakeswapV3BscPoolAbi.events.Swap.topic &&
        factoryPools.has(log.address)
      ) {
        //process swap data
        let swapData = getSwapData(log, "pancakeswapv3");
        swapsData.push(swapData);
      } else if (
        log.topics[0] == pancakeswapV2BscPoolAbi.events.Swap.topic &&
        factoryPools.has(log.address)
      ) {
        let swapData = getSwapData(log, "pancakeswapv2");
        swapsData.push(swapData);
      }
    }
  }

  await savePools(ctx, poolsData);

  await saveSwaps(ctx, swapsData);
});

function decodePoolLog(log: Log, type: string) {
  let event;
  switch (type) {
    case "pancakeswapv3":
      event = pancakeswapV3BscFactoryAbi.events.PoolCreated.decode(log);
      return {
        pool: event.pool,
        token0: event.token0,
        token1: event.token1,
      };
    case "pancakeswapv2":
      event = pancakeswapV2BscFactoryAbi.events.PairCreated.decode(log);
      return {
        pool: event.pair,
        token0: event.token0,
        token1: event.token1,
      };
    default:
      return {
        pool: "",
        token0: "",
        token1: "",
      };
  }
}

function decodeSwapLog(log: Log, type: string) {
  let event;
  switch (type) {
    case "pancakeswapv3":
      event = pancakeswapV3BscPoolAbi.events.Swap.decode(log);
      return {
        amount0: event.amount0,
        amount1: event.amount1,
        recipient: event.recipient,
        sender: event.sender,
      };
    case "pancakeswapv2":
      event = pancakeswapV2BscPoolAbi.events.Swap.decode(log);
      return {
        amount0In: event.amount0In,
        amount0Out: event.amount0Out,
        amount1In: event.amount1In,
        amount1Out: event.amount1Out,
        to: event.to,
        sender: event.sender,
      };
    default:
      return {
        amount0: "",
        amount1: "",
        amount0In: "",
        amount0Out: "",
        amount1In: "",
        amount1Out: "",
        to: "",
        sender: "",
        recipient: "",
      };
  }
}

function getPoolData(log: Log, type: string): PoolData {
  let event = decodePoolLog(log, type);

  return {
    id: event?.pool.toLowerCase(),
    token0: event?.token0.toLowerCase(),
    token1: event?.token1.toLowerCase(),
  };
}

function getSwapData(log: Log, type: string) {
  let transaction = assertNotNull(
    log.transaction,
    "Swap log without transaction"
  );
  let event = decodeSwapLog(log, type);
  if (type === "pancakeswapv3") {
    return {
      id: log.id,
      block: log.block,
      transaction: transaction,
      pool: log.address.toLowerCase(),
      amount0: event.amount0,
      amount1: event.amount1,
      recipient: event?.recipient?.toLowerCase(),
      sender: event.sender.toLowerCase(),
    };
  } else if (type === "pancakeswapv2") {
    return {
      id: log.id,
      block: log.block,
      transaction: transaction,
      pool: log.address.toLowerCase(),
      amount0In: event.amount0In,
      amount0Out: event.amount0Out,
      amount1In: event.amount1In,
      amount1Out: event.amount1Out,
      recipient: event?.to?.toLowerCase(),
      sender: event.sender.toLowerCase(),
    };
  } else {
    return {
      id: log.id,
      block: log.block,
      transaction: transaction,
      pool: log.address.toLowerCase(),
      amount0In: "",
      amount0Out: "",
      amount1In: "",
      amount1Out: "",
      recipient: "",
      sender: "",
    };
  }
}

async function savePools(ctx: Context, poolsData: PoolData[]) {
  let pools: Array<any> = [];
  for (let data of poolsData) {
    let pool = {
      idSquid: data.id,
      token0: data.token0,
      token1: data.token1,
    }
    pools.push(pool);
    
    factoryPools.add(data.id);
  }

  await PoolPostgre.bulkCreate(pools,{ignoreDuplicates:true})


  // await PoolModel.insertMany(pools,{ ordered: false })
  // .then(() => {
  //   console.log("BSC pools inserted successfully");
  // })
  // .catch((error: Error) => {
  //   console.error("Error inserting BSC pools:", error);
  // });;
}

async function saveSwaps(ctx: Context, swapsData: Array<any>) {
  let poolIds = new Set<string>();

  // const SwapModel = getSwapTransactionModel();
  for (let data of swapsData) {
    poolIds.add(data.pool);
  }

  // let pools = await PoolModel.find({ id: { $in: Array.from(poolIds) } });
  let pools = await PoolPostgre.findAll({ where: { idSquid: Array.from(poolIds) } });

  let poolMap: Map<string, any> = new Map(
    pools.map((pool: any) => [pool.id, pool])
  );
  // let swaps: Swap[] = [];
  let Swaps: Array<any> = [];
  for (let data of swapsData) {
    let { id, block, transaction, pool, amount0, amount1,amount0In,amount0Out,amount1In,amount1Out, recipient, sender } =
      data;
    let poolEntity = assertNotNull(poolMap.get(pool));

    let document
    if(amount0&&amount1){
      document ={
        idSquid:id,
        blockNumber: block.height,
        timestamp: new Date(block.timestamp),
        txHash: transaction.hash,
        pool_id: poolEntity.id,
        pool_token0: poolEntity.token0,
        pool_token1: poolEntity.token1,
        amount0: amount0.toString(),
        amount1: amount1.toString(),
        recipient,
        sender,
        from: transaction.from,
      }
    }else{
      const inOutToken = renderInOutToken(
        amount0In,
        amount0Out,
        amount1In,
        amount1Out,
        poolEntity.token0,
        poolEntity.token1
      );
      document={
        idSquid:id,
        blockNumber: block.height,
        timestamp: new Date(block.timestamp),
        txHash: transaction.hash,
        pool_id: poolEntity.id,
        pool_token0: inOutToken.token0,
        pool_token1: inOutToken.token1,
        amount0: inOutToken.amount0.toString(),
        amount1: inOutToken.amount1.toString(),
        recipient,
        sender,
        from:transaction.from
      }
    }
    Swaps.push(document);

    // if (!result.includes(poolEntity.token0)) {
    //   result.push(poolEntity.token0);
    // }
    // if (!result.includes(poolEntity.token1)) {
    //   result.push(poolEntity.token1);
    // }
  }
  // address = { ...address, bsc: result };
  // writeJsonToFile("output.json", address);
  
  await SwapPostgre.bulkCreate(Swaps,{ignoreDuplicates:true}).then(() => {
    console.log('ETH swaps inserted successfully',Swaps.length);
  })

  // await SwapModel.insertMany(Swaps,{ ordered: false })
  // .then(() => {
  //   console.log('BSC swaps inserted successfully',Swaps.length);
  // })

  // .catch((error:Error) => {
  //   console.error('Error inserting BSC swaps:', error);
  // });
 
}
