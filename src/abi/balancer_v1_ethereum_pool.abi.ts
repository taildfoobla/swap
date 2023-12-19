export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "src",
                "indexed": true
            },
            {
                "type": "address",
                "name": "dst",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amt",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": true,
        "name": "LOG_CALL",
        "inputs": [
            {
                "type": "bytes4",
                "name": "sig",
                "indexed": true
            },
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "data",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LOG_EXIT",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "tokenOut",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LOG_JOIN",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "tokenIn",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LOG_SWAP",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "tokenIn",
                "indexed": true
            },
            {
                "type": "address",
                "name": "tokenOut",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "src",
                "indexed": true
            },
            {
                "type": "address",
                "name": "dst",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amt",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "BONE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "BPOW_PRECISION",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "EXIT_FEE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "INIT_POOL_SUPPLY",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_BOUND_TOKENS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_BPOW_BASE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_FEE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_IN_RATIO",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_OUT_RATIO",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_TOTAL_WEIGHT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_WEIGHT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_BALANCE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_BOUND_TOKENS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_BPOW_BASE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_FEE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_WEIGHT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "allowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "src"
            },
            {
                "type": "address",
                "name": "dst"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "whom"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "bind",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "balance"
            },
            {
                "type": "uint256",
                "name": "denorm"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "calcInGivenOut",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceIn"
            },
            {
                "type": "uint256",
                "name": "tokenWeightIn"
            },
            {
                "type": "uint256",
                "name": "tokenBalanceOut"
            },
            {
                "type": "uint256",
                "name": "tokenWeightOut"
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcOutGivenIn",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceIn"
            },
            {
                "type": "uint256",
                "name": "tokenWeightIn"
            },
            {
                "type": "uint256",
                "name": "tokenBalanceOut"
            },
            {
                "type": "uint256",
                "name": "tokenWeightOut"
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcPoolInGivenSingleOut",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceOut"
            },
            {
                "type": "uint256",
                "name": "tokenWeightOut"
            },
            {
                "type": "uint256",
                "name": "poolSupply"
            },
            {
                "type": "uint256",
                "name": "totalWeight"
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "poolAmountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcPoolOutGivenSingleIn",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceIn"
            },
            {
                "type": "uint256",
                "name": "tokenWeightIn"
            },
            {
                "type": "uint256",
                "name": "poolSupply"
            },
            {
                "type": "uint256",
                "name": "totalWeight"
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "poolAmountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcSingleInGivenPoolOut",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceIn"
            },
            {
                "type": "uint256",
                "name": "tokenWeightIn"
            },
            {
                "type": "uint256",
                "name": "poolSupply"
            },
            {
                "type": "uint256",
                "name": "totalWeight"
            },
            {
                "type": "uint256",
                "name": "poolAmountOut"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcSingleOutGivenPoolIn",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceOut"
            },
            {
                "type": "uint256",
                "name": "tokenWeightOut"
            },
            {
                "type": "uint256",
                "name": "poolSupply"
            },
            {
                "type": "uint256",
                "name": "totalWeight"
            },
            {
                "type": "uint256",
                "name": "poolAmountIn"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "calcSpotPrice",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenBalanceIn"
            },
            {
                "type": "uint256",
                "name": "tokenWeightIn"
            },
            {
                "type": "uint256",
                "name": "tokenBalanceOut"
            },
            {
                "type": "uint256",
                "name": "tokenWeightOut"
            },
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "spotPrice"
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decreaseApproval",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "exitPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "poolAmountIn"
            },
            {
                "type": "uint256[]",
                "name": "minAmountsOut"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "exitswapExternAmountOut",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenOut"
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            },
            {
                "type": "uint256",
                "name": "maxPoolAmountIn"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "poolAmountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "exitswapPoolAmountIn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenOut"
            },
            {
                "type": "uint256",
                "name": "poolAmountIn"
            },
            {
                "type": "uint256",
                "name": "minAmountOut"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "finalize",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getColor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getController",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentTokens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "tokens"
            }
        ]
    },
    {
        "type": "function",
        "name": "getDenormalizedWeight",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getFinalTokens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "tokens"
            }
        ]
    },
    {
        "type": "function",
        "name": "getNormalizedWeight",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getNumTokens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSpotPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "address",
                "name": "tokenOut"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "spotPrice"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSpotPriceSansFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "address",
                "name": "tokenOut"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "spotPrice"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSwapFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalDenormalizedWeight",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "gulp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "increaseApproval",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isBound",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "t"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isFinalized",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isPublicSwap",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "joinPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "poolAmountOut"
            },
            {
                "type": "uint256[]",
                "name": "maxAmountsIn"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "joinswapExternAmountIn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            },
            {
                "type": "uint256",
                "name": "minPoolAmountOut"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "poolAmountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "joinswapPoolAmountOut",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "uint256",
                "name": "poolAmountOut"
            },
            {
                "type": "uint256",
                "name": "maxAmountIn"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "rebind",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "balance"
            },
            {
                "type": "uint256",
                "name": "denorm"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setController",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "manager"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPublicSwap",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "public_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSwapFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "swapFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "swapExactAmountIn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            },
            {
                "type": "address",
                "name": "tokenOut"
            },
            {
                "type": "uint256",
                "name": "minAmountOut"
            },
            {
                "type": "uint256",
                "name": "maxPrice"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            },
            {
                "type": "uint256",
                "name": "spotPriceAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "swapExactAmountOut",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenIn"
            },
            {
                "type": "uint256",
                "name": "maxAmountIn"
            },
            {
                "type": "address",
                "name": "tokenOut"
            },
            {
                "type": "uint256",
                "name": "tokenAmountOut"
            },
            {
                "type": "uint256",
                "name": "maxPrice"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokenAmountIn"
            },
            {
                "type": "uint256",
                "name": "spotPriceAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "src"
            },
            {
                "type": "address",
                "name": "dst"
            },
            {
                "type": "uint256",
                "name": "amt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "unbind",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    }
]
