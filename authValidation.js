const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, config.get("secretOrKey"));
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Authorization Failed!!!");
  }
};
