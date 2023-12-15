import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './camelot_v2_arbitrum_factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FeePercentOwnershipTransferred: new LogEvent<([prevOwner: string, newOwner: string] & {prevOwner: string, newOwner: string})>(
        abi, '0xf14fcb76f5835c1d416cc224ffc209c65749cede0d23fd6e6035d4dd1c2e0f8c'
    ),
    FeeToTransferred: new LogEvent<([prevFeeTo: string, newFeeTo: string] & {prevFeeTo: string, newFeeTo: string})>(
        abi, '0x941bed5eb8a4f7abb41f1a8547c6b5fded98a6fbe47dbd60aee080690de5f0d5'
    ),
    OwnerFeeShareUpdated: new LogEvent<([prevOwnerFeeShare: bigint, ownerFeeShare: bigint] & {prevOwnerFeeShare: bigint, ownerFeeShare: bigint})>(
        abi, '0xd739f5afb7778b0c4f4e62b13ac0a94ccc1556dbcb8dc2d0b907daed378e1e23'
    ),
    OwnershipTransferred: new LogEvent<([prevOwner: string, newOwner: string] & {prevOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PairCreated: new LogEvent<([token0: string, token1: string, pair: string, length: bigint] & {token0: string, token1: string, pair: string})>(
        abi, '0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9'
    ),
    ReferrerFeeShareUpdated: new LogEvent<([referrer: string, prevReferrerFeeShare: bigint, referrerFeeShare: bigint] & {referrer: string, prevReferrerFeeShare: bigint, referrerFeeShare: bigint})>(
        abi, '0x4deb2bb31aaa8475916c8556f3e3287795da71076b7419d627eeef223b7dcc58'
    ),
    SetStableOwnershipTransferred: new LogEvent<([prevOwner: string, newOwner: string] & {prevOwner: string, newOwner: string})>(
        abi, '0xabdd76bd5d5532d19d3e93704ac3544f45f03dc956b39995d3436d2d166855e5'
    ),
}

export const functions = {
    OWNER_FEE_SHARE_MAX: new Func<[], {}, bigint>(
        abi, '0x90fd0687'
    ),
    REFERER_FEE_SHARE_MAX: new Func<[], {}, bigint>(
        abi, '0x1850bd76'
    ),
    allPairs: new Func<[_: bigint], {}, string>(
        abi, '0x1e3dd18b'
    ),
    allPairsLength: new Func<[], {}, bigint>(
        abi, '0x574f2ba3'
    ),
    createPair: new Func<[tokenA: string, tokenB: string], {tokenA: string, tokenB: string}, string>(
        abi, '0xc9c65396'
    ),
    feeInfo: new Func<[], {}, ([_ownerFeeShare: bigint, _feeTo: string] & {_ownerFeeShare: bigint, _feeTo: string})>(
        abi, '0x995b5aae'
    ),
    feePercentOwner: new Func<[], {}, string>(
        abi, '0x4c217715'
    ),
    feeTo: new Func<[], {}, string>(
        abi, '0x017e7e58'
    ),
    getPair: new Func<[_: string, _: string], {}, string>(
        abi, '0xe6a43905'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerFeeShare: new Func<[], {}, bigint>(
        abi, '0x69c8b572'
    ),
    referrersFeeShare: new Func<[_: string], {}, bigint>(
        abi, '0x7183d47c'
    ),
    setFeePercentOwner: new Func<[_feePercentOwner: string], {_feePercentOwner: string}, []>(
        abi, '0xe93f6585'
    ),
    setFeeTo: new Func<[_feeTo: string], {_feeTo: string}, []>(
        abi, '0xf46901ed'
    ),
    setOwner: new Func<[_owner: string], {_owner: string}, []>(
        abi, '0x13af4035'
    ),
    setOwnerFeeShare: new Func<[newOwnerFeeShare: bigint], {newOwnerFeeShare: bigint}, []>(
        abi, '0x91b83178'
    ),
    setReferrerFeeShare: new Func<[referrer: string, referrerFeeShare: bigint], {referrer: string, referrerFeeShare: bigint}, []>(
        abi, '0xc1cf3c7f'
    ),
    setSetStableOwner: new Func<[_setStableOwner: string], {_setStableOwner: string}, []>(
        abi, '0x8692fa7d'
    ),
    setStableOwner: new Func<[], {}, string>(
        abi, '0xfc39026a'
    ),
}

export class Contract extends ContractBase {

    OWNER_FEE_SHARE_MAX(): Promise<bigint> {
        return this.eth_call(functions.OWNER_FEE_SHARE_MAX, [])
    }

    REFERER_FEE_SHARE_MAX(): Promise<bigint> {
        return this.eth_call(functions.REFERER_FEE_SHARE_MAX, [])
    }

    allPairs(arg0: bigint): Promise<string> {
        return this.eth_call(functions.allPairs, [arg0])
    }

    allPairsLength(): Promise<bigint> {
        return this.eth_call(functions.allPairsLength, [])
    }

    feeInfo(): Promise<([_ownerFeeShare: bigint, _feeTo: string] & {_ownerFeeShare: bigint, _feeTo: string})> {
        return this.eth_call(functions.feeInfo, [])
    }

    feePercentOwner(): Promise<string> {
        return this.eth_call(functions.feePercentOwner, [])
    }

    feeTo(): Promise<string> {
        return this.eth_call(functions.feeTo, [])
    }

    getPair(arg0: string, arg1: string): Promise<string> {
        return this.eth_call(functions.getPair, [arg0, arg1])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerFeeShare(): Promise<bigint> {
        return this.eth_call(functions.ownerFeeShare, [])
    }

    referrersFeeShare(arg0: string): Promise<bigint> {
        return this.eth_call(functions.referrersFeeShare, [arg0])
    }

    setStableOwner(): Promise<string> {
        return this.eth_call(functions.setStableOwner, [])
    }
}
