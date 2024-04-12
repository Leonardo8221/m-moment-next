import React from "react";
import Hero from "@/Components/Hero";

const Home = () => {

  return (
    <div className="flex-row w-full">
      <Hero />
      <div className="bg-gradient-to-b from-[#494af8]/10 to-transparent"></div>
      <div className="bg-gradient-to-b from-[#494af8]/10 to-transparent"></div>
    </div>
  );
};

export default Home;
