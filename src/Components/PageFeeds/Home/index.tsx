import React from "react";
import Image from "next/image";
import Hero from "@/Components/Hero";

import styles from "./home.module.css";
const Home = () => {
  return (
    <div className="flex-row w-full">
      <Hero />
      <div className="flex items-center justify-between p-[162px_142px_100px_172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <div className="flex flex-col gap-[20px]">
          <h2 className={styles.converseTitle}>
            Converse with ease and assurance
          </h2>
          <p className={styles.converseDesc}>
            It is said that words cannot be unspoken, but they can be unwritten
            with MessageMoment’s in-the-moment chat service that guarantees your
            conversation is history. Start chatting now and experience the
            privacy and security of MessageMoment.
          </p>
        </div>
        <Image
          width={504}
          height={475}
          src={"/img/Group 10509.svg"}
          alt="image"
        />
      </div>
      <div className={styles.expressSection}>
        <h1>Express yourself freely, anytime, with those you know</h1>
        <Image
          width={720}
          height={393.8}
          src={"/img/Group 8799.svg"}
          alt="image"
        />
        <div className={styles.expressSteps}>
          <div className={styles.express_steps_item}>
            <span className={styles.order}>1</span>
            <Image width={80} height={80} src="/img/icons/cursor.svg" alt="image" />
            <span className={styles.step_order}>Step 1</span>
            <span className={styles.step_title}>Generate Link</span>
          </div>
          <div className={styles.express_steps_item}>
            <span className={styles.order}>2</span>
            <Image width={80} height={80} src="/img/icons/share.svg" alt="image" />
            <span className={styles.step_order}>Step 2</span>
            <span className={styles.step_title}>Share it</span>
          </div>
          <div className={styles.express_steps_item}>
            <span className={styles.order}>3</span>
            <Image width={80} height={80} src="/img/icons/expiry.svg" alt="image" />
            <span className={styles.step_order}>Step 3</span>
            <span className={styles.step_title}>Set Expiry</span>
          </div>
          <div className={styles.express_steps_item}>
            <span className={styles.order}>4</span>
            <Image
              width={80}
              height={80}
              src="/img/icons/end-session.svg"
              alt="image"
            />
            <span className={styles.step_order}>Step 4</span>
            <span className={styles.step_title}>End Session</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[132px] p-[100px_157px_100px_142px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <Image
          width={456}
          height={475}
          src={"/img/message-sec.svg"}
          alt="image"
        />
        <div className="flex flex-col gap-[20px]">
          <h1 className={styles.messageTitle}>
            Your message only lasts a moment
          </h1>
          <p className={styles.messageDesc}>
            We believe that words can be a powerful tool for connection and
            communication, but it&lsquo;s also true that words cannot be
            unspoken. That&lsquo;s why we created a live chat service that lets
            you unwrite those words, with a unique chat link and a secure,
            in-the-moment chat experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
