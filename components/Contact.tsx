import Link from "next/link";
import ContactLinks from "./SocialLinks";
import { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Bugra Er | Contact",
  description: "Contact Me",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 w-full mt-6">
      <div className="flex w-full flex-col gap-6">
        <h1
          className="uppercase tracking-tight text-sm text-secondary animate-in"
          style={{ "--index": 5 } as CSSProperties}
        >
          Let&apos;s Connect
        </h1>
        <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 animated-list mb-4">
          {ContactLinks.map((link, index) => (
            <li className="transition-opacity col-span-1" key={link.label}>
              <Link
                rel="noopener noreferrer"
                href={link.href}
                target="blank"
                className="transition-opacity bg-secondary no-underline w-full border rounded-xl text-sm p-4 border-primary inline-grid animate-in"
                style={{ "--index": 6 + index } as CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                  <ArrowUpRight className="w-5 h-5 ml-auto" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
