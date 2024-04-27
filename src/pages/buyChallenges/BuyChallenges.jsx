/* eslint-disable react-hooks/rules-of-hooks */
import MetaPixel from "../../utils/MetaPixel";
import { useLocation } from "react-router-dom";
import JoinDiscord from "../../components/shared/joinDiscord/JoinDiscord";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import Testimonials from "../../components/shared/testimonialCard/Testimonials";
import AccountScale from "./accountScale/AccountScale";
import ThreeStepChallenge from "./threeStepChallenge/ThreeStepChallenge";
import { useEffect } from "react";
import Challenges from "../../components/shared/challenges/Challenges";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png"

const buyChallenges = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "1800px 1200px",
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
        <ThreeStepChallenge />
      </div>
      <Challenges />
      <AccountScale />
      <Testimonials />
      <JoinDiscord />
      <Newsletter />
      <MetaPixel />
    </div>
  );
};

export default buyChallenges;
