import React, { ReactNode } from "react";
import { navItems } from "@/utils/constants";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
import Cookies from "../Cookies";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>MessageMoment - The real meaning to personal!</title>
      </Head>
      <div className="flex flex-col min-h-[100vh] pt-[85px]">
        <Header items={navItems} />
        <div className="flex-1 w-full px-0">{children}</div>
        <Footer items={navItems} />
        <div className="fixed bottom-[30px] right-[30px] z-[99]">
          <Cookies />
        </div>
      </div>
    </>
  );
}

export default Layout;
