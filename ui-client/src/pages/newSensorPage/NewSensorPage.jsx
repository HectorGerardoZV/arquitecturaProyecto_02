

import "./NewSensorPage.css"
const NewSensorPage = () => {
    return ( 
        <div className="container">
            <div className="informationSection">
                <div></div>
                <h1 className="titleSection">Agregando Sensor</h1>
                <div></div>

            </div>


            <div className="newSensorFormArea">
                <form className="newSensorForm">
                    <fieldset>
                        <div className="inputForm">
                            <label htmlFor="">Marca</label>
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

export default NewSensorPage