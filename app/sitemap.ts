import { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bugraer.com";

  // Ana rotalar
  const routes = [
    "",
    "/projects",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog postlar için dinamik rotalar
  const posts = await getBlogPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes] as MetadataRoute.Sitemap;
}
