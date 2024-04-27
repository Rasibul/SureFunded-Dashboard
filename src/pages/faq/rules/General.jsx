import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
  {
      id: 18,
      title: "How is drawdown calculated?",
      decs: "Daily Drawdown:<br>The daily drawdown is calculated as 4% or 5% (depending on the challenge) of your start of day balance. This calculation must include any floating losses, swaps and commission rates. This limit will be reset at midnight as per the server time.<br>Max Drawdown:<br>The max drawdown on the Power Challenge is 10% of your initial account balance. The max drawdown on the Liberty & HFT Challenge is 8% of your initial account balance. It is important to note that the max drawdown limit does not reset like the daily drawdown limit.",
  },
  {
      id: 19,
      title: "How does the Reset work?",
      decs: "With the Reset Add-on, you have the option to reset your account during the funded phase if you happen to breach. This means you'll receive a fresh challenge to restart your journey without needing to risk additional capital at that point!",
  },
  {
      id: 20,
      title: "What are the minimum trading days?",
      decs: "The minimum trading days are 5 for evaluations (except HFT at 0 trading days) and 5 for funded accounts.",
  },
  {
      id: 21,
      title: "Is the assessment time limited?",
      decs: "There are no time limits on any of our challenges.",
  },
  {
      id: 22,
      title: "Are there any profit targets on a live account?",
      decs: "There are no profit targets on any of our live funded accounts.",
  },
  {
      id: 23,
      title: "Can I trade using EAs or ALGOS?",
      decs: "Yes, you are allowed to use EA’s (Only in the evaluation phases). You are only allowed to use HFT EA’s specifically for the HFT challenge; however, this option does not apply to any other challenge type. We don't allow the use of EA’s and Indicators, including tools for managing risk and automated trading systems in funded accounts.",
  },
  {
      id: 24,
      title: "Do you allow news trading?",
      decs: "Yes, we allow news trading only during the evaluation phase. We do not allow News trading at Sure Leverage Funding on any Funded account.",
  },
  {
      id: 25,
      title: "Is copy trading allowed?",
      decs: "Copy trading is allowed to copy your own personal trades onto your simulated live account with Sure Leverage. However, copy trading identical orders from other traders in an identical time frame on our platform is not permitted.",
  },
  {
      id: 26,
      title: "Do you have a consistency rule?",
      decs: "We do not have a consistency rule on the Liberty Challenge. For Power & HFT Challenges, we have Profit Consistency and Lot Size Consistency rules. These rules are applied to ensure consistent trading and manage risks associated with emotional trading.",
  },
];



const General = () => {
    return (
        <div>
           <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default General;