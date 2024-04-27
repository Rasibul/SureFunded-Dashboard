import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
      id: 1,
      title: "What are the profit splits for the HFT Challenge?",
      decs: "The profit split for HFT Challenge goes as follows: 1st profit split: 50-50. 2nd profit split: 60-40. 3rd profit split: 70-30. 4th profit split: 80-20."
    },
    {
      id: 2,
      title: "What is the profit cap on the HFT Challenge?",
      decs: "The profit cap is set at 6% of your account balance."
    },
    {
      id: 3,
      title: "Is there a consistency rule with HFT Challenge?",
      decs: "Profit Consistency: The purpose of the profit consistency rule is to help traders establish a pattern of consistent profits and steer clear of the risks associated with trading based on emotions. For example in one step power challenge: If by the end of a 30 day period, your account has a total profit of $10,000, then no single trade can account for more than 25% of $10,000, which is $2,500. Once a payout withdrawal request is submitted any trades breaching this rule will be considered a soft breach and we will remove the invalid trades while keeping account access. You can refer to the schedule of assessment to check the profit consistency as it can vary depending on the challenge. Lot Size Consistency: The lot size consistency rule is applied once a payout withdrawal request has been submitted, to ensure consistency within your trading. To satisfy the Lot Size Consistency Rule your average trade size is used to calculate your trading range. The range is determined by adding 100% to your average trade size to determine the maximum value and subtracting 75% to determine the minimum value. Once a payout withdrawal request is submitted any trades breaching this rule will be considered a soft breach and we will remove the invalid trades while keeping account access. Note: trades are aggregated when placed within a 30 second window into one position for both profit and lot consistency. Lot Size Consistency Range Calculation: Total Lot Volume Traded/Trades Executed: Lot Size Average. Lot Size Average x 0.25: Bottom Of Consistency Range. Lot Size Average x 2.00: Top Of Consistency Range."
    },
    {
      id: 4,
      title: "How is the drawdown calculated?",
      decs: "Daily Drawdown: The daily drawdown is calculated as 4% of your start of day balance. This calculation must include any floating losses, swaps and commission rates. This limit will be reset at midnight as per the server time. Example 1: Starting balance of $100,000, You trade and secure a profit of +$2000, your account balance currently sits $102,000. The following day your maximum daily loss must now not exceed 4% of that previous days balance ($102,000 - 4% = $97,920) $4,080 max daily loss. Day 2 you trade and incur a loss of -$1000 bringing your account balance down to $101,000. The following day your maximum daily loss must not exceed 4% of that previous days balance ($101,000 - 4% = $96,960) $4,040 max daily loss. Max Drawdown: The max drawdown on the HFT Challenge is 8% of your initial account balance. This means your account equity cannot fall below 92% of the initial balance at any point. It is important to note that the max drawdown limit does not reset like the daily drawdown limit."
    },
    {
      id: 5,
      title: "Do you offer challenge passing services?",
      decs: "No we do not, however we are partnered with challenge passing services for HFT. Please open a ticket on discord to find out more information."
    },
    {
      id: 6,
      title: "Can I get a reset with the HFT Challenge?",
      decs: "No, we do not offer Reset with HFT Challenge. Only Power & Liberty."
    }
  ];
  
  



const Hft = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default Hft;