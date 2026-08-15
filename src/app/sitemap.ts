import { MetadataRoute } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { services } from "@/lib/data/services";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rhgteknologiindonesia.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/layanan`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portofolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/berita`, changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/tentang`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/kontak`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/layanan/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, published_at")
    .eq("is_published", true);

  const blogRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${baseUrl}/berita/${post.slug}`,
    lastModified: post.published_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}