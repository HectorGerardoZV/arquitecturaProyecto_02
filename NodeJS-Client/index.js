const mongoose = require("mongoose");
const {recive} = require("./components/reciveRabbit");


//Connnecting with db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/invernadero",{useNewUrlParser: true});

recive()