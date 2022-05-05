const express = require("express");
const routerUser = express.Router();

//controllers
const usersCrud = require("../../controllers/UsersCRUD");
//functions
const { findUser } = usersCrud;

routerUser.post("/users", findUser);

module.exports = routerUser;
