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
