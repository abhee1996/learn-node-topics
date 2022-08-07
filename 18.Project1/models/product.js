const { Sequelize, DataTypes } = require("sequelize");
const { development } = require("../config/config.json");
const { Review } = require("./reviews");
const { Shop } = require("./shop");
const sequelizeProduct = new Sequelize(development);
const Product = sequelizeProduct.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    discription: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      //allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "products",

    // sequelizeProduct, // We need to pass the connection instance
    // modelName: "products", // We need to choose the model name
  }
);
Product.associations = (models) => {
  console.log("models", models);
  Product.hasMany(Review, {
    foreignKey: "Product_productId",
    onDelete: "cascade",
  });
  Product.belongsTo(Shop, {
    foreignKey: "shopId",
    onDelete: "cascade",
    hooks: true,
  });
};
module.exports = { Product };
// const expProduct = () => {
//   // (async () => {
//   //   // Code here
//   //   await Product.sync({ schema: "product" });
//   //   try {
//   //     const jane = await Product.build({
//   //       name: "Jane",
//   //       sku: "fresh grapes",
//   //       discription: "fresh grapes",
//   //       price: 30,
//   //     });
//   //     jane.sku = "fresh grapes";
//   //     jane.discription = "fresh grapes";
//   //     jane.price = 30;
//   //     // await jane.save();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // })();
//   // const jane = Product.create({ name: "Jane" });
//   // console.log(jane instanceof Product); // true
//   // console.log(jane.name);
//   // return Product;
// };
// (async () => {
//   await sequelizeProduct.sync
//   // Code here
// })();
