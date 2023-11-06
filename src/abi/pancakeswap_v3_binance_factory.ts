import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './pancakeswap_v3_binance_factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FeeAmountEnabled: new LogEvent<([fee: number, tickSpacing: number] & {fee: number, tickSpacing: number})>(
        abi, '0xc66a3fdf07232cdd185febcc6579d408c241b47ae2f9907d84be655141eeaecc'
    ),
    FeeAmountExtraInfoUpdated: new LogEvent<([fee: number, whitelistRequested: boolean, enabled: boolean] & {fee: number, whitelistRequested: boolean, enabled: boolean})>(
        abi, '0xed85b616dbfbc54d0f1180a7bd0f6e3bb645b269b234e7a9edcc269ef1443d88'
    ),
    OwnerChanged: new LogEvent<([oldOwner: string, newOwner: string] & {oldOwner: string, newOwner: string})>(
        abi, '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c'
    ),
    PoolCreated: new LogEvent<([token0: string, token1: string, fee: number, tickSpacing: number, pool: string] & {token0: string, token1: string, fee: number, tickSpacing: number, pool: string})>(
        abi, '0x783cca1c0412dd0d695e784568c96da2e9c22ff989357a2e8b1d9b2b4e6b7118'
    ),
    SetLmPoolDeployer: new LogEvent<([lmPoolDeployer: string] & {lmPoolDeployer: string})>(
        abi, '0x4c912280cda47bed324de14f601d3f125a98254671772f3f1f491e50fa0ca407'
    ),
    WhiteListAdded: new LogEvent<([user: string, verified: boolean] & {user: string, verified: boolean})>(
        abi, '0xaec42ac7f1bb8651906ae6522f50a19429e124e8ea678ef59fd27750759288a2'
    ),
}

export const functions = {
    collectProtocol: new Func<[pool: string, recipient: string, amount0Requested: bigint, amount1Requested: bigint], {pool: string, recipient: string, amount0Requested: bigint, amount1Requested: bigint}, ([amount0: bigint, amount1: bigint] & {amount0: bigint, amount1: bigint})>(
        abi, '0x43db87da'
    ),
    createPool: new Func<[tokenA: string, tokenB: string, fee: number], {tokenA: string, tokenB: string, fee: number}, string>(
        abi, '0xa1671295'
    ),
    enableFeeAmount: new Func<[fee: number, tickSpacing: number], {fee: number, tickSpacing: number}, []>(
        abi, '0x8a7c195f'
    ),
    feeAmountTickSpacing: new Func<[_: number], {}, number>(
        abi, '0x22afcccb'
    ),
    feeAmountTickSpacingExtraInfo: new Func<[_: number], {}, ([whitelistRequested: boolean, enabled: boolean] & {whitelistRequested: boolean, enabled: boolean})>(
        abi, '0x88e8006d'
    ),
    getPool: new Func<[_: string, _: string, _: number], {}, string>(
        abi, '0x1698ee82'
    ),
    lmPoolDeployer: new Func<[], {}, string>(
        abi, '0x5e492ac8'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    poolDeployer: new Func<[], {}, string>(
        abi, '0x3119049a'
    ),
    setFeeAmountExtraInfo: new Func<[fee: number, whitelistRequested: boolean, enabled: boolean], {fee: number, whitelistRequested: boolean, enabled: boolean}, []>(
        abi, '0x8ff38e80'
    ),
    setFeeProtocol: new Func<[pool: string, feeProtocol0: number, feeProtocol1: number], {pool: string, feeProtocol0: number, feeProtocol1: number}, []>(
        abi, '0x7e8435e6'
    ),
    setLmPool: new Func<[pool: string, lmPool: string], {pool: string, lmPool: string}, []>(
        abi, '0x11ff5e8d'
    ),
    setLmPoolDeployer: new Func<[_lmPoolDeployer: string], {_lmPoolDeployer: string}, []>(
        abi, '0x80d6a792'
    ),
    setOwner: new Func<[_owner: string], {_owner: string}, []>(
        abi, '0x13af4035'
    ),
    setWhiteListAddress: new Func<[user: string, verified: boolean], {user: string, verified: boolean}, []>(
        abi, '0xe4a86a99'
    ),
}

export class Contract extends ContractBase {

    feeAmountTickSpacing(arg0: number): Promise<number> {
        return this.eth_call(functions.feeAmountTickSpacing, [arg0])
    }

    feeAmountTickSpacingExtraInfo(arg0: number): Promise<([whitelistRequested: boolean, enabled: boolean] & {whitelistRequested: boolean, enabled: boolean})> {
        return this.eth_call(functions.feeAmountTickSpacingExtraInfo, [arg0])
    }

    getPool(arg0: string, arg1: string, arg2: number): Promise<string> {
        return this.eth_call(functions.getPool, [arg0, arg1, arg2])
    }

    lmPoolDeployer(): Promise<string> {
        return this.eth_call(functions.lmPoolDeployer, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    poolDeployer(): Promise<string> {
        return this.eth_call(functions.poolDeployer, [])
    }
}
