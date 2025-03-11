import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-[#1B1B2E] shadow-xl rounded-b-[1.25rem] lg:[h-6] lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-[#1B1B2E]/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[75rem] aspect-square border border-[#CAC6DD]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-[#CAC6DD]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-[#CAC6DD]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[45rem] aspect-square border border-[#CAC6DD]/15 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-[#CAC6DD]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[30rem] aspect-square border border-[#CAC6DD]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
     
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 w-[90rem] aspect-square border border-[#CAC6DD]/5 rounded-full -translate-x-1/2 -translate-y-1/2">
      <Rings />
      
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-[10%] left-[20%] w-0.25 h-1/2 origin-bottom rotate-[30deg]">
          <div className={`w-5 h-5 -ml-2 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>

        <div className="absolute bottom-[5%] right-[15%] w-0.25 h-1/2 origin-bottom -rotate-[40deg]">
          <div className={`w-3 h-3 -ml-1 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>

        <div className="absolute bottom-[8%] left-[35%] w-0.25 h-1/2 origin-bottom rotate-[50deg]">
          <div className={`w-6 h-6 -ml-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>

        <div className="absolute bottom-[12%] right-[30%] w-0.25 h-1/2 origin-bottom rotate-[60deg]">
          <div className={`w-4 h-4 -ml-2 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>
        <div className="absolute bottom-[18%] right-[-10%] w-0.25 h-1/2 origin-bottom rotate-[60deg]">
          <div className={`w-4 h-4 -ml-2 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>
        <div className="absolute bottom-[-20%] left-[-10%] w-0.25 h-1/2 origin-bottom rotate-[50deg]">
          <div className={`w-6 h-6 -ml-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>
        <div className="absolute bottom-[-20%] left-[-30%] w-0.25 h-1/2 origin-bottom rotate-[50deg]">
          <div className={`w-6 h-6 -ml-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
        </div>
      </MouseParallax>
    </div>
  );
};
