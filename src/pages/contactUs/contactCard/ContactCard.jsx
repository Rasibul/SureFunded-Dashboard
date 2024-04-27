import Card3 from "../../../components/cards/Card3";
import brain from "../../../assets/brain.png";
import phone from "../../../assets/phone.png";
import message from "../../../assets/message.png";

const ContactCard = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-24 px-2 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <Card3
          icon={brain}
          titleHighliterStart={"Knowledge Base"}
          description={
            "Our support services have an extensive knowledge-base to assist you"
          }
        />
        <Card3
          icon={phone}
          titleHighliterStart={"Contact Support"}
          description={"Contact our support team at"}
          descriptionHighliter={"support@sureleverage.com"}
        />
        <Card3
          icon={message}
          titleHighliterStart={"ChatBot"}
          description={"Ask our chatbot for instant responses to your queries."}
        />
      </div>
    </div>
  );
};

export default ContactCard;
