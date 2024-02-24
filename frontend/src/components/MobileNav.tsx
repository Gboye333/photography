import React, { useState } from "react";
//import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
//import Link
import { Link } from "react-router-dom";
//import motion
import { motion } from "framer-motion";
// import icons
import { FaInstagram, FaTwitter } from "react-icons/fa";
// menu Varaints
const menuVaraiants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button  */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl absolute  right-9 top-14 cursor-pointer"
      >
        {openMenu ? <IoMdClose /> : <CgMenuRight />}
      </div>

      {/* menu */}
      <motion.div
        variants={menuVaraiants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        style={{ width: "200px", height: "100vh" }}
        className="bg-white shadow-2xl  absolute top-0 right-0 h-screen z-20"
        // style={{ maxHeight: "100vh" }}
      >
        {/* icons */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        {/* menu list*/}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl pt-20">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/albums"}>Album</Link>
          </li>
          {/* Social media icons */}
          <div className="flex justify-center items-end h-1/4 pb-10">
            <a href="https://t.co/B37ClTYg6E" target="_blank">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="http://www.twitter.com/Hapholahbi" target="_blank">
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
