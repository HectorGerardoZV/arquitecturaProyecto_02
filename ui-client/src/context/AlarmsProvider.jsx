import { createContext, useState, useEffect } from "react"
import { clientAlamrs } from "../config/axiosClient"


const AlarmsContext = createContext();


const AlarmsProvider = ({ children }) => {

    const [alarms, setAlarms] = useState([]);

    const queryAlarmsAPI = async () => {
        try {
            const response = await clientAlamrs.get("/alarms");
            const { data } = response;
            setAlarms(data);
        } catch (error) {

        }
    }

    useEffect(() => {
        queryAlarmsAPI();
    }, [])

    return (
        <AlarmsContext.Provider
            value={{
                alarms
            }}
        >
            {children}
        </AlarmsContext.Provider>
    )
}

export { AlarmsProvider }

export default AlarmsContext;