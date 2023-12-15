export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "vault"
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
                "name": "pool",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "create",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol"
            },
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "uint256[]",
                "name": "weights"
            },
            {
                "type": "uint256",
                "name": "swapFeePercentage"
            },
            {
                "type": "bool",
                "name": "oracleEnabled"
            },
            {
                "type": "address",
                "name": "owner"
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
        "name": "getPauseConfiguration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "pauseWindowDuration"
            },
            {
                "type": "uint256",
                "name": "bufferPeriodDuration"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVault",
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
        "name": "isPoolFromFactory",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    }
]
