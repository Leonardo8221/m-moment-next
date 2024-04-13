"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Cookies() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleOnClick = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className="w-96 p-3 bg-white h-[250px] cursor-pointer">
          <div className="absolute -top-3 -left-2">
            <Image
              src={"/cookies_icon.svg"}
              alt={"cookies"}
              height={150}
              width={50}
            />
          </div>
          <p className="text-end font-bold text-gray-400">
            <button onClick={(e) => handleOnClick()}>X</button>
          </p>
          <p className="font-bold text-indigo-600 text-center pb-2">
            We use cookies !
          </p>
          <div className="flex-row">
            <p className="text-[15px] font-[JetBrainsMono] leading-5 py-2">
              Hi, this Website uses essential cookies to ensure it's proper
              operation and tracking cookies to understand how you may interact
              with it. The latter will be set only after consent.
            </p>
            <p className="underline text-black font-medium ">
              Let me choose
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 w-full px-2">
            <button className="bg-indigo-600 py-2 px-4 rounded-md text-white">
              Accept all
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded-md text-black">
              Reject all
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
