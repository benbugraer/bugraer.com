import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import ContactLinks from "./components/ContactLinks";

export const metadata = {
  title: "Bugra Er | Contact",
  description: "Contact Me",
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Contact Me
        </h1>
        <p className="text-secondary animate-in" style={{ "--index": 1 }}>
          Usually I&apos;ll definitely get back to you.
        </p>
      </div>
      <div
        className="flex flex-col gap-6 w-full animate-in"
        style={{ "--index": 3 }}
      >
        <div className="flex w-full flex-col gap-6">
          <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 animated-list">
            {ContactLinks.map((link) => (
              <li className="transition-opacity col-span-1" key={link.label}>
                <Link
                  href={link.href}
                  target="blank"
                  className="transition-opacity no-underline w-full border rounded-xl p-4 border-primary inline-grid"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <ArrowUpCircleIcon className="w-5 h-5 ml-auto" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
