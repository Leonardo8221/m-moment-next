import Image from "next/image";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex gap-[20px] items-center text-[--light-gray]">
      <Link
        className="flex items-center"
        href={"https://www.twitter.com/"}
        target="_blank"
      >
        <Image
          width={22}
          height={22}
          src={"/img/icons/X.svg"}
          alt="soical icons"
        />
      </Link>
      <Link
        className="flex items-center"
        href={"https://www.instagram.com/"}
        target="_blank"
      >
        <Image
          width={22}
          height={22}
          src={"/img/icons/Instagram.svg"}
          alt="soical icons"
        />
      </Link>
      <Link
        className="flex items-center"
        href={"https://www.facebook.com/"}
        target="_blank"
      >
        <Image
          width={24.1}
          height={24}
          src={"/img/icons/Facebook.svg"}
          alt="soical icons"
        />
      </Link>
      <Link
        className="flex items-center"
        href={"https://www.youtube.com/"}
        target="_blank"
      >
        <Image
          width={27.5}
          height={22}
          src={"/img/icons/Youtube.svg"}
          alt="soical icons"
        />
      </Link>
    </div>
  );
};

export default Socials;
