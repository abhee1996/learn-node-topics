const express = require("express");
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");
const app = express();
const port = 8000;
// const staticPath= path.join(__dirname, "../public");
// console.log("path.join.__dirname :", path.join(__dirname, "../public"));

app.set("view engine", "hbs");

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

app.get("/check-weather", function callback(req, res) {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${`Lahore`}&appid=1e96e81f766873da2c82ca84982c36e8`
    // `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=1e96e81f766873da2c82ca84982c36e8`
  )
    .on("data", (chunk) => {
      const objectData = JSON.parse(chunk);
      const arrData = [objectData];
      const cityTemp = `city name is ${arrData[0].name} and temprature is ${arrData[0].main.temp}`;

      res.render("weather", { realdata: cityTemp });
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
    });
});
app.get("/about/*", (req, res) => {
  res.render("404", { errorcomment: "This about us page could not be found." });
});
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(`${port}`, () => {
  console.log(`Fifth Express app at port ${port}`);
});
