
import { useState, useEffect } from "react"
import { clientSensors } from "../../config/axiosClient.js"
import { useNavigate } from "react-router-dom"
import SensorCard from "../../components/sensorCard/SensorCard"
import ButtonAdd from "../../img/Vector.svg"
import useAuth from "../../hooks/useAuth.jsx"



import "./SensorsPage.css"
const SensorsPage = () => {

  let navigate = useNavigate()
  const [sensors, setSensors] = useState([])
  const { checkAuth } = useAuth();
  const querySensors = async () => {
    try {
      const response = await clientSensors.get("/sensors");
      const { data } = response;
      setSensors(data)
    } catch (error) {

    }
  }

  useEffect(()=>{
    if(!checkAuth()){
      navigate("/")
    }
  },[])

  useEffect(() => {
    querySensors()
  }, [])

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