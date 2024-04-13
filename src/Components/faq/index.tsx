import { faqsData } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type question = {
  question: "";
  answer: "";
};

function FAQ() {
  const [data, setData] = useState<Array<any>>(faqsData);

  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    onSearch;
  }, [searchValue]);

  const onSearch = () => {
    if (searchValue.trim() != "") {
      let arrData = [...faqsData];
      arrData = arrData.filter((item) => {
        return item.answer.includes(searchValue);
      });
      setData(data);
    } else {
      setData(faqsData);
    }
  };

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(index);
  };

  const onInputChange = (e: any) => {
    setSearchValue(e?.target?.value);
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
            onChange={onInputChange}
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
            {data.map((item, index) => (
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
