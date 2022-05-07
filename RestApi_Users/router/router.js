const express = require("express");
const router = express.Router();

router.use(require("./routes/routerUser"));

module.exports = router;
