import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Forum extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Forum.init(
  {
    forumId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    context: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'forum',
    sequelize: db,
  },
);