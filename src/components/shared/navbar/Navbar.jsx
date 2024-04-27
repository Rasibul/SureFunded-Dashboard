import { Link, NavLink } from "react-router-dom";
import slfLogo from "../../../assets/SlfLogo.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import Button from "../button/Button";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  const menuItems = [
    { id: 1, item: "Buy Challenges", link: "/buyChallenges" },
    { id: 2, item: "FAQ", link: "/faq" },
    { id: 3, item: "Payout", link: "/payouts" },
    { id: 4, item: "About Us", link: "/about-us" },
    { id: 5, item: "Blog", link: "/blog" },
    { id: 5, item: "Affiliate", link: "https://trader.sureleveragefunding.com/affiliate-area/" },
    { id: 6, item: "Contact Us", link: "/contact" },
  ];
  return (
    <>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center text-white py-6 px-2 lg:py-11">
        <div className=" w-1/2 lg:w-fit">
          <Link to="/" onClick={() => setOpenMenu(false)}>
            <img
              className="w-[120px] h-[27px] md:w-[180px] md:h-[41px]"
              src={slfLogo}
              alt="sure-leverage"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden flex justify-end  w-1/2"
        >
          {openMenu ? <IoClose size={32} /> : <TiThMenu size={32} />}
        </div>

        <div className="">
          <ul
            className={`flex flex-col gap-5 lg:gap-5 lg:flex-row absolute lg:static transition-all duration-700 ease-in mt-12 lg:mt-0 pt-2  px-2 pb-5 lg:pb-0 ${
              openMenu
                ? " left-0  w-full bg-primary-bg-color "
                : "left-[-1000px] w-full"
            }`}
          >
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <NavLink
                  to={menuItem.link}
                  className="text-white"
                  onClick={() => setOpenMenu(false)}
                >
                  <span>{menuItem.item}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <Button
                to={"https://trader.sureleveragefunding.com/my-account/"}
                btnName="Login"
                btnType="submit"
                classForButton="text-black bg-white lg:hidden"
              />
            </li>
          </ul>
        </div>
        <Button
          to={"https://trader.sureleveragefunding.com/my-account/"}
          btnName="Login"
          btnType="submit"
          classForButton="text-black bg-white hidden lg:block"
        />
      </div>
    </>
  );
};

export default Navbar;
