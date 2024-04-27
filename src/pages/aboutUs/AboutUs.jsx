import MetaPixel from "../../utils/MetaPixel";
import { useEffect } from "react";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import PageHeader1 from "../../components/shared/pageHeader/PageHeader1";
import Testimonials from "../../components/shared/testimonialCard/Testimonials";
import Members from "./members/Members";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";
const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-[1200px mx-auto px-2]">
      <div
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "1800px 1200px",
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
        <PageHeader1
          pageHeaderTitle={"About Us"}
          description={
            "Meet our leadership team, each proficient in essential domains. Feel confident knowing you're in capable hands with seasoned experts."
          }
        />
      </div>
      <Members />
      <Testimonials />
      <Newsletter />
      <MetaPixel />
    </div>
  );
};

export default AboutUs;
