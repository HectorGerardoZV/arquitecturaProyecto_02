const jwt = require("jsonwebtoken");

exports.validateAuth = (req,res)=>{
    try {
        let token = "";
        const {authorization} = req.headers;
        token = authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.SECRET);
        if(!decode){
            return res.status(404).json({access:false});
        }
        res.status(200).json({access:true});
    } catch (error) {
        console.log(error)
        res.status(500).json({access:false});
    }
}