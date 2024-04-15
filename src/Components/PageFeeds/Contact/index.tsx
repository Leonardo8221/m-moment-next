'use-client';
import React, {useState} from "react";
import Link from "next/link";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import {useForm} from "react-hook-form";

type ContactUseFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  query: string;

}
const Contact = () => {

  const formObject=useForm<ContactUseFormValues>({
    mode:'onBlur'
  });
  const {register,control, handleSubmit,formState}= formObject;
  const {errors,isValid}=formState;
  const [remainingWordCount,setRemainingWordCount]=useState<number>(1500);

  const onSubmit=(data:ContactUseFormValues)=>{
    console.log('Form submitted',data)
  }
  const handleRemainingWordCount=(text:string)=>{
    setRemainingWordCount(1500-text.length)
  }
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#494af8]/10 to-transparent w-full h-[700px] flex flex-col items-center p-[51px_172px]">
        <Image
          width={128}
          height={128}
          src={"/img/contact.svg"}
          alt=""
          className="max-auto mb-[30px]"
        />
        <div className="font-[DMSans] text-[--dark] w-full flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold mb-[28px]">Contact Us</h1>
          <p className="text-[17px] font-[500] text-center leading-[30px]">
            Need answers or help? We might have answered your questons in our{" "}
            <span className="text-[--blue]">
              <Link href="/faq">FAQs</Link>
            </span>
            . <br />
            Otherwise complete this form on the topic relevant to your query
          </p>
        </div>
        <div className="absolute w-[1096px] h-[750px] top-[377px] left-[50%] translate-x-[-50%] flex bg-white border border-black/10 rounded-[10px] p-[50px_111px_39px_111px]">
          <form
            className="w-full font-[DMSans] text-[--dark] font-[500]"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex gap-[20px]">
              <div className="mb-4 w-1/2">
                <label className="block mb-[10px] text-lg">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] font-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${errors.firstName?.message ? " border-b-red-500 placeholder:text-red-400":""}`}
                  {...register('firstName',{
                    required:'First name is required'
                  })
                }
                />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block mb-[10px] text-lg">Last Name*</label>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${errors.lastName?.message ? " border-b-red-500 placeholder:text-red-400":""}`}
                  {...register('lastName',{
                    required:'Last name is required',
                  })}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-[10px] text-lg">Email Address*</label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${errors.email?.message? "border-b-red-500 placeholder:text-red-400":'' }`}
                {...register('email',{
                  required:'Email is required',
                  pattern: {
                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message:'Invalid email'
                  }
                })}              />
              <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
            </div>
            <div className="mb-4">
              <label className="block mb-[10px] text-lg">Select a topic*</label>
              <input
                type="text"
                required
                placeholder="Select"
                className={`p-[17px_20px] outline-none placeholder-[--dark]/30 w-full h-[60px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${errors.topic?.message? "border-b-red-500 placeholder:text-red-400":'' } `}
                {...register('topic',{
                  required:'Topic is required'
                })}              />
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-[10px] justify-between">
                <label className="blocktext-lg">Query*</label>
                <p className={`font-[JetBrainsMono] text-[13px] text-[--dark] opacity-30 ${remainingWordCount<10? 'text-red-500 opacity-100':''}`}>
                  {remainingWordCount} characters remaining
                </p>
              </div>
              <textarea
                required
                rows={4}
                placeholder="Enter your query here"
                className={`p-[17px_20px] placeholder-[--dark]/30 w-full h-[200px] text-[JetBrainsMono] text-[15px] rounded-[6px] border border-black/10 ${errors.query?.message? "border-b-red-500 placeholder:text-red-400":'' }`}
                {...register('query',{
                  required:'query is required',
                  maxLength:1500,
                  onChange:(event)=>setRemainingWordCount(1500-event.target.value.length)
                })}>
              </textarea>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <Turnstile
                siteKey="1x00000000000000000000AA"
                className="w-[300px]"
              />
              <button
                disabled={!isValid}
                className="w-[236px] h-[46px] inline-flex items-center justify-center text-white rounded-[6px] bg-[--blue] font-[JetBrainsMono] disabled:bg-[#ccc]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full bg-white h-[567px]"></div>
    </>
  );
};

export default Contact;
