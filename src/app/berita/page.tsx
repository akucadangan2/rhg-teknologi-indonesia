import { createClient } from "@/lib/supabase/server";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
  title: "Berita & Artikel — RHG Teknologi Indonesia",
  description:
    "Artikel dan wawasan seputar pengembangan website, aplikasi, dan sistem IT dari RHG Teknologi Indonesia.",
};

export default async function BeritaPage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, category, cover_image_url, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) console.error(error);

  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="blob-2 pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-circuit/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeInSection className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-brand">
            Berita & Artikel
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Wawasan Seputar Teknologi & Digitalisasi Bisnis
          </h1>
        </FadeInSection>

        <div className="mt-14">
          {!posts?.length ? (
            <p className="text-center text-sm text-ink/50">Belum ada artikel dipublikasikan.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <FadeInSection key={post.slug} delay={i * 0.05}>
                  <BlogCard post={post} />
                </FadeInSection>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}