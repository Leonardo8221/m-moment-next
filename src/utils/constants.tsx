import Image from "next/image";

export const navItems = [
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/help",
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
