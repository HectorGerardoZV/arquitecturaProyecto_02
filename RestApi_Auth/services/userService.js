const axiosClient = require("../config/axiosClient");

const findUser = async(user)=>{
    try {
        const response = await axiosClient.post("/users/find",user);
        const {data} = response;
        if(!data){
            return null;
        }
        return data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
module.exports ={
    findUser
}