import { InavItem } from "@/interface/nav";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Socials from "../Socials";
import { useRouter } from "next/router";

interface Iheader {
  items: InavItem[];
}

const Header = ({ items }: Iheader) => {
  const router = useRouter();

  const navigateToHomeSection = () => {
    // If already on the homepage, just scroll to the specific div.
    if (router.pathname == "/") {
      scrollToSectionWithOffset();
    } else {
      // If not, first navigate to the homepage then scroll.
      router.push("/").then(() => scrollToSectionWithOffset());
    }
  };

  const scrollToSectionWithOffset = () => {
    const element = document.getElementById("urlGenerator");
    const select = document.getElementById("selectList");
    const qrCode = document.getElementById("qrCode");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 86;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-white flex justify-between border-t-[5px] border-t-[--blue] p-[17px_60px] border-b border-b-black/5">
      <div className="flex gap-[50px]">
        <Link href={"/"}>
          <Image width={196.5} height={46} src={"/img/Logo.svg"} alt="logo" />
        </Link>
        <ul className="flex items-center gap-[30px]">
          {items.slice(0, 2).map((item) => (
            <li key={item.href} className={styles.nav}>
              <Link
                href={item.href}
                className={`${
                  router.pathname === item.href
                    ? "text-[--blue]"
                    : "text-[#000]"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[29.5px] items-center">
        <Socials />
        <button
          className="inline-flex items-center justify-center bg-[--blue] rounded-[6px] text-white w-[150px] h-[46px] !transition-all !duration-500 !ease-in-out hover:!bg-[--hoverblue]"
          type="button"
          onClick={navigateToHomeSection}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Header;
