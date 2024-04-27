import { MdArrowOutward } from "react-icons/md";
import Button from "../../../button/Button";

const Power100k2Step = () => {
  const challengeDetails = [
    {
      title: "Max Daily Drawdown",
      values: ["5%", "5%", "5%"],
    },
    {
      title: "Max Drawdown",
      values: ["10%", "10%", "10%"],
    },
    {
      title: "Profit Target",
      values: ["10%", "5%", "-"],
    },
    {
      title: "Max Trading Days",
      values: ["Unlimited", "Unlimited", "-"],
    },
    {
      title: "Consistency Rule",
      values: ["No", "No", "Yes"],
    },
    {
      title: "Min Trading Days",
      values: ["5", "5", "5"],
    },
    {
      title: "Leverage",
      values: ["1:50", "1:50", "1:50"],
    },
    {
      title: "Profit Split",
      values: ["-", "-", "Up to 100%"],
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center md:text-left ">
        <h3 className="text-3xl font-semibold mt-5 mb-3">
          2 Step - Power Challenge
        </h3>
        <span className="text-4xl text-[#14F194] font-semibold ">$100,000</span>
      </div>
      {/* challenge details */}
      <div className="w-full overflow-x-auto md:overflow-x-hidden py-10">
        <div className="min-w-[165%] md:min-w-[100%]">
          <div className="h-5 flex">
            <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
            <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
              <div className="border-x border-t border-[#14f19433] w-full rounded-t-2xl"></div>
              <div className=""></div>
              <div className="border-x border-t border-[#14f19433] w-full rounded-t-2xl"></div>
            </div>
          </div>
          {/* headings */}
          <div className="min-h-16 flex">
            <div className="w-2/5 md:w-1/3 lg:w-2/5 "></div>
            <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
              <div className="border-x border-[#14f19433] flex items-center justify-center">
                Phase 1
              </div>
              <div className=" flex items-center justify-center">Phase 2</div>
              <div className="border-x  border-[#14f19433] flex items-center justify-center">
                Funded
              </div>
            </div>
          </div>

          {challengeDetails.map((step, index) => (
            <div key={index} className="min-h-16 flex">
              <div className="w-2/5 md:w-1/3 lg:w-2/5 flex items-center justify-start lg:pl-20">
                {step.title}
              </div>
              <div className="grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5">
                {step.values.map((value, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-center${idx === 1 ? "" : " border-x border-[#14f19433]"}`}
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="h-5 flex">
            <div className="w-2/5 md:w-1/3 lg:w-2/5"></div>
            <div className=" grid grid-cols-3 w-3/5 md:w-2/3 lg:w-3/5 ">
              <div className="border-x border-b border-[#14f19433] w-full rounded-b-2xl"></div>
              <div className=""></div>
              <div className="border-x border-b border-[#14f19433] w-full rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* buy button */}
      <div className="flex justify-center items-center mt-10">
        <Button
          btnName="Buy Challenge - $400"
          btnType="submit"
          classForButton="text-black "
          icon={<MdArrowOutward />}
          bgColor="#14F194"
          to={"https://trader.sureleveragefunding.com/checkout?add-to-cart=207"}
        />
      </div>
    </div>
  );
};

export default Power100k2Step;
