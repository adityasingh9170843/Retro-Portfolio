import React from "react";

const defaultDots = [
  { top: "5%", left: "10%", color: "white", delay: "0.5s" },
  { top: "12%", left: "35%", color: "#9767BB", delay: "1.2s" },
  { top: "18%", left: "70%", color: "white", delay: "0.8s" },
  { top: "25%", left: "55%", color: "#9767BB", delay: "0.3s" },
  { top: "30%", left: "20%", color: "white", delay: "1s" },
  { top: "35%", left: "80%", color: "#9767BB", delay: "0.7s" },
  { top: "40%", left: "5%", color: "white", delay: "1.5s" },
  { top: "50%", left: "50%", color: "#9767BB", delay: "1s" },
  { top: "60%", left: "10%", color: "white", delay: "0.9s" },
  { top: "65%", left: "75%", color: "#9767BB", delay: "0.5s" },
  { top: "70%", left: "30%", color: "white", delay: "1.3s" },
  { top: "75%", left: "90%", color: "#9767BB", delay: "0.6s" },
  { top: "80%", left: "40%", color: "white", delay: "1.4s" },
  { top: "85%", left: "15%", color: "#9767BB", delay: "0.8s" },
  { top: "90%", left: "60%", color: "white", delay: "1.2s" },
  { top: "95%", left: "45%", color: "#9767BB", delay: "0.7s" },
  { top: "97%", left: "80%", color: "white", delay: "1.5s" },
];

function GalaxyLights({ dots = defaultDots }) {
  return (
    <>
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full opacity-80 animate-flicker"
          style={{
            top: dot.top,
            left: dot.left,
            backgroundColor: dot.color,
            animationDelay: dot.delay,
          }}
        ></div>
      ))}
    </>
  );
}

export default GalaxyLights;
