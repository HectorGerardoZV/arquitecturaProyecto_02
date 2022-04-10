const express = require("express");
const router = express.Router();
const sensorsCrud = require("../controller/SensorsCRUD");

router.get("/sensors", sensorsCrud.getAllSensors);
router.post("/sensors", sensorsCrud.newSensor);

module.exports = router;
