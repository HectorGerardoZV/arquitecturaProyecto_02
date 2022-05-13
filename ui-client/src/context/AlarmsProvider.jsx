import { createContext, useState, useEffect } from "react"
import { clientAlamrs } from "../config/axiosClient"
import useAuth from "../hooks/useAuth";
import CryptoJS from "crypto-js"

const AlarmsContext = createContext();


const AlarmsProvider = ({ children }) => {

    const [alarms, setAlarms] = useState([]);
    const {user} = useAuth();

    const queryAlarmsAPI = async () => {
        try {
            const response = await clientAlamrs.get(`/alarms/${user.token}`);
            const { data } = response;
            const infoDecrypted = decrypt(data);
            setAlarms(infoDecrypted);
        } catch (error) {
            setAlarms([])
        }
    }

    const decrypt = (info) => {
        try {
            const bytes = CryptoJS.AES.decrypt(info, import.meta.env.VITE_SECRET);
            const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
            return decrypted;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    useEffect(() => {
        queryAlarmsAPI();
    }, [user])

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