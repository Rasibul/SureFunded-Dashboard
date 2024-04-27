import Accordion from "../../../components/shared/accordion/Accordion";

const faQuestions = [
    {
        id: 12,
        title: "Who can buy challenges on our site?",
        decs: "You must be 18 years or older to join this site.<br><br>Due to regulatory conditions, we are unable to offer services with traders residing in the following countries: Cuba, Iran, North Korea, Myanmar, Russia (or the Crimea, Donetsk or Luhansk regions of Ukraine), Somalia, Syria, and the United States of America.<br><br>The provision of services is not extended to individuals who appear on sanction lists, possess criminal records associated with financial crime, terrorism, or have been previously prohibited due to breach of contract, with no allowances.",
    },
    {
        id: 13,
        title: "Can US residents buy challenges?",
        decs: "As of 20th February 2024, residents of the United States are unable to purchase challenges on this site. US citizens residing outside the US who possess a valid resident ID may still continue to use the services.",
    },
];



const PurchaseAndEligibility = () => {
    return (
        <div>
            <Accordion faQuestions={faQuestions}></Accordion>
        </div>
    );
};

export default PurchaseAndEligibility;