import React, { useState, useEffect } from "react";
import Waves from "./design/Waves";
import BuildingLights from "./design/BuildingLights";
import { BackgroundCircles } from "./design/Galaxy";
import GalaxyLights from "./design/GalaxyLights";
import { useNavigate } from "react-router-dom";
function Initializing() {
  const navigate = useNavigate();
  const [dots, setDots] = useState("");
  useEffect(() => {
    
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    
    const redirectTimeout = setTimeout(() => {
      navigate("/"); 
    }, 4500);

    return () => {
      clearInterval(dotInterval); 
      clearTimeout(redirectTimeout); 
    };
  }, [navigate]);

  return (
    <div className="relative w-full h-screen bg-black">
      <h1 className="text-white text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Initializing{dots}
      </h1>
      <Waves />

      <BackgroundCircles />
      <GalaxyLights />
    </div>
  );
}

export default Initializing;
