/* eslint-disable react/prop-types */

const Card1 = ({ icon,title,description,titleHighliterStart,titleHighliterEnd }) => {
  
  return (
    <div className="flex items-center justify-center ">
      <div
        className=" p-[2px]  rounded-[25px] "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, .07),rgba(23, 23, 23, 1))",
        }}
      >
        <div className="p-[1px]  rounded-[25px] bg-primary-bg-color">
          <div
            className="p-[2px]  rounded-[25px]  justify-center items-center flex "
            style={{
              backgroundImage:
                "linear-gradient(rgba(20, 241, 148, .2), rgba(23, 23, 23, 1))",
            }}
          >
            <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color ">
              <div className="xl:w-[271px] xl:h-[283px] lg:w-[200px] lg:h-[240px] w-[294px] pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 ">
                <img
                  className="mt-[-150px] mb-[28px] w-[116px] h-[102px] "
                  src={icon}
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                    <span className="text-[#14F194]">
                     {titleHighliterStart}
                    </span>  {title} <br />
                    <span className="text-[#14F194]  ">
                     {titleHighliterEnd}
                    </span> 
                  </h2>
                  <p className="text-[#9F9F9F]">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
