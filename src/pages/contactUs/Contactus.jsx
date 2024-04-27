import MetaPixel from "../../utils/MetaPixel";
import { useLocation } from "react-router-dom";
import JoinDiscord from "../../components/shared/joinDiscord/JoinDiscord";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import PageHeader1 from "../../components/shared/pageHeader/PageHeader1";
import ContactCard from "./contactCard/ContactCard";
import ContactFrom from "./contactFrom/ContactFrom";
import { useEffect } from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";
const Contactus = () => {
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
          pageHeaderTitle={"Contact Us"}
          description={"Feel free to drop us a message with any questions"}
        />
      </div>

      <ContactFrom />
      <ContactCard />
      <JoinDiscord></JoinDiscord>
      <Newsletter></Newsletter>
      <MetaPixel />
    </div>
  );
};

export default Contactus;
