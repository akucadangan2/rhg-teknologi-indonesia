import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceThemes } from "@/lib/data/service-theme";
import { estimateReadingTime } from "@/lib/utils/reading-time";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";

type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  return data;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Artikel Tidak Ditemukan — RHG Teknologi Indonesia" };

  return {
    title: `${post.title} — RHG Teknologi Indonesia`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image_url ? [post.cover_image_url] : ["/logo.png"],
      type: "article",
      publishedTime: post.published_at,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  const service = post.category ? getServiceBySlug(post.category) : undefined;
  const theme = post.category ? serviceThemes[post.category] : undefined;
  const readingTime = estimateReadingTime(post.content);
  const date = new Date(post.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    author: { "@type": "Organization", name: post.author_name },
    publisher: { "@type": "Organization", name: "PT RHG Teknologi Indonesia" },
    image: post.cover_image_url ?? undefined,
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-6 py-16 md:py-20">
          <FadeInSection>
            <div className="flex items-center gap-2">
              {service && (
                <span className={`font-mono text-xs font-medium ${theme?.chip ?? "text-brand"}`}>
                  {service.code}
                </span>
              )}
              <span className="font-mono text-xs text-ink/40">
                {date} &middot; {readingTime} menit baca
              </span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-ink/50">Oleh {post.author_name}</p>

            {post.cover_image_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="mt-8 h-64 w-full rounded-xl object-cover"
              />
            )}

            <div className="mt-8">
              {post.content.split(/\n\s*\n/).map((para: string, i: number) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-ink/70 first:mt-0">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-8 text-center">
              <h2 className="font-display text-lg font-bold text-white">
                Punya Kebutuhan Serupa?
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-white/60">
                Diskusikan project Anda langsung dengan tim kami.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/kontak">Konsultasi Sekarang</Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>
    </>
  );
}