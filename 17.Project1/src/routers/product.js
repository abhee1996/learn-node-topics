const express = require("express");
const app = require("../app");
const mariadb = require("mariadb");
const { json } = require("body-parser");

// const { connection } = require("../app");
const routers = express.Router();
//POST
const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.Port || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.Password || "root",
  database: "nodeJs_app",
  allowPublicKeyRetrieval: true,
});

routers.post("/new", async (req, res) => {
  console.log("create new product");
  let product = req?.body;
  let conn;
  let result;
  try {
    let q = "INSERT INTO product (name,sku,discription,price) values(?,?,?,?)";
    let pdtarr = [
      product?.name,
      product?.sku,
      product?.discription,
      product?.price,
    ];
    conn = await pool.getConnection();

    result = await conn.query(q, pdtarr, (err, response) => {
      console.log("response", response);
      if (err) {
        res.status(404).json({ message: "product not added" });
      } else {
        res.status(201).json({ message: "successfull" });
        res.send(`get Product ${JSON.stringify(response)}`);
      }
    });
    res.send(`get Product ${JSON.stringify(result)}`);
  } catch (error) {
    console.log("error", error);
  } finally {
    if (conn) return conn.release();
  }
});

//GET ALL
routers.get("/read", async (req, res) => {
  console.log("read data");
  let q = "Select * FROM product";
  let conn;
  let result;
  try {
    conn = await pool.getConnection();

    result = await conn.query(q);
    if (!result) {
      res
        .status(500)
        .json({ success: false, message: "Product Retrieve failed" });
    } else {
      // res
      //   .status(200)
      //   .json({ success: true, message: "Product Retrieve Successfully" });
      res.send(`get Product ${JSON.stringify(result)}`);
    }
  } catch (error) {
    console.log("error", error);
  }
});
//GET DETAIL BY ID
routers.get("/detail/:id", async (req, res) => {
  const __id = req.params.id;
  console.log("get details ");
  let q = "SELECT * FROM product WHERE id = ?";
  let conn;
  let result;
  try {
    conn = await pool.getConnection();
    result = await conn.query(q, __id);
    if (!result) {
      res.status({ success: false, message: "failed get details" });
    } else {
      res
        .status(200) //.send(`get Product Details ${JSON.stringify(result)}`)
        .json({
          success: true,
          message: "Product details read Successfully",
          result: `get Product Details ${JSON.stringify(result)}`,
        });
    }
  } catch (error) {
    console.log("error", error);
  }
});

//update
routers.put("/put/:id", async (req, res) => {
  const __id = req?.params?.id;
  let { name, sku, discription, price } = req?.body;
  let conn;
  let result;
  try {
    conn = await pool.getConnection();

    let q = "UPDATE product SET name=?,sku=?,discription=?,price=? WHERE id= ?";
    const ptt = [name, sku, discription, price, __id];
    result = await conn.query(q, ptt, (err, result) => {
      if (!result) {
        res
          .status(404)
          .json({ success: false, message: "Product update failed" });
      } else {
        res
          .status(200)
          .json({ success: true, message: "Product updated Successfully" });
        res.send(result);
      }
    });
    res.send(`Update Product\n ${JSON.stringify(result)}`);
  } catch (error) {
    throw error;
  }
});
routers.delete("/delete/:id", async (req, res) => {
  const __id = req.params.id;
  let product = req.body;
  let q = "DELETE FROM product WHERE id=?";
  let conn;
  let result;
  try {
    conn = await pool.getConnection();

    result = await conn.query(q, __id);
    console.log("result", result);

    if (!result) {
      res
        .status(404)
        .json({ success: false, message: "Product delete failed" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Product deleted Successfully" });
      res.send(` Product deleted ${JSON.stringify(result)}`);
    }
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = routers;
