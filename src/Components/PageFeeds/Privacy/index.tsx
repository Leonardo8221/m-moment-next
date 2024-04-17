import { privacies } from "@/utils/constants";
import dynamic from "next/dynamic";
// Use dynamic imports to load the MarkdownPreview asynchronously
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false } // This option disables server-side rendering if needed
);

const Privacy = () => {
  return (
    <div className="w-full flex flex-col text-left pt-[51px] pb-[143px] px-[172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <h1 className="font-[DMSans] page-title font-bold leading-normal tracking-normal text-left text-[--dark] m-0">
        Privacy Policy
      </h1>
      <div className="w-[190px] h-[46px] mt-[48px] mb-[30px] pt-[10px] pb-[13px] text-center rounded-[6px] border border-gray-200 bg-white text-[--dark] font-[JetBrainsMono] text-[15px]">
        April 1, 2023
      </div>
      <div className="w-full flex flex-col gap-[36px]">
        {privacies.map((privacy, index) => (
          <div className="flex flex-col" key={index}>
            <h1 className="font-[DMSans] mb-[30px] policy-heading font-bold leading-normal tracking-normal text-justify text-[--blue]">
              {privacy.title}
            </h1>
            <MarkdownPreview
              source={privacy.desc}
              style={{
                background: "none",
                fontFamily: "JetBrainsMono",
                fontSize: "15px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "1.53",
                letterSpacing: "normal",
                textAlign: "justify",
                color: "#363c4f",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
