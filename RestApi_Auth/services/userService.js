const axiosClient = require("../config/axiosClient");

const findUser = async(user)=>{
    try {
        const response = await axiosClient.get("/users");
        const {data} = response;
        return data;
    } catch (error) {
        
    }
}


module.exports ={
    findUser
}