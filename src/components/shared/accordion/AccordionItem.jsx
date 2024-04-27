/* eslint-disable react/prop-types */
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ question, isOpen, onItemClick }) => {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <div
        className="p-[1px]  rounded-lg w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, .07),rgba(23, 23, 23, 1))",
        }}
      >
        <div className="p-[1px]  rounded-lg bg-primary-bg-color w-full">
          <div
            className="p-[1px]  rounded-lg  justify-center items-center flex  w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20, 241, 148, .2), rgba(23, 23, 23, 1))",
            }}
          >
            <div className="rounded-lg  justify-center items-start  flex bg-primary-bg-color w-full">
              <div className=" w-full">
                <div
                  onClick={onItemClick}
                  className=" w-full flex border border-white/5 rounded-lg justify-between items-center border-white bg-opacity-60 text-white px-4 py-2 backdrop-blur-lg shadow-xl "
                  style={{
                    background:
                      "linear-gradient(20deg,rgba(20, 241, 148, 0.05), #171717 )",
                  }}
                >
                  <p className="text-xl">{question.title}</p>
                  {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isOpen && (
                  <div className="w-full flex flex-col border justify-start border-white/5 rounded-lg border-white bg-opacity-60 text-white px-4 py-2 backdrop-blur-lg shadow-xl">
                    <div
                      className="p-5"
                      dangerouslySetInnerHTML={{ __html: question.decs }}
                    />
                    <p>
                      <a className="text-sm text-green-400" href={question.url}>
                        {question.url}
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
