import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import "../app/globals.css";

export default function ChatFull() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
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
            <div className="bg-white pt-[70px] pb-[40px] w-[720px] h-[430px] relative border border-black/10 rounded-[10px]">
              <Image
                width={128}
                height={128}
                src={"/img/404.svg"}
                alt=""
                className="absolute left-[50%] translate-x-[-50%] top-[-64px]"
              />
              <h1 className="font-[DMSans] text-[150px] text-[--blue] text-center mb-0">
                404
              </h1>
              <h3 className="font-[DMSans] text-[26px] font-bold text-[--blue] text-center mb-[30px]">
                The page you’re looking for doesn&rsquo;t exist
              </h3>
              <p className="font-[JetBrainsMono] text-[15px] text-[--dark] text-center mb-[33px]">
                Don’t panic, just click the big button below and return home.
              </p>
              <Link
                href={"/"}
                className="mx-auto w-[236px] h-[46px] inline-flex items-center justify-center text-white rounded-[6px] bg-[--blue] font-[JetBrainsMono] !transition-all !duration-500 !ease-in-out hover:!bg-[--hoverblue]"
              >
                Return to Homepage
              </Link>
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
