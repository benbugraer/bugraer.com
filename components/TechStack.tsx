import React from "react";
import { motion } from "framer-motion";
import Nextjs from "@/public/logos/nextjs-logo";
import ReactLogo from "@/public/logos/react-logo";
import Supabase from "@/public/logos/supabase-logo";
import TypeScript from "@/public/logos/typescript-logo";
import Vercel from "@/public/logos/vercel-logo";
import TailwindCSS from "@/public/logos/tailwind-logo";

const technologies = [
  { name: "Vercel", icon: Vercel },
  { name: "Next.js", icon: Nextjs },
  { name: "React", icon: ReactLogo },
  { name: "TypeScript", icon: TypeScript },
  { name: "Supabase", icon: Supabase },
  { name: "TailwindCSS", icon: TailwindCSS },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="uppercase tracking-tight text-sm text-secondary text-center"
      >
        I love to work & build with
      </motion.h2>
      <div className="grid grid-cols-3 lg:grid-cols-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1 }}
            className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <tech.icon className="w-12 h-12 mb-2 transition-transform duration-300 bg-tertiary border border-primary p-2.5 rounded-xl" />
            </motion.div>
            <span className="text-sm text-tertiary group-hover:text-primary transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
