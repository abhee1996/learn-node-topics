const { Sequelize, DataTypes } = require("sequelize");
const { development } = require("../config/config.json");

const sequelize = new Sequelize(development);

const Shop = sequelize.define("Shop", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  owner: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  discription: {
    type: DataTypes.STRING,
  },
  place: {
    type: DataTypes.STRING,
  },
});
Shop.associations = (models) => {
  Shop.hasMany(models.Product, {
    onDelete: "cascade",
  });
};
module.exports = { Shop };
