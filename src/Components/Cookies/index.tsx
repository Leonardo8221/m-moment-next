"use client";
import Image from "next/image";
import Modal from "../CookieModal";
import React, { memo, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Cookies = () => {
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
            <button onClick={handleOnClick}><FaTimes /></button>
          </p>
          <p className="font-[DMSans] text-[26px] text-[#494AF8] font-bold font-bold text-center mb-[17px]">
            We use cookies !
          </p>
          <p className="font-normal text-center text-[15px] font-[JetBrainsMono] leading-7 mb-[30px]">
            Hi, this website uses essential cookies to ensure its proper
            operation and tracking cookies to understand how you interact with
            it. The latter will be set only after consent.
            <span
              className="underline text-black text-[15px] font-[JetBrainsMono] pb-2"
              onClick={handleSpanClick}
            >
              Let me choose
            </span>
          </p>
          <div className="flex items-center justify-between gap-4 w-full px-2">
            <button className="bg-[--blue] w-full h-[46px] py-2 px-4 rounded-md text-white">
              Accept all
            </button>
            <button className="bg-[#363c4f]/5 py-2 w-full h-[46px] px-4 rounded-md text-black">
              Reject all
            </button>
          </div>
        </div>
      )}
      {modalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default memo(Cookies);
