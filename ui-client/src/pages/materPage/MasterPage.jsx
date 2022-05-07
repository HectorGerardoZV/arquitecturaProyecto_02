import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import Header from "../../components/header/Header"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"


import "./MasterPage.css"
const MasterPage = () => {
    const navigate = useNavigate();
    const { checkAuth } = useAuth();


    useEffect(() => {
        if (!checkAuth()) {
            navigate("/")
        }
    }, [])


    return (
        <section className="masterPage">
            <Header />
            <Outlet />
        </section>
    )
}

export default MasterPage