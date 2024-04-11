import React, { ReactNode } from "react";
import { navItems } from "@/utils/constants";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header items={navItems} />
      <div className="flex-1 w-full px-0">{children}</div>
      <Footer items={navItems} />
    </div>
  );
}

export default Layout;
