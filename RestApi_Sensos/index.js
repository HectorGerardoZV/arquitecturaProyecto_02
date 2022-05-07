const express= require("express")
const router = require("./router/router")
const mongoose = require("mongoose")
const cors= require("cors")
require("dotenv").config({path: ".env"});

//Connnecting with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invernadero",{useNewUrlParser: true});

const app = express()
app.use(cors())
const port=1234


app.use("/",router)
app.listen(port,()=>{
    console.log("Server running in port "+port);

})