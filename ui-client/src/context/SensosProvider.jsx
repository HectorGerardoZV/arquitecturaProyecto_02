import { createContext, useState, useEffect } from "react"
const SensosContext = createContext();
import { clientSensos } from "../config/axiosClient"
import useAuth from "../hooks/useAuth";
import CryptoJS from "crypto-js"


const SensosProvider = ({ children }) => {
    const [sensos, setSensos] = useState([])
    const { user } = useAuth()

    const queryAPISensos = async () => {
        try {            
            const response = await clientSensos.get(`/sensos/${user.token}`);
            const { data } = response;
            const infoDecrypted = decrypt(data);
            setSensos(infoDecrypted);
        } catch (error) {
            setSensos([])
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
        queryAPISensos();
    }, [user])
    return (
        <SensosContext.Provider
            value={{
                sensos
            }}
        >
            {children}
        </SensosContext.Provider>
    )
}

export { SensosProvider }

export default SensosContext;