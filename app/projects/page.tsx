import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bugraer.com/projects"),
  title: "Bugra Er | Projects",
  description: "Bugra Er's Projects",
  openGraph: {
    title: "Bugra Er | Projects",
    url: "https://bugraer.com/projects",
  },
};

export default function Projects() {
  return <div>Projects Page | Coming Soon</div>;
}
