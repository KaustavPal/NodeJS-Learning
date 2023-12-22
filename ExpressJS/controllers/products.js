const Product = require("../models/product");

const path = require("path");

const rootDir = require("../util/path");

exports.getAddProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(product);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    console.log(products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
  });
};
