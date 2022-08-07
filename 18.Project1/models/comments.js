const { Sequelize, DataTypes, Model, Association } = require("sequelize");
const { development } = require("../config/config.json");
// const sequelizeProduct = new Sequelize("mariadb::memory:");

const sequelize = new Sequelize(development);
// const sequelize = new Sequelize(development,
//     {
//   define: {
//     freezeTableName: true,
//   },
// }
// );
class Comments extends Model {
  otherPublicField; // this field does not shadow anything. It is fine.
}
// const Comments = sequelize.define("Comments", {
Comments.init(
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
    sequelize, // We need to pass the connection instance
    modelName: "Comments", // We need to choose the model name
  }
);
console.log("comments", Comments === sequelize.models.Comments); // true
const comments = new Comments({ id: 1 });
comments.id; // 1
console.log("comments.id", comments.id);
Comments.associations = (models) => {
  Comments.belongsTo(models.Product, {
    foreignKey: { name: "productId", allowNull: true },
    onDelete: "cascade",
    hooks: true,
  });
};

// Comments.associations = (models)=>{
//   Comments.hasMany(models.Comments,{
//     onDelete: "cascade"
//   })
// }
async () => {
  await Comments.sync();
  //   await Comments.sync({ alter: true });
};
module.exports = { Comments };
