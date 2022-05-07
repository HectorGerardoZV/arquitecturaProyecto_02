const express= require("express")
const router=express.Router()
const sensosCrud=require("../controllers/SensosCRUD")

//Services
const autService = require("../services/autService");

//functions
const {getAllSensos} = sensosCrud;
const {validateToken} = autService;


router.get("/sensos/:token",validateToken,getAllSensos)

module.exports=router
