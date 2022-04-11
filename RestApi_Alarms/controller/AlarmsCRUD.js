const Alarms = require("../schemas/AlarmsCRUD");

exports.getAllAlarms = async (req, res) => {
  try {
    const alarms = await Alarms.find();
    res.json(alarms);
  } catch (error) {}
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
