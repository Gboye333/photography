import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/header/logo2.png";
import { LogoProps } from "../types/types";

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="max-w-[200px] md:ml-20 sm:mx-10 -mt-6">
      <Link to={"/"}>
        <img src={logo} />
      </Link>
    </div>
  );
};

// const logoStyle = {
//   width: size || "100px",
//   height: "auto",
//   display: "block",
//   margin: "0 auto 0 20px",
// };

//   return (
//     <Link to={"/"}>
//       <img src={logo} className="max-w-[200px]" alt="" style={logoStyle} />
//     </Link>
//   );
// };

export default Logo;
