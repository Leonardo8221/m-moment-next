"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { CookieMap } from "@/utils/constants";
import { setCookie } from "cookies-next";
import styles from "./cookie.module.css";


const Modal = ({ onClose, cookieName }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [toggleStates, setToggleStates] = useState(CookieMap.map(() => false));

  const handleToggleClick = (index: number) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };




  const handleCookieSaveSettings = () => {
    const selectedCookies = toggleStates
      .map((state, index) => ({ ...CookieMap[index], enabled: state }))
      .filter((cookie) => cookie.enabled);

    localStorage.setItem(cookieName, JSON.stringify(selectedCookies));

    setCookie(cookieName, 'true', { maxAge: 365 * 24 * 60 * 60 });

    onClose();
    
  };


  useEffect(() => {
    const storedCookies = localStorage.getItem(cookieName);
    if (storedCookies) {
      const parsedCookies = JSON.parse(storedCookies);

      const initialToggleStates = CookieMap.map((mapItem: any) => {
        const matchedCookie = parsedCookies.find((cookie: any) => cookie.label === mapItem.label);
        return matchedCookie ? matchedCookie.enabled : false; // Set toggle state based on matched cookie
      });

      setToggleStates(initialToggleStates);
    } else {
      setToggleStates(CookieMap.map(() => false));
    }
  }, [cookieName]);





  return (
    <div className={`w-full h-full ${styles.cookieModal}`}>
      <div className="p-5 px-0 rounded-[10px] h-full bg-white cursor-pointer relative">
      <div className={`relative -top-[40px] ${styles.cookieTitle}`}>
        <Image
          src={"/cookies_icon.svg"}
          alt={"cookies"}
          height={80}
          width={80}
        />
        <p className="relative font-bold font-[DMSans] text-[26px] ">
        Cookie Preferences
      </p>
      </div>
      <div className="absolute top-2 right-3">
        <p className="text-end font-bold text-gray-400">
          <button onClick={onClose}>X</button>
        </p>
      </div>
      
      <div className={`relative -top-[40px] ${styles.modalBody}`}>
        <div>
          <h1 className="text-indigo-600 font-[DMSans] text-[17px] font-[500]">Cookie Usage</h1>
          <p className="mt-[10px] mb-[18px] font-[JetBrainsMono] text-[15px] text-[#363c4f]">
            We use cookies to ensure the basic functionalities of this website and to enhance your online experience.
            You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and
            other sensitive data, please read the full Privacy Policy.
          </p>
        </div>
        <div className={styles.accordions}>
          {CookieMap.map((item, index) => (
            <div key={index} className={`font-[JetBrainsMono] text-[15px] text-[#363c4f] ${styles.accorItems}`}>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleToggleExpand(index)}
              >
                <div className=" flex w-5/6 items-center">
                  <IoIosArrowDown
                    className={`text-blue-500 mr-2 transform ${index === expandedIndex ? "rotate-180" : ""
                      }`}
                  />
                  <p className={`my-3 ${styles.label}`}>{item.label}</p>
                </div>
                <div className="w-1/6 flex justify-end items-center">
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
        <div className={styles.infoSection}>
          <h1 className="text-indigo-600 font-[DMSans] text-[17px] font-[500]">More Information</h1>
          <p className="font-[JetBrainsMono] text-[15px] text-[#363c4f] mt-[12px] mb-[18px]">
          For any queries in relation to our policy on cookies and your choices, please
            <span className="underline cursor-pointer">
              <Link href="/contact-us">Contact-us</Link>
            </span>
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between gap-4 w-full ${styles.modalFooter}`}>
        <div className="flex items-center gap-4">
        <button className="bg-indigo-600 py-2 px-4 rounded-md text-white">
          Accept All
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
          Reject All
        </button>
        </div>
        <button className="bg-gray-200 py-2 px-4 rounded-md text-black" onClick={handleCookieSaveSettings}>
          Save Settings
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default Modal;
