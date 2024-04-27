import { FaDiscord } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Button from "../../../components/shared/button/Button";
import DashBoard from "../../../assets/Dashboard.png";
import DashBoardMobile from "../../../assets/DashboardMobile.png";
import bgImage from "../../../assets/bg1.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "800px 650px",
      }}
      className="max-w-[1200px] mx-auto  flex flex-col md:flex-row justify-between items-center gap-10 p-10 md:py-16 lg:py-32 px-2 bg-no-repeat bg-right-top"
    >
      <div className="md:w-2/3 lg:w-1/2">
        <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-normal">
          Minimise Risk, <br />
          <span className="text-[#14F194]">Free Reset.</span>
        </h2>
        <p className="lg:text-lg my-3 lg:my-6 font-medium  text-white/60">
          The only prop firm offering a free funded reset upon failure, with the
          added benefit of keeping up to 100% of your profits.
        </p>
        <div className="flex items-center gap-5">
          <Button
            to={"/buyChallenges"}
            btnName="Buy Challenges"
            btnType="submit"
            classForButton="text-black text-nowrap"
            icon={<MdArrowOutward />}
            bgColor="#14F194"
          />
          <Button
            to={"https://discord.com/invite/EfAkCKM6Qv"}
            btnName="Discord"
            btnType="submit"
            classForButton="text-black bg-white"
            icon={<FaDiscord />}
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          className="md:w-[480px] md:h-[345] lg:w-[600px] lg:h-[400px]"
          src={DashBoard}
          alt="bannerImage"
        />
      </div>
      <div className="lg:hidden">
        <img src={DashBoardMobile} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
