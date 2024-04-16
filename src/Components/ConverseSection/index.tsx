import Image from "next/image";
import styles from "./converse.module.css";

const ConverseSection = () => {
  return (
    <div className="flex items-center gap-[50px] justify-between p-[162px_142px_100px_172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
      <div className="flex flex-col gap-[20px]">
        <h2 className={styles.converseTitle}>
          Converse with ease and assurance
        </h2>
        <p className={styles.converseDesc}>
          It is said that words cannot be unspoken, but they can be unwritten
          with MessageMoment’s in-the-moment chat service that guarantees your
          conversation is history. Start chatting now and experience the privacy
          and security of MessageMoment.
        </p>
      </div>
      <Image
        width={504}
        height={475}
        src={"/img/Group 10509.svg"}
        alt="image"
      />
    </div>
  );
};

export default ConverseSection;
