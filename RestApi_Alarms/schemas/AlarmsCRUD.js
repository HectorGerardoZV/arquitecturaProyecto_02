const mongoose = require("mongoose");

const Alarms = mongoose.Schema({
  idSensor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sensors",
  },
  tmpMax: {
    type: mongoose.Schema.Types.Number,
  },
  tmpMin: {
    type: mongoose.Schema.Types.Number,
  },
  humMax: {
    type: mongoose.Schema.Types.Number,
  },
  humMin: {
    type: mongoose.Schema.Types.Number,
  },
});

module.exports = mongoose.model("alarms", Alarms);
