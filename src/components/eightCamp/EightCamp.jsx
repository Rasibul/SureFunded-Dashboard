import { MdArrowOutward } from "react-icons/md";
import Button from "../shared/button/Button";
import Eightcap from "../../assets/Eightcap.png"

/* eslint-disable react/no-unescaped-entities */
const EightCamp = () => {
 
  return (
    <div className="max-w-[1200px]  mx-auto  flex flex-col-reverse md:flex-row justify-between items-center gap-16 px-2">
      <div className="w-full md:w-1/2">
        <img src={Eightcap} alt="" />
      </div>
      <div className=" space-y-4 w-full md:w-1/2 text-center md:text-right ">
        <span className="text-base lg:text-lg text-white/60 font-medium ">
          The Broker we use..
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">
          Eightcap
        </h2>
        <p className="text-white text-sm  text-left md:text-right  md::text-base font-medium">
          A regulated broker offering swift execution, tight spreads,and more.
          Eightcap Global Limited, overseen by The Securities Commission of The
          Bahamas (SCB) (SIA- F220), ensures a secure trading environment for
          your peace of mind.
        </p>
        <div className=" flex justify-start items-start md:justify-end md:items-end">
        <Button
            to={"/buyChallenges"}
            btnName="Buy Challenges"
            btnType="submit"
            classForButton="text-black"
            icon={<MdArrowOutward />}
            bgColor="#14F194"
          />
        </div>
      </div>
    </div>
  );
};

export default EightCamp;
