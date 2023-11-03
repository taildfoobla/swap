import * as dotenv from "dotenv";
import fs from 'fs'
import path from 'path';
import Joi from 'joi';
import {EventEmitter} from 'events';

const emitter = new EventEmitter();
emitter.setMaxListeners(0)

let envPath = path.resolve(__dirname, '../.env');

if (!fs.existsSync(envPath)) {
    envPath = path.resolve(__dirname, '../../.env');
}

console.log('Load env from:', envPath)

dotenv.config({ path: envPath })

// Input
const envVarsSchema = Joi.object()
    .keys({
        NETWORK_NAME: Joi.string().valid('ethereum', 'binance').required(),
        EVM_LOG_RANGE: Joi.number().default(50000),
        START_BLOCK_NUMBER: Joi.number().default(0),
        END_BLOCK_NUMBER: Joi.number().optional().allow(''),
        RABBITMQ_URI: Joi.string().required(),
        QUEUE_PREFIX: Joi.string().default('PJ5545::'),
        REDIS_URI: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        MONGODB_URI_EVM_LOG: Joi.string().required(),
        REDIS_DATABASE_KEY: Joi.string().required(),
        EVM_LOG_WRITE_DB: Joi.boolean().default(false),
        EVM_LOG_WRITE_FILE: Joi.boolean().default(false),
        EVM_LOG_PUSH_TO_QUEUE: Joi.boolean().default(true),
        ADD_TRANSACTION: Joi.boolean().default(true),
        ADD_EVM_LOG: Joi.boolean().default(true),
        TOKEN_ADDRESS: Joi.string().optional().allow('').default(''),

        ONLY_RPC: Joi.boolean().default(false),
        CHAIN_RPC_URL: Joi.string().optional().allow('').default(''),
        // Rang request blocks: toBlock - fromBlock
        CHAIN_RPC_CAPACITY: Joi.number().optional().allow('').default(100),
        CHAIN_RPC_RATE_LIMIT: Joi.number().optional().allow('').default(20),
        CHAIN_RPC_REQUEST_TIMEOUT: Joi.number().optional().allow('').default(15_000),
        CHAIN_RPC_MAX_BATCH_CALL_SIZE: Joi.number().optional().allow('').default(10),
    })
    .unknown()

const {value: envVars, error} = envVarsSchema.prefs({errors: {label: 'key'}}).validate(process.env)

if (error) {
    console.log(process.env)
    console.log('envPath:', envPath)
    throw new Error(`Config validation error: ${error.message}`)
}

export const REDIS_URI = envVars.REDIS_URI
export const MONGODB_URI = envVars.MONGODB_URI
export const MONGODB_URI_EVM_LOG = envVars.MONGODB_URI_EVM_LOG

export const REDIS_DATABASE_KEY = envVars.REDIS_DATABASE_KEY || ''

export const QUEUE_PREFIX = envVars.QUEUE_PREFIX
export const RABBITMQ_URI = envVars.RABBITMQ_URI

export const NETWORK_NAME = envVars.NETWORK_NAME

export const EVM_LOG_RANGE  = envVars.EVM_LOG_RANGE

export const EVM_LOG_WRITE_DB = envVars.EVM_LOG_WRITE_DB
export const EVM_LOG_WRITE_FILE = envVars.EVM_LOG_WRITE_FILE
export const EVM_LOG_PUSH_TO_QUEUE = envVars.EVM_LOG_PUSH_TO_QUEUE

export const START_BLOCK_NUMBER = envVars.START_BLOCK_NUMBER
export const END_BLOCK_NUMBER = envVars.END_BLOCK_NUMBER

export const TOKEN_ADDRESS = envVars.TOKEN_ADDRESS.split(',').filter(Boolean)
export const addTransaction = envVars.ADD_TRANSACTION
export const addEVMLog = envVars.ADD_EVM_LOG

export const ONLY_RPC = envVars.ONLY_RPC

export const CHAIN_RPC_URL = envVars.CHAIN_RPC_URL
export const CHAIN_RPC_CAPACITY = envVars.CHAIN_RPC_CAPACITY
export const CHAIN_RPC_RATE_LIMIT = envVars.CHAIN_RPC_RATE_LIMIT
export const CHAIN_RPC_REQUEST_TIMEOUT = envVars.CHAIN_RPC_REQUEST_TIMEOUT
export const CHAIN_RPC_MAX_BATCH_CALL_SIZE = envVars.CHAIN_RPC_MAX_BATCH_CALL_SIZE

export const ROOT_PATH = path.resolve(__dirname, '../../../')
