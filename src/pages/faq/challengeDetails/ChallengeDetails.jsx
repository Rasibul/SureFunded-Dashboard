import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 5,
        title: "What is the Spread and Commissions?",
        decs: "Sure Leverage is partnered with Eightcap as our broker, to offer industry leading spreads and commissions for traders. To understand the account offerings that we use, see here:",
        url:"https://www.eightcap.com/en/trading/trading-conditions/spreads/"
    },
    {
        id: 6,
        title: "What are the challenge profit targets?",
        decs: "Each challenge has their own profit targets:<br>- HFT - 6%<br>- Power Challenge - 8% (1 Step Challenge) - 10% (2 Step Challenge)<br>- Liberty Challenge - 6%",
    },
    {
        id: 7,
        title: "What are the profit splits for the HFT challenge?",
        decs: "The profit split for HFT Challenge goes as follows:<br>1st profit split: 50-50<br>2nd profit split: 60-40<br>3rd profit split: 70-30<br>4th profit split: 80-20",
    },
    {
        id: 8,
        title: "What is the standard profit split on Liberty & Power Challenge if I don’t choose the 100% option?",
        decs: "The standard profit split on the Liberty & Power Challenge is 80/20 if you do not select the 100% option.",
    },
    {
        id: 9,
        title: "What are the leverage options?",
        decs: "HFT Challenge - 1:100 (Challenge phase) and 1:50 (Funded)<br>Liberty - 1:50<br>Power - 1:50",
    },
    {
        id: 10,
        title: "How often can I withdraw?",
        decs: "The first profit split is 30 days.<br>The following profit splits are Bi-Weekly",
    },
    {
        id: 11,
        title: "Can I withdraw my evaluation profits?",
        decs: "The funded stage is the only stage where you could request a profit withdrawal.",
    },
];



const ChallengeDetails = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default ChallengeDetails;