import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqsData = [
  {
    question: "What is MessageMoment",
    answer:
      "MessageMoment is a discreet chat service that enables known parties to communicate with each other through a unique chat link.",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
  {
    question: "What is meant by “Secure”?",
    answer:
      "You can choose to make a chat session secure. This means that you will not only share the auto-generated unique chat link, but you will also share the auto-generated token password assigned for that chat session.",
  },
  {
    question: "How do I share the chat details with others?",
    answer:
      "You can choose to use any other communications service to share and socialize the chat link with another party. This could be SMS, Email, a messaging service etc. We have provided you with a copy function allowing you to easily copy the unique chat link as well as the token password (if applicable).",
  },
  {
    question: "Can I use MessageMoment on my mobile device?",
    answer:
      "Yes, MessageMoment has a mobile responsive design, so you can use the chat link on your mobile device through your default or favorite browser. There is no need for a native app.",
  },
  {
    question: "Is there a limit to the number of users in a chat?",
    answer:
      "Yes, there is currently a limit of 10 users that can participate in a chat session.Yes, there is currently a limit of 10 users that can participate in a chat session.",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
];

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const onSearch = () => {
    let arrData = [...faqsData];
    let searchVal = "a";
    arrData = arrData.filter((item) => {
      return item.answer.includes(searchVal);
    });
  };

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <div className="w-full">
      <div className="bg-gray-200 p-10">
        <div classname="flex flex-col items-center justify-center gap-2 w-full">
          <img src="./faq.png" className="h-24" />
          <h1 className="text-4xl font-semibold">How Can We Help You?</h1>
        </div>
        <div className="py-3">
          <input
            type="text"
            placeholder="Typr keywords to find answers"
            className="w-5/6 h-10 px-4"
          />
        </div>
        <div>
          <p className="text-blue-500 ">
            You can also browse the topics to find what you are looking for
          </p>
        </div>
      </div>
      <div className="bg-slate-100 p-10 flex gap-4 flex-col">
        <div>
          <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
        </div>
        <div>
          <h3 className="text-3xl text-blue-500 font-semibold pb-5">General</h3>
          <div>
            {faqsData.map((item, index) => (
              <div
                key={index}
                className="border border-t-0 border-b-gray-300 border-l-0 border-r-0"
              >
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleToggleExpand(index)}
                >
                  <IoIosArrowDown
                    className={`text-blue-500 mr-2 transform ${
                      index === expandedIndex ? "rotate-180" : ""
                    }`}
                  />
                  <h2 className="text-[18px] font-[JetBrainsMono] font-medium my-3 text-[#494AF8]">
                    {item.question}
                  </h2>
                </div>
                {index === expandedIndex && (
                  <p className="text-[15px] font-[JetBrainsMono] font-regular text-[#363C4F]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="m-10 w-5/6">
          <div className="flex justify-center items-center flex-col gap-3 bg-zinc-200 p-5">
            <h1 className="text-lg text-blue-500">
              Still need help about a topic not listed
            </h1>
            <p>A member of our team will respond to your enquiry</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
