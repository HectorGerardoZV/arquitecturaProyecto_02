import { useState, useEffect } from "react"


import "./AlarmsPage.css"
import ButtonAdd from "../../img/Vector.svg"
import CardList from "../../components/cardList/CardList"
import {useNavigate} from "react-router-dom"
import { clientAlamrs } from "../../config/axiosClient.js"


const AlarmsPage = () => {
    const navigate=useNavigate()

    const [alamrs, setAlamrs] = useState([])


    const queryAlarms = async()=>{
        try {
            const response= await clientAlamrs.get("/alarms");
            const {data} = response
            setAlamrs(data)
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        queryAlarms()

    },[])
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
                    alamrs={alamrs}
                />
                <CardList
                    alarmType={"hum"}
                    alamrs={alamrs}
                />
            </div>

        </div>
    )
}

export default AlarmsPage