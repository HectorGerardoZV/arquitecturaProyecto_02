import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login"
import MasterPage from "../pages/materPage/MasterPage"
import SensorsPage from "../pages/sensorsPage/SensorsPage"

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MasterPage />}>
          <Route path="sensors" element={<SensorsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterApp