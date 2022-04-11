import {Outlet} from "react-router-dom"
const MasterPage = () => {
  return (
    <div>
        <h1>Master Page</h1>
        <Outlet/>
    </div>
  )
}

export default MasterPage