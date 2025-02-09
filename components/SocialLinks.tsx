import Gmail from "@/public/icons/gmail-icon";
import Github from "@/public/icons/github-icon";
import X from "@/public/icons/x-icon";
import LinkedIn from "@/public/icons/linkedin-icon";
const ContactLinks = [
  {
    label: "Email",
    href: "mailto:bugraerdev@gmail.com",
    icon: <Gmail className="w-4 h-4" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/benbugraer",
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bugraer/",
    icon: <LinkedIn className="w-4 h-4" />,
  },
  {
    label: "Twitter X",
    href: "https://twitter.com/benbugraer",
    icon: <X className="w-4 h-4" />,
  },
];

export default ContactLinks;
