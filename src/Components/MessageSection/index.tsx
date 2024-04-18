import Image from "next/image";
import styles from "./message.module.css";

const MessageSection = () => {
  return (
    <div className="flex items-center justify-center gap-[132px] p-[100px_167px_100px_142px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <Image
        width={456}
        height={475}
        src={"/img/message-sec.svg"}
        alt="image"
      />
      <div className="flex flex-col">
        <h1 className={styles.messageTitle}>
          Your message only
          <br /> lasts a moment
        </h1>
        <p className={styles.messageDesc}>
          We believe that words can be a powerful tool for connection and
          communication, but it&lsquo;s also true that words cannot be unspoken.
          That&lsquo;s why we created a live chat service that lets you unwrite
          those words, with a unique chat link and a secure, in-the-moment chat
          experience.
        </p>
      </div>
    </div>
  );
};

export default MessageSection;
