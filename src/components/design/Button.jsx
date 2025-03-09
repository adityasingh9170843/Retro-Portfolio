import React from "react";
import buttonSVG from "../../assets/svg/buttonSVG.svg";

function Button({ className, href, onClick, children }) {
  return (
    <button
      className={`relative flex items-center p-7 w-40 h-20  justify-center ${className || ""} cursor-pointer`}
      onClick={onClick}
    >
      
      <img
        className="absolute inset-0 w-full h-full"
        src={buttonSVG}
        alt="Button Background"
      />
      <span className="relative z-10 text-white font-bold text-[0.9rem] mb-3 uppercase">{children}</span>
    </button>
  );
}

export default Button;
