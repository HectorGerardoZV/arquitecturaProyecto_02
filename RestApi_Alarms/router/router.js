const express = require("express");
const router = express.Router();
const alarmsCrud = require("../controller/AlarmsCRUD");

//Services
const authService = require("../services/authService");

//Functions
const {getAllAlarms,newAlarm} = alarmsCrud;
const {validateToken} = authService;


router.get("/alarms/:token",validateToken, getAllAlarms);
router.post("/alarms", newAlarm);

module.exports = router;
