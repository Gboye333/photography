import React from "react";
import { Link } from "react-router-dom"; 

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}
const buttonStyle = {
    border: '1px solid #gray',
    transition: 'border-color 0.3s',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '5px',
    marginTop: '20px',
  };


function ButtonLink({ to, children }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      style={buttonStyle}
      className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-3 px-7 rounded mr-4 tracking-widest font-extralight"
    >
      {children}
    </Link>
  );
}
export default ButtonLink;
