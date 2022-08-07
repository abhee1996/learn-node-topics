const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;
// const staticPath= path.join(__dirname, "../public");
// console.log("path.join.__dirname :", path.join(__dirname, "../public"));
// builtIn middleware
//we use tamplate Engine to use show dynamic content in out website
//template engine is also known as views Engine
//To set the views Engine we have to tell the app what views engine im using
app.set("view engine", "hbs");
// to use tamplate engine and render tamplate files
// we have to use a views directory by default, otherwise it would not be used.
//const viewsPath = path.join(__dirname, "../views");
// app.set("views",viewsPath)
//-> to change the directory name only way it set that directory path as view

const tamplatesPath = path.join(__dirname, "../tamplates/views");
const PartialsPath = path.join(__dirname, "../tamplates/partials");

//-> Register Partials
hbs.registerPartials(PartialsPath);
app.set("views", tamplatesPath);
app.get("/", function callback(req, res) {
  res.render("index", {
    name: "Muhammad Abdullah",
  });
});
app.get("/about", function callback(req, res) {
  res.render("blog", {
    name: "Muhammad Abdullah",
  });
});

app.get("/about/*", (req, res) => {
  // res.render("404");
  res.render("404", { errorcomment: "This about us page could not be found." });
});
app.get("*", (req, res) => {
  res.render("404");
  // res.render("404",{errorcomment});
});
app.listen(`${port}`, () => {
  console.log(`Fourth Express app at port ${port}`);
});
