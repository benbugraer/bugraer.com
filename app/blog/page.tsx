import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bugraer.com/blog"),
  title: "Bugra Er | Blog",
  description: "Bugra Er's Blog",
  openGraph: {
    title: "Bugra Er | Blog",
    url: "https://bugraer.com/blog",
  },
};

export default function BlogPage() {
  return <div>Blog Page | Coming Soon</div>;
}
