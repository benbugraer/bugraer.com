import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bugraer.com";

  // Ana rotalar
  const routes = [
    "",
    "/projects",
    "/blog",
    // Diğer statik rotalarınız...
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog postları için dinamik rotalar (blog sistemi eklediğinizde)
  // const posts = await getPosts() // Blog postlarını getiren fonksiyon
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...routes /* , ...blogRoutes */] as MetadataRoute.Sitemap;
}
