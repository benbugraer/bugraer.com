"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import Github from "@/public/icons/github-icon";
import XformerlyTwitter from "@/public/icons/x-icon";

const links = [
  {
    href: "https://github.com/benbugraer",
    icon: <Github className="w-5 h-5 text-[#181717] dark:text-[#e8eaea]" />,
    content: (
      <div className="flex gap-1">
        <h1>{/* <GitHubRepoCount username="benbugraer" /> */}</h1>
        <span className="text-sm">Repositories</span>
      </div>
    ),
  },
  {
    href: "https://www.linkedin.com/in/bugraer/",
    icon: <XformerlyTwitter className="w-5 h-5 text-[#0077B5]" />,
    content: (
      <div>
        335<span className="text-sm"> Connections</span>
      </div>
    ),
  },
  //   {
  //     href: "/resume.pdf",
  //     icon: <FaFilePdf className="w-5 h-5 text-[#FF0000]" />,
  //     content: (
  //       <div>
  //         <span className="text-sm">My Resume</span>
  //       </div>
  //     ),
  //   },
];

export default function QuickLinks() {
  return (
    <ul className="space-y-2 animated-list">
      {links.map((link, index) => (
        <li key={index} className="transition-opacity">
          <Link
            className="flex gap-3 items-center no-underline animate-in"
            style={{ "--index": index } as CSSProperties}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            {link.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}
