import React, { useState, useEffect } from "react";
import FolaImg from "../img/home/image01.jpg";
import { HomeProps } from "../types/HomeProps";


const Home: React.FC<HomeProps> = () => {
  const [showHello, setShowHello] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHello(true);
      setTimeout(() => {
        setShowPage(true);
      }, 500);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#1E1E2A",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    transition: "opacity 0.5s ease-in-out",
    opacity: showHello ? 1 : 0, // Set initial opacity based on showHello state
    overflowY: "auto",
    overflowX: "hidden",
  };

  const helloStyle: React.CSSProperties = {
    opacity: showHello ? 1 : 0,
    transition: "opacity 0.5s ease-in", // Apply different easing for the "HELLO" text
  };

  const pageStyle: React.CSSProperties = {
    opacity: showPage ? 1 : 0,
    transition: "opacity 0.5s ease-out", // Apply different easing for the rest of the page
  };

  const imageStyle: React.CSSProperties = {
    // maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
    width: "150px",
    marginTop: "50px",
  };

  return (
    <div style={containerStyle}>
      <img src={FolaImg} alt="Fola Image" style={imageStyle} />
      {showHello && (
        <p
          className="text-pink-400 font-anek text-5xl mt-9 tracking-widest"
          style={helloStyle}
        >
          HELLO
        </p>
      )}
      <p
        className="text-white font-anek text-1xl sm:font-bold lg:text-2xl pt-7 lg:font-extralight ml-12"
        style={pageStyle}
      >
        Afolabi Babarinde was raised in Nigeria. Afolabi developed a passion for
        <br /> photography at a young age that has since blossomed into a
        decade-long
        <br /> vocation. He has worked with a diverse spectrum of clientele,
        from individuals <br />
        to organisations, and has spent years honing his skill. A number of
        publications
        <br /> and exhibitions have showcased his work. He is presently residing
        in the UK.
        <br />
        Afolabi likes to spend his free time discovering new places, eating new
        <br />
        delicacies, or developing original ideas.
      </p>
      <div className="pb-2 border-b-2 border-gray-700 w-1/6"></div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <button className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-3 px-7 rounded mr-4 tracking-widest">
            HOME
          </button>
          <button className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest">
            PORTRAITS
          </button>
          <button className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest">
            WEDDING
          </button>
          <button className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
