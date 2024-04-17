"use client";
import Image from "next/image";
import Modal from "../CookieModal";
import React, { memo, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { getCookie, setCookie } from "cookies-next";

const Cookies = () => {
  const [isOpenCookieModal, setIsOpenCookieModal] = useState(false);
  const [isCustomCookieModalOpen, setIsCustomCookieModalOpen] = useState(false);

  const cookieName = "m-moment";

  const handleAcceptAllCookies = () => {
    setCookie(cookieName, "true", { maxAge: 30 * 24 * 60 * 60 }); // 1 month
    setIsOpenCookieModal(false);
  };

  const handleRejectAllCookies = () => {
    setCookie(cookieName, "false", { maxAge: 30 * 24 * 60 * 60 });
    setIsOpenCookieModal(false);
  };

  useEffect(() => {
    const isCookieAccepted = getCookie(cookieName) === "true";
    const isCookieRejected = getCookie(cookieName) === "false";

    if (!isCookieAccepted && !isCookieRejected) {
      setIsOpenCookieModal(true);
    } else {
      setIsOpenCookieModal(false);
    }
  }, []);

  return (
    <>
      {isOpenCookieModal && !isCustomCookieModalOpen && (
        <div className="relative w-[440px] h-[290px] p-[25px_30px_30px_30px] bg-white cursor-pointer rounded-[10px] border border-black/10">
          <div className="absolute -top-[30px] -left-[20px]">
            <Image
              src={"/cookies_icon.svg"}
              alt={"cookies"}
              height={80}
              width={80}
            />
          </div>
          <p className="absolute top-[12px] right-[30px] text-[#ccc] text-[25px]">
            <button onClick={() => setIsOpenCookieModal(false)}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6678 0.343621C14.5625 0.238148 14.4375 0.15447 14.2998 0.0973768C14.1622 0.0402834 14.0147 0.0108954 13.8657 0.0108954C13.7166 0.0108954 13.5691 0.0402834 13.4315 0.0973768C13.2938 0.15447 13.1688 0.238148 13.0635 0.343621L7.5 5.89579L1.93646 0.332243C1.83112 0.226909 1.70607 0.143353 1.56845 0.0863469C1.43082 0.0293405 1.28331 1.10987e-09 1.13435 0C0.985385 -1.10988e-09 0.837878 0.0293405 0.700252 0.0863469C0.562627 0.143353 0.437577 0.226909 0.332243 0.332243C0.226909 0.437577 0.143353 0.562627 0.0863469 0.700252C0.0293405 0.837878 -1.10987e-09 0.985385 0 1.13435C1.10988e-09 1.28331 0.0293405 1.43082 0.0863469 1.56845C0.143353 1.70607 0.226909 1.83112 0.332243 1.93646L5.89579 7.5L0.332243 13.0635C0.226909 13.1689 0.143353 13.2939 0.0863469 13.4316C0.0293405 13.5692 0 13.7167 0 13.8657C0 14.0146 0.0293405 14.1621 0.0863469 14.2997C0.143353 14.4374 0.226909 14.5624 0.332243 14.6678C0.437577 14.7731 0.562627 14.8566 0.700252 14.9137C0.837878 14.9707 0.985385 15 1.13435 15C1.28331 15 1.43082 14.9707 1.56845 14.9137C1.70607 14.8566 1.83112 14.7731 1.93646 14.6678L7.5 9.10421L13.0635 14.6678C13.1689 14.7731 13.2939 14.8566 13.4316 14.9137C13.5692 14.9707 13.7167 15 13.8657 15C14.0146 15 14.1621 14.9707 14.2997 14.9137C14.4374 14.8566 14.5624 14.7731 14.6678 14.6678C14.7731 14.5624 14.8566 14.4374 14.9137 14.2997C14.9707 14.1621 15 14.0146 15 13.8657C15 13.7167 14.9707 13.5692 14.9137 13.4316C14.8566 13.2939 14.7731 13.1689 14.6678 13.0635L9.10421 7.5L14.6678 1.93646C15.1001 1.50411 15.1001 0.775962 14.6678 0.343621Z"
                  fill="#CCCCCC"
                />
              </svg>
            </button>
          </p>
          <p className="font-[DMSans] text-[26px] text-[#494AF8] font-bold text-center mb-[17px]">
            We use cookies !
          </p>
          <p className="font-normal text-center text-[15px] font-[JetBrainsMono] leading-[21px] mb-[30px]">
            Hi, this website uses essential cookies to ensure its proper
            operation and tracking cookies to understand how you interact with
            it. The latter will be set only after consent.
            <span
              className="underline text-black font-bold text-[15px] font-[JetBrainsMono] pb-2"
              onClick={() => {
                setIsCustomCookieModalOpen(true);
                setIsOpenCookieModal(false);
              }}
            >
              Let me choose
            </span>
          </p>
          <div className="flex items-center justify-between gap-4 w-full px-2">
            <button
              className="bg-[--blue] w-full h-[46px] py-2 px-4 rounded-md text-white"
              onClick={handleAcceptAllCookies}
            >
              Accept all
            </button>
            <button
              className="bg-[#F5F5F6] py-2 w-full h-[46px] px-4 rounded-md text-black"
              onClick={handleRejectAllCookies}
            >
              Reject all
            </button>
          </div>
        </div>
      )}
      {isCustomCookieModalOpen && (
        <Modal
          onClose={() => setIsCustomCookieModalOpen(false)}
          cookieName={cookieName}
        />
      )}
    </>
  );
};

export default memo(Cookies);
