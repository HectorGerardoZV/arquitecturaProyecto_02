import "./AlarmCard.css"

const AlarmCard = (props) => {
    const { img,datos,type,alarmItem } = props
    
    const valuesAlarm = {
        maxValue: "",
        minValue: ""
    }

    if(type=="temp"){
        valuesAlarm.maxValue = alarmItem.tmpMax
        valuesAlarm.minValue = alarmItem.tmpMin
    }else {
        valuesAlarm.maxValue = alarmItem.humMax
        valuesAlarm.minValue = alarmItem.humMin
    }
    return (
        <div className="alarmCard">
            <div className="alarmCard_area">
                <p>Tipo</p>
                <p>{datos.maxValue}</p>
                <p>{datos.minValue}</p>
            </div>
            <div className="alarmCard_area">
                <div className="alarmCard_img">
                    <img src={img} alt="Icono" />
                </div>
                <p>{valuesAlarm.maxValue}</p>
                <p>{valuesAlarm.minValue}</p>
            </div>
        </div>
    )
}

export default AlarmCard