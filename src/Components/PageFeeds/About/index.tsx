import Image from "next/image";
import styles from "./about.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
const About = () => {
  const router = useRouter();

  const scrollToSectionWithOffset = () => {
    const element = document.getElementById("urlGenerator");
    const select = document.getElementById("selectList");
    const qrCode = document.getElementById("qrCode");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 86;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const handleTryMessagMoment = () => {
    // If already on the homepage, just scroll to the specific div.
    if (router.pathname == "/") {
      scrollToSectionWithOffset();
    } else {
      // If not, first navigate to the homepage then scroll.
      router.push("/").then(() => scrollToSectionWithOffset());
    }
  };
  return (
    <div className="flex flex-col">
      <div className={styles.topSection}>
        <h1> Welcome to MessageMoment</h1>
        <p>
          The untraceable live chat service that allows you to have a private,
          discreet and secure conversation with anyone, anywhere.
        </p>
      </div>
      <div className="relative flex flex-col items-center w-full h-[600px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <div className="flex items-center gap-[20px] mt-[-121px]">
          <Image
            className="rounded-[20px]"
            width={260}
            height={242}
            src={"/img/about/t-1.svg"}
            alt=""
          />
          <Image
            className="rounded-[20px]"
            width={260}
            height={242}
            src={"/img/about/t-2.svg"}
            alt=""
          />
          <Image
            className="rounded-[20px]"
            width={260}
            height={242}
            src={"/img/about/t-3.svg"}
            alt=""
          />
          <Image
            className="rounded-[20px]"
            width={260}
            height={242}
            src={"/img/about/t-4.svg"}
            alt=""
          />
        </div>
        <p className="mt-[50px] mb-[70px] w-[908px] font-[JetBrainsMono] text-[17px] text-[#363c4f] text-center">
          It is said that words cannot be unspoken, but they can be unwritten
          with MessageMoment’s in-the-moment chat service that guarantees your
          conversation is history. Start chatting now and experience the privacy
          and security of MessageMoment.
        </p>
        <Image
          className="z-10"
          width={128}
          height={128}
          src={"/img/about/message.svg"}
          alt=""
        />
      </div>
      <div className="w-full h-[723px] relative flex flex-col items-center pt-[155px] pb-[70px]">
        <div
          className={`flex flex-col items-center w-[1320px] h-[500px] pt-[117px] absolute  left-[50%] translate-x-[-50%] bg-[--blue] rounded-[20px] text-white ${styles.top__227}`}
        >
          <h1
            className={`font-[DMSans] text-[40px] font-[700] text-center mb-[20px] ${styles.line_h_52}`}
          >
            We believe that words can be a powerful tool for <br /> connection
            and communication, but it&rsquo;s also true that <br />
            words cannot be unspoken.
          </h1>
          <p className="font-[JetBrainsMono] text-[17px] font-[500] text-center leading-6">
            That&rsquo;s why we created a live chat service that lets you
            unwrite those words,
            <br /> with a unique chat link and a secure, in-the-moment chat
            experience.
          </p>
        </div>
        <Image
          width={1098}
          height={242}
          src={"/img/about/second.svg"}
          alt=""
          className="mb-[70px] z-10"
        />
        <p className="font-[JetBrainsMono] text-[17px] text-[#363c4f] font-[500] text-center mb-[30px] leading-[22px]">
          Our team has developed a platform that is not only simple and easy to
          use, but also guarantees
          <br /> your conversation will be history. With no account registration
          necessary and a mobile-
          <br />
          responsive design, you can chat on the go, without leaving a trace. It
          never happened! Our
          <br /> unique security features include the option to &rdquo;Make
          Secure,&rdquo; by sharing a token password,
          <br /> ensuring that only those you invite can enter the chat.
        </p>
        <button
          type="button"
          onClick={handleTryMessagMoment}
          className="w-[315px] h-[46px] inline-flex items-center justify-center text-white bg-[--blue] font-[JetBrainsMono] text-[15px] font-[700] text-center rounded-[5px]"
        >
          Try MessageMoment
        </button>
      </div>
      <div className="w-full h-[600px] flex gap-[60px] items-center justify-center p-[150px_172px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <Image width={500} height={300} src={"/img/about/third.svg"} alt="" />
        <div
          className={`flex flex-col text-left text-[#363c4f] ${styles.width_538}`}
        >
          <h1 className="font-[DMSans] text-[60px] font-[700] mb-[20px] leading-[70px]">
            We take the privacy of our users seriously
          </h1>
          <p className="font-[JetBrainsMono] text-[17px]">
            We have implemented the appropriate security measures to protect
            your data. We understand the importance of having a safe and secure
            space to communicate, and MessageMoment provides just that.
          </p>
        </div>
      </div>
      <div className="w-full h-[600px] flex gap-[60px] text-[#363c4f] items-center justify-between p-[119px_172px_119px_170px] bg-gradient-to-b from-[#494af8]/10 to-transparent">
        <div
          className={`flex flex-col text-left text-[#363c4f] ${styles.width_538}`}
        >
          <h1 className="font-[DMSans] text-[60px] font-[700] mb-[20px] leading-[70px]">
            The solution <br /> you’ve been <br />
            searching for
          </h1>
          <p className="font-[JetBrainsMono] text-[17px]">
            Our mission is to provide a reliable and trustworthy platform for
            discreet conversations between known parties. Whether you&rsquo;re
            looking to keep a conversation private or just need a secure space
            to communicate, MessageMoment is the solution you&rsquo;ve been
            searching for.
          </p>
        </div>
        <Image width={500} height={300} src={"/img/about/fourth.svg"} alt="" />
      </div>
      <div className="w-full flex flex-col h-[944px] items-center p-[54px_60px]">
        <div className="flex flex-col pt-[140px] items-center w-full h-[550px] rounded-[20px] bg-[--dark] text-white relative">
          <Image
            width={128}
            height={128}
            src={"/img/about/lamp.svg"}
            alt=""
            className={`absolute left-[50%] translate-x-[-50%] ${styles.top__60}`}
          />
          <h1
            className={`text-[40px] font-[600] text-center font-[DMSans] mb-[20px] ${styles.line_h_52}`}
          >
            We are dedicated to delivering an
            <br /> unparalleled user experience and are always <br />
            looking for ways to improve our services.
          </h1>
          <p className="text-[17px] text-center font-[500] font-[JetBrainsMono] leading-6 mb-[80px]">
            If you have any questions, concerns, feedback or would like to
            <br />
            advertise with MessageMoment, please do not hesitate to{" "}
            <u><Link href={'/contact-us'}>Contact Us</Link></u>.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-[20px] mb-[50px]">
              <Image
                width={260}
                height={242}
                src={"/img/about/l-1.svg"}
                alt=""
              />
              <Image
                width={540}
                height={242}
                src={"/img/about/l-2.svg"}
                alt=""
              />
              <Image
                width={260}
                height={242}
                src={"/img/about/l-3.svg"}
                alt=""
              />
            </div>
            <p className="font-[JetBrainsMono] text-[13px] text-[#777] text-center w-[883px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis nibh id nunc commodo scelerisque. Donec neque justo,
              hendrerit quis laoreet sed, consectetur vitae enim. Vestibulum
              elementum urna eu lectus feugiat laoreet. Donec tincidunt libero
              et urna laoreet accumsan. Curabitur at porta lectus, eget maximus
              neque. Nulla pellentesque nunc turpis, id interdum lacus consequat
              non. Donec nec placerat augue, nec vehicula metus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
