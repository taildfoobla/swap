import { Schema, Model } from "mongoose";
import { NETWORKS } from "../config/network";
import createConnection from "../config/mongoose";
import { Numeric } from "ethers";
import { Decimal128 } from "typeorm";

// const mongoose = createConnection(
//   "mongodb://localhost:27027/pj5545 " as string
// );

// const mongoose = createConnection(
//   "mongodb://moonfit-mongodb1:27017,moonfit-mongodb3:27017,moonfit-mongodbarbiter:27017/pj5545?replicaSet=pp5545" as string
// );

// const mongoose = createConnection(
//   "mongodb+srv://taild:RAwNxMCiIVC6tkCq@cluster0.z1xx4yf.mongodb.net/swap" as string
// );

// const mongoose = createConnection(
//   "mongodb://mf.xyz:27017/local_pj5545" as string
// );
const mongoose = createConnection(
  "mongodb://localhost:27017/blocks" as string
);

export interface ISwapTransactionNoPool {
  id: String;
  blockNumber: Number;
  timestamp: Date;
  txHash: String;
  sender: String;
  recipient: String;
  amount0In: any;
  amount0Out: any;
  amount1In: any;
  amount1Out: any;
  pool_id: String;
  // pool_token0: String;
  // pool_token1: String;
  network: String;
  dex: String;
  from: String;
}

interface ISwapTransactionNoPoolModel
  extends Model<ISwapTransactionNoPool, {}> {}

const SwapTransactionNoPoolSchema = new Schema<
  ISwapTransactionNoPool,
  ISwapTransactionNoPoolModel
>(
  {
    id: { type: String, unique: true },
    blockNumber: Number,
    timestamp: Date,
    txHash: String,
    sender: String,
    recipient: String,
    amount0In: String,
    amount0Out: String,
    amount1In: String,
    amount1Out: String,
    pool_id: String,
    // pool_token0: String,
    // pool_token1: String,
    from: String,
  },
  { versionKey: false }
);

// SwapTransactionSchema.index({ txHash: 1 });
// SwapTransactionSchema.index({ amount0: 1 });
// SwapTransactionSchema.index({ amount1: 1 });
// SwapTransactionSchema.index({ pool_token0: 1 });
// SwapTransactionSchema.index({ pool_token1: 1 });
// SwapTransactionSchema.index({ from: 1 });
// SwapTransactionSchema.index({ recipient: 1 });

export const getSwapTransactionNoPoolModel = () => {
  // @ts-ignore
  return mongoose.model<ISwapTransactionNoPool, ISwapTransactionNoPoolModel>(
    `eth_uniswap_v2_swapnopools`,
    SwapTransactionNoPoolSchema
  );
};
