
import LogoWhite from "../../img/logo-white.svg"
import { Link } from "react-router-dom"

import "./Header.css"
const Header = () => {
    return (
        <header className="headerStyle">
            <div className="container header__content">

                <div className="img_header">
                    <img src={LogoWhite} alt="Logo invernadero" />
                </div>

                <nav className="navegation">
                    <Link to={"sensors"}>Sensores</Link>
                    <Link to={"alarms"}>Alarmas</Link>
                    <Link to={"charts"}>Gráficas</Link>
                </nav>

            </div>

        </header>
    )
}

export default Header