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
        "name": "LOG_BLABS",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "blabs",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LOG_NEW_POOL",
        "inputs": [
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "address",
                "name": "pool",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "collect",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "pool"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getBLabs",
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
        "name": "isBPool",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "b"
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
        "name": "newBPool",
        "constant": false,
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
        "name": "setBLabs",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "b"
            }
        ],
        "outputs": []
    }
]
