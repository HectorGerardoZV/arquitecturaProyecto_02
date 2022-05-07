import { useEffect } from "react"


import "./AlarmsPage.css"
import ButtonAdd from "../../img/Vector.svg"
import CardList from "../../components/cardList/CardList"

import { useNavigate } from "react-router-dom"

import useAuth from "../../hooks/useAuth"
import useAlarms from "../../hooks/useAlarms"



const AlarmsPage = () => {
    const navigate = useNavigate();
    const { checkAuth } = useAuth();
    const {alarms} = useAlarms();
   
    useEffect(() => {
        if (!checkAuth()) {
            navigate("/")
        }
    }, [])

    
    const goToNewAlarm = () => {
        navigate("/admin/newAlarm")
    }
    return (
        <div className='alarmsPage'>
            <div className="informationSection">
                <div></div>
                <h1 className="titleSection">Alarmas</h1>

                <div>
                    <button className="buttonAdd" onClick={goToNewAlarm}>
                        <img src={ButtonAdd} alt="" />
                    </button>
                </div>

            </div>

            <div className="container_allCards container">
                <CardList
                    alarmType={"temp"}
                    alarms={alarms}
                />
                <CardList
                    alarmType={"hum"}
                    alarms={alarms}
                />
            </div>

        </div>
    )
}

export default AlarmsPage