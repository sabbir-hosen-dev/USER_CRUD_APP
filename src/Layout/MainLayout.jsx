import { Outlet } from "react-router-dom"
import Navber from "../Components/Navber"


function MainLayout() {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
