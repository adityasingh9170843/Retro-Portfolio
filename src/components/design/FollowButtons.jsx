import React from "react";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
function FollowButtons() {
  return (
    <div className="flex lg:mt-7 mt-7 lg:gap-19  gap-10 justify-center ">
      <button
        className="w-[40px] h-[40px] cursor-pointer transition-all duration-300 ease-in-out 
      hover:translate-y-[3px]  active:translate-y-[5px]"
      >
        <img src={facebook} alt="" />
      </button>
      <button
        className="w-[40px] h-[40px] cursor-pointer transition-all duration-300 ease-in-out 
      hover:translate-y-[3px]  active:translate-y-[5px]"
      >
        <img src={instagram} alt="" />
      </button>
      <button
        className="w-[40px] h-[40px] cursor-pointer transition-all duration-300 ease-in-out 
      hover:translate-y-[3px]  active:translate-y-[5px]"
      >
        <img src={linkedin} alt="" />
      </button>
    </div>
  );
}

export default FollowButtons;
