import { contactTopicOptions } from "@/utils/constants";
("use-client");
import React, { useState } from "react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

type ContactUseFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  topic: { label: string; value: string };
  query: string;
};

const Contact = () => {
  const [messageSent, setmessageSent] = useState<boolean | null>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const formObject = useForm<ContactUseFormValues>({
    mode: "onBlur",
  });
  const { register, control, handleSubmit, formState } = formObject;
  const { errors, isValid } = formState;
  const [remainingWordCount, setRemainingWordCount] = useState<number>(1500);

  const onSubmit = (data: ContactUseFormValues) => {
    setmessageSent(true);
    console.log("Form submitted", data);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid rgba(0 0 0 / 0.1)",
      color: state.isFocused ? "#494af8" : "#363c4f",
      fontFamily: "JetBrainsMono",
      fontSize: "15px",
      padding: ".8rem",
      backgroundColor: "white",
      cursor: "pointer",
      border: "1",
      display: "flex",
    }),
    control: (provided) => ({
      ...provided,
      padding: "1rem",
      border: "1px solid rgba(0 0 0 / 0.1)",
      // borderBottom: errors.topic?.message && "2px solid red",
      borderRadius: errors.topic?.message ? "6px 6px 0 0" : "6px",
      fontSize: "15px",
      cursor: "pointer",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid rgba(0 0 0 / 0.1)",
        boxShadow: "none",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: errors.topic?.message ? "#EB5757" : "grey",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "26px",
      display: "flex",
      lineHeight: 1,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      maxHeight: "26px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-[-1] bg-gradient-to-b from-[#494af8]/10 to-transparent w-full h-[700px]"></div>
      <div className="flex flex-col items-center p-[51px_172px_140px_172px]">
        <Image
          width={128}
          height={128}
          src={"/img/contact.svg"}
          alt=""
          className="max-auto mb-[30px]"
        />
        <div className="font-[DMSans] text-[--dark] w-full flex flex-col justify-center items-center mb-[30px]">
          <h1 className="text-[40px] font-bold mb-[28px]">Contact Us</h1>
          <p className="text-[17px] font-[500] text-center leading-[30px]">
            Need answers or help? We might have answered your questons in our{" "}
            <span className="text-[--blue] hover:underline">
              <Link href="/faqs">FAQs</Link>
            </span>
            . <br />
            Otherwise complete this form on the topic relevant to your query
          </p>
        </div>
        <div className="w-full flex bg-white border border-black/10 rounded-[10px] p-[50px_111px_39px_111px]">
          <form
            className="w-full font-[DMSans] text-[--dark] font-[500] contacUS-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex gap-[20px]">
              <div className="mb-4 w-1/2">
                <label className="block mb-[10px] text-lg">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] font-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${
                    errors.firstName?.message
                      ? " border-b-red-500 placeholder:text-red-400"
                      : ""
                  }`}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-[10px] text-lg">Last Name*</label>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${
                    errors.lastName?.message
                      ? " border-b-red-500 placeholder:text-red-400"
                      : ""
                  }`}
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-[10px] text-lg">Email Address*</label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${
                  errors.email?.message
                    ? "border-b-red-500 placeholder:text-red-400"
                    : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "Invalid email",
                  },
                })}
              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
            </div>
            <div className="mb-4">
              <label className="block mb-[10px] text-lg">Select a topic*</label>
              <Controller
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    styles={customStyles}
                    classNamePrefix={"topicSelect "}
                    placeholder={"Select"}
                    options={contactTopicOptions}
                    className={`block mb-[10px] !text-[JetBrainsMono] text-[15px] ${
                      errors.topic?.message ? "border-b-red-500" : ""
                    }`}
                  />
                )}
                {...register("topic", {
                  required: "Topic is required",
                })}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-[10px] justify-between">
                <label className="blocktext-lg">Query*</label>
                <p
                  className={`font-[JetBrainsMono] text-[13px] text-[--dark] opacity-30 ${
                    remainingWordCount < 10 ? "text-red-500 opacity-100" : ""
                  }`}
                >
                  {remainingWordCount} characters left
                </p>
              </div>
              <textarea
                required
                rows={4}
                maxLength={1500}
                placeholder="Enter your query here"
                className={`p-[17px_20px] outline-none error:rounded-b-none placeholder-[--dark]/30 w-full h-[200px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${
                  errors.query?.message
                    ? "border-b-red-500 placeholder:text-red-400"
                    : ""
                }`}
                {...register("query", {
                  required: "query is required",
                  maxLength: 1500,
                  onChange: (event) =>
                    setRemainingWordCount(1500 - event.target.value.length),
                })}
              ></textarea>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <Turnstile
                siteKey="1x00000000000000000000AA"
                className="w-[300px]"
                onSuccess={() => setIsSuccess(true)}
              />
              <button
                type="submit"
                disabled={!isValid}
                className="w-[236px] h-[46px] inline-flex items-center justify-center text-white rounded-[6px] bg-[--blue] font-[JetBrainsMono] disabled:bg-[#ccc] !transition-all !duration-500 !ease-in-out hover:!bg-[--hoverblue]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {messageSent && (
          <>
            <div
              className="clickable-overlay"
              onClick={() => setmessageSent(false)}
            ></div>{" "}
            <div className="py-[50px] fixed flex flex-1 flex-col justify-between message-sent-modal">
              <div className="absolute w-[470px] h-[470px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[88px] px-[87px] pb-[41px] bg-[#494af8]/50 filter blur-[100px]"></div>
              <div className="flex-1 flex items-center justify-center text-center">
                <div className="flex flex-col bg-white pt-[134px] justify-between pb-[64px] w-[720px] h-[400px] relative border border-black/10 rounded-[10px]">
                  <Image
                    width={128}
                    height={128}
                    src={"/img/messageSent.svg"}
                    alt=""
                    className="absolute left-[50%] translate-x-[-50%] top-[-64px]"
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="font-[DMSans] text-[26px] font-bold text-[--blue] text-center mb-[30px]">
                      Message Sent
                    </h3>
                    <p className="font-[JetBrainsMono] text-[16px] font-normal text-[--dark] text-center mb-[33px]">
                      We’ve received your message. A MessageMoment team member{" "}
                      <br /> will be in contact with you soon. Thank you.
                    </p>
                    <button
                      onClick={() => setmessageSent(false)}
                      className="w-[236px] h-[46px] inline-flex items-center justify-center text-white rounded-[6px] bg-[--blue] font-[JetBrainsMono] disabled:bg-[#ccc] !transition-all !duration-500 !ease-in-out hover:!bg-[--hoverblue]"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
