const {decrypt} = require("../helpers/crypto");


exports.formater =(senso)=>{
    const sensoDecrypted = decrypt(senso);
    let sensoFormat = {}
    if(sensoDecrypted.tipo=="S1"){
        sensoFormat.id = sensoDecrypted.id
        sensoFormat.humedad = sensoDecrypted.senso.humedad
        sensoFormat.calor = sensoDecrypted.senso.temperaturaC
    }
    else if(sensoDecrypted.tipo=="S2"){
        sensoFormat.id = sensoDecrypted.id
        sensoFormat.humedad = sensoDecrypted.senso.humedad
        sensoFormat.calor = sensoDecrypted.senso.celsius
    }

    return sensoFormat
}