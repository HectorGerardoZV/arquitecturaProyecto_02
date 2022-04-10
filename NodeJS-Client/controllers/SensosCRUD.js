const Sensos = require("../schemas/Sensos");

exports.addNew = async(senso)=>{
    try {
        const obj={
            idSensor:senso.id,
            humedad:senso.humedad,
            calor:senso.calor
        }
        const sensoItem = new Sensos(obj)
        await sensoItem.save(obj)
        console.log(obj)
    } catch (error) {
        console.log(error);
    }
}