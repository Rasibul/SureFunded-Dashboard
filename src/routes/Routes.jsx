import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/mainLayout/MainLayout";
import PayOut from "../pages/payOut/PayOut";
import Blog from "../pages/blog/Blog";
import Contactus from "../pages/contactUs/Contactus";
import Faq from "../pages/faq/Faq";
import BuyChallenges from "../pages/buyChallenges/BuyChallenges"
import AboutUs from "../pages/aboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buyChallenges",
        element: <BuyChallenges />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "payouts",
        element: <PayOut />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contactus />
      },
    ],
  },
]);

export default router;
