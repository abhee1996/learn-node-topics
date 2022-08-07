const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.port || 5000;
const api = process.env.API_URL;
const morgan = require("morgan");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Sequelize } = require("sequelize");
const { development } = require("../config/config.json");

const sequelize = new Sequelize(development);

//---MIDDLEWARE---
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
//---CORS---//
app.use(cors());
app.options("*", cors);
//---ROUTERS/CONTROLLERS---//
const productRouters = require("../routers/product");
// const userRouters = require("../routers/users");

//http://localhost:5000/api/v1/products

//Products Routes
app.use(`${api}/product`, productRouters);
app.use(`${api}/shop`, productRouters);
// app.use(`${api}/user`, userRouters);

//  MARIADB CONNECTIONS  //

// initialize();
sequelize
  .authenticate()
  .then((res) => {
    console.log("connected", res);
  })
  .catch((err) => {
    console.log("error occured", err);
  });
// sequelize.sync().then(() => {
//   app.listen(port, () => {
//     console.log(`NodeJs ExpressJs App listening connection at port ${port}`);
//   });
// });
const Seque = async () => {
  await sequelize.sync().then(() => {
    //app.listen(port, () => {
    console.log(`yes re-sync done`);
    //});
    app.listen(port, () => {
      console.log(`NodeJs ExpressJs App listening connection at port ${port}`);
    });
  });
};
Seque();
module.exports = { app };
