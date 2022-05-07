import {useEffect } from "react"
import { useNavigate } from "react-router-dom"

//Components
import SensorCard from "../../components/sensorCard/SensorCard"
import ButtonAdd from "../../img/Vector.svg"

//Hooks
import useAuth from "../../hooks/useAuth.jsx"
import useSensors from "../../hooks/useSensors"

import "./SensorsPage.css"
const SensorsPage = () => {
  let navigate = useNavigate()
  const { checkAuth } = useAuth();
  const {sensors} = useSensors();

  useEffect(()=>{
    if(!checkAuth()){
      navigate("/")
    }
  },[])

  const goToNewSensor = () => {
    navigate("/admin/newSensor")
  }
  return (
    <section className="sensorsPage">
      <div className="informationSection">
        <div></div>
        <h1 className="titleSection">Sensores</h1>
        <div>
          <button className="buttonAdd"
            onClick={goToNewSensor}
          >
            <img src={ButtonAdd} alt="" />
          </button>
        </div>
      </div>
      <section className="sesorsSection container">
        {
          sensors.map(sensor => (
            <SensorCard
              key={sensor._id}
              sensor={sensor}
            />
          ))
        }
      </section>
    </section>
  )
}
export default SensorsPage