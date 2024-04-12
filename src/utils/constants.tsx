import Image from "next/image";

export const navItems = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/help',
      title: 'Help & Support',
    },
    {
      href: '/terms',
      title: 'Terms of Use',
    },
    {
      href: '/privacy',
      title: 'Privacy Policy',
    },
  ];
  
  
export const options = [
  {
    value: "standard",
    label: "Standard",
    icon: (
      <Image
        width={16}
        height={16}
        src={"/img/icons/global.svg"}
        alt="icon"
      />
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