const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({path:".env"});
const router= require("./router/router");


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());







app.use("/", router);


const PORT = process.env.PORT || 2345;
const HOST = process.env.HOST || "http://localhost:"
app.listen(PORT,HOST ,()=>{
    console.log(`Server running on ${HOST}:${PORT}`);
})
