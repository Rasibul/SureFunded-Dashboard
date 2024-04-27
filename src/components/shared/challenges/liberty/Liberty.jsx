import { useState } from "react";
import Button from "../../button/Button";
import Liberty10k from "./liberty10k/Liberty10k";
import Liberty25k from "./liberty25k/Liberty25k";
import Liberty50k from "./liberty50k/Liberty50k";
import Liberty100k from "./liberty100k/Liberty100k";
import Liberty200k from "./liberty200k/Liberty200k";

const Liberty = () => {
  const [isActive, setIsActive] = useState("$100,000");

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
              <div className="flex flex-col-reverse lg:flex-row gap-5 items-center justify-center">
                <div className="grid gap-4  md:grid-cols-5 md:py-[10px] px-2  md:p-[10px] max-w-[814px] w-full  rounded-full ">
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
              </div>
              <div>
                {isActive === "$10,000" && <Liberty10k />}
                {isActive === "$25,000" && <Liberty25k />}
                {isActive === "$50,000" && <Liberty50k />}
                {isActive === "$100,000" && <Liberty100k />}
                {isActive === "$200,000" && <Liberty200k />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liberty;
