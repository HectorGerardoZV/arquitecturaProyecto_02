const mongoose = require("mongoose");

const Sensos = new mongoose.Schema({
    humedad: {
        type: String
    },
    calor:{
        type: String
    }
});

module.exports = mongoose.model("sensos", Sensos);