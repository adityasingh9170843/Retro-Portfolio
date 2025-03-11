import React from "react";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import { motion } from "motion/react";
function FollowButtons() {
  return (
    <div className="flex lg:mt-7 mt-7 lg:gap-19  gap-10 justify-center ">
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 2,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
        whileTap={{
          scale: 0.95,
          rotate: 0,

          transition: {
            type: "spring",
            stiffness: 400,
            damping: 8,
          },
        }}
        className="w-[60px] h-[50px] cursor-pointer "
      >
        <img src={facebook} alt="" />
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 2,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
        whileTap={{
          scale: 0.95,
          rotate: 0,

          transition: {
            type: "spring",
            stiffness: 400,
            damping: 8,
          },
        }}
        className="w-[60px] h-[50px] cursor-pointer"
      >
        <img src={instagram} alt="" />
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 2,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
        whileTap={{
          scale: 0.95,
          rotate: 0,

          transition: {
            type: "spring",
            stiffness: 400,
            damping: 8,
          },
        }}
        className="w-[60px] h-[50px] cursor-pointer "
      >
        <img src={linkedin} alt="" />
      </motion.button>
    </div>
  );
}

export default FollowButtons;
