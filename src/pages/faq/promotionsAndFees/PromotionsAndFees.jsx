import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 1,
        title: "Can I get the reset promotion with the HFT challenge?",
        decs: "No, it is not eligible for the HFT Challenge.",
    },
    {
        id: 2,
        title: "Is the free reset available during challenge and verification?",
        decs: "No, only available in the funded phase. The free reset is available only within the first 10 business days of receiving your credentials.",
    },
    {
        id: 3,
        title: "Can I combine two promotions?",
        decs: "You are not allowed to combine 2 promotions.",
    },
    {
        id: 4,
        title: "Are there any monthly fees?",
        decs: "There are no monthly fees at Sure Leverage Funding.",
    },
];





const PromotionsAndFees = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default PromotionsAndFees;