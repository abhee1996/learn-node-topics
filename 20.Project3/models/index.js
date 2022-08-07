"use strict";

const fs = require("fs");
const path = require("path");
// const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const { Sequelize, DataTypes, Model } = require("sequelize");
const { development } = require("../config/config.json");
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //sequelize = new Sequelize(config.database, config.username, config.password, config);
  // sequelize = new Sequelize(
  //   "mariadb://root:root@localhost:3307/no_dejs_app&allowPublicKeyRetrieval:true"
  // );

  //   host: "localhost",
  //   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  //   allowPublicKeyRetrieval: true,
  // });
  // sequelize = new Sequelize("no_dejs_app", "root", "root", {
  //   host: "localhost",
  //   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  //   allowPublicKeyRetrieval: true,
  // });
  sequelize = new Sequelize(development);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });
db.user = require("./user")(sequelize, DataTypes);
db.product = require("./product")(sequelize, DataTypes);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
