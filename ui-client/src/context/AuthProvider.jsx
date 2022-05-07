import { createContext, useState } from "react";


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



    return (
        <AuthContext.Provider
            value={{
                user,
                handleLogin,
                checkAuth,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };
export default AuthContext;