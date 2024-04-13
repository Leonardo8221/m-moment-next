import React, { memo } from "react";
import Link from "next/link";

const Contact=()=> {
  return (
    <div className="bg-gray-100 w-full h-full m-3 flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col justify-center items-center gap-3 p-4">
        <h1 className="text-3xl font-medium">Contact Us</h1>
        <p>
          Need answers or help? We might have answered your questons in our{" "}
          <span className="text-blue-500">
            <Link href="/faq">FAQs</Link>
          </span>
          . Otherwise complete this form on the topic relevant to your query
        </p>
      </div>
      <div className="flex justify-center items-center py-10 w-full">
        <div className="w-full sm:w-2/3 p-3 bg-white">
          <form>
            <div>
              <div className="flex gap-4">
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-lg pt-2">First Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    className="border border-gray-300 p-2 w-full"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block mb-2 text-lg pt-2">Last Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    required
                    className="border border-gray-300 p-2 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Email Address*</label>
              <input
                type="email"
                required
                placeholder="Ente your Email Address"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Select a topic*</label>
              <input
                type="text"
                required
                placeholder="Select"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg">Query*</label>
              <textarea
                required
                rows={4}
                placeholder="Enter your query here"
                className="border border-gray-500 p-2 w-full"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="captcha" className="mr-2" />
              <label htmlFor="captcha" className="text-lg">
                Verify that you are human
              </label>
              <div className="flex-grow"></div>
              <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
