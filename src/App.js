import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navigation.js";
import Home from "./pages/home.js";
import About from "./pages/aboutUs.js";
import Contact from "./pages/contactUs.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/iskon" element={<Home />} />
          <Route path="/iskon/about" element={<About />} />
          <Route path="/iskon/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
