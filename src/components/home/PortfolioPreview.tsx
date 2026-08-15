import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";

export async function PortfolioPreview() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("portfolio_projects")
    .select("id, title, description, category")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .limit(3);

  if (error) console.error(error);
  if (!projects?.length) return null;

  return (
    <FadeInSection className="mx-auto block max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">Portofolio Terbaru</h2>
        <Link href="/portofolio" className="flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
          Lihat semua <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => {
          const service = item.category ? getServiceBySlug(item.category) : undefined;
          return (
            <div key={item.id} className="rounded-xl border border-ink/10 bg-white p-6">
              {service && (
                <span className="font-mono text-xs font-medium text-circuit">{service.code}</span>
              )}
              <h3 className="mt-2 font-display font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{item.description}</p>
            </div>
          );
        })}
      </div>
    </FadeInSection>
  );
}