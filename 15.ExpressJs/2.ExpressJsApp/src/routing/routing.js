const express = require("express");
const app = express();

app.get("/", function callback(req, res) {
  console.log(req);
  console.log(res);

  res.send("Welcome to Express - Js");
});
//routing
app.get("/about", (req, res) => {
  res.send("This is about of Express - Js");
});
app.get("/contact", (req, res) => {
  //send html data
  res.send("<h1>contact us for Express - Js</h1>");
});
app.get("/temprature", (req, res) => {
  //send json data
  const jsonData = [
    {
      id: 1,
      name: "abdullah",
      city: "Lahore",
      country: "PK",
    },
    {
      id: 2,
      name: "abdullah",
      city: "Lahore",
      country: "PK",
    },
    {
      id: 3,
      name: "abdullah",
      city: "Lahore",
      country: "PK",
    },
  ];
  res.status(200).json(undefined);
  //res.send() and res.json() both are identical when an object and array is passed
  //res.json() will also convert non-objects like "null" and "undefined",which are not valid json.
});
app.listen(8000, () => {
  console.log("first routing Express app at port 8000");
});
