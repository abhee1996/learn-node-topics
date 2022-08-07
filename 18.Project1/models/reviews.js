const { Sequelize, DataTypes } = require("sequelize");
const { development } = require("../config/config.json");
const sequelize = new Sequelize(development);
const { Product } = require("./product");

// module.exports = () => {
const Review = sequelize.define("reviews", {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  discription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Review.associations = (models) => {
  console.log("models", models);
  Review.belongsTo(Product, {
    foreignKey: "productId",
    onDelete: "cascade",
    hooks: true,
  });
};
//   return Review;
// };
console.log("Reviews", Review === sequelize.models.Review); // true

module.exports = { Review };
// console.log("models", Review == sequelize.models.Review ? true : false);
