import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 33,
        title: "Is there a consistency rule with Liberty challenge?",
        decs: "No, there is no consistency rules with the Liberty challenge.",
    },
    {
        id: 34,
        title: "What is the profit target?",
        decs: "The profit targets for the evaluation phases are 6%.",
    },
    {
        id: 35,
        title: "How do I get a 100% profit split?",
        decs: "At checkout, you will have the option to upgrade to a 100% profit split!",
    },
    {
        id: 36,
        title: "How is the drawdown calculated?",
        decs: "Daily Drawdown:<br>The daily drawdown is calculated as 4% of your start of day balance. This calculation must include any floating losses, swaps and commission rates. Max Drawdown:<br>The max drawdown on the Liberty Challenge is 8% of your initial account balance. This means your account equity cannot fall below 92% of the initial balance at any point.",
    },
    {
        id: 37,
        title: "Is there a time limit?",
        decs: "There are no time limits on any of our challenges.",
    },
    {
        id: 38,
        title: "How does the Reset work?",
        decs: "With the Reset Add-on, you have the option to reset your account during the funded phase if you happen to breach. This means you'll receive a fresh challenge to restart your journey without needing to risk additional capital at that point!",
    },
];


const Liberty = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default Liberty;