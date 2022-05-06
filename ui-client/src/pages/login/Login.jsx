import "./Login.css"
import LogoBlue from "../../img/logo-blue-login.svg"

const Login = () => {
  return (
    <div className="login-area">
      <form className="form-login height-form">

        <div className="logo-login">
          <img src={LogoBlue} alt="Logo invernadero" />
        </div>

        <div className="inputsForm">
          <div className="inputForm input-height">
            <label htmlFor="">Usuario</label>
            <input type="text" />
          </div>

          <div className="inputForm input-height">
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>

        </div>
        <div className="inputSubmitArea">
          <input className="inputSubmit"
            type="submit" value="Iniciar Sesión" />
        </div>

      </form>
    </div>
  )
}

export default Login