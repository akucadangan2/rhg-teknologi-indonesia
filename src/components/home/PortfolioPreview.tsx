import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

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

  if (error) {
    console.error("PortfolioPreview error:", error);
  }

  if (!projects?.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-circuit/[0.055] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/[0.055] blur-[110px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,94,251,0.035)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      <FadeInSection className="relative mx-auto block max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-circuit/15 bg-circuit/[0.07] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-circuit sm:text-xs">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Selected Projects
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.025em] text-ink md:text-4xl lg:text-[44px]">
              Portofolio{" "}
              <span className="bg-gradient-to-r from-circuit to-brand bg-clip-text text-transparent">
                Terbaru
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/55 sm:text-base">
              Beberapa solusi digital yang telah kami kembangkan untuk
              membantu kebutuhan operasional, integrasi sistem, dan
              transformasi proses bisnis klien.
            </p>
          </div>

          <Link
            href="/portofolio"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-ink/[0.07] bg-white px-4 py-3 text-xs font-semibold text-ink/65 shadow-sm transition-all duration-200 hover:border-brand/20 hover:bg-brand hover:text-white"
          >
            Lihat Semua Portofolio

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => {
            const service = item.category
              ? getServiceBySlug(item.category)
              : undefined;

            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={item.id}
                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-ink/[0.07] bg-white p-6 shadow-[0_14px_45px_rgba(17,22,43,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(17,22,43,0.075)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand/[0.07] opacity-0 blur-[60px] transition-opacity duration-300 group-hover:opacity-100" />

                {/* Large number */}
                <span className="pointer-events-none absolute bottom-1 right-4 font-mono text-[82px] font-bold leading-none tracking-[-0.08em] text-ink/[0.025] transition-colors duration-300 group-hover:text-brand/[0.04]">
                  {number}
                </span>

                <div className="relative flex h-full flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    {service ? (
                      <span className="inline-flex items-center rounded-full border border-circuit/10 bg-circuit/[0.06] px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-circuit">
                        {service.code}
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-ink/[0.06] bg-ink/[0.025] px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/40">
                        Project
                      </span>
                    )}

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/[0.06] bg-white text-ink/30 transition-all duration-300 group-hover:border-brand/20 group-hover:bg-brand group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/30">
                      Featured Project
                    </p>

                    <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-brand">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-ink/55">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-2 border-t border-ink/[0.05] pt-4 text-[10px] font-medium text-ink/35">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand/70" />
                      Implemented solution
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom info */}
        <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-ink/[0.06] bg-white/55 px-5 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="font-display text-sm font-bold text-ink">
              Setiap proyek memiliki kebutuhan yang berbeda.
            </p>

            <p className="mt-1 text-xs leading-5 text-ink/45">
              Arsitektur, teknologi, dan proses implementasi disesuaikan dengan
              kebutuhan masing-masing klien.
            </p>
          </div>

          <Link
            href="/kontak"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-brand transition-opacity hover:opacity-70"
          >
            Diskusikan Project
            <ArrowRight size={14} />
          </Link>
        </div>
      </FadeInSection>
    </section>
  );
}
