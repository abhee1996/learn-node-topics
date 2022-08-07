const express = require("express");
const app = require("../app");
const mariadb = require("mariadb");
const { json } = require("body-parser");

// const { connection } = require("../app");
const routers = express.Router();

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.Port || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.Password || "root",
  database: "nodeJs_app",
  allowPublicKeyRetrieval: true,
});

//Register
routers.post("/register", async (req, res) => {
  console.log("create new user");
  let product = req?.body;
  let conn;
  let result;
  try {
    let q = "INSERT INTO user (name,username,password) values(?,?,?,)";
    let usrarr = [product?.name, product?.username, product?.password];
    conn = await pool.getConnection();

    result = await conn.query(q, usrarr, (err, response) => {
      console.log("response", response);
      if (err) {
        res.status(404).json({ message: "product not added" });
      } else {
        res.status(201).json({ message: "successfull" });
        res.send(`create User ${JSON.stringify(response)}`);
      }
    });
    res.send(`get Product ${JSON.stringify(result)}`);
  } catch (error) {
    console.log("error", error);
  } finally {
    if (conn) return conn.release();
  }
});

module.exports = routers;
