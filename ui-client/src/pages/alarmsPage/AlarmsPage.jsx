import "./AlarmsPage.css"
import ButtonAdd from "../../img/Vector.svg"
import CardList from "../../components/cardList/CardList"
import {useNavigate} from "react-router-dom"

const AlarmsPage = () => {
    const navigate=useNavigate()
    const goToNewAlarm=()=>{
        navigate("/admin/newAlarm")
    }
    return (
        <div className='container'>
            <div className="informationSection">
                <div></div>
                <h1 className="titleSection">Alarmas</h1>

                <div>
                    <button className="buttonAdd" onClick={goToNewAlarm}>
                        <img src={ButtonAdd} alt="" />
                    </button>
                </div>

            </div>

            <div className="container_allCards">
                <CardList 
                    alarmType={"temp"}
                />
                <CardList
                    alarmType={"hum"}
                />
            </div>

        </div>
    )
}

export default AlarmsPage