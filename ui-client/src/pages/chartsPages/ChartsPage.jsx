import { useState, useEffect } from "react"
import { clientSensos } from "../../config/axiosClient.js"
import "./ChartsPage.css"
const ChartsPage = () => {
  const [sensos, setSensos] = useState([])

  const querySensos = async () => {
    try {
      const response = await clientSensos.get("/sensos")
      const { data } = response;

      setSensos(data)

    } catch (error) {

    }
  }

  useEffect(() => {
    querySensos()
  }, [])

  return (
    <>
      <div className="informationSection">
        <div></div>
        <h1 className="titleSection">Sensos</h1>

        <div> </div>

      </div>
      <section className="sensosInfo container">


        {
          sensos.map(senso => (
            <div className="sensoStyle" key={senso._id}>
              <p>Humedad: {senso.humedad}</p>
              <p>Temperatura: {senso.calor}</p>
            </div>
          ))
        }
      </section>
    </>

  )
}

export default ChartsPage