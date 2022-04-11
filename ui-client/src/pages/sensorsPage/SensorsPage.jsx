
import SensorCard from "../../components/sensorCard/SensorCard"
import ButtonAdd from "../../img/Vector.svg"




import "./SensorsPage.css"
const SensorsPage = () => {
  return (
    <section>
      <div className="informationSection">
        <div></div>
        <h1 className="titleSection">Sensores</h1>

        <div>
          <button className="buttonAdd">
            <img src={ButtonAdd} alt="" />
          </button>
        </div>

      </div>

      <section className="sesorsSection container">
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
        <SensorCard />
      </section>




    </section>
  )
}

export default SensorsPage