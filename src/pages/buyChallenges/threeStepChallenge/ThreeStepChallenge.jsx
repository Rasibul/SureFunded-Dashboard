import Card3 from "../../../components/cards/Card3";
import step1 from "../../../assets/step1.png";
import step2 from "../../../assets/step2.png";
import step3 from "../../../assets/step3.png";
import PageHeader1 from "../../../components/shared/pageHeader/PageHeader1";
/* eslint-disable react/no-unescaped-entities */
const ThreeStepChallenge = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-24 px-2 ">
      <PageHeader1
        pageHeaderTitle={"Our Challenges"}
        description={
          "Explore our challenges and pick the one that suits your trading style best! Whether you're new to the game or a seasoned pro, we've got options to help you level up your skills. Take a look and choose your challenge!"
        }
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        <Card3
          icon={step1}
          titleHighliterStart={"Choose "}
          title={"Your Challenge"}
          description={
            "Choose your preferred challenge and register for evaluation and receive your login instantly."
          }
        />
        <Card3
          icon={step2}
          titleHighliterStart={"Prove "}
          title={"Your Skills"}
          description={
            "Prove your skills by passing all our trading objectives shown in the dashboard. Once you have completed this you will receive your funded account."
          }
        />
        <Card3
          icon={step3}
          titleHighliterStart={"Start "}
          title={"Earning"}
          description={
            "Once you have passed your evaluation you will receive your funded account and be able to withdraw up to 90% of profits and join our scaling plan."
          }
        />
      </div>
    </div>
  );
};

export default ThreeStepChallenge;
