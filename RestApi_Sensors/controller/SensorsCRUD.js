const Sensors = require("../schemas/Sensors");
const crypto = require("../helpers/crypto");
const {decrypt, encrypt} = crypto;

exports.getAllSensors = async (req, res) => {
  try {
    console.log();
    const sensors = await Sensors.find({});
    const sensorsEncrypted = encrypt(sensors);
    res.status(200).json(sensorsEncrypted);
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
  }
};

exports.newSensor = async (req, res) => {
  try {
    const body = req.body;
    const sensor = Sensors(body);
    await sensor.save();
    res.json({ msg: "Sensor created" });
  } catch (error) {
    res.json({ msg: "Sensor not created" });
  }
};
