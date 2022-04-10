const mongoose = require("mongoose");

const Sensors = mongoose.Schema({
  brand: {
    type: String,
  },
});

module.exports = mongoose.model("sensors", Sensors);
