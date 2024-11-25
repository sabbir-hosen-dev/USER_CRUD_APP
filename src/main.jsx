/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Routes/Route";

export const UserContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]); 

  const value = {
    users,
    setUsers,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={route} />
    </AppProvider>
  </StrictMode>
);
