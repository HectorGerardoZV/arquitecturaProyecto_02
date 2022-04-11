import AlarmCard from "../alarmCard/AlarmCard"
import Temp from "../../img/temperatura.svg"
import Hum from "../../img/humedad.svg"

const CardList = (props) => {
    const { alarmType, alamrs } = props
    let alamrsData = []
    let type = ""

    const datos = {
        maxValue: "",
        minValue: ""
    }

    let img = null
    if (alarmType == "temp") {
        img = Temp
        datos.maxValue = "Temp máxima"
        datos.minValue = "Temp mínima"
        alamrsData = alamrs.filter(alarmItem => alarmItem.type == "Temp")
        type = "temp"
    } else if (alarmType == "hum") {
        img = Hum
        datos.maxValue = "Hum máxima"
        datos.minValue = "Hum mínima"
        alamrsData = alamrs.filter(alarmItem => alarmItem.type == "Hum")
        type = "hum"
    }
    console.log(img);
    return (
        <div className="container_cardsType">

            {
                alamrsData.map(alarmItem => (
                    <AlarmCard
                        key={alarmItem._id}
                        img={img}
                        datos={datos}
                        alarmItem={alarmItem}
                        type = {type}
                    />
                ))
            }
        </div>
    )
}

export default CardList