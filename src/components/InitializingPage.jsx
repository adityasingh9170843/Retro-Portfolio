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
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono">
        Initializing{dots}
      </h1>
      <Waves />

      <BackgroundCircles />
      <GalaxyLights />
    </div>
  );
}

export default Initializing;
