"use client";

import React from "react";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children, ...props }) {
  return (
    <NextThemeProvider themes={["light", "dark"]} {...props}>
      {children}
    </NextThemeProvider>
  );
}
