import { Link, NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import slfLogo from "../../../../assets/SlfLogo.png"

const NavFooter = () => {
  const menuItems = [
    { id: 1, item: "Buy Challenges", link: "/buyChallenges" },
    { id: 2, item: "Faq", link: "/faq" },
    { id: 3, item: "Payout", link: "/payouts" },
    { id: 4, item: "Our Team", link: "/about-us" },
    { id: 5, item: "Blog", link: "/blog" },
    { id: 6, item: "Contact Us", link: "/contact" },
  ];
  return (
    <div className="py-5">
      <div className="flex flex-col gap-10 md:gap-5 lg:flex-row justify-between lg:items-center text-white  ">
        {/* logo */}
        <div>
          <Link to="/">
            <img className="w-[120px] h-[27px] md:w-[180px] md:h-[41px]" src={slfLogo} alt="sure-leverage" />
          </Link>
        </div>

        <div className="">
          <ul className="flex flex-row gap-5 flex-wrap">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <NavLink to={menuItem.link} className="text-white">
                  <span>{menuItem.item}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* login   */}
        <div className="flex  items-center gap-5">
          <Link to="https://www.instagram.com/sureleverage/">
            <FaInstagram className="w-6 h-6 rounded" />
          </Link>
          <Link to="https://twitter.com/SureLeverage">
            <FaXTwitter className="w-6 h-6  rounded" />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100095559222958">
            <FaFacebook className="w-6 h-6 rounded" />
          </Link>
          <Link to="https://www.tiktok.com/@sureleverage">
            <FaTiktok className="w-6 h-6 rounded" />
          </Link>
          <Link to="https://www.youtube.com/@SureLeverageProp">
            <FaYoutube className="w-6 h-6  rounded" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
