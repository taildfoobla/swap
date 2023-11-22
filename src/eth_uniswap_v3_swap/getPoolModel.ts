import { Schema, Model } from "mongoose";
import createConnection from "../config/mongoose";
import { Numeric } from "ethers";
import { Decimal128 } from "typeorm";
import { boolean } from "../model/generated/marshal";
// const mongoose = createConnection(
//   "mongodb://localhost:27027/pj5545 " as string
// );
const mongoose = createConnection(
  "mongodb://moonfit-mongodb3:27017/pj5545" as string
);
// const mongoose = createConnection(
//   "mongodb+srv://taild:RAwNxMCiIVC6tkCq@cluster0.z1xx4yf.mongodb.net/swap" as string
// );
// const mongoose = createConnection(
//   "mongodb://mf.xyz:27017/local_pj5545" as string
// );
// const mongoose = createConnection(MONGODB_URI);

// const mongoose = createConnection(
//   "mongodb://localhost:27017/blocks" as string
// );

export interface IPool {
  id: String;
  token0:String;
  token1:String;
}

interface IPoolModel extends Model<IPool, {}> {}

const PoolSchema = new Schema<
  IPool,
  IPoolModel
>(
  {
    id:{type:String,unique:true},
    token0:String,
    token1:String,
  },
  { versionKey: false }
);

PoolSchema.index({ id: 1 });


export const getPoolModel = () => {
  // @ts-ignore
  return mongoose.model<IPool, IPoolModel>(
    `eth_uniswap_v3_pools`,
    PoolSchema
  );
};
