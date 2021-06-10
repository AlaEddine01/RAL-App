//import dependencies
const express = require("express");
const cors = require("cors");
const connectDB = require("./connectDB");

//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//db config
connectDB();

//api routes
app.use("/", require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("front_products/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server listening
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
