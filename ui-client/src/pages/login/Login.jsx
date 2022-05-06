import "./Login.css"
import LogoBlue from "../../img/logo-blue-login.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {clientUsers} from "../../config/axiosClient"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]=useState(false)

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: email,
      password: password
    }
    queryAPIUsers(user)
  }

  const queryAPIUsers=async(user)=>{
    try {
      const response=await clientUsers.post("/users/login", user)
      const data=response.data
      navigate("/admin")
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
    }
  }

  return (
    <div className="login-area">
      <form className="form-login height-form" onSubmit={handleSubmit}>
        <div className="logo-login">
          <img src={LogoBlue} alt="Logo invernadero" />
        </div>
        
        {error? (<h1 className="error-login">Credenciales inválidas</h1>): null}


        <div className="inputsForm">
          <div className="inputForm input-height">
            <label htmlFor="">Email</label>
            <input type="text" onChange={handleOnChangeEmail} value={email} />
          </div>

          <div className="inputForm input-height">
            <label htmlFor="">Contraseña</label>
            <input type="password" onChange={handleOnChangePassword} value={password} />
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