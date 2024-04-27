import { useState } from "react";
import Button from "../../button/Button";
import SuperElite10k2Step from "./superElite10k/SuperElite10k2Step";
import SuperElite10k1Step from "./superElite10k/SuperElite10k1Step";
import SuperElite25k1Step from "./superElite25k/SuperElite25k1Step";
import SuperElite25k2Step from "./superElite25k/SuperElite25k2Step";
import SuperElite50k1Step from "./superElite50k/SuperElite50k1Step";
import SuperElite50k2Step from "./superElite50k/SuperElite50k2Step";
import SuperElite100k1Step from "./superElite100k/SuperElite100k1Step";
import SuperElite100k2Step from "./superElite100k/SuperElite100k2Step";
import SuperElite200k2Step from "./superElite200k/SuperElite200k2Step";
import SuperElite200k1Step from "./superElite200k/SuperElite200k1Step";

const SuperElite = () => {
  const [isActive, setIsActive] = useState("$100,000");
  const [twoStep, setTwoStep] = useState(true);

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className=" p-[1px]  rounded-[25px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, .07),rgba(23, 23, 23, 1))",
        }}
      >
        <div className="p-[1px]  rounded-[25px] bg-primary-bg-color w-full">
          <div
            className="p-[2px]  rounded-[25px]  justify-center items-center flex w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20, 241, 148, .2), rgba(23, 23, 23, 1))",
            }}
          >
            <div className="bg-primary-bg-color text-white rounded-[25px] text-center p-2 md:p-10 w-full divide-y divide-[#14f19433] space-y-5">
              <div className="flex flex-col-reverse lg:flex-row gap-5 items-center ">
                <div className="grid gap-4  md:grid-cols-5 md:py-[10px] px-2  md:p-[10px] max-w-[814px] w-full  rounded-full  ">
                  <Button
                    btnName="$10,000"
                    btnType="submit"
                    classForButton={` w-full flex justify-center px-1 py-1 sm:py-2  ${isActive === "$10,000" ? "bg-[#14F194] text-black" : "text-white bg-white/10"}`}
                    onClick={() => setIsActive("$10,000")}
                  />
                  <Button
                    btnName="$25,000"
                    btnType="submit"
                    classForButton={` w-full flex justify-center px-1 py-1 sm:py-2  ${isActive === "$25,000" ? "bg-[#14F194] text-black" : " text-white bg-white/10"}`}
                    onClick={() => setIsActive("$25,000")}
                  />
                  <Button
                    btnName="$50,000"
                    btnType="submit"
                    classForButton={`  w-full flex justify-center px-1 py-1 sm:py-2 ${isActive === "$50,000" ? "bg-[#14F194] text-black" : "  text-white bg-white/10"}`}
                    onClick={() => setIsActive("$50,000")}
                  />
                  <Button
                    btnName="$100,000"
                    btnType="submit"
                    classForButton={`  w-full flex justify-center px-1 py-1 sm:py-2 ${isActive === "$100,000" ? "bg-[#14F194] text-black" : "  text-white bg-white/10"}`}
                    onClick={() => setIsActive("$100,000")}
                  />
                  <Button
                    btnName="$200,000"
                    btnType="submit"
                    classForButton={`  w-full flex justify-center px-1 py-1 sm:py-2 ${isActive === "$200,000" ? "bg-[#14F194] text-black" : "  text-white bg-white/10"}`}
                    onClick={() => setIsActive("$200,000")}
                  />
                </div>
                <div className="flex items-center justify-center gap-4 max-w-[236px] w-full">
                  <label
                    htmlFor="Toggle1"
                    className="flex items-center justify-center gap-4 max-w-[236px] w-full cursor-pointer "
                  >
                    <span>2-Step</span>
                    <span className="relative">
                      <input
                        id="Toggle1"
                        type="checkbox"
                        className="hidden peer"
                        onClick={() => setTwoStep(!twoStep)}
                      />
                      <div className="w-20 h-10 rounded-full shadow-inner bg-white/10 "></div>
                      <div className="absolute inset-y-0 left-0 w-8 h-8 m-1  bg-[#14F194] rounded-full  peer-checked:right-0 peer-checked:left-auto "></div>
                    </span>
                    <span>1-Step</span>
                  </label>
                </div>
              </div>
              <div>
                {(isActive === "$10,000" && twoStep && (
                  <SuperElite10k2Step />
                )) ||
                  (isActive === "$10,000" && <SuperElite10k1Step />)}
                {(isActive === "$25,000" && twoStep && (
                  <SuperElite25k2Step />
                )) ||
                  (isActive === "$25,000" && <SuperElite25k1Step />)}
                {(isActive === "$50,000" && twoStep && (
                  <SuperElite50k2Step />
                )) ||
                  (isActive === "$50,000" && <SuperElite50k1Step />)}
                {(isActive === "$100,000" && twoStep && (
                  <SuperElite100k2Step />
                )) ||
                  (isActive === "$100,000" && <SuperElite100k1Step />)}
                {(isActive === "$200,000" && twoStep && (
                  <SuperElite200k2Step />
                )) ||
                  (isActive === "$200,000" && <SuperElite200k1Step />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperElite;
