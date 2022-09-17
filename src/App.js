import "./App.css";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToMenu from "./pages/AddToMenu";

import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState({ totalPrice: 0 });

  return (
    <div className="App">
      <Router>
        <header className="">
          <NavBar cart={cart} setCart={setCart}/>
        </header>
        <Routes>
          <Route path="/" />
          <Route path="menu" element={<Menu cart={cart} setCart={setCart}/>} />
          <Route path="addtomenu" element={<AddToMenu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route index element={<Home />} />
          <Route path="*" exact={true} element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
