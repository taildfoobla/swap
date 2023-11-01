import { Schema, Model } from "mongoose";
import { NETWORKS } from "../config/network";
import createConnection from "../config/mongoose";
import { Numeric } from "ethers";
import { Decimal128 } from "typeorm";

const mongoose = createConnection(
  "mongodb://localhost:27027/pj5545?directConnection=true" as string
);
// const mongoose = createConnection(
//   "mongodb://localhost:27017/blocks" as string
// );

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
}

interface ISwapTransactionModel extends Model<ISwapTransaction, {}> {}

const SwapTransactionSchema = new Schema<
  ISwapTransaction,
  ISwapTransactionModel
>(
  {
    id: { type: String, unique: true },
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
    network:String,
    dex:String
  },
  { versionKey: false }
);

export const getSwapTransactionModel = () => {
  // @ts-ignore
  return mongoose.model<IBlock, IBlockModel>(
    `swap_transactions`,
    SwapTransactionSchema
  );
};
