"use client";

import Image from "next/image";
import me from "@/public/personal/me.jpg";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";

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
          <motion.h1 className="text-xl font-bold uppercase tracking-tight text-primary">
            Bugra Er
          </motion.h1>
          <motion.p
            className="text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I write code and building startups, welcome to my spaces.
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
              Hello, I&apos;m Buğra, I started my software journey in 2023 with
              by leaving everything aside, I enjoy this journey very much. I am
              actively working on my first startup and B2B SaaS application,{" "}
              <a
                href="https://www.sosyalkopru.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#037a68] font-bold hover:underline"
              >
                Sosyal Köprü
              </a>
              .
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
        <div className="flex flex-col gap-6">
          <Contact />
          <TechStack />
        </div>
      </div>
    </div>
  );
}
