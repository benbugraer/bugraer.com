import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactLinks = [
  {
    label: "Email",
    href: "mailto:bugraerdev@gmail.com",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/benbugraer",
    icon: <FaGithub />,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/benbugraer/",
    icon: <FaInstagram />,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@benbugraer",
    icon: <FaThreads />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/n-bu%C4%9Fra-er/",
    icon: <FaLinkedin />,
  },
  {
    label: "Twitter X",
    href: "https://twitter.com/benbugraer",
    icon: <FaXTwitter />,
  },
];

export default ContactLinks;
