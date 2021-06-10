const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://admin:HKgi4vIMmKLbNKKz@cluster0.bkogy.mongodb.net/productsDB?retryWrites=true&w=majority";

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
