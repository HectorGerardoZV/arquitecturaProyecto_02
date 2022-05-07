import { useContext } from "react"
import SensorsContext from "../context/SensorsProvider"

const useSensors = () => {
    return useContext(SensorsContext);
}

export default useSensors