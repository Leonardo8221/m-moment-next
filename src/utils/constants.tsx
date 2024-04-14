import Image from "next/image";

export const navItems = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/faqs",
    title: "Help & Support",
  },
  {
    href: "/terms",
    title: "Terms of Use",
  },
  {
    href: "/privacy",
    title: "Privacy Policy",
  },
];

export const options = [
  {
    value: "standard",
    label: "Standard",
    icon: (
      <Image width={16} height={16} src={"/img/icons/global.svg"} alt="icon" />
    ),
  },
  {
    value: "secure",
    label: "Secure",
    icon: (
      <Image
        width={12.19}
        height={16}
        src={"/img/icons/secure.svg"}
        alt="icon"
      />
    ),
  },
];

export const terms = [
  {
    title: "1. Introduction",
    desc: "Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. By using MessageMoment, you agree to be bound by these Terms and Conditions of Use (“T&Cs”). If you do not agree with these T&Cs, you should not use MessageMoment.",
  },
  {
    title: "2. Conditions of Use",
    desc: "By using MessageMoment, you agree to the following conditions of use:<br/><ul style='list-style-type: disc;'><li>You will not use the platform for any illegal or unauthorized purpose.</li><li>You will not violate any laws in your jurisdiction.</li><li>You will not infringe upon the rights of others, including but not limited to, the right to privacy and intellectual property rights.</li>  <li>You will not use the platform in any manner that could damage, disable, overburden, or impair the platform.</li>  <li>You will not abuse or harm others in any manner through the use of the platform.</li>  <li>You represent and warrant that you are at least 16 years of age. If you are under 16 years of age, you may not use this platform without the express consent and supervision of a parent or legal guardian. By using this platform, you acknowledge and agree that you are solely responsible for complying with any and all laws and regulations applicable to you, including any age restrictions or other eligibility criteria.</li></ul>",
  },
  {
    title: "3. Responsibility to Retain Information",
    desc: 'It is the responsibility of the user to capture or save any information they wish to retain as the platform is provided on an "as is" and "as available" basis.',
  },
  {
    title: "4. Disclaimer of Warranties",
    desc: "MessageMoment provides its platform on an “as is” and “as available” basis and makes no representations or warranties of any kind, express or implied, as to the operation of the platform or the information, content or materials included on the platform.",
  },
  {
    title: "5. Indemnification",
    desc: "You agree to indemnify, defend and hold harmless MessageMoment, its directors, officers, employees, agents, licensors, suppliers, and any third-party information providers to the service from and against all losses, expenses, damages, and costs, including reasonable attorneys’ fees, resulting from any violation of these T&Cs or any activity related to your use of the platform.",
  },
  {
    title: "6. Termination of Use",
    desc: "MessageMoment reserves the right to terminate or restrict your use of the platform at any time, with or without notice, for any or no reason, and without liability to you.",
  },
  {
    title: "7. Amendments to these T&Cs",
    desc: "MessageMoment reserves the right to update these T&Cs at any time and will notify users of any changes through the platform.",
  },
  {
    title: "8. Governing Law",
    desc: "These Terms and Conditions of Use (“T&Cs”) shall be governed by and construed in accordance with the laws of the jurisdiction in which you reside. Any dispute arising out of or in connection with these T&Cs or the use of MessageMoment shall be resolved exclusively through the courts of the jurisdiction in which you reside.",
  },
  {
    title: "9. Entire Agreement",
    desc: "These T&Cs, together with the Privacy Policy, constitute the entire agreement between you and MessageMoment relating to the use of the platform. If any provision of these T&Cs is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    title: "10. Contact Us",
    desc: "If you have any questions regarding these Terms and Conditions of Use, please Contact Us.",
  },
];

export const privacies = [
  {
    title: "1. Introduction",
    desc: "Welcome to MessageMoment, a discreet chat service where correspondence between two or more parties occurs between known parties only. This Privacy Policy sets out the manner in which MessageMoment collects, stores, uses, and protects the information provided by its users.",
  },
  {
    title: "2. Information Collection and Use",
    desc: "MessageMoment collects certain meta data when you use our platform however, we do not collect any personally identifiable information.",
  },
  {
    title: "3. Data Storage and Protection",
    desc: "MessageMoment takes the security of user data very seriously and has implemented appropriate technical and organizational measures to protect user data against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "4. Disclosure of Information",
    desc: "MessageMoment will not sell, trade, or otherwise transfer your personal information to any third party except as required by law.",
  },
  {
    title: "5. Amendments to this Privacy Policy",
    desc: "MessageMoment reserves the right to update this Privacy Policy at any time and will notify users of any changes through the platform.",
  },
  {
    title: "6. Contact Us",
    desc: "If you have any questions regarding this Privacy Policy, please Contact Us.",
  },
];

