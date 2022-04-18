import React, { useState } from "react";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
