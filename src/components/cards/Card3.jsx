// eslint-disable-next-line react/prop-types
const Card3 = ({ icon, titleHighliterStart,descriptionHighliter, title, description }) => {
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
              <div className="lg:w-[358px] lg:h-[240px] w-fit h-fit pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5 ">
                <img
                  className="mt-[-150px] mb-[8px]  w-24 md:w-fit"
                  src={icon}
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                    <span className="text-[#14F194]">
                      {titleHighliterStart}
                    </span>
                    {title}
                  </h2>
                  <p className="text-[#9F9F9F]">{description}</p>
                  <p className="text-[#14F194] underline underline-offset-4">{descriptionHighliter}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
