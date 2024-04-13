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
    if (router.pathname == '/') {
      scrollToSection();
    } else {
      // If not, first navigate to the homepage then scroll.
      router.push('/').then(() => scrollToSection());
    }
  };

  const scrollToSection = () => {
    // Replace 'your-div-id' with the actual ID of your target div.
    const element = document.getElementById('urlGenerator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between border-t-[5px] border-t-[--blue] p-[17px_60px] border-b border-b-black/5">
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
          className="inline-flex items-center justify-center bg-[--blue] rounded-[6px] text-white w-[150px] h-[46px] hover:opacity-4"
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
