import React from "react";
import ProfileImage from "./design/ProfileImage";
import NextPage from "./design/NextPage";
import { useNavigate } from "react-router-dom";
function AboutMe() {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/LevelTwo");
    }, 100);
  };
  return (
    <div className="relative aboutMe-container flex flex-row justify-center items-center">
      <h1 className="absolute top-40 text-4xl md:text-5xl font-bold  bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker ">it's Aditya !!</h1>
      <div className="flex w-[100%] lg:w-[50%]">
        <div>
          <ProfileImage />
        </div>
        <div className="flex items-center ml-30">
        <p className="text-2xl leading-loose text-white uppercase ">
            I am a third-year undergrad student studying in some Institute of Technology, 
            somewhere. I am from the city of joy, CityName. I completed my +2 from some school.
          </p>
        </div>
      </div>
      <NextPage onClick={handleClick} className="top-[58%] left-[85%]"   />
    </div>
  );
}

export default AboutMe;
