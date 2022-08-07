const express = require("express");
const app = require("../src/app");
const mariadb = require("mariadb");
const { json } = require("body-parser");

// const { connection } = require("../app");
const routers = express.Router();

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.Port || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.Password || "root",
  database: "nodeJs_seque_app",
  allowPublicKeyRetrieval: true,
});

//POST

module.exports = routers;
