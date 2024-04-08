import Link from "next/link";
import Image from "next/image";
import TechIcon from "@/components/TechIcon";
import me from "@/public/images/me.jpg";
import { EnvelopeIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Bugra Er
          </h1>
          <p className="animate-in text-secondary" style={{ "--index": 1 }}>
            I write code and i loved so welcome my spaces.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 }}
        >
          <Image
            src={me}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
          <QuickLinks />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 }}
        >
          Hi, I&apos;m Bugra, I&apos;m 22 years old and I&apos;ve been learning
          coding since June 2023 and now I&apos;m actively working on React,
          Javascript, Tailwind, Next JS, Figma and Framer . Now I am actively
          learning Redux & TypeScript.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 }}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:bugraerdev@gmail.com"
              className="flex items-center gap-2 no-underline"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/contact"
              className="flex items-center gap-2 no-underline"
            >
              <UserGroupIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="animate-in" style={{ "--index": 2 }}>
        <TechIcon />
      </div>
    </div>
  );
}
