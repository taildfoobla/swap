import { Sequelize, DataTypes } from "sequelize";
import db from "../../config/db";

const PoolPostgre = db.define(
  "pool",
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
  }
);

PoolPostgre.sync().then(() => {
  console.log("table pool product created");
});

export default PoolPostgre;
