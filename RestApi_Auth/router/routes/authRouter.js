const express = require("express");
const authRouter = express.Router();

//Controller 
const loginController = require("../../controllers/loginController");

//Functions
const {login} = loginController;

authRouter.post("/auth/login", login)


module.exports = authRouter;