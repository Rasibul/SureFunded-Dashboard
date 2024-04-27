
import scale from "../../../assets/scale.png";
const AccountScale = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-36 mb-24 px-2 ">
      <div className="flex items-center justify-center ">
        <div
          className=" p-[2px]  rounded-[25px] w-full "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, .07),rgba(23, 23, 23, 1))",
          }}
        >
          <div className="p-[1px] rounded-[25px] bg-primary-bg-color w-full">
            <div
              className="p-[2px] rounded-[25px] justify-center items-center flex w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20, 241, 148, .2), rgba(23, 23, 23, 1))",
              }}
            >
              <div className="rounded-[25px]  justify-center items-start  flex bg-primary-bg-color w-full">
                <div className="w-full  h-full  pt-[100px] pb-[49px] flex flex-col justify-start items-center gap-5 px-5  ">
                  <img
                    className="mt-[-150px] mb-[8px]  w-24 md:w-fit"
                    src={scale}
                    alt="icon"
                  />
                  <div className="text-center">
                    <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                      <span className="text-[#14F194]">
                        Scale Your Capital.
                      </span>{" "} 
                    </h2>
                    <p className="text-[#9F9F9F]">Your funded account will be increased by <span className="text-[#14F194]">25%</span> if you remain profitable for three months!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountScale;
