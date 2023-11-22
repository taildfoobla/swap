import { Schema, Model } from "mongoose";
import createConnection from "../config/mongoose";
import { Numeric } from "ethers";
import { Decimal128 } from "typeorm";
import { boolean } from "../model/generated/marshal";
// const mongoose = createConnection(
//   "mongodb://localhost:27027/pj5545 " as string
// );
const mongoose = createConnection(
  "mongodb://moonfit-mongodb1:27017,moonfit-mongodb3:27017,moonfit-mongodbarbiter:27017/pj5545?replicaSet=pp5545" as string
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

export interface INumber {

  name:String;
  add:Number;
}

interface INumberModel extends Model<INumber, {}> {}

const NumberSchema = new Schema<
  INumber,
  INumberModel
>(
  {
    
    name:String,
    add:Number,
  }
);

// NumberSchema.index({ id: 1 });


export const getNumberModel = () => {
  // @ts-ignore
  return mongoose.model<INumber, INumberModel>(
    `number_swap_addeds`,
    NumberSchema
  );
};
