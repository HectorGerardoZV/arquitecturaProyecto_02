const Sensos=require("../schemas/Sensos")

exports.getAllSensos=async(req,res)=>{
    try {
        const sensos=await Sensos.find({})
        res.status(200).json(sensos)
    } catch (error) {
        
    }
}