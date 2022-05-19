import "./AlarmCard.css";

const AlarmCard = (props) => {
  const { img, datos, type, alarmItem } = props;
  const valuesAlarm = {
    valueMax: "",
    valueMin: "",
  };
  if (type == "temp") {
    valuesAlarm.valueMax = alarmItem.valMax.$numberDecimal;
    valuesAlarm.valueMin = alarmItem.valMin.$numberDecimal;
  } else {
    valuesAlarm.valueMax = alarmItem.valMax.$numberDecimal;
    valuesAlarm.valueMin = alarmItem.valMin.$numberDecimal;
  }
  return (
    <div className="alarmCard">
      <div className="alarmCard_area">
        <p>Tipo</p>
        <p>{type == "temp" ? "Temperatura Maxima" : "Humedad Maxina"}</p>
        <p>{type == "temp" ? "Temperatura Minima" : "Humedad Minima"}</p>
      </div>
      <div className="alarmCard_area">
        <div className="alarmCard_img">
          <img src={img} alt="Icono" />
        </div>
        <p>{valuesAlarm.valueMax}</p>
        <p>{valuesAlarm.valueMin}</p>
      </div>
    </div>
  );
};
export default AlarmCard;
