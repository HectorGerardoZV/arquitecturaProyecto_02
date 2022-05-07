import { useEffect } from "react"
import useAuth from "../../hooks/useAuth.jsx"

import { useNavigate } from "react-router-dom"
import useSensos from "../../hooks/useSensos"
import "./ChartsPage.css"
const ChartsPage = () => {
  let navigate = useNavigate();
  const { checkAuth } = useAuth();
  const { sensos } = useSensos();



  useEffect(() => {
    if (!checkAuth()) {
      navigate("/")
    }
  }, [])


  return (
    <>
      <div className="informationSection chartsPage">
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