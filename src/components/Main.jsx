import React from "react";
import Button from "./design/Button";
import BuildingLights from "./design/BuildingLights";
import FollowButtons from "./design/FollowButtons";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handleStartClick = () => {
    setTimeout(() => {
      navigate("InitializingPage");
    }, 800);
  };

  return (
    <div className="relative m-c flex flex-col justify-center min-h-screen h-auto overflow-x-hidden overflow-y-auto px-4 pb-30">
      <div className="w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] px-4 relative">
        <div className="flex flex-col items-center gap-6 w-full h-full">
          <h1 className="text-center mb-2 font-semibold text-2xl md:text-2xl lg:text-4xl xl:text-5xl bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker">
            Welcome Player1
          </h1>
          <h4 className="text-white text-sm md:text-lg lg:text-xl xl:text-2xl uppercase text-center max-w-[20rem] md:max-w-[30rem]">
            Press Enter to Start the Game
          </h4>
          <Button className="mt-4 lg:mt-8" onClick={handleStartClick}>
            Start
          </Button>
          <div className="mt-4 lg:mt-8 text-center">
            <h1 className="uppercase text-white text-xs md:text-sm lg:text-lg">
              Follow me at
            </h1>
            <FollowButtons />
          </div>
        </div>
      </div>
      <BuildingLights />
    </div>
  );
}

export default Main;
