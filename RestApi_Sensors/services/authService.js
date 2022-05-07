const axiosClient = require("../config/axiosClient");

exports.validateToken = async(req,res,next)=>{
    try {
        const {headers} = req;

        console.log(headers)
        
        next();
        
    } catch (error) {
        
    }
}