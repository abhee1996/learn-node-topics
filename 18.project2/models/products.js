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
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, default: "" },
  imgs: [{ type: String }],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",

    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  isFeather: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  // shopId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Shop",

  //   required: true,
  // },
  countInStock: { type: Number, required: true, min: 0, max: 225 },
});
const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
