import React from "react";
import Logo from "../components/Logo";
import Social from "../components/Social";
import MobileNav from "./MobileNav";
import Navigation from "../components/navigation";

const Header: React.FC = () => {
  return (
    <div className="lg:bg-brown-400 lg:bg-opacity-35 sm:bg-opacity-0 ">
      <header className="flex items-center justify-between gap-x-5">
        <Logo size="250px" />
        <Navigation />
        {/* socials */}
        <Social />
        {/* mobile nav*/}
        <MobileNav />
      </header>
    </div>
  );
};
export default Header;
