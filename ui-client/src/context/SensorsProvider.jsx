import { createContext, useState, useEffect } from "react"
import { clientSensors } from "../config/axiosClient"


const SensorsContext = createContext();

const SensorsProvider = ({ children }) => {

    const [sensors, setSensors] = useState([]);

    const querySensorsAPI = async () => {
        try {
            const response = await clientSensors.get("/sensors");
            const { data } = response;
            setSensors(data);
        } catch (error) {

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