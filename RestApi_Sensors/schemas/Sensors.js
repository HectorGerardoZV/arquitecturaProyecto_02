const mongoose = require("mongoose");

const Sensors = mongoose.Schema({
  type: {
    type: String,
  },
});

module.exports = mongoose.model("sensors", Sensors);
