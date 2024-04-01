import React from "react";
//import Link
// import { Link } from "react-router-dom";

const Portrait: React.FC = () => {
  return (
    <section className="section bg-[#1E1E2A]">
      <p className="text-pink-400 font-anek text-3xl tracking-widest text-center pt-10">
        PORTRAITS
      </p>
      <p className="text-white font-Arial text-center pt-8 font-light text-xl">
        Creating a timeless memory !
      </p>
      <div className="flex justify-center mt-8">
        <button className="bg-white rounded py-2 px-4 font font-anek">
          Add Pictures
        </button>
      </div>
    </section>
  );
};

export default Portrait;

// import React, { useState } from "react";

// const PortraitPage: React.FC = () => {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
//   const [selectedImages, setSelectedImages] = useState<string[]>([]);
//   const [adminPassword, setAdminPassword] = useState<string>("");
//   const googleDriveLink =
//     "https://drive.google.com/drive/folders/1VJlLKVaPYrq4J7L2JX2to4aDKliB40lB?usp=share_link";

//   const handleAdminLogin = () => {
//     const password = prompt("Enter admin password:");
//     // Replace 'adminPassword' with your actual admin password
//     if (password === "adminPassword") {
//       setIsAdminLoggedIn(true);
//       setAdminPassword(password);
//     } else {
//       alert("Incorrect password. You are not authorized as an admin.");
//     }
//   };

//   const handleImageSelection = () => {
//     if (!isAdminLoggedIn) {
//       alert("You must log in as an admin to select images.");
//       return;
//     }
//     const selectedImagesFromDrive = prompt(
//       "Enter Google Drive link for the images:"
//     );
//     // Fetch images from the provided Google Drive link and set them as selected images
//     if (selectedImagesFromDrive) {
//       // Example: Fetch images from the Google Drive link
//       // fetchImages(selectedImagesFromDrive).then((images) => {
//       //   setSelectedImages(images);
//       // });
//       // For demonstration purposes, setting dummy images
//       setSelectedImages(["image1.jpg", "image2.jpg", "image3.jpg"]);
//     }
//   };

//   return (
//     <section className="section bg-[#1E1E2A]">
//       <div className="text-center pt-10">
//         <p className="text-pink-400 font-anek text-3xl tracking-widest">
//           PORTRAITS
//         </p>
//         <p className="text-white font-Arial text-center pt-8 font-light text-xl">
//           Creating a timeless memory !
//         </p>
//         {isAdminLoggedIn ? (
//           <div className="absolute top-0 right-0 m-4">
//             <button
//               onClick={handleImageSelection}
//               className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
//             >
//               Select Images for Users
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={handleAdminLogin}
//             className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
//           >
//             Admin Login
//           </button>
//         )}
//       </div>
//       <div className="flex justify-center flex-wrap mt-8">
//         {selectedImages.map((image, index) => (
//           <img
//             key={index}
//             src={`https://drive.google.com/uc?id=${image}`}
//             alt={`Portrait ${index + 1}`}
//             className="m-4 max-w-[200px]"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PortraitPage;
