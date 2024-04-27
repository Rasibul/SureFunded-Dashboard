
import CEO from "../../../assets/CEO.png";
import CFO from "../../../assets/CFO.png";
import HPR from "../../../assets/HPR.png";
import CMO from "../../../assets/CMO.png";

import MemberStyle1 from "./member/MemberStyle1";
import MemberStyle2 from "./member/MemberStyle2";
const Members = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <MemberStyle1
          title={"CHIEF EXECUTIVE OFFICER"}
          name={"Sebastian Ness"}
          description={
            "Sebastian Ness, with over seven years of trading experience, is deeply passionate about the financial markets. He brings over five years of experience in the brokerage industry, having worked with leading brokers in the CFD sector. Additionally, he has contributed to the cryptocurrency mining sector by establishing operational facilities and providing smart contract loans, thus fostering liquidity and capital for blockchain ventures."
          }
          image={CEO}
          classForCard="flex-row-reverse"
        />
      </div>
      <div>
        <MemberStyle2
          title={"CHIEF FINANCIAL OFFICER"}
          name={"Peter Papadeas"}
          description={
            "Our CFO, Peter Papadeas, boasts over 20 years of extensive experience in finance, accounting, and investing. With a rich background as a seasoned CFD trader within prop firms and brokerages, Peter has achieved recognition on multiple leaderboards. His profound knowledge in risk management is indispensable to Sure Leverage Funding, where he oversees all capital management and strategic investment allocations within our firm."
          }
          image={CFO}
          classForCard=""
        />
      </div>
      <div>
        <MemberStyle1
          title={"HEAD OF PUBLIC RELATIONS"}
          name={"Connor St-Louis"}
          description={
            "Connor St. Louis, our Head of Public Relations, serves as the articulate voice behind much of our content. He remains committed to staying informed about trading practices and trends. His primary focus is on building connections with everyday traders, fostering trust, and facilitating engagement within our network."
          }
          image={HPR}
          classForCard="flex-row-reverse"
        />
      </div>
      <div>
        <MemberStyle2
          title={"CHIEF MARKETING OFFICER"}
          name={"Azmain"}
          description={
            "Azmain, our Chief Marketing Officer, is the mastermind behind our content creation. With extensive expertise in the social media realm, he brings valuable insights and innovation to our marketing strategies. Known for his unparalleled work ethic, Azmain tirelessly manages relationships with affiliates and ensures seamless collaboration with our company. He infuses Sure Leverage Funding with creativity, employing his artistic flair to craft captivating social graphics and manage all aspects of marketing, from editing to execution.."
          }
          image={CMO}
          classForCard=""
        />
      </div>
    </div>
  );
};

export default Members;
