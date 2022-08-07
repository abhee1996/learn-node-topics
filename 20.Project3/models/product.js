// const { Sequelize, DataTypes, Model } = require("sequelize");
// const { development } = require("../config/config.json");
// const sequelize = new Sequelize(development);
// // const sequelize = new Sequelize("no_dejs_app", "root", "root", {
// //   host: "localhost",
// //   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// // });
// // const sequelize = new Sequelize(
// //   "mariadb://root:root@localhost:3307/no_dejs_app&allowPublicKeyRetrieval:true"
// // );
// //   {
// //     host: "localhost",
// //     dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// //     allowPublicKeyRetrieval: true,
// //   }
// // );
// const sequelize = new Sequelize("no_dejs_app", "root", "root", {
//   host: "localhost",
//   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   allowPublicKeyRetrieval: true,
// });
// var Product = sequelize.define(
//   "product",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },

//     name: {
//       type: DataTypes.STRING,
//       //   field: 'first_name' // Will result in an attribute that is firstName when Product facing but first_name in the database
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     price: {
//       type: DataTypes.NUMBER,
//     },
//   },
//   {
//     freezeTableName: true, // Model tableName will be the same as the model name
//   }
// );
// (async () => {
//   try {
//     await sequelize.sync();
//     // Code here
//     const product = Product.build({
//       firstname: "Jane",
//       lastname: "Doe",
//       age: 32,
//     });
//     console.log(jane instanceof Product); // true
//     console.log(jane.name); // "Jane"
//     await jane.save();
//     console.log("Jane's auto-generated ID:", jane.id);
//     console.log("Jane was saved to the database!");
//   } catch (error) {
//     console.log(error);
//   }
// })();
// // Product.sync().then(function () {
// //   //   Product.sync({force: true}).then(function () {
// //   // Table created
// //   return Product.create({
// //     firstName: "John",
// //     lastName: "HanDell",
// //   });
// // });
// module.exports = Product;
