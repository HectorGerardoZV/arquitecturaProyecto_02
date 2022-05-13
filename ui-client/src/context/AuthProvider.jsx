import { createContext, useState } from "react";

import CryptoJS from "crypto-js"


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem("user") ?
            JSON.parse(localStorage.getItem("user")) :
            null
    );

    const handleLogin = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }
    const checkAuth = () => {
        return user !== null;
    }

    const encrypt = (info) => {
        try {
            const encrypted = CryptoJS.AES.encrypt(JSON.stringify(info), import.meta.env.VITE_SECRET).toString();
            return encrypted;
        } catch (error) {
            console.log(error);
        }
        return null;
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




    return (
        <AuthContext.Provider
            value={{
                user,
                handleLogin,
                checkAuth,
                handleLogout,
                encrypt,
                decrypt
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };
export default AuthContext;