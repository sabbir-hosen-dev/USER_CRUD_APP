import { NavLink } from "react-router-dom"


function Navber() {
  return (
    <div className="navbar justify-center">
      <div className="navbar-center  ">
        <div className="menu menu-horizontal *:mx-3 font-bold">
        <NavLink className="" to="/users">Users</NavLink>
        <NavLink to="/add-user">Add User</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navber
