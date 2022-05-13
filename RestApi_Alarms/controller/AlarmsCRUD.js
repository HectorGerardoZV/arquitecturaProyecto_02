const Alarms = require("../schemas/AlarmsCRUD");
const crypto = require("../helpers/crypto");
const {encrypt} = crypto;

exports.getAllAlarms = async (req, res) => {
  try {
    const alarms = await Alarms.find();
    const alarmsEncrypted = encrypt(alarms);
    res.status(200).json(alarmsEncrypted);
  } catch (error) {
    res.status(500).json({msg: "Error while querying alarms"});
  }
};

exports.newAlarm = async (req, res) => {
  try {
    const body = req.body;
    const alarm = Alarms(body);
    await alarm.save();
    res.json({ msg: "Alarm created" });
  } catch (error) {
    res.json({ msg: "Alarm not created" });
  }
};
