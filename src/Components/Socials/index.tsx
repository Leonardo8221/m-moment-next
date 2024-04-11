import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex gap-[20px] items-center text-[--light-gray]">
      <Link href={""}>
        <RiTwitterXLine fontSize={24.4} />
      </Link>
      <Link href={""}>
        <PiInstagramLogoFill fontSize={27} />
      </Link>
      <Link href={""}>
        <BsFacebook fontSize={22} />
      </Link>
      <Link href={""}>
        <TbBrandYoutubeFilled fontSize={29.4} />
      </Link>
    </div>
  );
};

export default Socials;
