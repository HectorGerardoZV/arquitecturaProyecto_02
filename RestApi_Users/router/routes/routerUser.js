const express = require("express");
const routerUser = express.Router();

//controllers
const usersCrud = require("../../controllers/UsersCRUD");
//functions
const { findUser,addNewUser,authenticateUser } = usersCrud;

routerUser.post("/users/login", authenticateUser);
routerUser.post("/users/find", findUser);
routerUser.post("/users", addNewUser);

module.exports = routerUser;
