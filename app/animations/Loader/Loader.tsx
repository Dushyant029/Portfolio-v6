"use cleint";
import { useEffect } from "react";
import { LoaderAnim } from "./load";
import "./loader.css";

const Loader = () => {
  useEffect(() => {
    LoaderAnim();
  }, []);

  return (
    <div className="loader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Learner.</span>
        <span>Designer.</span>
        <span>Developer.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default Loader;
