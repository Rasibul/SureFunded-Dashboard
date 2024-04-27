/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavFooter from "./navFooter/NavFooter";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="min-h-[490px] max-w-[1200px] mx-auto px-4 pt-16">
        <NavFooter />
        <div>
          <p className=" text-[#BCBCBC] text-sm lg:text-base py-5 lg:py-10">
            All information published and distributed by Sure Leverage Funding
            (Sure Leverage), a corporation based in the Cayman Islands and its
            affiliates (collectively referred to as the "Company"), is intended
            solely as general information. None of the content provided by the
            Company is meant to be construed as investment advice, nor does it
            constitute an offer or solicitation to buy or sell securities,
            companies, or funds.The use of information found on Sure
            Leverage's websites carries inherent risks, and individuals assume
            full responsibility for any use or misuse thereof. Sure Leverage
            bears no responsibility or liability for such usage. Furthermore,
            the content herein does not constitute a solicitation or offer to
            trade futures, options, or foreign exchange (fx). Past performance
            does not guarantee future results.It's important to note
            that hypothetical or simulated performance results have inherent
            limitations. Unlike actual trading records, simulated results do not
            reflect real trading activities. Additionally, because simulated
            trades are not executed, results may over or undercompensate for
            certain market factors such as liquidity. Simulated trading programs
            are also designed with the benefit of hindsight, which may impact
            their accuracy. Sure Leverage makes no representation that any
            trading account will achieve similar profits or losses as those
            illustrated.
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between text-white text-sm md:text-base xl:text-lg items-center py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5  py-5">
          <Link
              to={
                "https://trader.sureleveragefunding.com/wp-content/uploads/Proptradetech-terms-and-conditions-Sure-Leverage-.pdf"
              }
            >
              {" "}
              <h2 className=" underline underline-offset-4">
                <span className="cursor-pointer">Terms & Conditions</span>
              </h2>
            </Link>
            <Link
              to={
                "https://trader.sureleveragefunding.com/wp-content/uploads/PropTradeTech-Privacy-Policy-ABN.pdf"
              }
            >
              <h2 className=" underline underline-offset-4 ">
                <span className="cursor-pointer">Privacy Policy</span>
              </h2>
            </Link>
            <Link
              to={
                "https://trader.sureleveragefunding.com/wp-content/uploads/Sure-Leverage-SOA-27.02.2024-1-5.pdf"
              }
            >
              {" "}
              <h2 className=" underline underline-offset-4">
                <span className="cursor-pointer">Schedule of Assesssment</span>
              </h2>
            </Link>
            <Link
              to={
                "https://trader.sureleveragefunding.com/wp-content/uploads/refundPolicy.pdf"
              }
            >
              {" "}
              <h2 className=" underline underline-offset-4  lg:mr-8 ">
                <span className="cursor-pointer">Refund Policy</span>
              </h2>
            </Link>
          </div>
          <span>©2024 All Right Reserved, Sure Leverage</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
