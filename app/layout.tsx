import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugraer.com"),
  title: {
    default: "Bugra Er | Solo Entrepreneur",
    template: "%s | Bugra Er",
  },
  description:
    "Bugra Er is a indie developer specializing in web development, SaaS applications, and startup solutions. Explore my portfolio and insights on modern web development.",
  keywords: [
    "Bugra Er",
    "Solo Entrepreneur",
    "Web Development",
    "SaaS",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Turkish",
  ],
  authors: [{ name: "Bugra Er" }],
  creator: "Bugra Er",
  publisher: "Bugra Er",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bugraer.com",
    title: "Bugra Er | Solo Entrepreneur",
    description:
      "Solo entrepreneur specializing in web development and SaaS solutions",
    siteName: "Bugra Er",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bugra Er - Solo Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugra Er | Solo Entrepreneur",
    description:
      "Solo entrepreneur specializing in web development and SaaS solutions",
    creator: "@benbugraer",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "Google Search Console doğrulama kodu",
    yandex: "Yandex doğrulama kodu",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bugra Er",
  url: "https://bugraer.com",
  sameAs: [
    "https://github.com/benbugraer",
    "https://twitter.com/benbugraer",
    "https://www.linkedin.com/in/bugraer/",
  ],
  jobTitle: "Solo Entrepreneur",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
        "Solo entrepreneur specializing in web development and SaaS solutions",
  image: "https://bugraer.com/personal/me.jpg",
  email: "bugraerdev@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "antialiased bg-white dark:bg-black",
          montserrat.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[46.875rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
