const express = require("express");
const router = express.Router();
const Product = require("./productSchema");

// Get All Products
router.get("/get", (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
});

// Add new product
router.post("/addItem", (req, res) => {
  const { item, price } = req.body;
  Product.findOne({ item }).then((product) => {
    if (product) {
      res.status(400).send("Product Already Exist");
    } 
    else {
      let NewProduct = new Product({ item, price });
      NewProduct.save()
        .then((products) => res.send(products))
        .catch((err) => console.error(err));
    }
  });
});

//  Update Product By Id
router.put("/Update_Product/:_id", (req, res) => {
  const { _id } = req.params;
  const { item, price } = req.body;
  Product.findOneAndUpdate({ _id }, { $set: { item, price } })
    .then((product) => res.send("Product was updated"))
    .catch((err) => console.log(err));
});

//  Get Product By Id
router.get("/display_Product/:_id", (req, res) => {
  const { _id } = req.params;
  Product.findOne({ _id })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

//   Delete Product By Id
router.delete("/Delete_Product/:_id", (req, res) => {
  const { _id } = req.params;
  Product.findOneAndDelete({ _id: _id })
    .then((product) => res.send("article was deleted"))
    .catch((err) => console.log(err));
});

module.exports = router;
