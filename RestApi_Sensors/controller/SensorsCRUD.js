const Sensors = require("../schemas/Sensors");

exports.getAllSensors = async (req, res) => {
  try {
    const sensors = await Sensors.find();
    res.json(sensors);
  } catch (error) {}
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
