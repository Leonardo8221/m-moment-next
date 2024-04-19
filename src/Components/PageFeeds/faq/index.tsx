import { faqsData } from "@/utils/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

interface Faq {
  question: string;
  answer: string;
}

function FAQ() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [expandedIndices, setExpandedIndices] = useState(new Set());

  const handleToggleExpand = (index: number) => {
    setExpandedIndices((prevExpandedIndices) => {
      const newExpandedIndices = new Set(prevExpandedIndices);
      if (newExpandedIndices.has(index)) {
        newExpandedIndices.delete(index);
      } else {
        newExpandedIndices.add(index);
      }
      return newExpandedIndices;
    });
  };

  const onInputChange = (e: any) => {
    setSearchValue(e?.target?.value);
    if (e.target.value) expandAllFAQItems();
    else collapseAllFAQItems();
  };

  const collapseAllFAQItems = () => {
    setExpandedIndices(new Set());
  };

  // Function to filter FAQs based on the search query
  const filteredFAQs = faqsData.filter(
    (faq: Faq) =>
      faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchValue.toLowerCase())
  );

  const expandAllFAQItems = () => {
    setExpandedIndices(new Set(filteredFAQs.map((_, index) => index)));
  };

  const highlightQuery = (text: string) => {
    if (!searchValue) return <span>{text}</span>;

    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark key={index} style={{ backgroundColor: "yellow" }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const isItemExpanded = (index: number) => {
    return expandedIndices.has(index);
  };

  return (
    <div className="w-full">
      <div className="p-[51px_172px_40px_172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            width={128}
            height={128}
            src="/img/icons/faq.svg"
            alt=""
            className="mb-[30px]"
          />
          <h1 className="text-[40px] font-[DMSans] text-[--dark] text-center font-bold mb-[49px]">
            How can we help you?
          </h1>
        </div>
        <div className="relative mb-[29px]">
          <input
            type="text"
            placeholder="Type keywords to find answers"
            className="w-full h-[60px] font-15 p-[17px_20px] placeholder-[--dark]/30 text-[--dark] font-[JetBrainsMono] rounded-[6px] outline-none"
            onChange={onInputChange}
          />
          <span className="absolute top-[18px] right-[20px] z-10 text-[#ccc] font-bold">
            <IoSearchOutline fontSize={24} />
          </span>
        </div>
        <div>
          <p className="text-[--blue] text-center font-[500] text-[DMSans]">
            You can also browse the topics below to find what you are looking
            for:
          </p>
        </div>
      </div>
      <div className="w-full text-[--dark] flex flex-col">
        <div className="w-full p-[40px_172px] bg-gradient-to-b from-[#494af8]/10 to-transparent ">
          <div>
            <h1 className="font-[DMSans] text-[40px] font-bold text-left text-[--dark] mb-[30px]">
              Frequently Asked Questions
            </h1>
          </div>
          <div>
            <div>
              {!filteredFAQs.length ? (
                <>
                  <div className="w-full mb-[30px] border border-black/10 h-[200px] bg-white rounded-[10px] flex flex-col items-center justify-center">
                    <h4 className="font-[DMSans] text-[--blue] text-[26px] font-bold text-center mb-[20px]">
                      No results found
                    </h4>
                    <p className="font-[JetBrainsMono] text-[--dark] text-[15px] font-normal text-center">
                      We couldn’t find a match for “advertisement”. Please try
                      another keyword.
                    </p>
                  </div>
                  <hr className="bg-black/10" />
                </>
              ) : (
                <>
                  <h3 className="font-[DMSans] text-[26px] font-bold text-left text-[--blue] mb-[30px]">
                    General
                  </h3>
                  {filteredFAQs.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-300 mb-[16px] pb-[14px]"
                    >
                      <div
                        className={`flex items-center cursor-pointer text-[18px] font-[JetBrainsMono] font-medium ${
                          isItemExpanded(index)
                            ? "text-[--blue]"
                            : "text-[--dark]"
                        }`}
                        onClick={() => handleToggleExpand(index)}
                      >
                        <MdChevronRight
                          className={`mr-[9px] transform ${
                            isItemExpanded(index) ? "rotate-90" : ""
                          }`}
                        />
                        <p>{highlightQuery(item.question)}</p>
                      </div>
                      {isItemExpanded(index) && (
                        <div className="p-[14px_28px] text-[15px] font-[JetBrainsMono] font-regular text-[#363C4F]">
                          {highlightQuery(item.answer)}
                        </div>
                      )}
                    </div>
                  ))}
                  {!searchValue && (
                    <div className="border-b border-gray-300 mb-[16px] pb-[14px]">
                      <div
                        className={`flex items-center cursor-pointer text-[18px] font-[JetBrainsMono] font-medium ${
                          isItemExpanded(12) ? "text-[--blue]" : "text-[--dark]"
                        }`}
                        onClick={() => handleToggleExpand(12)}
                      >
                        <MdChevronRight
                          className={`mr-[9px] transform ${
                            isItemExpanded(12) ? "rotate-90" : ""
                          }`}
                        />
                        <p>
                          {highlightQuery(
                            "Who can I contact if I have any questions, concerns or feedback about MessageMoment?"
                          )}
                        </p>
                      </div>
                      {isItemExpanded(12) && (
                        <div className="p-[14px_28px] text-[15px] font-[JetBrainsMono] font-regular text-[#363C4F]">
                          You can{" "}
                          <Link
                            href={"/contact-us"}
                            className="text-[--blue] hover:underline"
                          >
                            Contact Us
                          </Link>{" "}
                          to get in touch.
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center px-[172px] relative w-full h-[600px]">
          <div className="absolute w-[404px] h-[404px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[88px] px-[87px] pb-[41px] bg-[#494af8]/50 filter blur-[100px] z-0"></div>
          <div className="relative w-full h-[350px] z-10 flex pt-[117px] items-center flex-col bg-white rounded-[10px] border border-black/10">
            <Image
              width={128}
              height={128}
              src={"/img/contact.svg"}
              alt=""
              className="absolute top-[-64px] left-[50%] translate-x-[-50%]"
            />
            <h1 className="font-[DMSans] text-[26px] text-center text-[--blue] font-bold mb-[30px]">
              Still need help about a topic not listed?
            </h1>
            <p className="font-[JetBrainsMono] text-[15px] text-center text-[--dark] font-[400] mb-[33px]">
              A member of our team will respond to your enquiry.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center font-bold bg-[--blue] rounded-[6px] text-white w-[236px] h-[46px] hover:opacity-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
