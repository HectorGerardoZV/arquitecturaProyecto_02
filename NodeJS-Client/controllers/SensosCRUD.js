const Sensos = require("../schemas/Sensos");

exports.addNew = async(senso)=>{
    try {
        const sensoItem = new Sensos(senso)
        await sensoItem.save(senso)
        console.log(senso)
    } catch (error) {
        console.log(error);
    }
}