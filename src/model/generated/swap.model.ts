import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/db";

const SwapPostgre = db.define(
  "swap",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idSquid: {
      type: DataTypes.STRING,
      unique: true,
    },
    blockNumber: {
      type: DataTypes.INTEGER,
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    txHash: {
      type: DataTypes.STRING,
    },
    sender: {
      type: DataTypes.STRING,
    },
    recipient: {
      type: DataTypes.STRING,
    },
    amount0:{
        type:DataTypes.STRING
    },
    amount1:{
        type:DataTypes.STRING
    },
    pool_id: {
      type: DataTypes.STRING,
    },
    pool_token0: {
      type: DataTypes.STRING,
    },
    pool_token1: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
  },
  {
    indexes: [
      {
        fields: ["txHash"],
      },
      {
        fields: ["amount0"],
      },
      {
        fields: ["amount1"],
      },
      {
        fields: ["pool_token0"],
      },
      {
        fields: ["pool_token1"],
      },
      {
        fields: ["from"],
      },
      {
        fields: ["recipient"],
      },
    ],
    timestamps:false
  }
);

SwapPostgre.sync().then(() => {
  console.log("table swap product created");
});

export default SwapPostgre;
