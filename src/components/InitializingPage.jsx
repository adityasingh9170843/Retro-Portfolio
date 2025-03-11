import React from "react";
import Waves from "./design/Waves";
import BuildingLights from "./design/BuildingLights";
function Initializing() {
  return (
    <div className="relative w-full h-screen bg-black">
      <h1 className="text-white text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Initializing...
      </h1>
      <Waves />
      <BuildingLights />
    </div>
  );
}

export default Initializing;
