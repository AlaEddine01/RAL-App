const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = Product = mongoose.model("product", productSchema);