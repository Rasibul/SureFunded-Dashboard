/* eslint-disable react/no-unescaped-entities */
import mt4 from "../../assets/mt4.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import mark from "../../assets/mark.png";
import { Link } from "react-router-dom";

const PlatForm = () => {
  return (
    <div className="max-w-[1200px]  mx-auto  flex flex-col md:flex-row justify-between items-center gap-10 mb-10 px-2 relative overflow-hidden lg:py-8 xl:py-10">
      <div className=" space-y-4 w-fit md:w-1/2  text-center md:text-left">
        <span className="text-lg text-white/60 font-medium ">
          The Platform we use.
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-white ">
          MetaTrader 4 <br /> Trusted and Reliable
        </h2>
        <div className=" flex justify-center items-center gap-4">
          <img src={mark} alt="mark" />
          <p className="text-white text-sm text-left lg:text-base font-medium ">
            Get a superior trading edge by utilizing a familiar platform. It
            offers intuitive features that empower swift decision-making.
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4">
          <img src={mark} alt="mark" />
          <p className="text-white text-sm text-left lg:text-base font-medium ">
            Exclusive access to a renowned and trusted platform reserved for
            select firms..
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4">
          <img src={mark} alt="mark" />
          <p className="text-white text-sm text-left lg:text-base font-medium ">
            Seize opportunities with speed and precision on this intuitive and
            user-friendly platform designed to facilitate swift action.
          </p>
        </div>
        <div className="flex items-center gap-5 w-32 lg:w-fit">
          <Link to={"https://www.eightcap.com/en/platforms/metatrader-4/"}>
            <img src={frame1} alt="google button" />
          </Link>
          <img src={frame2} alt="apple button" />
        </div>
      </div>

      <div className="md:absolute md:-right-36 lg:-right-48 xl:-right-52 overflow-hidden">
        <img
          src={mt4}
          alt=""
          className="  md:w-[680px] lg:w-[880px] xl:w-[980px] "
        />
      </div>
    </div>
  );
};

export default PlatForm;
