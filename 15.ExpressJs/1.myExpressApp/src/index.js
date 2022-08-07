const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const staticPath = path.join(__dirname, "../public");
// console.log("path.join.__dirname :", path.join(__dirname, "../public"));
// console.log("__dirname", __dirname);
// builtIn middleware
app.use(express.static(staticPath));

app.get("/", function callback(req, res) {
  res.send("welcome to ExpressJs App");
});
const atuStaticPath = path.join(__dirname, "../public/atu.html");
app.use(express.static(atuStaticPath));

app.get("/atu", function callback(req, res) {
  res.send("atu.html");
});

app.listen(`${port}`, () => {
  console.log(`first Express app at port ${port}`);
});
