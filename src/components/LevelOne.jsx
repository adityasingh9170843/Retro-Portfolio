import React from "react";
import Waves from "./design/Waves";
import { BackgroundCircles } from "./design/Galaxy";
import GalaxyLights from "./design/GalaxyLights";
import Button from "./design/Button";
function LevelOne() {
    
  return (
    <div className="z-100 relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden uppercase">
      <h1 className=" text-2xl mb-8 lg:mb-8 sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker ">
        level 1
      </h1>
      <h2 className="text-white text-2xl mt-6 sm:text-3xl md:text-4xl lg:text-5xl ">know about me</h2>
      <Waves />

      <Button showIcon={false} className={"mt-4 lg:mt-8"}>
        Start
      </Button>

      <BackgroundCircles />
      <GalaxyLights />
    </div>
  );
}

export default LevelOne;
