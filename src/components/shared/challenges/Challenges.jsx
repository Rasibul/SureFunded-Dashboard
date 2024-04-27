import { useState } from "react";
import Button from "../button/Button";
import { HiMiniChartPie } from "react-icons/hi2";
import Power from "./power/Power";
import Hft from "./HFT/Hft";
import { useLocation } from "react-router-dom";
import Liberty from "./liberty/Liberty";

const Challenges = () => {
  const [isActive, setIsActive] = useState("Power");
  const location = useLocation();

  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-2 flex flex-col items-center justify-center">
        {location.pathname === "/" && (
          <>
            <h2 className="bg-gradient-to-r from-[#14F194] to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold py-2">
              Our Challenges
            </h2>
            <p className="lg:text-lg font-medium text-white/60 text-center md:text-left">
              Each of our challenges offer unique benefits: Liberty - no
              consistency rule, Power - free reset on failure, HFT - quick pass.
            </p>
          </>
        )}
        <div className="grid md:grid-cols-3 py-[10px] px-2  md:p-[10px] max-w-[914px] w-full gap-2 md:gap-10 md:bg-white/10 rounded-lg md:rounded-full mb-10 mt-5">
          {/* power */}
          <div>
            <div className="text-[#14F194] -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center   justify-center">
              <div className=" border bg-[#2e2e2e] border-[#14F194] rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
                <HiMiniChartPie />
                <span>Free Reset</span>
              </div>
            </div>
            <Button
              btnName="Power"
              btnType="submit"
              classForButton={` w-full flex justify-center px-1 py-1 sm:py-2  ${isActive === "Power" ? "bg-[#14F194] text-black" : "text-white bg-white/10 md:bg-transparent"}`}
              onClick={() => setIsActive("Power")}
            />
          </div>
          <div>
            <div className="text-[#14F194] -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center   justify-center">
              <div className=" border bg-[#2e2e2e] border-[#14F194] rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
                <HiMiniChartPie />
                <span>No Consistency Rules</span>
              </div>
            </div>
            <Button
              btnName="Liberty"
              btnType="submit"
              classForButton={` w-full flex justify-center px-1 py-1 sm:py-2  ${isActive === "Liberty" ? "bg-[#14F194] text-black" : " text-white bg-white/10 md:bg-transparent"}`}
              onClick={() => setIsActive("Liberty")}
            />
          </div>
          {/* HFT */}
          <div>
            <div className="text-[#14F194] -mb-2 md:mb-1 md:-mt-5 px-2 text-[10px] flex items-center  justify-center">
              <div className=" border bg-[#2e2e2e] border-[#14F194] rounded-full px-2 text-[10px] flex items-center gap-1 justify-center">
                <HiMiniChartPie />
                <span>Pass it Fast</span>
              </div>
            </div>
            <Button
              btnName="HFT"
              btnType="submit"
              classForButton={`  w-full flex justify-center px-1 py-1 sm:py-2 ${isActive === "HFT" ? "bg-[#14F194] text-black" : "  text-white bg-white/10 md:bg-transparent"}`}
              onClick={() => setIsActive("HFT")}
            />
          </div>
        </div>
        {isActive === "Power" && <Power />}
        {isActive === "Liberty" && <Liberty />}
        {isActive === "HFT" && <Hft />}
      </div>
    </div>
  );
};

export default Challenges;
