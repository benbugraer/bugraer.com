"use client";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function MotionNav({ children, classNames }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "linear" }}
      className="relative md:sticky top-0 z-20 backdrop-blur"
    >
      {children}
    </motion.nav>
  );
}
