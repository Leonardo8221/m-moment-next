import { InavItem } from "@/interface/nav";
import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";
import Socials from "../Socials";
interface Ifooter {
  items: InavItem[];
}

const Footer = ({ items }: Ifooter) => {
  return (
    <div className="w-full flex-col text-center pt-[40px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <Image
        width={196.5}
        height={46}
        src={"/img/Logo.svg"}
        alt="logo"
        className="mb-[50px] mx-auto"
      />
      <ul className="flex items-center gap-[30px] mb-[50px] mx-auto w-fit">
        {items.map((item) => (
          <li key={item.href} className={styles.nav}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-between relative border-t border-black/1 px-[60px] items-center h-[89px]">
        <p className={styles.copyright}>
          Copyright © 2023 MessageMoment. All rights reserved.
        </p>
        <div className="absolte left-[50%] translate-x-[-50%] t-[31px]">
          <Socials />
        </div>
        <p className={styles.designedBy}>Designed By</p>
      </div>
    </div>
  );
};

export default Footer;