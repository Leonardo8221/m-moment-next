import { terms } from "@/utils/constants";
import Link from "next/link";
import dynamic from "next/dynamic";
// Use dynamic imports to load the MarkdownPreview asynchronously
const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false } // This option disables server-side rendering if needed
);

const Terms = () => {
  return (
    <div className="w-full flex flex-col text-left pt-[51px] pb-[143px] px-[172px] bg-gradient-to-b from-[#494af8]/5 to-transparent">
      <h1 className="font-[DMSans] page-title font-bold leading-normal tracking-normal text-left text-[--dark] m-0">
        Terms and Conditions of Use
      </h1>
      <div className="w-[190px] h-[46px] mt-[48px] mb-[30px] pt-[10px] pb-[13px] text-center rounded-[6px] border border-gray-200 bg-white text-[--dark] font-[JetBrainsMono] text-[15px]">
        July 1, 2024
      </div>
      <div className="w-full flex flex-col gap-[36px] border-b border-[#000]/10 pb-[33px] mb-[30px]">
        {terms.map((term, index) => (
          <div className="flex flex-col" key={index}>
            <h1 className="font-[DMSans] mb-[30px] policy-heading font-bold leading-normal tracking-normal text-justify text-[--blue]">
              {term.title}
            </h1>
            <MarkdownPreview
              source={term.desc}
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
      <div className="flex flex-col">
        <h1 className="font-[DMSans] mb-[30px] policy-heading font-bold leading-normal tracking-normal text-justify text-[--blue]">
          Credits
        </h1>
        <div className="mb-[18px]">
          <Link
            href={
              "https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard"
            }
            className="font-[JetBrainsMono] text-base leading-6 tracking-normal text-justify text-[--dark]"
          >
            https://www.flaticon.com/authors/basic-sheer/flat/8?author_id=1&type=standard
          </Link>
          <p className="font-[JetBrainsMono] text-base leading-6 tracking-normal text-justify text-[#999]">
            Under Flaticon License
          </p>
        </div>
        <div>
          <Link
            href={
              'https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais"'
            }
            className="font-[JetBrainsMono] text-base leading-6 tracking-normal text-justify text-[--dark]"
          >
            https://www.freepik.com/free-vector/digital-device-mockup_4168605.htm#query=multi%20device%20mockup&position=23&from_view=search&track=ais&rdquo;
          </Link>
          <p className="font-[JetBrainsMono] text-base leading-6 tracking-normal text-justify text-[#999]">
            Image by rawpixel.com on Freepik
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
