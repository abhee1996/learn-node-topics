const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.port || 5000;
const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mariadb = require("mariadb");
const cors = require("cors");

////---MIDDLEWARE---//
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
////---CORS---////
app.use(cors());
app.options("*", cors);
//---ROUTERS/CONTROLLERS---//

//
const productRouters = require("../controller/products");
const userRouters = require("../controller/users");
// const orderRouters = require("../controller/order");
const categoriesRouters = require("../controller/categories");

//http://localhost:5000/api/v1/products

//Products Controller
app.use(`${api}/product`, productRouters);
app.use(`${api}/user`, userRouters);
// app.use(`${api}/order`, orderRouters);
app.use(`${api}/category`, categoriesRouters);
// app.use(`${api}/product`, productRouters);

////---MARIA DATABASE CONNECTION---////
//let mydb = `mernShop_app`;
// const pool = mariadb.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.Port || 3307,
//   user: process.env.DB_USER || "root",
//   password: process.env.Password || "root",
//   //   database: mydb,
//   allowPublicKeyRetrieval: true,
// });
// pool
//   .then(async (conn) => {
//     conn
//       .query(`CREATE DATABASE IF NOT EXISTS ${mydb}`)
//       .then((rows) => {
//         console.log(rows);
//         conn.end();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     return conn;
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

////---MONGOOSE DATABASE CONNECTION---//

mongoose
  //  mongoose online connection
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "mernEshop",
  })
  //local mongoose compass
  //   .connect("mongodb://localhost:27017/mernEshop", {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database successfull connected...");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello muhammad abdullah");
});

app.listen(port, () => {
  console.log(`MERN App listening connection at port ${port}`);
});
module.exports = { app };
// module.exports = { app, pool };
