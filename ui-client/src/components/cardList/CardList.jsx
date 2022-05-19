import AlarmCard from "../alarmCard/AlarmCard";
import Temp from "../../img/temperatura.svg";
import Hum from "../../img/humedad.svg";

import "./CardList.css";
const CardList = (props) => {
  const { alarmType, alarms } = props;
  let alamrsData = [];
  let type = "";

  const datos = {
    maxValue: "",
    minValue: "",
  };

  let img = null;
  if (alarmType == "temp") {
    img = Temp;
    datos.maxValue = "Temp máxima";
    datos.minValue = "Temp mínima";
    alamrsData = alarms.filter((alarmItem) => alarmItem.type == "temp");
    type = "temp";
  } else if (alarmType == "hum") {
    img = Hum;
    datos.maxValue = "Hum máxima";
    datos.minValue = "Hum mínima";
    alamrsData = alarms.filter((alarmItem) => alarmItem.type == "hum");
    type = "hum";
  }
  return (
    <div className="container_cardsType scrool-cardType">
      {alamrsData.map((alarmItem) => (
        <AlarmCard
          key={alarmItem._id}
          img={img}
          datos={datos}
          alarmItem={alarmItem}
          type={type}
        />
      ))}
    </div>
  );
};

export default CardList;
