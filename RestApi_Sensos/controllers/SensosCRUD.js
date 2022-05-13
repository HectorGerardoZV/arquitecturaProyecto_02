const Sensos=require("../schemas/Sensos")
const crypto = require("../helpers/crypto");

const {encrypt} = crypto;

exports.getAllSensos=async(req,res)=>{
    try {
        const sensos=await Sensos.find({})
        const sensosEncrypted = encrypt(sensos);
        res.status(200).json(sensosEncrypted)
    } catch (error) {
        
    }
}