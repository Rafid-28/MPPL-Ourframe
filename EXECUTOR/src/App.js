import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Port from "./components/pages/Port";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/portfolio" element={<Port />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
