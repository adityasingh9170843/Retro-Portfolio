import React from "react";
import profileImg from "../../assets/profile.png";
import topLeftSVG from "../../assets/svg/top.svg";
import bottomSVG from "../../assets/svg/bottom.svg";
import { motion } from "motion/react";
function ProfileImage() {
  return (
    <motion.div
      className="relative flex items-center justify-center 
                    w-[200px] h-[200px] 
                    sm:w-[250px] sm:h-[250px]
                    md:w-[280px] md:h-[280px]
                    lg:w-[350px] lg:h-[350px]"
      animate={{ y: [0, 15, 0] }} // Floating effect
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden z-10">
        <img
          src={profileImg}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      <img
        src={topLeftSVG}
        alt="Top Left"
        className="absolute 
                   w-[250px] h-[90px] 
                   sm:w-[250px] sm:h-[90px]
                   md:w-[480px] md:h-[200px]
                   top-[-25%] md:top-[-20%] md:left-1 left-0 z-0"
      />

      <img
        src={bottomSVG}
        alt="Bottom"
        className="absolute
                   w-[100px] h-[60px]
                   sm:w-[100px] sm:h-[70px]
                   md:w-[200px] md:h-[70px]
                   bottom-[-25%] md:bottom-[-20%]  z-0"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
    </motion.div>
  );
}

export default ProfileImage;
