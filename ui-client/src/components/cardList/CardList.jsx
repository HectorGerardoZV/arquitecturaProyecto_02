import AlarmCard from "../alarmCard/AlarmCard"
import Temp from "../../img/temperatura.svg"
import Hum from "../../img/humedad.svg"

const CardList = (props) => {
    const {alarmType } = props
    const datos={
        maxValue:"",
        minValue:""
    }
    
    let img = null
    if (alarmType == "temp") {
        img = Temp
        datos.maxValue="Temp máxima"
        datos.minValue="Temp mínima"
    } else if (alarmType == "hum") {
        img = Hum
        datos.maxValue="Hum máxima"
        datos.minValue="Hum mínima"
    }
    console.log(img);
    return (
        <div className="container_cardsType">
            <AlarmCard
                img={img}
                datos={datos}
            />
            <AlarmCard
                img={img}
                datos={datos}
            />
            <AlarmCard
                img={img}
                datos={datos}
            />
            <AlarmCard
                img={img}
                datos={datos}
            />
            <AlarmCard
                img={img}
                datos={datos}
            />
            <AlarmCard
                img={img}
                datos={datos}
            />
        </div>
    )
}

export default CardList