const express = require("express");
const router = express.Router();
const usersCRUD = require("../controllers/UsersCRUD");

router.use(require("./routes/routerUser"));

module.exports = router;
