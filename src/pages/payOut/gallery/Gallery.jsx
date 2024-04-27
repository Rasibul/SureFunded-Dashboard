import { MdArrowOutward } from "react-icons/md";
import Button from "../../../components/shared/button/Button";
import image1 from "../../../assets/image1.jpeg";
import image2 from "../../../assets/image2.jpeg";
import image3 from "../../../assets/image3.jpeg";
import image4 from "../../../assets/image4.jpeg";
import image5 from "../../../assets/image5.jpeg";
import image6 from "../../../assets/image6.jpeg";
import image7 from "../../../assets/image7.jpeg";
import image8 from "../../../assets/image8.jpeg";
import image9 from "../../../assets/image9.jpeg";
import image10 from "../../../assets/image10.jpeg";
import image11 from "../../../assets/image11.jpeg";
import image12 from "../../../assets/image12.jpeg";

const Gallery = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-12 px-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        <img
          src={image1}
          alt="certificate"
          className="rounded-lg place-self-center"
        />

        <div className="flex justify-center h-fit">
          <img src={image2} alt="certificate" className="rounded-lg" />
        </div>

        <img
          src={image3}
          alt="certificate"
          className="rounded-lg place-self-center"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="mt-4 place-self-center">
          <img src={image4} alt="certificate" className="rounded-lg" />
        </div>
        <div className="mt-4 place-self-center">
          <img src={image5} alt="certificate" className="rounded-lg" />
        </div>
        <div className="relative mt-4 place-self-center ">
          <img src={image6} alt="certificate" className="rounded-lg blur" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <h2 className=" text-white text-center text-2xl lg:text-4xl font-bold py-10  lg:py-20">
                Get Your Own <br /> Payout
              </h2>
              <Button
                to={"/buyChallenges"}
                btnName="Buy Challenges"
                btnType="submit"
                classForButton="text-black w-full"
                icon={<MdArrowOutward />}
                bgColor="#14F194"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        <img
          src={image7}
          alt="certificate"
          className="rounded-lg place-self-center mt-4"
        />

        <div className="flex justify-center h-fit mt-4">
          <img src={image8} alt="certificate" className="rounded-lg" />
        </div>

        <img
          src={image9}
          alt="certificate"
          className="rounded-lg place-self-center mt-4"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        <img
          src={image10}
          alt="certificate"
          className="rounded-lg mt-4 place-self-center"
        />

        <div className="flex justify-center h-fit mt-4 place-self-center">
          <img src={image11} alt="certificate" className="rounded-lg" />
        </div>

        <img
          src={image12}
          alt="certificate"
          className="rounded-lg mt-4 place-self-center"
        />
      </div>
    </div>
  );
};

export default Gallery;
