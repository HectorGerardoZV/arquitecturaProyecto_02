const axios = require("axios");

exports.validateToken = async(req,res,next)=>{
    try {
        let {token} = req.params;
        token = `Bearer ${token}`
        const url = process.env.URL_API_AUTH+"/auth"
        const options ={
            headers:{
                Authorization: token
            }
        }
        const response = await axios.get(url,options);
        const {data} = response;
        if(!data.access){
            return res.status(401).json({msg: "Access denied"});
        }
        next();
    } catch (error) {
        return res.status(500).json({msg: "Error while validating credentials"})
    }
}