import Link from "next/link";
import Image from "next/image";
import { Turnstile } from "@marsidev/react-turnstile";
import Head from "next/head";

import "../app/globals.css";

export default function Verification() {
  return (
    <>
      <Head>
        <title>MessageMoment - The real meaning to personal!</title>
      </Head>
      <div className="flex flex-col h-[100vh]">
        <div className="flex justify-center border-t-[5px] border-t-[--blue] p-[17px_60px] border-b border-b-black/5">
          <Link href={"/"}>
            <Image width={196.5} height={46} src={"/img/Logo.svg"} alt="logo" />
          </Link>
        </div>
        <div className="py-[50px] relative flex flex-1 flex-col justify-between bg-gradient-to-b from-[#494af8]/10 to-transparent">
          <div className="absolute w-[470px] h-[470px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[88px] px-[87px] pb-[41px] bg-[#494af8]/50 filter blur-[100px]"></div>
          <div className="flex-1 flex items-center justify-center text-center">
            <div className="flex flex-col bg-white pt-[124px] justify-between pb-[64px] w-[720px] h-[400px] relative border border-black/10 rounded-[10px]">
              <Image
                width={128}
                height={128}
                src={"/img/verification.svg"}
                alt=""
                className="absolute left-[50%] translate-x-[-50%] top-[-64px]"
              />
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-[DMSans] text-[26px] font-bold text-[--blue] text-center mb-[42px]">
                  Checking if the site connection is secure
                </h3>
                <Turnstile
                  siteKey="1x00000000000000000000AA"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <p className="font-medium font-[DMSans] text-[13px] leading-normal text-center text-[#555]">
            Copyright © {new Date().getFullYear()} MessageMoment. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}
