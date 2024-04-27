/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const TestimonialCard = ({ name, icon, title, description, to }) => {
  return (
    <>
      <Link to={to} className="block">
        <div className="mr-10 sm:flex flex-col w-[300px] h-[350px] md:w-[380px] md:h-[300px] px-3 py-8 bg-[#2E2E2E] backdrop-blur-[6.150000095367432px] rounded-[25px] border border-white border-opacity-10">
          <div className="divide-y divide-[#363636]">
            <div className="justify-between items-center flex mb-4">
              <h2 className="text-slate-50 text-lg font-bold">{name}</h2>
              <img src={icon} alt="icon" />
            </div>
            <div></div>
          </div>
          <div className="text-white text-base font-semibold mt-4 mb-4">
            {title}
          </div>
          <div className="text-stone-300 text-base">{description}</div>
        </div>
      </Link>
    </>
  );
};

export default TestimonialCard;
