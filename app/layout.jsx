import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";
import { Jost } from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import clsx from "clsx";
import Navigation from "@/components/Navigation";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Bugra Er | Home",
  description: "Welcome my portfolio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={clsx(
          jost.className,
          "antialiased bg-primary text-primary w-full"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="px-6 md:px-6 pt-16 md:pt-20 md:pb-44 max-w-[700px] mx-auto">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
