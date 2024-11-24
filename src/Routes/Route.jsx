import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter, Navigate } from "react-router-dom";
import Users from "../Page/Users";
import AddUser from "../Page/AddUser";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        path: "/",
        element : <Navigate to="/users" />
      },
      {
        path : "/users",
        element: <Users />,
        loader : () => fetch("http://localhost:600/users")
      },
      {
        path: "/add-user",
        element: <AddUser />
      }
    ]
  }
])

export default route