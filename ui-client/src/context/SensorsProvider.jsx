import { createContext, useState, useEffect } from "react"
import { clientSensors } from "../config/axiosClient"
import useAuth from "../hooks/useAuth"
import CryptoJS from "crypto-js"
const secret = "82783zap";


const SensorsContext = createContext();
const SensorsProvider = ({ children }) => {

    const [sensors, setSensors] = useState([]);
    const { user } = useAuth();

    const querySensorsAPI = async () => {
        try {
            const { token } = user;
            const response = await clientSensors.get(`/sensors/${token}`);
            const { data } = response;
            const infoDecrypted = decrypt(data);
            setSensors(infoDecrypted);
        } catch (error) {
            setSensors([])
        }
    }

    const decrypt = (info) => {
        try {
            const bytes = CryptoJS.AES.decrypt(info, secret);
            const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
            return decrypted;
        } catch (error) {
            console.log(error);
        }
        return null;
    }


    useEffect(() => {
        querySensorsAPI();
    }, [user])

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