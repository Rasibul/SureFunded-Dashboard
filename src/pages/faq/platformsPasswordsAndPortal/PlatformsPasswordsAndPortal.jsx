import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 14,
        title: "Where can I download your trading platform?",
        decs: "You can download our trading platform here: ",
        url:"https://www.eightcap.com/en/trading-platforms/metatrader-4/download-metatrader-4-platform/"
    },
    {
        id: 15,
        title: "Can I share my trading accounts password?",
        decs: "As we are evaluating the trading of individuals you are solely responsible for your account login details. If you share account passwords with others it will violate our terms and conditions and as such it is not permitted.",
    },
    {
        id: 16,
        title: "Can I merge my accounts with you?",
        decs: "No, we don’t allow account merging at this moment. You can however have multiple challenges at one time totaling a maximum of USD 800k in funding.",
    },
    {
        id: 17,
        title: "Does my account have to be in my name?",
        decs: "Yes, as we are on the lookout for individual traders and often make payouts to bank account for our live traders. As such accounts must be created in your own name.",
    },
];



const PlatformsPasswordsAndPortal = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default PlatformsPasswordsAndPortal;