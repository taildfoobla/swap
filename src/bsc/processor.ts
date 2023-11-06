import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import {Store} from '@subsquid/typeorm-store'
import * as erc20abi from '../abi/erc20'
import { factoryAddress } from '../address/factory_address'
import * as pancakeswapV3BscFactoryAbi from '../abi/pancakeswap_v3_binance_factory'
import * as pancakeswapV3BscPoolAbi from '../abi/pancakeswap_v3_binance_pool'
import * as pancakeswapV2BscFactoryAbi from '../abi/pancakeswap_v2_binance_factory'
import * as pancakeswapV2BscPoolAbi from '../abi/pancakeswap_v2_binance_pool'

function renderFactoryAddress (){
    const data:string[] =[]
    factoryAddress.forEach((item:any)=>{
        if(item?.network==="binance"){
            data.push(item?.address?.toLowerCase())
        }
    })
    return data
}

export const BSC_ADDRESS:string[] = renderFactoryAddress()

export const processor = new EvmBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in Subsquid registry
        // See https://docs.subsquid.io/evm-indexing/supported-networks/
        archive: lookupArchive('binance'),
        // Chain RPC endpoint is required for
        //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
        //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
        chain: {
            // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
            // https://docs.subsquid.io/deploy-squid/env-variables/
            url: assertNotNull(process.env.RPC_ENDPOINT_BSC),
            // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
            rateLimit: 10
        }
    })
    .setFinalityConfirmation(75)
    .setFields({
        log: {
            transactionHash: true
        }
    })
    .setBlockRange({
        from: 0,
    })
    .addLog({
        address: BSC_ADDRESS,
        topic0: [pancakeswapV3BscFactoryAbi.events.PoolCreated.topic,pancakeswapV2BscFactoryAbi.events.PairCreated.topic],
    })
    .addLog({
        topic0: [pancakeswapV3BscPoolAbi.events.Swap.topic,pancakeswapV2BscPoolAbi.events.Swap.topic],
        transaction: true,
      });

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
