import "./Login.css"
import LogoBlue from "../../img/logo-blue-login.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { clienteAuh } from "../../config/axiosClient";
import { useEffect } from "react";

import useAuth from "../../hooks/useAuth"


const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, user, checkAuth } = useAuth();
  const [userInfo, setUserInfo] = useState({})
  const [error, setError] = useState(false);

  const handleOnChangeUserInfo = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const kyes = Object.keys(userInfo);
    if (kyes.length == 2) {
      if (kyes[0] === "email" && kyes[1] === "password") {
        queryAPIUsers(userInfo)
        return;
      }
    }
    showError();
  }
  const queryAPIUsers = async (user) => {
    try {
      const response = await clienteAuh.post("/auth", user)
      const data = response.data
      handleLogin(data)
      navigate("/admin")
    } catch (error) {
      showError();
    }
  }
  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false)
    }, 3000);
  }

  useEffect(() => {
    if (checkAuth()) {
      navigate("/admin")
    }
  }, [])

  return (
    <>
      {
        !user ? (

          <div className="login-area">
            <form className="form-login height-form" onSubmit={handleSubmit}>
              <div className="logo-login">
                <img src={LogoBlue} alt="Logo invernadero" />
              </div>

              {error ? (<h1 className="error-login">Credenciales inválidas</h1>) : null}


              <div className="inputsForm">
                <div className="inputForm input-height">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" onChange={handleOnChangeUserInfo} />
                </div>

                <div className="inputForm input-height">
                  <label htmlFor="">Contraseña</label>
                  <input type="password" name="password" onChange={handleOnChangeUserInfo} />
                </div>

              </div>
              <div className="inputSubmitArea">
                <input className="inputSubmit"
                  type="submit" value="Iniciar Sesión" />
              </div>

            </form>
          </div>
        ) : null
      }
    </>
  )
}

export default Login