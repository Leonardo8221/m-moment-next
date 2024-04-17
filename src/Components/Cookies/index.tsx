"use client";
import Image from "next/image";
import Modal from "../CookieModal";
import React, { memo, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { getCookie, setCookie } from "cookies-next";

const Cookies = () => {
  const [isOpenCookieModal, setIsOpenCookieModal] = useState(false);
  const [isCustomCookieModalOpen, setIsCustomCookieModalOpen] = useState(false);


  const cookieName = 'm-moment'

  const handleAcceptAllCookies = () => {
    setCookie(cookieName, 'true', { maxAge: 30 * 24 * 60 * 60 }); // 1 month
    setIsOpenCookieModal(false)
  };

  const handleRejectAllCookies = () => {
    setCookie(cookieName, 'false', { maxAge: 30 * 24 * 60 * 60 });
    setIsOpenCookieModal(false)
  }


  
  useEffect(() => {

    const isCookieAccepted = getCookie(cookieName) === 'true';
    const isCookieRejected = getCookie(cookieName) === 'false';

    if (!isCookieAccepted && !isCookieRejected) {
      setIsOpenCookieModal(true);
    }
    else {
      setIsOpenCookieModal(false)
    }

  }, []);


  return (
    <>
      {isOpenCookieModal && !isCustomCookieModalOpen && (
        <div className="relative w-[440px] p-[25px_30px_30px_30px] bg-white cursor-pointer rounded-[10px] border border-black/10">
          <div className="absolute -top-[30px] -left-[20px]">
            <Image
              src={"/cookies_icon.svg"}
              alt={"cookies"}
              height={80}
              width={80}
            />
          </div>
          <p className="absolute top-[15px] right-[15px] text-[#ccc] text-[25px]">
            <button onClick={() => setIsOpenCookieModal(false)}><FaTimes /></button>
          </p>
          <p className="font-[DMSans] text-[26px] text-[#494AF8] font-bold text-center mb-[17px]">
            We use cookies !
          </p>
          <p className="font-normal text-center text-[15px] font-[JetBrainsMono] leading-7 mb-[30px]">
            Hi, this website uses essential cookies to ensure its proper
            operation and tracking cookies to understand how you interact with
            it. The latter will be set only after consent.
            <span
              className="underline text-black text-[15px] font-[JetBrainsMono] pb-2"
              onClick={() => { setIsCustomCookieModalOpen(true); setIsOpenCookieModal(false) }}
            >
              Let me choose
            </span>
          </p>
          <div className="flex items-center justify-between gap-4 w-full px-2">
            <button className="bg-[--blue] w-full h-[46px] py-2 px-4 rounded-md text-white" onClick={handleAcceptAllCookies}>
              Accept all
            </button>
            <button className="bg-[#363c4f]/5 py-2 w-full h-[46px] px-4 rounded-md text-black" onClick={handleRejectAllCookies}>
              Reject all
            </button>
          </div>
        </div>
      )}
      {isCustomCookieModalOpen && <Modal onClose={() => setIsCustomCookieModalOpen(false)} cookieName={cookieName} />}
    </>
  );
};

export default memo(Cookies);
