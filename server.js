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
app.use("/",require('./routes'))

//server listening
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
