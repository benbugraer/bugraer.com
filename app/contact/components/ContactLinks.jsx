import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactLinks = [
  {
    label: "Email",
    href: "mailto:bugraerdev@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/bugraerben",
    icon: <FaGithub />,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/benbugraer/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/n-bu%C4%9Fra-er/",
    icon: <FaLinkedin />,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@benbugraer",
    icon: <FaThreads />,
  },
];

export default ContactLinks;
