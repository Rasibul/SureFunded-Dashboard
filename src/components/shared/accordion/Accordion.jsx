/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionItem from "./AccordionItem";




const Accordion = ({faQuestions}) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-4 px-2 mt-10">
      {faQuestions.map((que, index) => (
        <AccordionItem
          key={que.id}
          question={que}
          isOpen={index === openItemIndex}
          onItemClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
