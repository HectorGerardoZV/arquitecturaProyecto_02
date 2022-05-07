const express = require("express");
const authRouter = express.Router();

//Controller 
const loginController = require("../../controllers/loginController");

//Middleware
const authMiddleware = require("../../middleware/authUser");


//Functions
const {login} = loginController;
const {validateAuth} = authMiddleware;

authRouter.post("/auth", login)
authRouter.get("/auth", validateAuth)


module.exports = authRouter;