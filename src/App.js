import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navigation.js";
import Footer from "./footer.js";
import Demo from "./pages/demo.js";
import Home from "./pages/home.js";
import About from "./pages/aboutUs.js";
import Contact from "./pages/contactUs.js";
import Literature from "./pages/literature.js";
import Program from "./pages/programEvents.js";
import Study from "./pages/study.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './webComponents/alokaiCheckout.js';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HashRouter >
        <Routes>
        <Route path="/" element={<Demo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/study" element={<Study />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
