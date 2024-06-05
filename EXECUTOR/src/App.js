import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Port from "./components/pages/Port";
import Pricing from "./components/pages/Pricing";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<Port />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
