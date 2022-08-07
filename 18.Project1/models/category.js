const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("mariadb::memory:");
const { development } = require("../config/config.json");

const sequelize = new Sequelize(development);

//module.exports = () => {
const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//  return Category;
//};
// const Category = sequelize.define("category", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   icon: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   color: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });
module.exports = Category;
