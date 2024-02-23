import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks({ href, children }) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;
  return (
    <>
      <Link
        className={clsx(
          "px-4 py-2 rounded-xl text-sm hover:text-primary font-normal transition",
          active ? "bg-secondaryA text-primary" : "text-secondary"
        )}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
