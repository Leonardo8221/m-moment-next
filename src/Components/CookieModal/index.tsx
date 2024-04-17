"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
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

    setCookie(cookieName, "true", { maxAge: 365 * 24 * 60 * 60 });

    onClose();
  };

  useEffect(() => {
    const storedCookies = localStorage.getItem(cookieName);
    if (storedCookies) {
      const parsedCookies = JSON.parse(storedCookies);

      const initialToggleStates = CookieMap.map((mapItem: any) => {
        const matchedCookie = parsedCookies.find(
          (cookie: any) => cookie.label === mapItem.label
        );
        return matchedCookie ? matchedCookie.enabled : false; // Set toggle state based on matched cookie
      });

      setToggleStates(initialToggleStates);
    } else {
      setToggleStates(CookieMap.map(() => false));
    }
  }, [cookieName]);

  return (
    <div className={`w-[690px] h-[670x] ${styles.cookieModal}`}>
      <div className="p-[20px_0px_29px_0px] rounded-[10px] h-full bg-white cursor-pointer relative">
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
        <div className="absolute top-[29px] right-[30px]">
          <p className="text-[--dark]">
            <button onClick={onClose}><IoCloseOutline fontSize={22}/></button>
          </p>
        </div>

        <div className={`relative -top-[40px] ${styles.modalBody}`}>
          <div>
            <h1>
              Cookie Usage
            </h1>
            <p>
              We use cookies to ensure the basic functionalities of this website
              and to enhance your online experience. You can choose for each
              category to opt-in/out whenever you want. For more details
              relative to cookies and other sensitive data, please read the full
              {' '}<u><Link href={'/privacy'}>Privacy Policy</Link></u>.
            </p>
          </div>
          <div className={styles.accordions}>
            {CookieMap.map((item, index) => (
              <div
                key={index}
                className={`${styles.accorItems}`}
              >
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleToggleExpand(index)}
                >
                  <div className="flex items-center">
                    <RiArrowRightSLine
                      className={`mr-[2px] transform ${
                        index === expandedIndex ? "rotate-90" : ""
                      }`}
                      fontSize={22}
                    />
                    <p className={styles.label}>{item.label}</p>
                  </div>
                  {/*  */}
                </div>
                {index === expandedIndex && <p>{item.expand}</p>}
              </div>
            ))}
          </div>
          <div className={styles.infoSection}>
            <h1 className="text-[--blue] font-[DMSans] text-[17px] font-[500] m-0">
              More Information
            </h1>
            <p className="font-[JetBrainsMono] text-[15px] text-[#363c4f] mt-[12px]">
              For any queries in relation to our policy on cookies and your
              choices, please{' '}
              <span className="underline cursor-pointer">
                <Link href="/contact-us">Contact-us</Link>
              </span>
            </p>
          </div>
        </div>
        <div
          className={`relative flex items-center -top-[40px] justify-between w-full ${styles.modalFooter}`}
        >
          <div className="flex items-center gap-4">
            <button className="bg-indigo-600 py-2 px-4 rounded-md text-white">
              Accept All
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
              Reject All
            </button>
          </div>
          <button
            className="bg-gray-200 py-2 px-4 rounded-md text-black"
            onClick={handleCookieSaveSettings}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
