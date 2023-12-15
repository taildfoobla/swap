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
import * as uniswapV2EthFactoryAbi from '../abi/camelot_v2_arbitrum_factory'
import * as uniswapV2EthPoolAbi from '../abi/camelot_v2_arbitrum_pool'

function renderFactoryAddress (){
    const data:string[] =[]
    factoryAddress.forEach((item:any)=>{
        if(item?.network==="ethereum"){
            data.push(item?.address?.toLowerCase())
        }
    })
    return data
}

export const ETH_ADDRESS:string ='0x6EcCab422D763aC031210895C81787E87B43A652'.toLowerCase()

export const processor = new EvmBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in Subsquid registry
        // See https://docs.subsquid.io/evm-indexing/supported-networks/
        archive: lookupArchive('arbitrum'),
        // Chain RPC endpoint is required for
        //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
        //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
        chain: {
            // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
            // https://docs.subsquid.io/deploy-squid/env-variables/
            url: assertNotNull(process.env.RPC_ENDPOINT_ARB),
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
        from: 0,
    })
    .addLog({
        address: [ETH_ADDRESS],
        topic0: [uniswapV2EthFactoryAbi.events.PairCreated.topic],
    })
    .addLog({
        topic0: [uniswapV2EthPoolAbi.events.Swap.topic],
        transaction: true,
      });

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
