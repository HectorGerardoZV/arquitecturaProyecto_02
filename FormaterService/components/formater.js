exports.formater =(senso)=>{
    let sensoFormat = {}
    if(senso.tipo=="S1"){
        sensoFormat.id = senso.id
        sensoFormat.humedad = senso.senso.humedad
        sensoFormat.calor = senso.senso.temperaturaC
    }
    else if(senso.tipo=="S2"){
        sensoFormat.id = senso.id
        sensoFormat.humedad = senso.senso.humedad
        sensoFormat.calor = senso.senso.celsius
    }

    return sensoFormat
}