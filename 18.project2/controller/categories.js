const express = require("express");
const app = express();
const api = process.env.API_URL;
const { Category } = require("../models/categories");
const { route } = require("./products");
const routers = express.Router();

//GET ALL
routers.get(`/getall`, async (req, res) => {
  const productlist = await Category.find();
  if (!productlist) {
    res.status(500).json({ success: false });
  } else {
    res.status(201);
  }
  res.send(productlist);
});
//getDetails By id

routers.get(`/get/:id`, async (req, res) => {
  let getDetails = await Category.findById(req.params.id);
  if (!getDetails) {
    res.status(404).json({ success: false, message: "get details failed" });
  } else {
    res.status(201).send(getDetails);
    //   .json({ success: true, message: "get details successfully" });
  }
});
//POST
routers.post(`/new`, async (req, res) => {
  const reqbody = req.body;
  const categorydata = new Category({
    name: reqbody.name,
    icon: reqbody.icon,
    color: reqbody.color,
  });
  let cat = await categorydata.save();

  if (!cat) {
    res.status(404).send("error creating category");
  }
  res.send(cat);
});
//UPDATE
routers.put(`/update/:id`, async (req, res) => {
  let uptcat = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },
    { new: true }
  );
  if (!uptcat) {
    res.status(404).send("error updating category");
  }
  res.send(uptcat);
});
routers.delete(`/delete/:id`, async (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((cate) => {
      if (cate) {
        return res
          .status(201)
          .json({ success: true, message: "category delete successfully" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "deletion failed" });
      }
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ success: false, message: "deletion failed", error: err });
    });
});
module.exports = routers;
