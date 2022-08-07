const express = require("express");
const app = require("../app");
const mariadb = require("mariadb");
const { json } = require("body-parser");

// const { connection } = require("../app");
const routers = express.Router();

const productController = require("../routers/product");

routers.post("/product", productController);
