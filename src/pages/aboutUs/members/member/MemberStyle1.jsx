/* eslint-disable react/prop-types */

const MemberStyle1 = ({ title, name, description, image, classForCard }) => {
  return (
    <div className="pt-16 sm:pt-36 lg:py-24 overflow-hidden px-1 ">
      <div className={`  ${classForCard} relative   lg:w-5/6  rounded-l-3xl bg-[#121212] md:p-5 pt-24 pb-5 px-2`}  >
        
        <div className="w-full">
          <h2 className="text-[#9F9F9F] md:font-medium md:text-base mb-5">{title}</h2>
          <span className="text-3xl md:text-4xl font-bold text-white">{name}</span>
          <p className="text-[#9F9F9F] md:text-base md:font-medium mt-6 lg:max-w-[580px]">
            {description}
          </p>
        </div>
        <img className=" absolute w-56 h-56  -top-24 -right-10 sm:-right-0 sm:w-96 sm:h-96 lg:w-auto lg:h-auto  sm:-top-48 md:-right-16 lg:-top-40 lg:-right-64 xl:-right-72 " src={image} alt="team image " />
      </div>
    </div>
  );
};

export default MemberStyle1;
