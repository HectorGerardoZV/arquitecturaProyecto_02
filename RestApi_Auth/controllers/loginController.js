const userService = require("../services/userService");
const {findUser} = userService;
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{
    try {
        const {body}= req;


        const info = await findUser(body);

        if(!info){
            return res.status(404).json({msg: "Access denied"});
        }
        if(info.msg==="Invalid credentials"){
            return res.status(404).json({msg: info.msg});
        }
        const token = jwt.sign(info, process.env.SECRET, {expiresIn: "1d"});
        const user = {
            ...info,
            token
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
