import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db";

const PoolPostgre = db.define(
  "pool_uniswap_v3_eth",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
    },
    token0: {
      type: DataTypes.STRING,
    },
    token1: {
      type: DataTypes.STRING,
    },
  },
  {
    indexes: [
      {
        fields: ["id"],
      },
    ],
    timestamps:false
  }
);

// PoolPostgre.sync().then(() => {
//   console.log("table pool product created");
// });

export default PoolPostgre;
