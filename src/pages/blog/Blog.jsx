import { useLocation } from "react-router-dom";
import JoinDiscord from "../../components/shared/joinDiscord/JoinDiscord";
import Newsletter from "../../components/shared/newsletter/Newsletter";
import PageHeader1 from "../../components/shared/pageHeader/PageHeader1";
import BlogThumbnail from "./blogThumbnail/BlogThumbnail";
import SerchBar from "./serchBar/SerchBar";
import { useEffect } from "react";
import MetaPixel from "../../utils/MetaPixel";
import Navbar from "../../components/shared/navbar/Navbar";
import Ellipse from "../../assets/Ellipse 1.png";
const Blog = () => {
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
          pageHeaderTitle={"Our Blog"}
          description={
            "Explore Frequently Asked Questions and Get the Answers You Need!"
          }
        />
      </div>
      <SerchBar />
      <BlogThumbnail />
      <JoinDiscord />
      <Newsletter />
      <MetaPixel />
    </div>
  );
};

export default Blog;
