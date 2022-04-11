import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login"
import MasterPage from "../pages/materPage/MasterPage"
import AlarmsPage from "../pages/alarmsPage/AlarmsPage"
import NewAlarmPage from "../pages/newAlarmPage/NewAlarmPage"
import NewSensorPage from "../pages/newSensorPage/NewSensorPage"
import SensorsPage from "../pages/sensorsPage/SensorsPage"

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MasterPage />}>
          <Route path="sensors" element={<SensorsPage />} />
          <Route path="newSensor" element={<NewSensorPage />} />
          <Route path="alarms" element={<AlarmsPage />} />
          <Route path="newAlarm" element={<NewAlarmPage />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default RouterApp