import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NewMenuItem from "./pages/NewMenu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Order from "./pages/Order";
import BuildMenu from "./pages/Build-menu";

import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/menu/new" element={<NewMenuItem />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/order" element={<Order />} />
  <Route path="/build-menu" element={<BuildMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
