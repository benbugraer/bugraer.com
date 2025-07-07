import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Buğra Er Blog | Yazılım, Teknoloji ve Hayat",
  description: "Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog.",
  openGraph: {
    title: "Buğra Er Blog | Yazılım, Teknoloji ve Hayat",
    description: "Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog.",
    url: "https://bugraer.com/blog",
    siteName: "Buğra Er Blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buğra Er Blog | Yazılım, Teknoloji ve Hayat",
    description: "Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog.",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <Head>
        <title>Buğra Er Blog | Yazılım, Teknoloji ve Hayat</title>
        <meta name="description" content="Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog." />
        <meta property="og:title" content="Buğra Er Blog | Yazılım, Teknoloji ve Hayat" />
        <meta property="og:description" content="Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog." />
        <meta property="og:url" content="https://bugraer.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buğra Er Blog | Yazılım, Teknoloji ve Hayat" />
        <meta name="twitter:description" content="Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Buğra Er Blog",
              "description": "Buğra Er'in yazılım, teknoloji ve hayat üzerine deneyimlerini ve düşüncelerini paylaştığı blog.",
              "url": "https://bugraer.com/blog",
              "author": {
                "@type": "Person",
                "name": "Buğra Er"
              }
            })
          }}
        />
      </Head>
      <div className="flex flex-col space-y-4">
        <h1 className="font-medium text-2xl tracking-tighter">Blog</h1>
        <p className="text-muted-foreground">
          Yazılım, teknoloji ve hayat üzerine deneyimlerimi ve düşüncelerimi paylaşıyorum.
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
