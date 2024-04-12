import { useEffect, useRef, useState } from "react";

import { BsArrowRepeat } from "react-icons/bs";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import DropDwon from "@/Components/ui/DropDown";
import { options } from "@/utils/constants";
import styles from "./hero.module.css";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [randUrl, setRandUrl] = useState("");
  const [selectedValue, setSelectedValue] = useState(options[0].label);

  const turnstileRef = useRef<HTMLDivElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleItemClick = (option: {
    value?: string;
    label: any;
    icon?: JSX.Element;
  }) => {
    setSelectedValue(option.label);
    setIsOpen(false);
  };

  useEffect(() => {
    if (turnstileRef.current) {
      turnstileRef.current.addEventListener("turnstile-rendered", function () {
        setTurnstileToken((window as any).cfTurnstileResponse);
      });
    }
  }, []);

  // Use this useEffect to detect when the token changes and send it to your backend
  useEffect(() => {
    if (turnstileToken) {
      // Post the token to the backend here
      console.log("Token ready to be sent: ", turnstileToken);
      // Add your fetch or axios call here to send the token to the backend
    }
  }, [turnstileToken]);

  return (
    <div className="bg-gradient-to-b from-[#494af8]/10 to-transparent p-[50px_60px]">
      <div className="w-full relative h-[700px] rounded-[20px] bg-[url('/img/AdobeStock_205129152.svg')] bg-cover">
        <h2 className={styles.heroTitle}>The real meaning to personal</h2>
        <p className={styles.heroDesc}>
          A reliable and trustworthy platform for discreet conversations between
          known parties
        </p>
        <div className="absolute top-[512px] left-[50%] translate-x-[-50%] flex flex-col w-[1096px] h-[300px] rounded-[20px] bg-[--blue]">
          <p className="text-center h-[80px] py-[28px] font-[DMSans] text-white text-[17px] m-0">
            Click the button below to receive your random link that you can
            share with your friends any way you like!
          </p>
          <div className="p-[35px_30px_25px_30px] h-[220px] flex-1 bg-black/[.08] rounded-b-[20px] z-10">
            <div className="flex flex-col mb-[15px]">
              <div className="flex w-full items-center gap-[6px] mb-[13px]">
                <div className="flex flex-1 items-center">
                  <DropDwon
                    options={options}
                    setIsOpen={setIsOpen}
                    selectedValue={selectedValue}
                    isOpen={isOpen}
                    handleItemClick={handleItemClick}
                  />
                  <input
                    type="text"
                    value={randUrl}
                    onChange={(e) => setRandUrl(e.target.value)}
                    className="w-full h-[50px] rounded-r-[5px] text-[16px] font-[600] font-[JetBrainsMono] p-[15px_20px] outline-none  text-[#363c4f] border border-[#ddd]"
                  />
                </div>
                <div className="flex gap-[5px]">
                  <button
                    className={`inline-flex items-center justify-center bg-white/10 border ${
                      randUrl
                        ? "border-white text-white"
                        : "border-white/20 text-white/20 "
                    } rounded-[5px] w-[50px] h-[50px] `}
                  >
                    <BsArrowRepeat fontSize={26} />
                  </button>
                  <button
                    className={`inline-flex items-center justify-center bg-white rounded-[5px] ${
                      randUrl ? "text-[#494af8]" : "text-[#ccc]"
                    } w-[50px] h-[50px]`}
                  >
                    <MdOutlineQrCodeScanner fontSize={23} />
                  </button>
                  <button
                    className={`inline-flex items-center justify-center bg-white rounded-[5px] ${
                      randUrl ? "text-[#494af8]" : "text-[#ccc]"
                    } w-[50px] h-[50px]`}
                  >
                    <MdContentCopy fontSize={20} />
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center gap-[20px]">
                <div
                  className="cf-turnstile"
                  data-sitekey="0x4AAAAAAAW7P_qqtQlzKpgw"
                  data-theme="light"
                  ref={turnstileRef}
                ></div>
                <button
                  type="button"
                  className="bg-white rounded-[6px] inline-flex items-center justify-center text-center font-[JetBrainsMono] text-[15px] text-[#ccc] w-full h-[65px]"
                >
                  Generate link
                </button>
              </div>
            </div>
            <p className="font-[DMSans] text-[13px] text-white text-center m-0">
              By starting this chat session, you agree to our Terms of Use and
              Privacy Policy, and that you and everybody you share the chat link
              with is above 16 years of age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
