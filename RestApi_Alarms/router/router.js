const express = require("express");
const router = express.Router();
const alarmsCrud = require("../controller/AlarmsCRUD");

router.get("/alarms", alarmsCrud.getAllAlarms);
router.post("/alarms", alarmsCrud.newAlarm);

module.exports = router;
