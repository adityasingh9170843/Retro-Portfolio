import React from "react";
import Waves from "./design/Waves";
import { BackgroundCircles } from "./design/Galaxy";
import GalaxyLights from "./design/GalaxyLights";
import PixelatedButton from "./design/PixelatedButton";
import { useNavigate } from "react-router-dom";
function LevelTwo() {
  return (
    <div className="z-100 relative w-full h-screen bg-black flex flex-col items-center justify-evenly  overflow-hidden uppercase">
      <div className="flex items-start justify-start w-full ml-2 0">
        <h1 className="text-2xl mb-8 lg:mb-8 sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker ">
          LEvel 1
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-2xl mb-8 lg:mb-8 sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker ">
          level 2
        </h1>
        <h2 className="text-white text-2xl mt-6 sm:text-3xl md:text-4xl lg:text-5xl ">
          Explore my skills
        </h2>
        <PixelatedButton showIcon={false} className={"mt-4 lg:mt-12"}>
        Start
      </PixelatedButton>
      </div>

      

      <BackgroundCircles />
      <GalaxyLights />
    </div>
  );
}

export default LevelTwo;
