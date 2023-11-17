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

export interface ISwapTransaction {
  id: String;
  blockNumber: Number;
  timestamp: Date;
  txHash: String;
  sender: String;
  recipient: String;
  amount0: any;
  amount1: any;
  pool_id: String;
  pool_token0: String;
  pool_token1: String;
  network:String;
  dex:String;
  from:String;
}

interface ISwapTransactionModel extends Model<ISwapTransaction, {}> {}

const SwapTransactionSchema = new Schema<
  ISwapTransaction,
  ISwapTransactionModel
>(
  {
    id: { type: String,unique:true},
    blockNumber: Number,
    timestamp: Date,
    txHash: String,
    sender: String,
    recipient: String,
    amount0: String,
    amount1: String,
    pool_id: String,
    pool_token0: String,
    pool_token1: String,
    from:String
  },
  { versionKey: false }
);

SwapTransactionSchema.index({ txHash: 1 });
SwapTransactionSchema.index({ amount0: 1 });
SwapTransactionSchema.index({ amount1: 1 });
SwapTransactionSchema.index({ pool_token0: 1 });
SwapTransactionSchema.index({ pool_token1: 1 });
SwapTransactionSchema.index({ from: 1 });
SwapTransactionSchema.index({ recipient: 1 });

export const getSwapTransactionModel = () => {
  // @ts-ignore
  return mongoose.model<ISwapTransaction, ISwapTransactionModel>(
    `swap_transactions`,
    SwapTransactionSchema
  );
};
