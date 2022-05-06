const express = require("express");
const router = express.Router();

//Auth routes
router.use(require("./routes/authRouter"))



module.exports =  router;