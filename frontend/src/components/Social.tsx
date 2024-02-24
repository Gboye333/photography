import React from "react";
// import icons
import {
//   ImFacebook,
  ImInstagram,
//   ImPinterest,
  ImTwitter
//   ImYoutube,
} from "react-icons/im";

const Social: React.FC = () => {
  return (
    <div className="hidden xl:flex mr-20">
      <ul className="flex space-x-2">
        {/* <li>
          <a href="http://www.facebook.com" target="_blank"></a>
          <ImFacebook />
        </li> */}
        <li className="transition transform hover:scale-110 ">
          <a href="https://t.co/B37ClTYg6E" target="_blank" className="text-2xl">
          <ImInstagram />
          </a>
        </li>
         <li className="transition transform hover:scale-110">
          <a href="http://www.twitter.com/Hapholahbi" target="_blank" className="text-2xl"><ImTwitter/></a>
        </li>
         {/*
        <li>
          <a href="http://www.facebook.com" target="_blank"></a>
          <ImFacebook />
        </li>
        <li>
          <a href="http://www.facebook.com" target="_blank"></a>
          <ImFacebook />
        </li> */}
      </ul>
    </div>
  );
};

export default Social;
