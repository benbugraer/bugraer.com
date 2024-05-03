"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./ui/NavLink";
import ThemeSwitcher from "./ThemeSwitcher";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import MotionNav from "./ui/MotionNav";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gear", href: "/gear" },
  { label: "Templates", href: "/templates" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages

  return (
    <MotionNav className={clsx("relative md:sticky top-0 z-20 backdrop-blur")}>
      <nav className="px-4 md:px-6 py-3 lg max-w-[1100px] mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="shrink-0 flex gap-2 uppercase text-primary">
          <h1 className="uppercase font-bold text-md">Bugra Er</h1>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative ml-auto md:hidden">
          <Popover.Button className="flex items-center gap-1 text-secondary p-1 rounded-lg focus-visible:outline-none focus:ring-0">
            <Bars3BottomLeftIcon className="w-6 h-6" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-linear duration-300"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg w-40 rounded-xl bg-white dark:bg-black focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-4 py-2 rounded-xl hover:text-primary transition-colors",
                      pathname === link.href
                        ? "bg-secondaryA font-medium"
                        : "font-light"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="flex items-center justify-center w-8 h-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </MotionNav>
  );
}
