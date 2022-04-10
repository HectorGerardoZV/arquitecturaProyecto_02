const express= require("express")
const router=express.Router()
const sensosCrud=require("../controllers/SensosCRUD")

router.get("/sensos",sensosCrud.getAllSensos)

module.exports=router
