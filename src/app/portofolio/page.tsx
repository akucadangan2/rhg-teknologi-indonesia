import { createClient } from "@/lib/supabase/server";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";

export const metadata = {
  title: "Portofolio — RHG Teknologi Indonesia",
};

export default async function PortofolioPage() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("portfolio_projects")
    .select("id, title, description, category, image_url")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) console.error(error);

  const total = projects?.length ?? 0;
  const categoryCount = new Set((projects ?? []).map((p) => p.category).filter(Boolean)).size;

  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="blob-2 pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-circuit/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeInSection className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-brand">
            Portofolio
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Sebagian Project yang Sudah Kami Kerjakan
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60 md:text-lg">
            Detail lengkap, termasuk untuk kebutuhan referensi tender, tersedia saat konsultasi.
          </p>
          {total > 0 && (
            <p className="mt-2 font-mono text-xs text-ink/40">
              {total} project &middot; {categoryCount} kategori layanan
            </p>
          )}
        </FadeInSection>

        <div className="mt-14">
          {total === 0 ? (
            <p className="text-center text-sm text-ink/50">Belum ada project ditampilkan.</p>
          ) : (
            <PortfolioFilter projects={projects!} />
          )}
        </div>
      </div>
    </section>
  );
}