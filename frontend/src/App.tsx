import React from "react";

//import routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Contact, Home, Portrait, Wedding} from "../src/pages";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portrait from "./pages/portrait";
import Wedding from "./pages/Wedding";
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Portrait" element={<Portrait/>}/>
         <Route path="/Wedding" element={<Wedding/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
