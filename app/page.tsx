"use client";

import Image from "next/image";
import me from "@/public/personal/me.jpg";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 md:gap-24 md:px-0">
      <div className="flex w-full max-w-3xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.h1 className="text-2xl font-bold uppercase tracking-tight text-primary md:text-3xl">
            Bugra Er
          </motion.h1>
          <motion.p
            className="text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I write code and i loved so welcome my spaces.
          </motion.p>
        </motion.div>
        <div className="flex flex-col items-center gap-6 text-secondary md:flex-row md:items-start">
          <motion.div
            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1,
            }}
            whileHover={{ scale: 1.05 }}
            className="w-[150px] flex-shrink-0"
          >
            <Image
              src={me}
              width={350}
              height={350}
              alt="avatar"
              className="rounded-full border-2 border-primary bg-secondary"
            />
          </motion.div>
          <div className="flex flex-col gap-6">
            <motion.p
              className="text-center text-sm font-light text-primary md:text-left md:text-[1rem]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hi, I&apos;m Bugra I started my software journey in 2023 by
              leaving everything aside, I&apos;m enjoying this journey very
              much, I&apos;m learning more about SaaS and Startups. One of my
              biggest goals for 2025 is to develop 3 SaaS or Startups.
            </motion.p>
            <motion.p
              className="text-center text-sm font-light text-primary md:text-left md:text-[1rem]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I&apos;m usually at my desk, but when I&apos;m not, you can find
              me at the gym, jogging around town, or having a coffee at a local
              shop!
            </motion.p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h1
            className=" uppercase tracking-tight  text-sm text-secondary animate-in"
            style={{ "--index": 5 } as CSSProperties}
          >
            Let&apos;s Connect
          </h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}
