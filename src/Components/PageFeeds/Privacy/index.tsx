import { privacies } from "@/utils/constants";

const Privacy = () => {
  return (
    <div className="w-full flex flex-col text-left pt-[51px] pb-[143px] px-[172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <h1 className="font-[DMSans] text-4xl font-bold leading-normal tracking-normal text-left text-[--dark] m-0">
        Privacy Policy
      </h1>
      <div className="w-[190px] h-[46px] mt-[48px] mb-[30px] pt-[10px] pb-[13px] text-center rounded-[6px] border border-gray-200 bg-white text-[--dark] font-[JetBrainsMono] text-[15px]">
        April 1, 2023
      </div>
      <div className="w-full flex flex-col gap-[36px]">
        {privacies.map((privacy, index) => (
          <div className="flex flex-col" key={index}>
            <h1 className="font-[DMSans] mb-[30px] text-3xl font-bold leading-normal tracking-normal text-justify text-[--blue]">{privacy.title}</h1>
            <p className="font-[JetBrainsMono] text-base leading-6 tracking-normal text-justify text-[--dark]">{privacy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
