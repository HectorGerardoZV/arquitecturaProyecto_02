import { createContext, useState, useEffect } from "react"
import { clientAlamrs } from "../config/axiosClient"
import useAuth from "../hooks/useAuth";

const AlarmsContext = createContext();


const AlarmsProvider = ({ children }) => {

    const [alarms, setAlarms] = useState([]);
    const {user} = useAuth();

    const queryAlarmsAPI = async () => {
        try {
            const response = await clientAlamrs.get(`/alarms/${user.token}`);
            const { data } = response;
            setAlarms(data);
        } catch (error) {
            setAlarms([])
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