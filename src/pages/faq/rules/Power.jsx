import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 39,
        title: "Is there a consistency rule with Power challenge?",
        decs: "Profit Consistency:<br>The purpose of the profit consistency rule is to help traders establish a pattern of consistent profits and steer clear of the risks associated with trading based on emotions. For example in one step power challenge: If by the end of a 30 day period, your account has a total profit of $10,000, then no single trade can account for more than 25% of $10,000, which is $2,500. Lot Size Consistency:<br>The lot size consistency rule is applied once a payout withdrawal request has been submitted, to ensure consistency within your trading. To satisfy the Lot Size Consistency Rule your average trade size is used to calculate your trading range. The range is determined by adding 100% to your average trade size to determine the maximum value and subtracting 75% to determine the minimum value.",
    },
    {
        id: 40,
        title: "How do I get a 100% profit split?",
        decs: "You will get the option at checkout to upgrade completely FREE to the 100% profit split.",
    },
    {
        id: 41,
        title: "How do I get the account Reset?",
        decs: "You will get the option at checkout to upgrade to the FREE RESET option. If you need to reset your account, please open a ticket on discord, or send an email to our support team with your email address, and account number requesting the reset.",
    },
    {
        id: 42,
        title: "What is the profit target?",
        decs: "The profit targets for the evaluation phases are 8% (1 Step) & 10% (2 Step).",
    },
    {
        id: 43,
        title: "How is the drawdown calculated?",
        decs: "Daily Drawdown:<br>The daily drawdown is calculated as 5% (2 Step) & 4% (1 Step) of your start of day balance. This calculation must include any floating losses, swaps and commission rates. Max Drawdown:<br>The max drawdown on the Power Challenges is 8% (1 Step) & 10% (2 Step) of your initial account balance. This means your account equity (for the 1 Step) cannot fall below 92% of the initial balance at any point. This means your account equity (for the 2 Step) cannot fall below 90% of the initial balance at any point.",
    },
    {
        id: 44,
        title: "Is there a time limit?",
        decs: "There are no time limits on any of our challenges.",
    },
    {
        id: 45,
        title: "How does the Reset work?",
        decs: "With the Reset Add-on, you have the option to reset your account during the funded phase if you happen to breach, completely FREE. This means you'll receive a fresh challenge to restart your journey without needing to risk additional capital at that point!",
    },
];


const Power = () => {
    return (
        <div>
           <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default Power