import React from "react";
import Hero from "@/Components/Hero";
import ExpressSection from "@/Components/ExpressSection";
import ConverseSection from "@/Components/ConverseSection";
import DiscoverSection from "@/Components/DiscoverSection";
import MessageSection from "@/Components/MessageSection";

const Home = () => {
  return (
    <div className="flex-row w-full">
      <Hero />
      <ConverseSection />
      <ExpressSection />
      <MessageSection />
      <DiscoverSection />
    </div>
  );
};

export default Home;
