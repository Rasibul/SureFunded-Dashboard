import Newsletter from "../../components/shared/newsletter/Newsletter";
import bgFAQ from "../../assets/faq.png";
import { useEffect, useState } from "react";
import Button from "../../components/shared/button/Button";
import PromotionsAndFees from "./promotionsAndFees/PromotionsAndFees";
import PlatformsPasswordsAndPortal from "./platformsPasswordsAndPortal/PlatformsPasswordsAndPortal";
import ChallengeDetails from "./challengeDetails/ChallengeDetails";
import PurchaseAndEligibility from "./purchaseAndEligibility/PurchaseAndEligibility";
import General from "./rules/General";
import Power from "./rules/Power";
import Hft from "./rules/Hft";
import Liberty from "./rules/Liberty";
import { useLocation } from "react-router-dom";
import PageHeader1 from "../../components/shared/pageHeader/PageHeader1";
import MetaPixel from "../../utils/MetaPixel";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";

const Faq = () => {
  const [isActive, setIsActive] = useState("general");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "1800px 1200px",
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
        {/* page header */}
        <div className="flex justify-between text-cneter">
          <PageHeader1
            pageHeaderTitle={"Frequently Asked Questions"}
            description={
              " Explore Frequently Asked Questions and Get the Answers You Need!"
            }
            classForTitle="text-center"
          />
          {/* bg img */}
          <div className="hidden lg:flex">
            <img
              src={bgFAQ}
              alt=""
              className="sm:w-[260px] lg:w-[320px] xl:w-[400px]"
            />
          </div>
        </div>
      </div>
      {/* category buttons */}
      <div className="px-2 text-white mt-5">
        <p className="text-white/60">Categories</p>
        <div className="flex flex-wrap lg::justify-center py-[10px] px-2  md:p-[10px] w-fit gap-2 xl:gap-6 md:bg-white/10 rounded-lg xl:rounded-full mb-2 mt-2">
          <Button
            btnName="Rules"
            btnType="submit"
            classForButton={` w-fit flex justify-center  ${isActive === "rules" || isActive === "general" || isActive === "power" || isActive === "liberty" || isActive === "HFT" ? "bg-[#14F194] text-black" : "text-white bg-white/10 "}`}
            onClick={() => setIsActive("rules")}
          />
          <Button
            btnName="Promotions & Fees"
            btnType="submit"
            classForButton={` w-fit flex justify-center  ${isActive === "promotions&Fees" ? "bg-[#14F194] text-black" : "text-white bg-white/10 "}`}
            onClick={() => setIsActive("promotions&Fees")}
          />
          <Button
            btnName="Platforms, Passwords and Portal"
            btnType="submit"
            classForButton={` w-fit flex justify-center  ${isActive === "platformsPasswordsAndPortal" ? "bg-[#14F194] text-black" : "text-white bg-white/10 "}`}
            onClick={() => setIsActive("platformsPasswordsAndPortal")}
          />
          <Button
            btnName="Challenge Details"
            btnType="submit"
            classForButton={` w-fit flex justify-center  ${isActive === "challengeDetails" ? "bg-[#14F194] text-black" : "text-white bg-white/10 "}`}
            onClick={() => setIsActive("challengeDetails")}
          />
          <Button
            btnName="Purchase & Eligibility"
            btnType="submit"
            classForButton={` w-fit flex justify-center  ${isActive === "purchase&Eligibility" ? "bg-[#14F194] text-black" : "text-white bg-white/10 "}`}
            onClick={() => setIsActive("purchase&Eligibility")}
          />
        </div>
      </div>
      {/* sub category buttons */}
      <div className="px-2">
        {isActive === "rules" ||
        isActive === "general" ||
        isActive === "power" ||
        isActive === "liberty" ||
        isActive === "HFT" ? (
          <div className="flex flex-wrap lg:justify-center py-[10px]  md:p-[10px] w-fit gap-2 lg:gap-6 md:bg-white/10 rounded-lg xl:rounded-full  px-2 ">
            <Button
              btnName="General Rules"
              btnType="submit"
              classForButton={`w-fit flex justify-center ${isActive === "rules" || isActive === "general" ? "bg-[#14F194] text-black" : "text-white bg-white/10"}`}
              onClick={() => setIsActive("general")}
            />
            <Button
              btnName="Power Rules"
              btnType="submit"
              classForButton={`w-fit flex justify-center ${isActive === "power" ? "bg-[#14F194] text-black" : "text-white bg-white/10"}`}
              onClick={() => setIsActive("power")}
            />
            <Button
              btnName="Liberty Rules"
              btnType="submit"
              classForButton={`w-fit flex justify-center ${isActive === "liberty" ? "bg-[#14F194] text-black" : "text-white bg-white/10"}`}
              onClick={() => setIsActive("liberty")}
            />
            <Button
              btnName="HFT Rules"
              btnType="submit"
              classForButton={`w-fit flex justify-center ${isActive === "HFT" ? "bg-[#14F194] text-black" : "text-white bg-white/10"}`}
              onClick={() => setIsActive("HFT")}
            />
          </div>
        ) : null}
      </div>

      {isActive === "rules" || isActive === "general" ? <General /> : null}
      {isActive === "power" && <Power />}
      {isActive === "HFT" && <Hft />}
      {isActive === "liberty" && <Liberty />}
      {isActive === "promotions&Fees" && <PromotionsAndFees />}
      {isActive === "platformsPasswordsAndPortal" && (
        <PlatformsPasswordsAndPortal />
      )}
      {isActive === "challengeDetails" && <ChallengeDetails />}
      {isActive === "purchase&Eligibility" && <PurchaseAndEligibility />}
      <Newsletter></Newsletter>
      <MetaPixel />
    </div>
  );
};

export default Faq;
