import { MetadataRoute } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { services } from "@/lib/data/services";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://rhgteknologiindonesia.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/layanan`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portofolio`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lab`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/berita`,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tentang`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontak`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map(
    (service) => ({
      url: `${baseUrl}/layanan/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Sitemap blog error:", error);
  }

  const blogRoutes: MetadataRoute.Sitemap = (posts ?? []).map(
    (post) => ({
      url: `${baseUrl}/berita/${post.slug}`,
      lastModified: post.published_at
        ? new Date(post.published_at)
        : undefined,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}