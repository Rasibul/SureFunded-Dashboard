import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const PageHeader1 = ({pageHeaderTitle,description,classForTitle}) => {
  const location = useLocation()
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className={`bg-gradient-to-r from-[#14F194] to-[#ffffff] text-transparent bg-clip-text text-3xl lg:text-5xl font-bold mb-[15px] mt-[78px] ${classForTitle}`}>
        {pageHeaderTitle}
      </h2>
      <p className="lg:text-lg font-medium text-white/60 text-center  md:w-[684px] w-full mb-[84px]">
        {description} <br />
        {
          location.pathname === "/contact" ? "or remarks you may have!" : ""
        }
      </p>
    </div>
  );
};

export default PageHeader1;
