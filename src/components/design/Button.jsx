import React from "react";
import buttonSVG from "../../assets/svg/buttonSVG.svg";
import start from "../../assets/svg/start.svg";
function Button({ className, href, onClick, children }) {
  return (
    <button
      className={`relative flex items-center p-7 lg:w-60 lg:h-40  justify-center ${className || ""} cursor-pointer`}
      onClick={onClick}
    >
      
      <img
        className="absolute inset-0 w-full h-full"
        src={buttonSVG}
        alt="Button Background"
      />
      <span className="relative bg-gradient-to-t from-pink-500 via-pink-300 to-white bg-clip-text text-transparent text-[1.5rem] mb-1 uppercase">{children}</span>
      <img 
        src={start}
        
        className="absolute right-[-6rem] lg:right-[-9rem] w-[80px] lg:w-[90px] " 
        alt="Start Icon" 
      />
    </button>
  );
}

export default Button;
