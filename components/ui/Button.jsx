"use client";
import { SiNotion } from "react-icons/si";
import { motion } from "framer-motion";

export default function Buttons({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: "linear" }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      <button className="flex gap-3 rounded-lg px-2 py-2.5 bg-black text-white dark:bg-white dark:text-black">
        <SiNotion className="w-6 h-6" />
        {children}
      </button>
    </motion.div>
  );
}
