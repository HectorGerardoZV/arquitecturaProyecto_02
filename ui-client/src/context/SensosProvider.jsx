import { createContext, useState, useEffect } from "react"
const SensosContext = createContext();
import { clientSensos } from "../config/axiosClient"
import useAuth from "../hooks/useAuth";



const SensosProvider = ({ children }) => {
    const [sensos, setSensos] = useState([])
    const { user } = useAuth()

    const queryAPISensos = async () => {
        try {            
            const response = await clientSensos.get(`/sensos/${user.token}`);
            const { data } = response;
            setSensos(data);
        } catch (error) {
            setSensos([])
        }
    }

    useEffect(() => {
        queryAPISensos();
    }, [])
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