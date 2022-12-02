const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

module.exports = User;
