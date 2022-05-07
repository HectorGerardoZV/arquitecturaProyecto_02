import useAuth from "../../hooks/useAuth"
import LogoWhite from "../../img/logo-white.svg"
import { Link, useNavigate } from "react-router-dom"

import "./Header.css"
const Header = () => {
    const { handleLogout } = useAuth();
    const navigate = useNavigate();
    const handleOnClickLogOut = () => {
        handleLogout();
        navigate("/")
    }

    return (
        <header className="headerStyle">
            <div className="container header__content">

                <div className="img_header">
                    <img src={LogoWhite} alt="Logo invernadero" />
                </div>

                <nav className="navegation">
                    <Link to={""}>Sensores</Link>
                    <Link to={"alarms"}>Alarmas</Link>
                    <Link to={"charts"}>Gráficas</Link>
                    <button onClick={ handleOnClickLogOut}>Cerrar Sesión</button>
                </nav>

            </div>

        </header>
    )
}

export default Header