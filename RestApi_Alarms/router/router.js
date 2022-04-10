const express = require("express");
const router = express.Router();
const alarmsCrud = require("../controller/AlarmsCRUD");

router.get("/alarms", alarmsCrud.getAllSensors);
router.post("/alarms", alarmsCrud.newSensor);

module.exports = router;
