const express = require("express");
const router = require("./router/router");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: ".env" });

//Connnecting with db
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/invernadero", {
mongoose.connect("mongodb://db:27017/invernadero", {
  useNewUrlParser: true,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 1324;
// const host = "localhost";
const host = "0.0.0.0";

app.use("/", router);
app.listen(port, host, () => {
  console.log("Server running in port " + port);
});
