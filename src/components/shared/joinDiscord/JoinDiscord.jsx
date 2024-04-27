import { MdArrowOutward } from "react-icons/md";
import discordIcon from "../../../assets/discord.png";
import bgImage from "../../../assets/bg.png";
import Button from "../button/Button";
import { FaDiscord } from "react-icons/fa";

const JoinDiscord = () => {
  return (
    <div>
      <div
        className="max-w-[1200px] mx-auto flex flex-col items-center px-2 pb-4 md:pb-8 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "510px 508px",
        }}
      >
        <div className="flex items-center justify-center lg:px-10 py-4 md:px-40  bg-cover">
          <div className="w-[285px] h-[220px] mb-5">
            <img src={discordIcon} alt="discordIcon" />
          </div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-center md:text-left">
          Join us on Discord
        </h2>
        <p className="lg:text-lg my-3 lg:my-6 font-medium text-white/60 text-center md:text-left">
          Become a citizen of our Discord community, where traders connect,
          learn, and thrive together.
        </p>
        <div className="flex items-center gap-2 sm:gap-5">
          <Button
            to={"https://discord.com/invite/EfAkCKM6Qv"}
            btnName="Join Now"
            btnType="submit"
            classForButton="text-black bg-white "
            icon={<FaDiscord />}
          />
          <Button
            to={"https://sureleverage.com/checkout/"}
            btnName="Buy Challenges"
            btnType="submit"
            classForButton="text-white "
            icon={<MdArrowOutward />}
            bgColor="#9C42FF"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinDiscord;
