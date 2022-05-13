const crypto = require("crypto-js");
const secret = "82783zap"

const encrypt = (info)=>{
    try {
        const encrypted = crypto.AES.encrypt(JSON.stringify(info), secret).toString();
        return encrypted;
    } catch (error) {
        console.log(error);
    }
    return null;
}
const decrypt = (info)=>{
    try {
        const bytes = crypto.AES.decrypt(info, secret);
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