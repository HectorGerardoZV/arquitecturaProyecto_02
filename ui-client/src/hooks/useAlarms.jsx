import { useContext } from "react"
import AlarmsContext from "../context/AlarmsProvider"

const useAlarms = () => {
  return useContext(AlarmsContext)
}

export default useAlarms