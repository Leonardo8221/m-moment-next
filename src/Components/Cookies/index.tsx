"use client";
import Image from "next/image";
import Modal from "../CookieModal";
import React, { memo, useEffect, useState } from "react";

const Cookies=()=> {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleOnClick = () => {
    setOpen(false);
  };

  const handleSpanClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {open && !modalOpen && (
        <div className="w-[440px] p-[30px] bg-white cursor-pointer">
          <div className="absolute -top-3 -left-2">
            <Image
              src={"/cookies_icon.svg"}
              alt={"cookies"}
              height={150}
              width={50}
            />
          </div>
          <p className="text-end font-bold text-gray-400">
            <button onClick={handleOnClick}>X</button>
          </p>
          <p className="font-[DMSans] text-[26px] text-[#494AF8] font-bold font-bold text-center mb-[17px]">
            We use cookies !
          </p>
          <p className="font-normal text-[15px] font-[JetBrainsMono] leading-7 mb-[30px]">
            Hii This Website uses essential cookies to ensure it&rsquo;s proper
            operation and tracking cookies to understand how you may interact
            with it. The latter will be set only after consent.
            <span
              className="underline text-black text-[15px] font-[JetBrainsMono] pb-2"
              onClick={handleSpanClick}
            >
              Let me choose
            </span>
          </p>
          <div className="flex items-center justify-center gap-4 w-full px-2">
            <button className="bg-indigo-600 py-2 px-4 rounded-md text-white">
              Accept all
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
              Reject all
            </button>
          </div>
        </div>
      )}
      {modalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default memo(Cookies)
