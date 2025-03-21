import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import astronautImg from "../../assets/astro.png"; 
import chatBubble from "../../assets/svg/chatbox.svg"; 

function NextPage({ onClick, className }) {
  return (
    <motion.div
      className={`absolute flex flex-col items-center w-[100px] md:w-[100px] lg:w-[120px] ${className}`}
      onClick={onClick}  
      whileHover={{
        scale: 1.05,
        y: -10,
        filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.8))", // subtle glow effect
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileTap={{
        scale: 0.95,
        y: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
        
      <div className="relative w-[160px] md:w-[300px] lg:w-[300px]">
        <img src={chatBubble} alt="Chat Bubble" className="w-full" />
        <p className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-lg lg:text-[14px] font-bold text-black text-center">
          CLICK ME TO <br /> ENTER NEXT <br /> LEVEL
        </p>
      </div>

        
      <img src={astronautImg} alt="Astronaut" className="w-full object-cover mt-[-10px]" />
    </motion.div>
  );
}

export default NextPage;
