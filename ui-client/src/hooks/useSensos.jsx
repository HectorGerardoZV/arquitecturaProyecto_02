import {useContext} from "react"
import SensosContext from "../context/SensosProvider"


const useSensos = () => {
  return useContext(SensosContext)
}

export default useSensos