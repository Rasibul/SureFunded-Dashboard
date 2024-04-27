import Footer from "../../../components/shared/footer/Footer";
import Navbar from "../../../components/shared/navbar/Navbar";
import Ellipse from "../../../assets/Ellipse 1.png";
import DashBoardRoute from "./dashBoardRoute/DashBoardRoute";

const DashBoard = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "1800px 1200px",
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-primary-bg-color">
          <Navbar />
          <DashBoardRoute />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashBoard;
