import MetaPixel from "../../utils/MetaPixel";
import Banner from "./banner/Banner";
import Challenges from "../../components/shared/challenges/Challenges";
import EightCamp from "../../components/eightCamp/EightCamp";
import PlatForm from "../../components/platForm/PlatForm";
import JoinDiscord from "../../components/shared/joinDiscord/JoinDiscord";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import Testimonials from "../../components/shared/testimonialCard/Testimonials";
import SpecialOffer from "../../components/specialOffer/SpecialOffer";
import Statistic from "../../components/statistic/Statistic";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";

const Home = () => {
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
        <Banner />
      </div>
      <Statistic />
      <SpecialOffer />
      <Challenges />
      <Testimonials />
      <PlatForm />
      <EightCamp />
      <JoinDiscord />
      <Newsletter />
      <MetaPixel />
    </div>
  );
};

export default Home;
