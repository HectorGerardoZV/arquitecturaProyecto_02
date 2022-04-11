import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"

const MasterPage = () => {
    return (
        <section>
            <Header />
            <Outlet />
        </section>
    )
}

export default MasterPage