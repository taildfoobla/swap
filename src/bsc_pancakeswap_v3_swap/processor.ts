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
import { factoryAddress } from '../address/factory_address'
import * as erc20abi from '../abi/erc20'
import * as uniswapV3EthFactoryAbi from '../abi/uniswap_v3_ethereum_factory'
import * as uniswapV3EthPoolAbi from '../abi/uniswap_v3_ethereum_pool'
import * as uniswapV2EthFactoryAbi from '../abi/uniswap_v2_ethereum_factory'
import * as uniswapV2EthPoolAbi from '../abi/uniswap_v2_ethereum_pool'
import * as pancakeswapV3BscFactoryAbi from "../abi/pancakeswap_v3_binance_factory";
import * as pancakeswapV3BscPoolAbi from "../abi/pancakeswap_v3_binance_pool"

function renderFactoryAddress (){
    const data:string[] =[]
    factoryAddress.forEach((item:any)=>{
        if(item?.network==="ethereum"){
            data.push(item?.address?.toLowerCase())
        }
    })
    return data
}

export const ETH_ADDRESS:string ='0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865'.toLowerCase()

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
        },
        transaction: {
            from: true,
            to: true
          }
    })
    .setBlockRange({
        from: 14000000,
    })
    .addLog({
        address: [ETH_ADDRESS],
        topic0: [pancakeswapV3BscFactoryAbi.events.PoolCreated.topic],
    })
    .addLog({
        topic0: [pancakeswapV3BscPoolAbi.events.Swap.topic],
        transaction: true,
      });

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
