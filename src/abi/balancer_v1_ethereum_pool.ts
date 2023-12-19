import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './balancer_v1_ethereum_pool.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([src: string, dst: string, amt: bigint] & {src: string, dst: string, amt: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    LOG_CALL: new LogEvent<([sig: string, caller: string, data: string] & {sig: string, caller: string, data: string})>(
        abi, '0x25fce1fe01d9b241fda40b2152ddd6f4ba063fcfb3c2c81dddf84ee20d3f341f'
    ),
    LOG_EXIT: new LogEvent<([caller: string, tokenOut: string, tokenAmountOut: bigint] & {caller: string, tokenOut: string, tokenAmountOut: bigint})>(
        abi, '0xe74c91552b64c2e2e7bd255639e004e693bd3e1d01cc33e65610b86afcc1ffed'
    ),
    LOG_JOIN: new LogEvent<([caller: string, tokenIn: string, tokenAmountIn: bigint] & {caller: string, tokenIn: string, tokenAmountIn: bigint})>(
        abi, '0x63982df10efd8dfaaaa0fcc7f50b2d93b7cba26ccc48adee2873220d485dc39a'
    ),
    LOG_SWAP: new LogEvent<([caller: string, tokenIn: string, tokenOut: string, tokenAmountIn: bigint, tokenAmountOut: bigint] & {caller: string, tokenIn: string, tokenOut: string, tokenAmountIn: bigint, tokenAmountOut: bigint})>(
        abi, '0x908fb5ee8f16c6bc9bc3690973819f32a4d4b10188134543c88706e0e1d43378'
    ),
    Transfer: new LogEvent<([src: string, dst: string, amt: bigint] & {src: string, dst: string, amt: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    BONE: new Func<[], {}, bigint>(
        abi, '0xc36596a6'
    ),
    BPOW_PRECISION: new Func<[], {}, bigint>(
        abi, '0x189d00ca'
    ),
    EXIT_FEE: new Func<[], {}, bigint>(
        abi, '0xc6580d12'
    ),
    INIT_POOL_SUPPLY: new Func<[], {}, bigint>(
        abi, '0x9381cd2b'
    ),
    MAX_BOUND_TOKENS: new Func<[], {}, bigint>(
        abi, '0xb0e0d136'
    ),
    MAX_BPOW_BASE: new Func<[], {}, bigint>(
        abi, '0xbc694ea2'
    ),
    MAX_FEE: new Func<[], {}, bigint>(
        abi, '0xbc063e1a'
    ),
    MAX_IN_RATIO: new Func<[], {}, bigint>(
        abi, '0xec093021'
    ),
    MAX_OUT_RATIO: new Func<[], {}, bigint>(
        abi, '0x992e2a92'
    ),
    MAX_TOTAL_WEIGHT: new Func<[], {}, bigint>(
        abi, '0x09a3bbe4'
    ),
    MAX_WEIGHT: new Func<[], {}, bigint>(
        abi, '0xe4a28a52'
    ),
    MIN_BALANCE: new Func<[], {}, bigint>(
        abi, '0x867378c5'
    ),
    MIN_BOUND_TOKENS: new Func<[], {}, bigint>(
        abi, '0xb7b800a4'
    ),
    MIN_BPOW_BASE: new Func<[], {}, bigint>(
        abi, '0xba019dab'
    ),
    MIN_FEE: new Func<[], {}, bigint>(
        abi, '0x76c7a3c7'
    ),
    MIN_WEIGHT: new Func<[], {}, bigint>(
        abi, '0x218b5382'
    ),
    allowance: new Func<[src: string, dst: string], {src: string, dst: string}, bigint>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[dst: string, amt: bigint], {dst: string, amt: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[whom: string], {whom: string}, bigint>(
        abi, '0x70a08231'
    ),
    bind: new Func<[token: string, balance: bigint, denorm: bigint], {token: string, balance: bigint, denorm: bigint}, []>(
        abi, '0xe4e1e538'
    ),
    calcInGivenOut: new Func<[tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountOut: bigint, swapFee: bigint], {tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountOut: bigint, swapFee: bigint}, bigint>(
        abi, '0xf8d6aed4'
    ),
    calcOutGivenIn: new Func<[tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountIn: bigint, swapFee: bigint], {tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountIn: bigint, swapFee: bigint}, bigint>(
        abi, '0xba9530a6'
    ),
    calcPoolInGivenSingleOut: new Func<[tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountOut: bigint, swapFee: bigint], {tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountOut: bigint, swapFee: bigint}, bigint>(
        abi, '0x82f652ad'
    ),
    calcPoolOutGivenSingleIn: new Func<[tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountIn: bigint, swapFee: bigint], {tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountIn: bigint, swapFee: bigint}, bigint>(
        abi, '0x8656b653'
    ),
    calcSingleInGivenPoolOut: new Func<[tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountOut: bigint, swapFee: bigint], {tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountOut: bigint, swapFee: bigint}, bigint>(
        abi, '0x5c1bbaf7'
    ),
    calcSingleOutGivenPoolIn: new Func<[tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountIn: bigint, swapFee: bigint], {tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountIn: bigint, swapFee: bigint}, bigint>(
        abi, '0x89298012'
    ),
    calcSpotPrice: new Func<[tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, swapFee: bigint], {tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, swapFee: bigint}, bigint>(
        abi, '0xa221ee49'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    decreaseApproval: new Func<[dst: string, amt: bigint], {dst: string, amt: bigint}, boolean>(
        abi, '0x66188463'
    ),
    exitPool: new Func<[poolAmountIn: bigint, minAmountsOut: Array<bigint>], {poolAmountIn: bigint, minAmountsOut: Array<bigint>}, []>(
        abi, '0xb02f0b73'
    ),
    exitswapExternAmountOut: new Func<[tokenOut: string, tokenAmountOut: bigint, maxPoolAmountIn: bigint], {tokenOut: string, tokenAmountOut: bigint, maxPoolAmountIn: bigint}, bigint>(
        abi, '0x02c96748'
    ),
    exitswapPoolAmountIn: new Func<[tokenOut: string, poolAmountIn: bigint, minAmountOut: bigint], {tokenOut: string, poolAmountIn: bigint, minAmountOut: bigint}, bigint>(
        abi, '0x46ab38f1'
    ),
    finalize: new Func<[], {}, []>(
        abi, '0x4bb278f3'
    ),
    getBalance: new Func<[token: string], {token: string}, bigint>(
        abi, '0xf8b2cb4f'
    ),
    getColor: new Func<[], {}, string>(
        abi, '0x9a86139b'
    ),
    getController: new Func<[], {}, string>(
        abi, '0x3018205f'
    ),
    getCurrentTokens: new Func<[], {}, Array<string>>(
        abi, '0xcc77828d'
    ),
    getDenormalizedWeight: new Func<[token: string], {token: string}, bigint>(
        abi, '0x948d8ce6'
    ),
    getFinalTokens: new Func<[], {}, Array<string>>(
        abi, '0xbe3bbd2e'
    ),
    getNormalizedWeight: new Func<[token: string], {token: string}, bigint>(
        abi, '0xf1b8a9b7'
    ),
    getNumTokens: new Func<[], {}, bigint>(
        abi, '0xcd2ed8fb'
    ),
    getSpotPrice: new Func<[tokenIn: string, tokenOut: string], {tokenIn: string, tokenOut: string}, bigint>(
        abi, '0x15e84af9'
    ),
    getSpotPriceSansFee: new Func<[tokenIn: string, tokenOut: string], {tokenIn: string, tokenOut: string}, bigint>(
        abi, '0x1446a7ff'
    ),
    getSwapFee: new Func<[], {}, bigint>(
        abi, '0xd4cadf68'
    ),
    getTotalDenormalizedWeight: new Func<[], {}, bigint>(
        abi, '0x936c3477'
    ),
    gulp: new Func<[token: string], {token: string}, []>(
        abi, '0x8c28cbe8'
    ),
    increaseApproval: new Func<[dst: string, amt: bigint], {dst: string, amt: bigint}, boolean>(
        abi, '0xd73dd623'
    ),
    isBound: new Func<[t: string], {t: string}, boolean>(
        abi, '0x2f37b624'
    ),
    isFinalized: new Func<[], {}, boolean>(
        abi, '0x8d4e4083'
    ),
    isPublicSwap: new Func<[], {}, boolean>(
        abi, '0xfde924f7'
    ),
    joinPool: new Func<[poolAmountOut: bigint, maxAmountsIn: Array<bigint>], {poolAmountOut: bigint, maxAmountsIn: Array<bigint>}, []>(
        abi, '0x4f69c0d4'
    ),
    joinswapExternAmountIn: new Func<[tokenIn: string, tokenAmountIn: bigint, minPoolAmountOut: bigint], {tokenIn: string, tokenAmountIn: bigint, minPoolAmountOut: bigint}, bigint>(
        abi, '0x5db34277'
    ),
    joinswapPoolAmountOut: new Func<[tokenIn: string, poolAmountOut: bigint, maxAmountIn: bigint], {tokenIn: string, poolAmountOut: bigint, maxAmountIn: bigint}, bigint>(
        abi, '0x6d06dfa0'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    rebind: new Func<[token: string, balance: bigint, denorm: bigint], {token: string, balance: bigint, denorm: bigint}, []>(
        abi, '0x3fdddaa2'
    ),
    setController: new Func<[manager: string], {manager: string}, []>(
        abi, '0x92eefe9b'
    ),
    setPublicSwap: new Func<[public_: boolean], {public_: boolean}, []>(
        abi, '0x49b59552'
    ),
    setSwapFee: new Func<[swapFee: bigint], {swapFee: bigint}, []>(
        abi, '0x34e19907'
    ),
    swapExactAmountIn: new Func<[tokenIn: string, tokenAmountIn: bigint, tokenOut: string, minAmountOut: bigint, maxPrice: bigint], {tokenIn: string, tokenAmountIn: bigint, tokenOut: string, minAmountOut: bigint, maxPrice: bigint}, ([tokenAmountOut: bigint, spotPriceAfter: bigint] & {tokenAmountOut: bigint, spotPriceAfter: bigint})>(
        abi, '0x8201aa3f'
    ),
    swapExactAmountOut: new Func<[tokenIn: string, maxAmountIn: bigint, tokenOut: string, tokenAmountOut: bigint, maxPrice: bigint], {tokenIn: string, maxAmountIn: bigint, tokenOut: string, tokenAmountOut: bigint, maxPrice: bigint}, ([tokenAmountIn: bigint, spotPriceAfter: bigint] & {tokenAmountIn: bigint, spotPriceAfter: bigint})>(
        abi, '0x7c5e9ea4'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[dst: string, amt: bigint], {dst: string, amt: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[src: string, dst: string, amt: bigint], {src: string, dst: string, amt: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
    unbind: new Func<[token: string], {token: string}, []>(
        abi, '0xcf5e7bd3'
    ),
}

export class Contract extends ContractBase {

    BONE(): Promise<bigint> {
        return this.eth_call(functions.BONE, [])
    }

    BPOW_PRECISION(): Promise<bigint> {
        return this.eth_call(functions.BPOW_PRECISION, [])
    }

    EXIT_FEE(): Promise<bigint> {
        return this.eth_call(functions.EXIT_FEE, [])
    }

    INIT_POOL_SUPPLY(): Promise<bigint> {
        return this.eth_call(functions.INIT_POOL_SUPPLY, [])
    }

    MAX_BOUND_TOKENS(): Promise<bigint> {
        return this.eth_call(functions.MAX_BOUND_TOKENS, [])
    }

    MAX_BPOW_BASE(): Promise<bigint> {
        return this.eth_call(functions.MAX_BPOW_BASE, [])
    }

    MAX_FEE(): Promise<bigint> {
        return this.eth_call(functions.MAX_FEE, [])
    }

    MAX_IN_RATIO(): Promise<bigint> {
        return this.eth_call(functions.MAX_IN_RATIO, [])
    }

    MAX_OUT_RATIO(): Promise<bigint> {
        return this.eth_call(functions.MAX_OUT_RATIO, [])
    }

    MAX_TOTAL_WEIGHT(): Promise<bigint> {
        return this.eth_call(functions.MAX_TOTAL_WEIGHT, [])
    }

    MAX_WEIGHT(): Promise<bigint> {
        return this.eth_call(functions.MAX_WEIGHT, [])
    }

    MIN_BALANCE(): Promise<bigint> {
        return this.eth_call(functions.MIN_BALANCE, [])
    }

    MIN_BOUND_TOKENS(): Promise<bigint> {
        return this.eth_call(functions.MIN_BOUND_TOKENS, [])
    }

    MIN_BPOW_BASE(): Promise<bigint> {
        return this.eth_call(functions.MIN_BPOW_BASE, [])
    }

    MIN_FEE(): Promise<bigint> {
        return this.eth_call(functions.MIN_FEE, [])
    }

    MIN_WEIGHT(): Promise<bigint> {
        return this.eth_call(functions.MIN_WEIGHT, [])
    }

    allowance(src: string, dst: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [src, dst])
    }

    balanceOf(whom: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [whom])
    }

    calcInGivenOut(tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountOut: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcInGivenOut, [tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, tokenAmountOut, swapFee])
    }

    calcOutGivenIn(tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, tokenAmountIn: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcOutGivenIn, [tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, tokenAmountIn, swapFee])
    }

    calcPoolInGivenSingleOut(tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountOut: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcPoolInGivenSingleOut, [tokenBalanceOut, tokenWeightOut, poolSupply, totalWeight, tokenAmountOut, swapFee])
    }

    calcPoolOutGivenSingleIn(tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, tokenAmountIn: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcPoolOutGivenSingleIn, [tokenBalanceIn, tokenWeightIn, poolSupply, totalWeight, tokenAmountIn, swapFee])
    }

    calcSingleInGivenPoolOut(tokenBalanceIn: bigint, tokenWeightIn: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountOut: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcSingleInGivenPoolOut, [tokenBalanceIn, tokenWeightIn, poolSupply, totalWeight, poolAmountOut, swapFee])
    }

    calcSingleOutGivenPoolIn(tokenBalanceOut: bigint, tokenWeightOut: bigint, poolSupply: bigint, totalWeight: bigint, poolAmountIn: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcSingleOutGivenPoolIn, [tokenBalanceOut, tokenWeightOut, poolSupply, totalWeight, poolAmountIn, swapFee])
    }

    calcSpotPrice(tokenBalanceIn: bigint, tokenWeightIn: bigint, tokenBalanceOut: bigint, tokenWeightOut: bigint, swapFee: bigint): Promise<bigint> {
        return this.eth_call(functions.calcSpotPrice, [tokenBalanceIn, tokenWeightIn, tokenBalanceOut, tokenWeightOut, swapFee])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    getBalance(token: string): Promise<bigint> {
        return this.eth_call(functions.getBalance, [token])
    }

    getColor(): Promise<string> {
        return this.eth_call(functions.getColor, [])
    }

    getController(): Promise<string> {
        return this.eth_call(functions.getController, [])
    }

    getCurrentTokens(): Promise<Array<string>> {
        return this.eth_call(functions.getCurrentTokens, [])
    }

    getDenormalizedWeight(token: string): Promise<bigint> {
        return this.eth_call(functions.getDenormalizedWeight, [token])
    }

    getFinalTokens(): Promise<Array<string>> {
        return this.eth_call(functions.getFinalTokens, [])
    }

    getNormalizedWeight(token: string): Promise<bigint> {
        return this.eth_call(functions.getNormalizedWeight, [token])
    }

    getNumTokens(): Promise<bigint> {
        return this.eth_call(functions.getNumTokens, [])
    }

    getSpotPrice(tokenIn: string, tokenOut: string): Promise<bigint> {
        return this.eth_call(functions.getSpotPrice, [tokenIn, tokenOut])
    }

    getSpotPriceSansFee(tokenIn: string, tokenOut: string): Promise<bigint> {
        return this.eth_call(functions.getSpotPriceSansFee, [tokenIn, tokenOut])
    }

    getSwapFee(): Promise<bigint> {
        return this.eth_call(functions.getSwapFee, [])
    }

    getTotalDenormalizedWeight(): Promise<bigint> {
        return this.eth_call(functions.getTotalDenormalizedWeight, [])
    }

    isBound(t: string): Promise<boolean> {
        return this.eth_call(functions.isBound, [t])
    }

    isFinalized(): Promise<boolean> {
        return this.eth_call(functions.isFinalized, [])
    }

    isPublicSwap(): Promise<boolean> {
        return this.eth_call(functions.isPublicSwap, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
