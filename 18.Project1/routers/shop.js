const express = require("express");
const { where } = require("sequelize/types");
const router = express.Router();
const db = require("../models");
const { Shop } = require("../models/shop");

// const Shop = db.Shop;
// Shop.
router.get("/read", async (req, res) => {
  const listOfPosts = await Shop.findAll();
  res.json(listOfPosts);
});
router.get("/detail/:id", async (req, res) => {
  console.log("details");
  let __id = req.params.id;
  const getbyId = await Shop.findByPk(__id);
  res.json(getbyId);
  // res.send(`get details`);
});

router.post("/new", async (req, res) => {
  const post = req.body;
  const result = await Shop.create(post); //.create(post);
  res.json(result);
  res.send(`post new data`);
});
router.put("/put/:id", async (req, res) => {
  let __id = req.params.id;
  const result = await Shop.update(
    { sku: " good tomatos" },
    { where: { id: __id } }
  );
  res.json(result);
  res.send(`update new data`);
});
module.exports = router;
