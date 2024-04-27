import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/footer/Footer";
import Popup from "../../utils/Popup";

const MainLayout = () => {
  // const [overlay,setOverlay] = useState(false)
  // console.log(overlay)
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
