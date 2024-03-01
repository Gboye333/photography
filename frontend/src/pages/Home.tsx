import React, { useState, useEffect } from "react";
import FolaImg from "../img/home/image01.jpg";
import ButtonLink from "../components/ButtonLink";
// import { HomeProps } from "../types/HomeProps";

const Home: React.FC = () => {
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
      <div className="max-w-[650px] ">
        <p
          className="text-white text-center font-anek text-base lg:text-lg leading-normal px-4 sm:px-8 lg:px-12 font-extralight mt-5"
          style={pageStyle}
        >
          Afolabi Babarinde was raised in Nigeria. Afolabi developed a passion
          for photography at a young age that has since blossomed into a
          decade-long vocation. He has worked with a diverse spectrum of
          clientele, from individuals to organisations, and has spent years
          honing his skill. A number of publications and exhibitions have
          showcased his work. He is presently residing in the UK. Afolabi likes
          to spend his free time discovering new places, eating new delicacies,
          or developing original ideas.
        </p>
      </div>
      <div className="pb-2 border-b-2 border-gray-700 w-1/6"></div>
      <div style={buttonContainerStyle}>
        <ButtonLink to="/">HOME</ButtonLink>
        <ButtonLink to="/portrait">PORTRAITS</ButtonLink>
        <ButtonLink to="/wedding">WEDDINGS</ButtonLink>
        <ButtonLink to="/contact">CONTACT</ButtonLink>
      </div>
      <style>
        {`
          @media screen and (max-width: 375px) { 
            html, body {
              overflow-y: auto;
              overscroll-behavior-y: none;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Home;
