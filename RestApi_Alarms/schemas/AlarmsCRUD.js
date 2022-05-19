const mongoose = require("mongoose");

const Alarms = mongoose.Schema({
  idSensor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sensors",
  },
  type: {
    type: String,
  },
  valMax: {
    type: mongoose.Types.Decimal128,
  },
  valMin: {
    type: mongoose.Types.Decimal128,
  },
});

module.exports = mongoose.model("alarms", Alarms);
