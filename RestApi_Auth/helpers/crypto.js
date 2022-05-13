const crypto = require("crypto-js");

const encrypt = (info)=>{
    try {
        const encrypted = crypto.AES.encrypt(JSON.stringify(info), process.env.SECRET_KEY).toString();
        return encrypted;
    } catch (error) {
        console.log(error);
    }
    return null;
}
const decrypt = (info)=>{
    try {
        const bytes = crypto.AES.decrypt(info, process.env.SECRET_KEY);
        const decrypted = JSON.parse(bytes.toString(crypto.enc.Utf8))
        return decrypted;
    } catch (error) {
        console.log(error);
    }
    return null;
}


module.exports = {
    encrypt, 
    decrypt
}