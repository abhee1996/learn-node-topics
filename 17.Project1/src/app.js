const express = require("express");
const app = express();
require("dotenv/config");

const port = process.env.port || 5001;
const api = process.env.API_URL;
const morgan = require("morgan");
const mariadb = require("mariadb");
const cors = require("cors");
const bodyParser = require("body-parser");

////---MIDDLEWARE---//
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
////---CORS---////
app.use(cors());
app.options("*", cors);
//---ROUTERS/CONTROLLERS---////
const productRouters = require("../src/routers/product");
const userRouters = require("../src/routers/users");
// const orderRouters = require("../src/routers/order");
// const categoriesRouters = require("../src/routers/categories");
//http://localhost:5000/api/v1/products

//Products Controller
app.use(`${api}/product`, productRouters);
app.use(`${api}/user`, userRouters);
// app.use(`${api}/order`, orderRouters);
// app.use(`${api}/category`, categoriesRouters);

//// // // // // // // ////
//                       //
//  MARIADB CONNECTIONS  //
//                       //
//// // // // // // // ////
let mydb = `nodeJs_app`;

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.Port || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.Password || "root",
  database: "nodeJs_app",
  allowPublicKeyRetrieval: true,
});
const connection = mariadb.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.Port || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PWD || "root",
  allowPublicKeyRetrieval: true,
});
connection
  .then(async (conn) => {
    conn
      .query(`CREATE DATABASE IF NOT EXISTS ${mydb}`)
      .then((rows) => {
        console.log("rows", rows);
      })
      .catch((err) => {
        console.log(err);
      });
    return conn;
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get("/", (req, res) => {
  res.send("hello muhammad abdullah");
});

app.listen(port, () => {
  console.log(`NodeJs ExpressJs App listening connection at port ${port}`);
});
module.exports = { app, pool, connection };

// const { pool } = require("./db/conn");
// // //GET ALL
// app.get("api/v1/read", async (req, res) => {
//   let q = "Select * FROM Product";
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     let result = await conn.query(q);
//     res.send(result);
//     if (!result) {
//       res.status(500).json({ message: "Product Retrieve failed" });
//     } else {
//       res
//         .status(201)
//         .json(result, { message: "Product Retrieve Successfully" });
//     }
//   } catch (error) {
//     throw error;
//   }
// });

// // // POST

// app.post("/create", async (req, res) => {
//   let product = req?.body;
//   let conn;
//   try {
//     let q = "INSERT INTO product (name,sku,discription,price) values(?,?,?,?)";
//     let pdtarr = [
//       product?.name,
//       product?.sku,
//       product?.discription,
//       product?.price,
//     ];
//     conn = await pool.getConnection();
//     let result = conn.query(q, pdtarr);
//     console.log("result", result);
//     res.send(result);
//   } catch (error) {
//     console.log("error", error);
//     throw error;
//   } finally {
//     if (conn) return conn.release();
//   }
// });
