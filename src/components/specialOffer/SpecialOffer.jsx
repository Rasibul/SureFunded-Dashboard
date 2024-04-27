import retry from "../../assets/retry.png"
import drwadown from "../../assets/drawdown.png"
import eaHift from "../../assets/eaHift.png"
import target from "../../assets/target.png"
import Card1 from "../cards/Card1";
import Card2 from "../cards/Card2";

const SpecialOffer = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20 px-2 mt-10 lg:mt-0">
      <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-5">
        <Card1
          icon={retry}
          titleHighliterStart={"Free Reset"}
          title={"in funded stage"}
        />
        <div className="lg:mt-40 ">
          <Card2 icon={drwadown} title={"Keep up to 100% The Profits You Earn"} />
        </div>
        <Card1
          icon={eaHift}
          titleHighliterStart={"EA's"}
          title={"And"}
          titleHighliterEnd={"HFT Allowed"}
        />
        <div className="lg:mt-40">
          <Card2
            icon={target}
            title={"Lowest Profit Targets In The Industry"}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
