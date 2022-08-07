const express = require("express");
const app = express();
const api = process.env.API_URL;
const { User } = require("../models/user");
const routers = express.Router();

//GET ALL
routers.get(`/getuser`, async (req, res) => {
  const userList = await User.find();
  if (!userList) {
    res.status(500).json({ success: false });
  } else {
    res.status(201);
  }
  res.send(userList);
});
//POST
routers.post(`/new`, (req, res) => {
  const reqbody = req.body;
  const users = new User({
    firstname: reqbody.firstname,
    lastname: reqbody.lastname,
    age: reqbody.age,
  });
  users
    .save()
    .then((re) => {
      res.status(201).json(re);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  res.send(reqbody);
});

module.exports = routers;
