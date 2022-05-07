import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import "./NewAlarmPage.css"
const NewAlarmPage = () => {
    let navigate = useNavigate();
    const { checkAuth } = useAuth();


    useEffect(() => {
        if (!checkAuth()) {
            navigate("/")
        }
    }, [])
    return (
        <div className="container newAlarmPage">
            <div className="informationSection">
                <div></div>
                <h1 className="titleSection">Agregar Alarma</h1>
                <div>
                </div>
            </div>

            <div className="formArea">
                <form className="newAlarmForm">
                    <fieldset>
                        <div className="inputForm">
                            <label htmlFor="">Tipo de Alarma</label>
                            <select name="" id="">
                                <option value="">--Seleccione--</option>
                                <option value="S1">S1</option>
                                <option value="S2">S2</option>
                                <option value="S3">S3</option>
                            </select>
                        </div>
                        <div className="inputForm">
                            <label htmlFor="">Valor Máximo</label>
                            <input type="text" />
                        </div>
                        <div className="inputForm">
                            <label htmlFor="">Valor Mínimo</label>
                            <input type="text" />
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
    )
}

export default NewAlarmPage