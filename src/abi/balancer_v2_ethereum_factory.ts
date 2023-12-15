import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './balancer_v2_ethereum_factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    PoolCreated: new LogEvent<([pool: string] & {pool: string})>(
        abi, '0x83a48fbcfc991335314e74d0496aab6a1987e992ddc85dddbcc4d6dd6ef2e9fc'
    ),
}

export const functions = {
    create: new Func<[name: string, symbol: string, tokens: Array<string>, weights: Array<bigint>, swapFeePercentage: bigint, oracleEnabled: boolean, owner: string], {name: string, symbol: string, tokens: Array<string>, weights: Array<bigint>, swapFeePercentage: bigint, oracleEnabled: boolean, owner: string}, string>(
        abi, '0x1596019b'
    ),
    getPauseConfiguration: new Func<[], {}, ([pauseWindowDuration: bigint, bufferPeriodDuration: bigint] & {pauseWindowDuration: bigint, bufferPeriodDuration: bigint})>(
        abi, '0x2da47c40'
    ),
    getVault: new Func<[], {}, string>(
        abi, '0x8d928af8'
    ),
    isPoolFromFactory: new Func<[pool: string], {pool: string}, boolean>(
        abi, '0x6634b753'
    ),
}

export class Contract extends ContractBase {

    getPauseConfiguration(): Promise<([pauseWindowDuration: bigint, bufferPeriodDuration: bigint] & {pauseWindowDuration: bigint, bufferPeriodDuration: bigint})> {
        return this.eth_call(functions.getPauseConfiguration, [])
    }

    getVault(): Promise<string> {
        return this.eth_call(functions.getVault, [])
    }

    isPoolFromFactory(pool: string): Promise<boolean> {
        return this.eth_call(functions.isPoolFromFactory, [pool])
    }
}
