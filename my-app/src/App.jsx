import "./main.css";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, UserContext } from "./context/UserContext";

import Home from "./pages/home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import BuildMenu from "./pages/Build-menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewMenuItem from "./pages/NewMenu";

import Login from "./auth/login";
import Register from "./auth/register";
import PublicRoute from "./auth/publicRoute";

import Dashboard from "./admin/pages/dashboard"; 
import Customer from "./admin/pages/Customer";
import MenuManagement from "./admin/pages/Menus";

import AdminLLayout from "./admin/Layout";
import Layout from "./admin/Layout";

function AppRoutes() {
  const { user, loading } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="PublicRoute" element={<PublicRoute />}/>
      </Route>

      <Route path="admin" element={<AdminLLayout />}>
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="menu-management" element={<MenuManagement user={user} />} />
        <Route path="orders" element={<Order user={user} />} />
        <Route path="customers" element={<Customer user={user} />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="build-menu" element={<BuildMenu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="new-menu" element={<NewMenuItem />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
