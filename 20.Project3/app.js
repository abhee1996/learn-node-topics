//import modules
const express = require("express");
const app = express();
const port = process.env.port || 5000;
const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { Sequelize, DataTypes, Model } = require("sequelize");
const { development } = require("./config/config.json");

//Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

//CORS//
app.use(cors());
app.options("*", cors);

//ROUTERS/CONTROLLERS//
// const productRouters = require("../routers/product");
const UserRoutes = require("./controllers/user.controller");

//ROUTES
// app.use(`${api}/`, productRouters);
app.use(`${api}/`, UserRoutes);

//SEQUELIZE
const sequelize = new Sequelize(development);
// const sequelize = new Sequelize(
//   "mariadb://root:root@localhost:3307/no_dejs_app&allowPublicKeyRetrieval:true"
// );
//   {
//     host: "localhost",
//     dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//     allowPublicKeyRetrieval: true,
//   }
// );

// const sequelize = new Sequelize("no_dejs_app", "root", "root", {
//   host: "localhost",
//   dialect: "mariadb" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//   allowPublicKeyRetrieval: true,
// });

async () => {
  console.log("enter async");
  await sequelize.authenticate().then((res) => {
    console.log("Connection has been established successfully.");
  });
  await sequelize.sync().then(() => {
    console.log(`yes re-sync done`);
    app.listen(port, () => {
      console.log(`NodeJs ExpressJs App listening connection at port ${port}`);
    });
  });
  console.error("Unable to connect to the database:", error);
};
sequelize.authenticate().then((res) => {
  console.log("Connection has been established successfully.");
});
module.exports = app;
