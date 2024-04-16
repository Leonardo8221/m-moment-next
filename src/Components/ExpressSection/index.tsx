import Image from "next/image";
import styles from "./express.module.css";

const ExpressSection = () => {
  return (
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
          <Image
            width={80}
            height={80}
            src="/img/icons/cursor.svg"
            alt="image"
          />
          <span className={styles.step_order}>Step 1</span>
          <span className={styles.step_title}>Generate Link</span>
        </div>
        <div className={styles.express_steps_item}>
          <span className={styles.order}>2</span>
          <Image
            width={80}
            height={80}
            src="/img/icons/share.svg"
            alt="image"
          />
          <span className={styles.step_order}>Step 2</span>
          <span className={styles.step_title}>Share it</span>
        </div>
        <div className={styles.express_steps_item}>
          <span className={styles.order}>3</span>
          <Image
            width={80}
            height={80}
            src="/img/icons/expiry.svg"
            alt="image"
          />
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
      <p className="mt-20 mx-auto text-center font-JetBrainsMono text-lg font-medium text-white">
        Start a chat session by clicking the &rdquo;Open Chat&rdquo; button on our site and
        receive a link. Optionally, make the chat secure by generating a
        security code.
      </p>
    </div>
  );
};

export default ExpressSection;
