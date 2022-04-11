import "./AlarmCard.css"

const AlarmCard = (props) => {
    const { img,datos } = props
    
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
                <p>45</p>
                <p>45</p>
            </div>
        </div>
    )
}

export default AlarmCard