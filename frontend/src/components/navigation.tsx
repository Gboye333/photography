// Navigation.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="hidden xl:flex font-anek text-2xl ml-auto mx-auto">
      {/* <Link to="/" className="text-black hover:text-white transition">Home</Link> */}
      <Link
        to="/portfolio"
        className="text-white transition transform hover:scale-105 hover:underline mr-24"
      >
        Portfolio
      </Link>
      <Link
        to="/about"
        className="text-white transition transform hover:scale-105 hover:underline mr-24"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-white transition transform hover:scale-105 hover:underline mr-24"
      >
        Contact
      </Link>
      <Link
        to="/albums"
        className="text-white transition transform hover:scale-105 hover:underline mr-24"
      >
        Album
      </Link>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default Navigation;
