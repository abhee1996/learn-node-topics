const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.port || 5000;
const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mariadb = require("mariadb");

//product modals / schema
const categoriesSchema = mongoose.Schema({
  // name: String,
  name: { type: String, required: true },
  icon: { type: String },
  color: { type: String },
  // countInStock: { type: Number, required: true },
});
const Category = mongoose.model("Category", categoriesSchema);
module.exports = { Category };
