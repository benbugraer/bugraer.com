"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/projects",
    title: "Proejects",
  },
  {
    path: "/blog",
    title: "Blog",
  },
] as const;

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <motion.header
      className="md:mt-6"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="mx-auto flex max-w-[46.875rem] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <motion.div
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="hidden shrink-0 text-primary md:block">
            <h1 className="uppercase font-semibold">Bugra ER</h1>
          </Link>
        </motion.div>

        <div className="flex gap-1">
          <AnimatePresence mode="wait">
            {links.map((link) => (
              <motion.div
                key={link.path}
                variants={linkVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path ? "text-primary" : "text-secondary"
                  } relative rounded-full px-3 py-1.5 text-sm transition-colors`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {pathname === link.path && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 -z-10 rounded-full bg-tertiary"
                      transition={{
                        type: "spring",
                        duration: 0.6,
                        layout: { duration: 0.3 },
                      }}
                    />
                  )}
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="flex items-center justify-center"
          variants={linkVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ThemeSwitcher />
        </motion.div>
      </nav>
    </motion.header>
  );
}
