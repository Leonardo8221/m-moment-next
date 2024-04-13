"use client";
import React, { memo, useState } from "react";

const Cookies = () => {
  const [open, setOpen] = useState(true);

  const handleOnClick = () => {
    setOpen(false);
  };

  const onAcceptPress = () => {
    
  };

  const onRejectPress = () => {

  };

  return (
    <div className="absolute z-[9999] top-[60px] bg-white text-black -right-[10px] h-[240px] rounded-md p-3 w-96 px-3">
      <p className="text-end font-bold text-gray-400">
        <button onClick={handleOnClick}>X</button>
      </p>
      <p className="font-bold text-indigo-600 text-center pb-2">
        We use cookies !
      </p>
      <p className="text-sm font-normal text-pretty leading-5 py-2">
        Hii This Website uses essential cookies to ensure it's proper operation
        and tracking cookies to understand how you may interact with it. The
        latter will be set only after consent.
        <p className="underline text-black font-medium pb-2">Let me choose</p>
      </p>
      <div className="flex items-center justify-center gap-4 w-full px-2">
        <button
          onClick={onAcceptPress}
          className="bg-indigo-600 py-2 px-4 rounded-md text-white"
        >
          Accept all
        </button>
        <button
          onClick={onRejectPress}
          className="bg-gray-200 py-2 px-4 rounded-md text-black"
        >
          Reject all
        </button>
      </div>
    </div>
  );
};

export default memo(Cookies);
