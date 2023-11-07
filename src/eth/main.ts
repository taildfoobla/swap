import { TypeormDatabase } from "@subsquid/typeorm-store";
import { processor } from "./processor";
import { In } from "typeorm";
import { Block, Log, Context, Transaction, ETH_ADDRESS } from "./processor";
import { assertNotNull } from "@subsquid/evm-processor";
import { getSwapTransactionModel } from "../schema/getSwapTransactionModel";
import fs from "fs";
import { renderInOutToken } from "../utils";
import { getPoolModel } from "../schema/getPoolModel";
import { readJsonFromFile, writeJsonToFile } from "../utils";
import * as uniswapV3EthFactoryAbi from "../abi/uniswap_v3_ethereum_factory";
import * as uniswapV3EthPoolAbi from "../abi/uniswap_v3_ethereum_pool";
import * as uniswapV2EthFactoryAbi from "../abi/uniswap_v2_ethereum_factory";
import * as uniswapV2EthPoolAbi from "../abi/uniswap_v2_ethereum_pool";

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

let PoolModel = getPoolModel();
let factoryPools = new Set<string>();
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
processor.run(
  new TypeormDatabase({ supportHotBlocks: true, stateSchema: "eth_processor" }),
  async (ctx) => {
    if (!factoryPools) {
      // factoryPools = await ctx.store
      //   .findBy(Pool, {})
      //   .then((pools) => new Set(pools.map((pool) => pool.id)));
      factoryPools = await PoolModel.find({}).then(
        (pools: any) => new Set(pools.map((pool: any) => pool.id))
      );
    }
    let swapsData = [];
    let poolsData = [];
    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        if (
          log.topics[0] == uniswapV3EthFactoryAbi.events.PoolCreated.topic &&
          ETH_ADDRESS.includes(log.address)
        ) {
          //process log data
          let poolData = getPoolData(log, "uniswapv3");
          poolsData.push(poolData);
        } else if (
          log.topics[0] == uniswapV2EthFactoryAbi.events.PairCreated.topic &&
          ETH_ADDRESS.includes(log.address)
        ) {
          let poolData = getPoolData(log, "uniswapv2");
          poolsData.push(poolData);
        }
        if (
          log.topics[0] == uniswapV3EthPoolAbi.events.Swap.topic &&
          factoryPools.has(log.address)
        ) {
          //process swap data
          let swapData = getSwapData(log, "uniswapv3");
          swapsData.push(swapData);
        } else if (
          log.topics[0] == uniswapV2EthPoolAbi.events.Swap.topic &&
          factoryPools.has(log.address)
        ) {
          let swapData = getSwapData(log, "uniswapv2");
          swapsData.push(swapData);
        }
      }
    }

    await savePools(ctx, poolsData);

    await saveSwaps(ctx, swapsData);
  }
);

function decodePoolLog(log: Log, type: string) {
  let event;
  switch (type) {
    case "uniswapv3":
      event = uniswapV3EthFactoryAbi.events.PoolCreated.decode(log);
      return {
        pool: event.pool,
        token0: event.token0,
        token1: event.token1,
      };
    case "uniswapv2":
      event = uniswapV2EthFactoryAbi.events.PairCreated.decode(log);
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
    case "uniswapv3":
      event = uniswapV3EthPoolAbi.events.Swap.decode(log);
      return {
        amount0: event.amount0,
        amount1: event.amount1,
        recipient: event.recipient,
        sender: event.sender,
      };
    case "uniswapv2":
      event = uniswapV2EthPoolAbi.events.Swap.decode(log);
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
  if (type === "uniswapv3") {
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
  } else if (type === "uniswapv2") {
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
      id: data.id,
      token0: data.token0,
      token1: data.token1,
    };
    pools.push(pool);

    factoryPools.add(data.id);
  }
  await PoolModel.insertMany(pools, { ordered: false })
    // .then(() => {
    //   console.log("ETH pools inserted successfully");
    // })
    // .catch((error: Error) => {
    //   console.error("Error inserting ETH pools:", error);
    // });
}

async function saveSwaps(ctx: Context, swapsData: Array<any>) {
  let poolIds = new Set<string>();

  const SwapModel = getSwapTransactionModel();
  for (let data of swapsData) {
    poolIds.add(data.pool);
  }

  let pools = await PoolModel.find({ id: { $in: Array.from(poolIds) } });
  let poolMap: Map<string, any> = new Map(
    pools.map((pool: any) => [pool.id, pool])
  );
  // let swaps: Swap[] = [];
  let Swaps: Array<any> = [];
  for (let data of swapsData) {
    let {
      id,
      block,
      transaction,
      pool,
      amount0,
      amount1,
      amount0In,
      amount0Out,
      amount1In,
      amount1Out,
      recipient,
      sender,
    } = data;
    let poolEntity = assertNotNull(poolMap.get(pool));
    // let swap = new Swap({
    //   id: id,
    //   blockNumber: block.height,
    //   timestamp: new Date(block.timestamp),
    //   hash: transaction.hash,
    //   pool: poolEntity,
    //   sender,
    //   recipient,
    //   amount0,
    //   amount1,
    // });
    // swaps.push(swap);
    let document;
    if (amount0 && amount1) {
      document = {
        id,
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
      };
    } else {
      const inOutToken = renderInOutToken(
        amount0In,
        amount0Out,
        amount1In,
        amount1Out,
        poolEntity.token0,
        poolEntity.token1
      );
      document = {
        id,
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
        from: transaction.from,
      };
    }
    Swaps.push(document);

    // if (!result.includes(poolEntity.token0)) {
    //   result.push(poolEntity.token0);
    // }
    // if (!result.includes(poolEntity.token1)) {
    //   result.push(poolEntity.token1);
    // }
  }

  // address = { ...address, eth: result };
  // writeJsonToFile("output.json", address);
  await SwapModel.insertMany(Swaps, { ordered: false }).then(() => {
    console.log('ETH swaps inserted successfully',Swaps);
  })
  // .catch((error:Error) => {
  //   console.error('Error inserting ETH swaps:', error);
  // });
}
