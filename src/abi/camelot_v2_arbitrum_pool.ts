import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './camelot_v2_arbitrum_pool.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, spender: string, value: bigint] & {owner: string, spender: string, value: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    Burn: new LogEvent<([sender: string, amount0: bigint, amount1: bigint, to: string] & {sender: string, amount0: bigint, amount1: bigint, to: string})>(
        abi, '0xdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496'
    ),
    DrainWrongToken: new LogEvent<([token: string, to: string] & {token: string, to: string})>(
        abi, '0x368a9dc863ecb94b5ba32a682e26295b10d9c2666fad7d785ebdf262c3c52413'
    ),
    FeePercentUpdated: new LogEvent<([token0FeePercent: number, token1FeePercent: number] & {token0FeePercent: number, token1FeePercent: number})>(
        abi, '0xa4877b8ecb5a00ba277e4bceeeb187a669e7113649774dfbea05c259ce27f17b'
    ),
    Mint: new LogEvent<([sender: string, amount0: bigint, amount1: bigint] & {sender: string, amount0: bigint, amount1: bigint})>(
        abi, '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f'
    ),
    SetPairTypeImmutable: new LogEvent<[]>(
        abi, '0x09122c41ae733a4d7740324d50e35fbd6ee85be3c1312a45596d8045150ab2f2'
    ),
    SetStableSwap: new LogEvent<([prevStableSwap: boolean, stableSwap: boolean] & {prevStableSwap: boolean, stableSwap: boolean})>(
        abi, '0xb6a86710bde53aa7fb1b3856279e2af5b476d53e2dd0902cf17a0911b5a43a8b'
    ),
    Skim: new LogEvent<[]>(
        abi, '0x21ad22495c9c75cd1c94756f91824e779c0c8a8e168b267c790df464fe056b79'
    ),
    Swap: new LogEvent<([sender: string, amount0In: bigint, amount1In: bigint, amount0Out: bigint, amount1Out: bigint, to: string] & {sender: string, amount0In: bigint, amount1In: bigint, amount0Out: bigint, amount1Out: bigint, to: string})>(
        abi, '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822'
    ),
    Sync: new LogEvent<([reserve0: bigint, reserve1: bigint] & {reserve0: bigint, reserve1: bigint})>(
        abi, '0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1'
    ),
    Transfer: new LogEvent<([from: string, to: string, value: bigint] & {from: string, to: string, value: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    FEE_DENOMINATOR: new Func<[], {}, bigint>(
        abi, '0xd73792a9'
    ),
    MAX_FEE_PERCENT: new Func<[], {}, bigint>(
        abi, '0x67d81740'
    ),
    MINIMUM_LIQUIDITY: new Func<[], {}, bigint>(
        abi, '0xba9a7a56'
    ),
    PERMIT_TYPEHASH: new Func<[], {}, string>(
        abi, '0x30adf81f'
    ),
    allowance: new Func<[_: string, _: string], {}, bigint>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, value: bigint], {spender: string, value: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[_: string], {}, bigint>(
        abi, '0x70a08231'
    ),
    burn: new Func<[to: string], {to: string}, ([amount0: bigint, amount1: bigint] & {amount0: bigint, amount1: bigint})>(
        abi, '0x89afcb44'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    drainWrongToken: new Func<[token: string, to: string], {token: string, to: string}, []>(
        abi, '0xf39ac11f'
    ),
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    getAmountOut: new Func<[amountIn: bigint, tokenIn: string], {amountIn: bigint, tokenIn: string}, bigint>(
        abi, '0xf140a35a'
    ),
    getReserves: new Func<[], {}, ([_reserve0: bigint, _reserve1: bigint, _token0FeePercent: number, _token1FeePercent: number] & {_reserve0: bigint, _reserve1: bigint, _token0FeePercent: number, _token1FeePercent: number})>(
        abi, '0x0902f1ac'
    ),
    initialize: new Func<[_token0: string, _token1: string], {_token0: string, _token1: string}, []>(
        abi, '0x485cc955'
    ),
    initialized: new Func<[], {}, boolean>(
        abi, '0x158ef93e'
    ),
    kLast: new Func<[], {}, bigint>(
        abi, '0x7464fc3d'
    ),
    mint: new Func<[to: string], {to: string}, bigint>(
        abi, '0x6a627842'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonces: new Func<[_: string], {}, bigint>(
        abi, '0x7ecebe00'
    ),
    pairTypeImmutable: new Func<[], {}, boolean>(
        abi, '0xb6200b07'
    ),
    permit: new Func<[owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string], {owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0xd505accf'
    ),
    precisionMultiplier0: new Func<[], {}, bigint>(
        abi, '0x3b9f1dc0'
    ),
    precisionMultiplier1: new Func<[], {}, bigint>(
        abi, '0x288e5d02'
    ),
    setFeePercent: new Func<[newToken0FeePercent: number, newToken1FeePercent: number], {newToken0FeePercent: number, newToken1FeePercent: number}, []>(
        abi, '0x48e5d260'
    ),
    setPairTypeImmutable: new Func<[], {}, []>(
        abi, '0x3ba17077'
    ),
    setStableSwap: new Func<[stable: boolean, expectedReserve0: bigint, expectedReserve1: bigint], {stable: boolean, expectedReserve0: bigint, expectedReserve1: bigint}, []>(
        abi, '0x3029e5d4'
    ),
    skim: new Func<[to: string], {to: string}, []>(
        abi, '0xbc25cf77'
    ),
    stableSwap: new Func<[], {}, boolean>(
        abi, '0x9e548b7f'
    ),
    'swap(uint256,uint256,address,bytes)': new Func<[amount0Out: bigint, amount1Out: bigint, to: string, data: string], {amount0Out: bigint, amount1Out: bigint, to: string, data: string}, []>(
        abi, '0x022c0d9f'
    ),
    'swap(uint256,uint256,address,bytes,address)': new Func<[amount0Out: bigint, amount1Out: bigint, to: string, data: string, referrer: string], {amount0Out: bigint, amount1Out: bigint, to: string, data: string, referrer: string}, []>(
        abi, '0x6e1fdd7f'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    sync: new Func<[], {}, []>(
        abi, '0xfff6cae9'
    ),
    token0: new Func<[], {}, string>(
        abi, '0x0dfe1681'
    ),
    token0FeePercent: new Func<[], {}, number>(
        abi, '0x62ecec03'
    ),
    token1: new Func<[], {}, string>(
        abi, '0xd21220a7'
    ),
    token1FeePercent: new Func<[], {}, number>(
        abi, '0x2fcd1692'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[to: string, value: bigint], {to: string, value: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[from: string, to: string, value: bigint], {from: string, to: string, value: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    FEE_DENOMINATOR(): Promise<bigint> {
        return this.eth_call(functions.FEE_DENOMINATOR, [])
    }

    MAX_FEE_PERCENT(): Promise<bigint> {
        return this.eth_call(functions.MAX_FEE_PERCENT, [])
    }

    MINIMUM_LIQUIDITY(): Promise<bigint> {
        return this.eth_call(functions.MINIMUM_LIQUIDITY, [])
    }

    PERMIT_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.PERMIT_TYPEHASH, [])
    }

    allowance(arg0: string, arg1: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [arg0, arg1])
    }

    balanceOf(arg0: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [arg0])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }

    getAmountOut(amountIn: bigint, tokenIn: string): Promise<bigint> {
        return this.eth_call(functions.getAmountOut, [amountIn, tokenIn])
    }

    getReserves(): Promise<([_reserve0: bigint, _reserve1: bigint, _token0FeePercent: number, _token1FeePercent: number] & {_reserve0: bigint, _reserve1: bigint, _token0FeePercent: number, _token1FeePercent: number})> {
        return this.eth_call(functions.getReserves, [])
    }

    initialized(): Promise<boolean> {
        return this.eth_call(functions.initialized, [])
    }

    kLast(): Promise<bigint> {
        return this.eth_call(functions.kLast, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonces(arg0: string): Promise<bigint> {
        return this.eth_call(functions.nonces, [arg0])
    }

    pairTypeImmutable(): Promise<boolean> {
        return this.eth_call(functions.pairTypeImmutable, [])
    }

    precisionMultiplier0(): Promise<bigint> {
        return this.eth_call(functions.precisionMultiplier0, [])
    }

    precisionMultiplier1(): Promise<bigint> {
        return this.eth_call(functions.precisionMultiplier1, [])
    }

    stableSwap(): Promise<boolean> {
        return this.eth_call(functions.stableSwap, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    token0(): Promise<string> {
        return this.eth_call(functions.token0, [])
    }

    token0FeePercent(): Promise<number> {
        return this.eth_call(functions.token0FeePercent, [])
    }

    token1(): Promise<string> {
        return this.eth_call(functions.token1, [])
    }

    token1FeePercent(): Promise<number> {
        return this.eth_call(functions.token1FeePercent, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
