import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buğra Er Blog | Blog",
  description: "Bugra's blog about software development, life, and more.",
  openGraph: {
    title: "Buğra Er Blog | Blog",
    description: "Bugra's blog about software development, life, and more.",
    url: "https://bugraer.com/blog",
    siteName: "Buğra Er Blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buğra Er Blog | Blog",
    description: "Bugra's blog about software development, life, and more.",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <div className="flex flex-col space-y-4">
        <h1 className="font-medium text-2xl tracking-tighter">Blog</h1>
        <p className="text-muted-foreground">
         I write about my experiences and thoughts on software development, life, and more.
        </p>
      </div>
      <div className="flex flex-col space-y-4 mt-12">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
