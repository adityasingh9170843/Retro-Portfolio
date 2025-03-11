import React from "react";
import Button from "./design/Button";
import start from "../assets/svg/start.svg";
import BuildingLights from "./design/BuildingLights";
import FollowButtons from "./design/FollowButtons";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  const handleStartClick = () => {
    setTimeout(() => {
      navigate("/initializing");
    }, 800);
  };
  return (
    <div className=" relative  m-c flex  items-center ">
      <BuildingLights />
      <div className="w-[50%] relative ">
        <div className="flex flex-col items-center gap-6 m-18 w-[100%] h-full  ">
          <h1 className="lg:whitespace-normal lg:w-[50rem] lg:mb-[4rem] text-center font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent uppercase animate-neon-flicker">
            welcome player1
          </h1>
          <h4 className="lg:whitespace-normal lg:w-[30rem]  lg:mb-[4rem] text-[1rem] lg:text-[2rem] leading-normal text-white uppercase">
            press enter to start the game
          </h4>
          <Button
            className={" lg:mb-[4rem] mt-[2rem]"}
            onClick={handleStartClick}
          >
            Start
          </Button>
          <div className="h-[12rem] items-center">
            <h1 className="uppercase mt-[13rem] text-white text-xl lg:text-2xl">
              Follow me at
            </h1>
            <FollowButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
