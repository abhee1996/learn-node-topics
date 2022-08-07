const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.port || 5000;
const api = process.env.API_URL;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const mariadb = require("mariadb");

//USERS modals / schema
const usersSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  created_date: Date.now,
});
const Users = mongoose.model("Users", usersSchema);
module.exports = { Users };
