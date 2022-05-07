const express = require("express");
const router = express.Router();
//Controller
const sensorsCrud = require("../controller/SensorsCRUD");

//Services
const authService = require("../services/authService");

//Functions
const {getAllSensors,newSensor} = sensorsCrud;
const {validateToken}= authService;



router.get("/sensors", validateToken,getAllSensors);
router.post("/sensors", newSensor);

module.exports = router;
