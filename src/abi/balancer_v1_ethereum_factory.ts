import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './balancer_v1_ethereum_factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    LOG_BLABS: new LogEvent<([caller: string, blabs: string] & {caller: string, blabs: string})>(
        abi, '0xf586fa6ee1fc42f5b727f3b214ccbd0b6d7e698c45d49ba32f224fbb8670155d'
    ),
    LOG_NEW_POOL: new LogEvent<([caller: string, pool: string] & {caller: string, pool: string})>(
        abi, '0x8ccec77b0cb63ac2cafd0f5de8cdfadab91ce656d262240ba8a6343bccc5f945'
    ),
}

export const functions = {
    collect: new Func<[pool: string], {pool: string}, []>(
        abi, '0x06ec16f8'
    ),
    getBLabs: new Func<[], {}, string>(
        abi, '0x36ffb167'
    ),
    getColor: new Func<[], {}, string>(
        abi, '0x9a86139b'
    ),
    isBPool: new Func<[b: string], {b: string}, boolean>(
        abi, '0xc2bb6dc2'
    ),
    newBPool: new Func<[], {}, string>(
        abi, '0xd556c5dc'
    ),
    setBLabs: new Func<[b: string], {b: string}, []>(
        abi, '0xc6ce34fb'
    ),
}

export class Contract extends ContractBase {

    getBLabs(): Promise<string> {
        return this.eth_call(functions.getBLabs, [])
    }

    getColor(): Promise<string> {
        return this.eth_call(functions.getColor, [])
    }

    isBPool(b: string): Promise<boolean> {
        return this.eth_call(functions.isBPool, [b])
    }
}
