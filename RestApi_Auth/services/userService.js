const axiosClient = require("../config/axiosClient");
const crypto = require("../helpers/crypto")
const {decrypt} = crypto;
const findUser = async(user)=>{
    try {
        const response = await axiosClient.post("/users/find",user);
        const {data} = response;
        const userInfo = decrypt(data);
        if(!user){
            return null;
        }
        return userInfo;
    } catch (error) {
        console.log(error)
        return null;
    }
}
module.exports ={
    findUser
}