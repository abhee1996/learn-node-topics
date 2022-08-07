const express = require("express");
const { Category } = require("../models/categories");
const app = express();
const api = process.env.API_URL;
const { Product } = require("../models/products");
const routers = express.Router();

//GET ALL
routers.get(`/getall`, async (req, res) => {
  const productlist = await Product.find();
  if (!productlist) {
    res.status(500).json({ success: false });
  } else {
    res.status(201);
  }
  res.send(productlist);
});
//POST
routers.post(`/create`, async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(404).send("Invalid category");
  const reqbody = req.body;
  const products = new Product({
    name: reqbody.name,
    img: reqbody.img,
    description: reqbody.description,
    countInStock: reqbody.countInStock,
    imgs: reqbody.imgs,
    brand: reqbody.brand,
    price: reqbody.price,
    category: reqbody.category,
    rating: reqbody.rating,
    numReviews: reqbody.numReviews,
    isFeatured: reqbody.isFeatured,
    // shopId: reqbody.shopId,
  });
  let newProduct = await products.save();
  if (!newProduct) {
    res.send(newProduct);

    return res.status(404).json(re);
  } else {
    return res.status(200).json({ success: true });
  }
});

module.exports = routers;
