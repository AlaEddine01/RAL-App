const mongoose = require("mongoose");
const config = require("config");

const mongoURI = config.get("mongoURI");

const connectDB = () => {
  mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("DB Connected");
  });
};

module.exports = connectDB;
