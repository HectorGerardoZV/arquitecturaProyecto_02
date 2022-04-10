const mongoose = require("mongoose");

const Sensos = mongoose.Schema({
  idSensor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sensors",
  },
  humedad: {
    type: String,
  },
  calor: {
    type: String,
  },
});

module.exports = mongoose.model("sensos", Sensos);
