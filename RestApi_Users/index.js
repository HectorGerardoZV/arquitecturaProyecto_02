const express = require("express");
const router = require("./router/router");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({path: ".env"})

//Connnecting with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invernadero", {
  useNewUrlParser: true,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 1324;

app.use("/", router);
app.listen(port, () => {
  console.log("Server running in port " + port);
});
