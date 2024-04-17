import { InavItem } from "@/interface/nav";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowUp } from "react-icons/md";

import styles from "./footer.module.css";
import Socials from "../Socials";
interface Ifooter {
  items: InavItem[];
}

const Footer = ({ items }: Ifooter) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div className="relative w-full flex-col text-center pt-[40px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <button
        type="button"
        className="cursor-pointer absolute w-[80px] h-[80px] flex items-center justify-center text-white text-[36px] font-[600] bg-[--blue] rounded-full border-[3px] border-white top-[-40px] right-[60px]"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp />
      </button>
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
          Copyright © {new Date().getFullYear()} MessageMoment. All rights reserved.
        </p>
        <div className="absolute left-[50%] translate-x-[-50%] t-[31px]">
          <Socials />
        </div>
        <div className="flex gap-[10px] items-center">
          <p className={styles.designedBy}>Designed By</p>
          <Link href={"mailto:pictagroup@gmail.com"} target="_blank">
            <Image
              width={16}
              height={16}
              src={"/img/email-Icon.svg"}
              alt={"logo"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
