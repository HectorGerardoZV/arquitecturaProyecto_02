const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/router");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({path: ".env"});

//Connnecting with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invernadero", {
  useNewUrlParser: true,
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const port = 4321;

app.use("/", router);
app.listen(port, () => {
  console.log("Server running in port " + port);
});