export const faqsData = [
  {
    question: "What is MessageMoment",
    answer:
      "MessageMoment is a discreet chat service that enables known parties to communicate with each other through a unique chat link.",
  },
  {
    question: "How do I use MessageMoment?",
    answer:
      "To use MessageMoment, simply open the chat link in your default or favorite browser. No account registration is necessary. The user will enter the chat session and gain visibility of the conversation only once they have entered their handle and token password (if applicable).",
  },
  {
    question: "What is meant by “Secure”?",
    answer:
      "You can choose to make a chat session secure. This means that you will not only share the auto-generated unique chat link, but you will also share the auto-generated token password assigned for that chat session.",
  },
  {
    question: "How do I share the chat details with others?",
    answer:
      "You can choose to use any other communications service to share and socialize the chat link with another party. This could be SMS, Email, a messaging service etc. We have provided you with a copy function allowing you to easily copy the unique chat link as well as the token password (if applicable).",
  },
  {
    question: "Can I use MessageMoment on my mobile device?",
    answer:
      "Yes, MessageMoment has a mobile responsive design, so you can use the chat link on your mobile device through your default or favorite browser. There is no need for a native app.",
  },
  {
    question: "Is there a limit to the number of users in a chat?",
    answer:
      "Yes, there is currently a limit of 10 users that can participate in a chat session.Yes, there is currently a limit of 10 users that can participate in a chat session.",
  },
  {
    question: "Can I change my handle after it has been set?",
    answer:
      "No, once you set your handle, you cannot change it. MessageMoment is typically used for chat conversations between known parties and so expectations should be set amongst the party of users when sharing the chat link with them, as to what to expect. Further, you can choose to validate who you are speaking with through your own screening questions once you arrive at the chat, if you feel compelled to.",
  },
  {
    question: "How long will my chat data be available for?",
    answer:
      'Chat data will be available for as long as the chat link remains active however this is subject to the Message Expiry time which will determine the length of time in which each user’s entered message will appear until it is no longer visible to anyone in the chat session. The Message Expiry time is set once by one user and applies to all users. Once it is set, it will appear inactive (grayed out) for all users indicating it has been set and what it has been set to. It cannot be changed for the remainder of chat session. It is the responsibility of the users to capture or save any information they want to retain, as the platform is provided on an "as is" and "as available" basis. Whilst not essential, for additional peace of mind, consider launching your browser in its private mode. This way, your visit to our site will not be recorded in your browser history.',
  },
  {
    question:
      "What if I or someone else accidently sets the wrong Message Expiry time?",
    answer:
      "Once the Message Expiry time is set, it cannot be changed. In order to reset it, a new chat session needs to be established and the old chat link/session will be disregarded. By default, the Message Expiry time is set to 10 seconds however it can range from 3 second up to 5 minutes. Anyone that arrives at the chat session can choose to set it if.",
  },
  {
    question: "Is my data safe with MessageMoment?",
    answer:
      "MessageMoment takes the privacy of its users seriously and has implemented appropriate security measures to protect user data. However, users are responsible for ensuring that they do not share any sensitive or personal information through the chat service.",
  },
  {
    question: "Can I use MessageMoment for commercial purposes?",
    answer:
      "MessageMoment is intended for personal use only and typically by known parties. Any commercial use is strictly prohibited.",
  },
  {
    question: "Can my access to MessageMoment be terminated?",
    answer:
      "MessageMoment reserves the right to terminate or restrict your use of the platform at any time, with or without notice, for any or no reason, and without liability to you.",
  },
  {
    question:
      "Who can I contact if I have any questions, concerns or feedback about MessageMoment?",
    answer: "You can Contact Us to get in touch.",
  },
];

export const CookieMap = [
  { label: "Strictly necessary cookies", expand: "These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly." },
  { label: "Performance and Analytics cookies", expand: "These cookies allow this website to remember the choices you have made in the past." },
  { label: "Advertisement and Targeting cookies", expand: "These cookies collect information about how you use this website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you." },
];
