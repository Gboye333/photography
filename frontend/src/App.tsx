import React from "react";

//import components
import Home from "./components/Home";
import AnimRoutes from "./components/AnimRoutes";

//import routes
import { BrowserRouter as Router } from "react-router-dom";
//import motion
//import { motion } from 'framer-motion'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AnimRoutes />
        <Home />
      </Router>
    </>
  );
};

export default App;
