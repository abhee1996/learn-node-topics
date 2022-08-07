const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.port || 5000;
const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mariadb = require("mariadb");

//Orders modals / schema
const ordersSchema = mongoose.Schema({
  name: String,
  //   name: { type: String, required: true },
  img: String,
  countInStock: { type: Number, required: true },
});
const Orders = mongoose.model("Orders", ordersSchema);
// module.exports = {Orders};
