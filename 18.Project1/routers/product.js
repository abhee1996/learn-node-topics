const express = require("express");
const router = express.Router();
const db = require("../models");
const { Product } = require("../models/product");

// const Product = db.product;
// Product.
router.get("/read", async (req, res) => {
  const listOfPosts = await Product.findAll();
  res.json(listOfPosts);
});
router.get("/detail/:id", async (req, res) => {
  console.log("details");
  let __id = req.params.id;
  const getbyId = await Product.findByPk(__id);
  res.json(getbyId);
  // res.send(`get details`);
});

router.post("/new", async (req, res) => {
  const post = req.body;
  const result = await Product.create(post); //.create(post);
  res.json(result);
  res.send(`post new data`);
});
router.put("/put/:id", async (req, res) => {
  let __id = req.params.id;
  const result = await Product.update(req.body, { where: { id: __id } });
  res.json(result);
  res.send(`update new data`);
});
router.delete("/delete/:id", async (req, res) => {
  let __id = req.params.id;
  const result = await Product.destroy({ where: { id: __id } });
  res.json(result);
  res.send(`deleted data successfully`);
});
module.exports = router;
