"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

// const { Sequelize, DataTypes, Model } = require("sequelize");
// const { development } = require("../config/config.json");
// var sequelize = new Sequelize(
//   "mariadb://root:root@localhost:3307/no_dejs_app&allowPublicKeyRetrieval:true"
// ,{
//   host: "localhost",
//   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   allowPublicKeyRetrieval: true,
//   cachingRsaPublicKey: true,
// }
// );
// const sequelize = new Sequelize(development);
// const sequelize = new Sequelize("no_dejs_app", "root", "root", {
//   host: "localhost",
//   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   allowPublicKeyRetrieval: true,
// });
// class User extends Model {}

// User.init(
//   {
//     // Model attributes are defined here
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       // allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull: true,
//     },
//     age: {
//       type: DataTypes.NUMBER,
//       // allowNull: true,
//     },
//   },
//   {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: "User", // We need to choose the model name
//   }
// );
// (async () => {
//   try {
//     await sequelize.sync({ force: true });
//     // Code here
//     const user = User.build({ firstname: "Jane", lastname: "Doe", age: 32 });
//     console.log(jane instanceof User); // true
//     console.log(jane.name); // "Jane"
//     await jane.save();
//     console.log("Jane's auto-generated ID:", jane.id);
//     console.log("Jane was saved to the database!");
//   } catch (error) {
//     console.log(error);
//   }
// })();

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true
// module.exports = { User };
