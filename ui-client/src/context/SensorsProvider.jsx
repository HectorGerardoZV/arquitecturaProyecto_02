import { createContext, useState, useEffect } from "react"
import { clientSensors } from "../config/axiosClient"
import useAuth from "../hooks/useAuth"


const SensorsContext = createContext();
const SensorsProvider = ({ children }) => {

    const [sensors, setSensors] = useState([]);
    const { user } = useAuth();

    const querySensorsAPI = async () => {
        try {
            const { token } = user;
            const response = await clientSensors.get(`/sensors/${token}`);
            const { data } = response;
            setSensors(data);
        } catch (error) {
            setSensors([])
        }
    }
    useEffect(() => {
        querySensorsAPI();
    }, [])

    return (
        <SensorsContext.Provider
            value={{
                sensors
            }}
        >
            {children}
        </SensorsContext.Provider>
    )
}

export { SensorsProvider }

export default SensorsContext;