import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { BlogCard } from "@/components/blog/BlogCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

export async function BlogPreview() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, category, cover_image_url, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(3);

  if (error) console.error(error);
  if (!posts?.length) return null;

  return (
    <FadeInSection className="mx-auto block max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">Berita & Artikel</h2>
        <Link href="/berita" className="flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
          Lihat semua <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </FadeInSection>
  );
}