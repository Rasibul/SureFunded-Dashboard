// Import React
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Statistic = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2  ">
            {/* section 1 */}
            <div className="md:border-r-[1px]  border-[#14f195ab] p-4 md:pr-4 w-full md:w-1/2">
              <div className="m-4 md:text-left text-center">
                <h1 className="text-white  text-lg md:text-3xl font-semibold">
                  {counterOn && (
                    <CountUp start={0} end={55} duration={1} delay={0} />
                  )}
                  m+
                </h1>
                <p className="text-[#9C9C9C] md:text-sm lg:text-lg text-nowrap font-normal">
                  Total Funded Allocation
                </p>
              </div>
            </div>
            {/* section 2 */}
            <div className="md:border-r-[1px]  border-[#14f195ab]  p-4 md:pr-4 w-full md:w-1/2">
              <div className="m-4 md:text-left text-center">
                <h1 className="text-white  text-lg md:text-3xl font-semibold">
                  {counterOn && (
                    <CountUp start={0} end={152} duration={1} delay={0} />
                  )}
                  +
                </h1>
                <p className="text-[#9C9C9C] md:text-sm lg:text-lg font-normal">
                  Total no. of countries
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:border-none  w-full md:w-1/2">
            {/* section 3 */}
            <div className="p-4 md:pr-4 w-full md:w-1/2">
              <div className="m-4 md:text-left text-center">
                <h1 className="text-white  text-lg md:text-3xl font-semibold">
                  {counterOn && (
                    <React.Fragment>
                      <CountUp end={24} duration={2} />
                      {" / "}
                      <CountUp end={7} duration={2} />
                    </React.Fragment>
                  )}
                </h1>
                <p className="text-[#9C9C9C]  tex md:text-sm lg:text-lg font-normal">
                  Customer Support
                </p>
              </div>
            </div>
            {/* section 4 */}
            <div className="md:border-l-[1px]  border-[#14f195ab] p-4 md:pr-4 w-full md:w-1/2">
              <div className="m-4 md:text-left text-center">
                <h1 className="text-white text-lg md:text-3xl font-semibold">
                  {counterOn && (
                    <CountUp start={0} end={2000} duration={1} delay={0} />
                  )}
                  
                </h1>
                <p className="text-[#9C9C9C] md:text-sm lg:text-lg font-normal">
                  Free custom indicators
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      
    </section>
  );
};

export default Statistic;
