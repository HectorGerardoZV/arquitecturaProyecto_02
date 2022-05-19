import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAlarms from "../../hooks/useAlarms";

import { useNavigate } from "react-router-dom";
import CloseModal from "../../img/closeModal.svg";

import "./NewAlarmPage.css";
const NewAlarmPage = () => {
  let navigate = useNavigate();
  const { checkAuth } = useAuth();
  const { queryAddNewAlarm } = useAlarms();
  const [alarm, setAlarm] = useState({
    type: "temp",
    valMax: -1,
    valMin: -1,
  });

  const handleOnChange = (e) => {
    setAlarm({
      ...alarm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await queryAddNewAlarm(alarm);
    if (added) {
      navigate("/admin/alarms");
    }
  };

  const navigateTo = () => {
    navigate("/admin/alarms");
  };

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/");
    }
  }, []);
  return (
    <div className="container newAlarmPage">
      <div className="informationSection">
        <div></div>
        <h1 className="titleSection">Agregar Alarma</h1>
        <div></div>
      </div>

      <div className="formArea">
        <form className="newAlarmForm" onSubmit={handleSubmit}>
          <fieldset>
            <div className="closeModal">
              <img src={CloseModal} alt="close modal" onClick={navigateTo} />
            </div>
            <div className="inputForm">
              <label htmlFor="type">Tipo de Alarma</label>
              <select name="type" id="type" onChange={handleOnChange}>
                <option value="temp">Temperatura</option>
                <option value="hum">Humedad</option>
              </select>
            </div>
            <div className="inputForm">
              <label htmlFor="">Valor Máximo</label>
              <input type="text" name="valMax" onChange={handleOnChange} />
            </div>
            <div className="inputForm">
              <label htmlFor="">Valor Mínimo</label>
              <input type="text" name="valMin" onChange={handleOnChange} />
            </div>

            <div className="inputSubmitArea">
              <input
                className="inputSubmit"
                type="submit"
                value={"Agregar Sensor"}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NewAlarmPage;
