import React from "react";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";

//https://www.youtube.com/watch?v=P3W7MZ3JkyA 12min
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
           
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
