import "./App.css";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" />
          <Route path="menu" element={<Menu />} />
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
