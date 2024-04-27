import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Popup from "../../utils/Popup";

const MainLayout = () => {
  return (
    <div className="bg-primary-bg-color">
      <div>
        <Outlet />
      </div>
    <Popup></Popup>
      <Footer />
    </div>
  );
};

export default MainLayout;
