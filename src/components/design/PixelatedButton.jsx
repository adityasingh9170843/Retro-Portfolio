import whitebutton from "/src/assets/svg/whitebutton.svg";
import buttonSVG from "/src/assets/svg/buttonSVG.svg";
import start from "../../assets/svg/start.svg";
import { motion } from "motion/react";
function PixelatedButton({ className, href, onClick, children, showIcon }) {
  return (
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
      className={`relative w-40 h-30 flex items-center p-7 lg:w-60 lg:h-40 justify-center 
      cursor-pointer z-2 group  ${className || ""}`}
      onClick={onClick}
    >
      <img
        className="absolute inset-0 w-full h-full"
        src={whitebutton}
        alt="Button Background"
      />

      <img
        className="absolute inset-0 w-{full} h-{full}"
        width={300}
        height={200}
        src={buttonSVG}
        alt="Purple Border"
      />

      <span
        className="relative bg-gradient-to-t from-pink-500 via-pink-300 to-white 
      bg-clip-text text-transparent text-[1.5rem] mb-4 uppercase"
      >
        {children}
      </span>

      {showIcon && (
        <img
          src={start}
          className="absolute right-[-6rem] lg:right-[-9rem] w-[80px] lg:w-[90px] 
          transition-transform duration-300 ease-in-out group-hover:translate-x-4"
          alt="Start Icon"
        />
      )}
    </motion.button>
  );
}

export default PixelatedButton;
