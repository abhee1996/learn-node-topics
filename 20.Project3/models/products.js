"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
    // define association here
    //products.reviews =
    // products.hasMany(models.reviews);
    // User.Addresses = User.hasMany(Address);
    static associate = (models) => {
      products.hasMany(models.reviews, {
        onDelete: "cascade",
      });
    };
    // }
  }
  products.init(
    {
      name: DataTypes.STRING,
      sku: DataTypes.STRING,
      discription: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
