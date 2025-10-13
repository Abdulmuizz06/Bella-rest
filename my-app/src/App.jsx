import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NewMenuItem from "./pages/NewMenu";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/new" element={<NewMenuItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
