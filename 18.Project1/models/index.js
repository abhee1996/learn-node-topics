"use strict";
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json");
const { development, production, test } = config;
const productReq = require("./product");
const shopReq = require("./shop");
const commentsReq = require("./comments");
const reviewsReq = require("./reviews");
const mariadb = require("mariadb");

console.log("productReq", productReq);
const db = {};
// let sequelize;
// if (development.use_env_variable) {
//   sequelize = new Sequelize(process.env[development.use_env_variable], config);
// } else {
let sequelize = new Sequelize(development);

// create db if it doesn't already exist

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.product = new productReq.Product(sequelize, DataTypes); //(sequelize, DataTypes);
db.shop = new shopReq.Shop(sequelize, DataTypes);
db.comments = new commentsReq.Comments(sequelize, DataTypes);
db.reviews = new reviewsReq.Review(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error occured", err);
  });
async () => {
  // const connection = await mariadb.createConnection(development);

  // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  await sequelize.sync().then(() => {
    //app.listen(port, () => {
    console.log(`yes re-sync done`);
    //});
  });
};
module.exports = db;
