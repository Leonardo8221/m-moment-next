"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const cookie = [
  { lable: "lable 1", expand: "exp1" },
  { lable: "lable 2", expand: "exp2" },
  { lable: "lable 3", expand: "exp3" },
];

const Modal = ({ onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [toggleStates, setToggleStates] = useState(cookie.map(() => false));

  const handleToggleClick = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };
  const handleToggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  return (
    <div className="w-full p-5 bg-white cursor-pointer h-full">
      <div className="relative -top-8 -left-6">
        <Image
          src={"/cookies_icon.svg"}
          alt={"cookies"}
          height={150}
          width={50}
        />
      </div>
      <div className="absolute top-2 right-3">
        <p className="text-end font-bold text-gray-400">
          <button onClick={onClose}>X</button>
        </p>
      </div>
      <p className="relative -top-12 left-8 font-bold font-[DMSans] text-[26px] ">
        Cookie Preferences
      </p>
      <div className="relative -top-10">
        <div>
          <h1 className="text-indigo-600 text-xl">Cookie Usage</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nobis accusantium, autem eum atque inventore temporibus nesciunt
            praesentium placeat nihil numquam quasi voluptatibus. Rem voluptates
            necessitatibus, molestiae minus facere odio?
          </p>
        </div>
        <div>
          {cookie.map((item, index) => (
            <div key={index} className="border border-gray-300 bg-gray-200">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleToggleExpand(index)}
              >
                <div className=" flex w-5/6 items-center">
                  <IoIosArrowDown
                    className={`text-blue-500 mr-2 transform ${
                      index === expandedIndex ? "rotate-180" : ""
                    }`}
                  />
                  <p className="my-3">{item.lable}</p>
                </div>
                <div className="w-1/6 justify-end items-center">
                  <div>
                    {/* Toggle between FaToggleOff and FaToggleOn based on toggleStates */}
                    {toggleStates[index] ? (
                      <FaToggleOn
                        color="green"
                        size={40}
                        onClick={() => handleToggleClick(index)}
                      />
                    ) : (
                      <FaToggleOff
                        color="gray"
                        size={40}
                        onClick={() => handleToggleClick(index)}
                      />
                    )}
                  </div>
                </div>
              </div>
              {index === expandedIndex && <p>{item.expand}</p>}
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-indigo-600 text-lg">More Information</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            facere accusantium suscipit consequatur quibusdam, vel veritatis{" "}
            <span className="underline cursor-pointer">
              <Link href="/contact-us">Contact-us</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full px-2">
        <button className="bg-indigo-600 py-2 px-4 rounded-md text-white">
          Accept all
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
          Reject all
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Modal;
