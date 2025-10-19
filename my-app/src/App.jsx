import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import NewMenuItem from "./pages/NewMenu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BuildMenu from "./pages/Build-menu";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

// Shared components
import Footer from "./component/Footer";

// Admin area
import Header from "./admin/components/Header";
import Menu from "./admin/pages/Dashboard";
import Dashboard from "./admin/pages/Dashboard";
import Order from "./admin/pages/Order";
import Layout from "./admin/Layout";

// ✅ Import the UserProvider to share user data across the app
import { UserProvider } from "./context/UserContext";
import NewMenuPage from "./pages/NewMenu";
import AdminOrder from "./admin/pages/Order";
import Customer from "./admin/pages/Customer";

function App() {
  return (
    // ✅ Wrap the entire app in UserProvider to provide user context globally
    <UserProvider>
      <BrowserRouter>
        {/* Header will have access to user context */}
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* Menu/Order Related */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/new" element={<NewMenuPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/build-menu" element={<BuildMenu />} />

          {/* Admin / Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/admin/orders" element={<AdminOrder/>}/>
          <Route path="/admin/Customers" element={<Customer/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
