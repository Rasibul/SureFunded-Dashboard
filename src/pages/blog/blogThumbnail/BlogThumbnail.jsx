import Thumbnail from "../../../assets/Thumbnail.png"
import { FaArrowRight } from "react-icons/fa";
const BlogThumbnail = () => {
    return (
        <div className="max-w-[1200px] mx-auto gap-4 md:gap-6  flex flex-col md:flex-row justify-center items-center  mt-20 px-2">
            <div className="md::w-2/3 w-full"  >
                <img src={Thumbnail} alt="" />
            </div>
            <div className="md::w-1/3 w-full " >
                <h2 className="text-[#BCBCBC]"> October 27, 2023</h2> <br />
                <p className="md:text-2xl text-xl font-bold text-white divide-y divide-[#363636]">

                    The Crucial Role of Prop Firms  in  Shaping the Forex Market
                </p>
                <div className="divide-y divide-[#363636] mb-2">
                    <p className="md:py-4 py-2 text-[#BCBCBC] ">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                    </p>
                    <div></div>
                </div>

                <div className="flex justify-between items-center text-white">
                    <span className="text-white font-medium">Read More</span>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default BlogThumbnail;