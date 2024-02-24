

import React from "react";
//import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Albums from "../pages/Albums";

// import Routes route & useLocation hook
import { Routes, Route } from "react-router-dom";

const AnimRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};

export default AnimRoutes;
