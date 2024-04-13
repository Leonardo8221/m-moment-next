import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex gap-[20px] items-center text-[--light-gray]">
      <Link href={"https://www.twitter.com/"} target="_blank">
        <RiTwitterXLine fontSize={24.4} />
      </Link>
      <Link href={"https://www.instagram.com/"} target="_blank">
        <PiInstagramLogoFill fontSize={27} />
      </Link>
      <Link href={"https://www.facebook.com/"} target="_blank">
        <BsFacebook fontSize={22} />
      </Link>
      <Link href={"https://www.youtube.com/"} target="_blank">
        <TbBrandYoutubeFilled fontSize={29.4} />
      </Link>
    </div>
  );
};

export default Socials;
