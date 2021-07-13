const express = require("express");
const router = express.Router();
const Product = require("./productSchema");
const User = require("./userSchema");
const jwt = require("jsonwebtoken");
const config = require("config");
const passport = require("passport");

// Route Authorization
const checkAuth = require("./authValidation");

// Get All Products
router.get("/get", checkAuth, (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
});

// Add new product
router.post("/addItem", checkAuth, (req, res) => {
  const { item, price } = req.body;
  Product.findOne({ item }).then((product) => {
    if (product) {
      res.status(400).send("Le produit existe déjà");
    } else {
      let NewProduct = new Product({ item, price });
      NewProduct.save()
        .then((products) => res.send(products))
        .catch((err) => console.error(err));
    }
  });
});

//  Update Product By Id
router.put("/Update_Product/:_id", checkAuth, (req, res) => {
  const { _id } = req.params;
  const { item, price } = req.body;
  Product.findOneAndUpdate({ _id }, { $set: { item, price } })
    .then((product) => res.send("Product was updated"))
    .catch((err) => console.log(err));
});

//  Get Product By Id
router.get("/display_Product/:_id", checkAuth, (req, res) => {
  const { _id } = req.params;
  Product.findOne({ _id })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

//   Delete Product By Id
router.delete("/Delete_Product/:_id", checkAuth, (req, res) => {
  const { _id } = req.params;
  Product.findOneAndDelete({ _id: _id })
    .then((product) => res.send("article was deleted"))
    .catch((err) => console.log(err));
});

// Add new User
router.post("/newUser", (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  newUser
    .save()
    .then((newUser) => res.json(newUser))
    .catch((err) => console.log(err));
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) res.status(404).send(`Pas d'utilisateur avec le nom "${email}"`);
      else {
        if (user.password === password) {
          const payload = { id: user._id, email: user.email };
          jwt.sign(payload, config.get("secretOrKey"), { expiresIn: "8h" }, (err, token) => {
            if (err) res.sendStatus(500);
            else res.json({ token: `Bearer ${token}` });
          });
        } else {
          res.status(400).send("Mot de passe incorrect");
        }
      }
    })
    .catch((err) => console.log(err));
});

// Validate token
// router.delete(
//   "/validateToken",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.send(req.user);
//   }
// );

router.get("/validateToken", checkAuth, (req, res) => {
  res.send("User is Authenticated");
});

// router.post(
//   "/validateToken",
//   passport.authenticate("jwt", { session: false }),
//   (error, user, info) => {
//     console.log("error = ", error, " info = ", info, "  user = ", user);
//   }
// );

module.exports = router;
