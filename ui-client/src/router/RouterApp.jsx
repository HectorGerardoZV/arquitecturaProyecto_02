import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "../pages/login/Login"
import MasterPage from "../pages/materPage/MasterPage"
import AlarmsPage from "../pages/alarmsPage/AlarmsPage"
import NewAlarmPage from "../pages/newAlarmPage/NewAlarmPage"

const RouterApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/admin" element={<MasterPage/>}>
            <Route path="alarms" element={<AlarmsPage/>}/>
            <Route path="newAlarm" element={<NewAlarmPage/>}/> 
            </Route>
        </Routes>
    </Router>
  )
}

export default RouterApp