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
    opacity: showHello ? 1 : 0,
    overflowY: "auto",
    overflowX: "hidden",
  };

  const helloStyle: React.CSSProperties = {
    opacity: showHello ? 1 : 0,
    transition: "opacity 0.5s ease-in",
  };

  const pageStyle: React.CSSProperties = {
    opacity: showPage ? 1 : 0,
    transition: "opacity 0.5s ease-out",
  };

  const imageStyle: React.CSSProperties = {
    maxHeight: "100%",
    borderRadius: "50%",
    width: "150px",
    marginTop: "50px",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "10px",
    marginTop: "20px",
  };

  const buttonStyle: React.CSSProperties = {
    border: "1px solid #gray",
    transition: "border-color 0.3s",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "5px",
    marginTop: "20px",
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
        className="text-white font-anek text-base lg:text-lg leading-normal px-4 sm:px-8 lg:px-12 font-extralight flex flex-col items-start mt-5 "
        style={pageStyle}
      >
        Afolabi Babarinde was raised in Nigeria. Afolabi developed a passion for
        photography at a <br />
        young age that has since blossomed into a decade-long vocation. He has
        worked with a <br />
        diverse spectrum of clientele, from individuals to organisations, and
        has spent years honing his <br />
        skill. A number of publications and exhibitions have showcased his work.
        He is presently <br /> residing in the UK. Afolabi likes to spend his
        free time discovering new places,
        <br /> eating new delicacies, or developing original ideas.
      </p>
      <div className="pb-2 border-b-2 border-gray-700 w-1/6"></div>
      <div style={buttonContainerStyle}>
        <button
          className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-3 px-7 rounded mr-4 tracking-widest font-extralight"
          style={buttonStyle}
        >
          HOME
        </button>
        <button
          className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest font-extralight"
          style={buttonStyle}
        >
          PORTRAITS
        </button>
        <button
          className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest font-extralight"
          style={buttonStyle}
        >
          WEDDING
        </button>
        <button
          className="border border-gray-700 hover:border-pink-400 transition-colors duration-300 text-white font-anek py-2 px-4 rounded mr-4 tracking-widest font-extralight"
          style={buttonStyle}
        >
          CONTACT
        </button>
      </div>
      <style>
      {`
          @media (max-width: 768px) {
            .text-base {
              font-size: 0.76rem; /* Adjust font size for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};
export default Home;
