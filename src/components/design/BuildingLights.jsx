import React from "react";

const defaultLights = [
  { top: "15%", left: "10%", delay: "0.5s" },
  { top: "20%", left: "12%", delay: "1.2s" },
  { top: "35%", left: "8%",  delay: "0.8s" },
  { top: "50%", left: "20%", delay: "0.3s" },
  { top: "25%", left: "75%", delay: "1s" },
  { top: "50%", left: "50%", delay: "0.7s" },
];

function BuildingLights({ lights = defaultLights }) {
  return (
    <>
      {lights.map((light, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-flicker"
          style={{
            top: light.top,
            left: light.left,
            animationDelay: light.delay,
          }}
        ></div>
      ))}
    </>
  );
}

export default BuildingLights;
