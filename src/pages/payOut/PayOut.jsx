import { useEffect } from "react";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import PageHeader1 from "../../components/shared/pageHeader/PageHeader1";
import Testimonials from "../../components/shared/testimonialCard/Testimonials";
import Gallery from "./gallery/Gallery";
import { useLocation } from "react-router-dom";
import MetaPixel from "../../utils/MetaPixel";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";
const PayOut = () => {
  // when click button Scrolls to the top of the page when component mounts
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
        <PageHeader1
          pageHeaderTitle={"Payout Collection"}
          description={
            "Join the winning team of traders who have received certified payouts."
          }
        />
      </div>
      <Gallery />
      <Testimonials />
      <Newsletter />
      <MetaPixel />
    </div>
  );
};

export default PayOut;
