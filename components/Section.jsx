"use client";
import clsx from "clsx";

export default function Section({ heading, headingAlignment, children }) {
  return (
    <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse animate-in">
      <h2
        className={clsx(
          "md:w-32 text-[var(--gray-9)] shrink-0",
          headingAlignment === "right" && "md:text-right"
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
