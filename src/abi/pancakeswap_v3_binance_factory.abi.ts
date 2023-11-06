export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_poolDeployer"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeAmountEnabled",
        "inputs": [
            {
                "type": "uint24",
                "name": "fee",
                "indexed": true
            },
            {
                "type": "int24",
                "name": "tickSpacing",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeAmountExtraInfoUpdated",
        "inputs": [
            {
                "type": "uint24",
                "name": "fee",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelistRequested",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "enabled",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnerChanged",
        "inputs": [
            {
                "type": "address",
                "name": "oldOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PoolCreated",
        "inputs": [
            {
                "type": "address",
                "name": "token0",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token1",
                "indexed": true
            },
            {
                "type": "uint24",
                "name": "fee",
                "indexed": true
            },
            {
                "type": "int24",
                "name": "tickSpacing",
                "indexed": false
            },
            {
                "type": "address",
                "name": "pool",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetLmPoolDeployer",
        "inputs": [
            {
                "type": "address",
                "name": "lmPoolDeployer",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WhiteListAdded",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "verified",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "collectProtocol",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint128",
                "name": "amount0Requested"
            },
            {
                "type": "uint128",
                "name": "amount1Requested"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": "amount0"
            },
            {
                "type": "uint128",
                "name": "amount1"
            }
        ]
    },
    {
        "type": "function",
        "name": "createPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "tokenA"
            },
            {
                "type": "address",
                "name": "tokenB"
            },
            {
                "type": "uint24",
                "name": "fee"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "pool"
            }
        ]
    },
    {
        "type": "function",
        "name": "enableFeeAmount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint24",
                "name": "fee"
            },
            {
                "type": "int24",
                "name": "tickSpacing"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "feeAmountTickSpacing",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint24",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "int24",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "feeAmountTickSpacingExtraInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint24",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "whitelistRequested"
            },
            {
                "type": "bool",
                "name": "enabled"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPool",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "uint24",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "lmPoolDeployer",
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
        "name": "owner",
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
        "name": "poolDeployer",
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
        "name": "setFeeAmountExtraInfo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint24",
                "name": "fee"
            },
            {
                "type": "bool",
                "name": "whitelistRequested"
            },
            {
                "type": "bool",
                "name": "enabled"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFeeProtocol",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "uint32",
                "name": "feeProtocol0"
            },
            {
                "type": "uint32",
                "name": "feeProtocol1"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLmPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            },
            {
                "type": "address",
                "name": "lmPool"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLmPoolDeployer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_lmPoolDeployer"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWhiteListAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            },
            {
                "type": "bool",
                "name": "verified"
            }
        ],
        "outputs": []
    }
]
