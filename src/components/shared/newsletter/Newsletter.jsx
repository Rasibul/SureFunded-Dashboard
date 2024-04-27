import newletter from "../../../assets/newsletter.png";
import Button from "../button/Button";

const Newsletter = () => {
  return (
    <div className="px-2 mt-10 ">
      <div
        className="max-w-[1200px] mx-auto flex border border-white/5 lg:h-80 rounded-3xl border-white bg-opacity-60 backdrop-blur-lg shadow-xl -mb-10 "
        style={{
          background:
            "linear-gradient(20deg,rgba(20, 241, 148, 0.05), #171717 )",
        }}
      >
        <div className="md:w-2/3 lg:w-1/2 md:p-8 lg:p-14 rounded-3xl flex flex-col items-center md:items-start py-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white text-center md:text-left">
            Subscribe to Our Newsletter
          </h2>
          <p className="lg:text-lg my-3 lg:my-6 font-medium  text-white/60 text-center md:text-left">
            Be the first to receive the latest updates.
          </p>
          <div className="flex items-center bg-[#CACACA]/10 w-fit rounded-full pl-5 ">
            <form action="">
              <input
                type="email"
                className="bg-transparent focus:outline-none text-white w-44 md:w-full"
                placeholder="Your email"
              />
            </form>
            <Button
              btnName="Submit"
              btnType="submit"
              classForButton="text-black"
              bgColor="#14F194"
            />
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/2 flex justify-end items-center lg:px-12">
          <img
            className="rounded-3xl hidden md:block w-[338px] h-[251px] "
            alt=""
            src={newletter}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
