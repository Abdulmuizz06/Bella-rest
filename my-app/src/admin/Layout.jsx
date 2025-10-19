
import { Outlet } from "react-router-dom"

import "./../main.css";
import "./css/admin.css";

import Header from "./components/Header"


const Layout = () => {
  return (
    <>
        <Header />
        <main className="main-content">
          {/* Main content goes here */}
          <Outlet />
        </main>
    </>
  )
}

export default Layout
