import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/data/services";
import { workProcess } from "@/lib/data/process";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { WhySection } from "@/components/sections/WhySection";
import { StatsBar } from "@/components/ui/StatsBar";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FloatingIcons } from "@/components/decor/FloatingIcons";

const CUSTOM_DESIGN_SLUGS = [
  "aplikasi-mobile",
  "jasa-it-backend",
  "payment-gateway",
  "maps-gis",
  "integrasi-sistem",
  "maintenance-support",
];

export function generateStaticParams() {
  return services
    .filter((service) => !CUSTOM_DESIGN_SLUGS.includes(service.slug))
    .map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || CUSTOM_DESIGN_SLUGS.includes(slug)) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        <FloatingIcons />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <span className="inline-block rounded-full bg-circuit/10 px-3 py-1 font-mono text-xs font-medium text-circuit">
            {service.code}
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-base text-ink/70">{service.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.techStack.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-8">
            <Button href="/kontak">Konsultasi Kebutuhan Anda</Button>
          </div>
        </div>
      </section>

      {service.stats && (
        <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
          <StatsBar stats={service.stats} />
        </FadeInSection>
      )}

      <WhySection points={service.sellingPoints} />

      <FadeInSection delay={0.1} className="mx-auto block max-w-3xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink">Apa yang Termasuk</h2>
        <ul className="mt-6 space-y-3">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
              {item}
            </li>
          ))}
        </ul>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-4xl px-6 py-4">
        <TechMarquee items={service.techStack} />
      </FadeInSection>

      {service.pricingTiers && (
        <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink">Paket & Estimasi</h2>
          <p className="mt-2 text-sm text-ink/60">
            Estimasi awal — harga final menyesuaikan scope setelah konsultasi.
          </p>
          <div className="mt-6">
            <PricingTiers tiers={service.pricingTiers} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.18} className="mx-auto block max-w-3xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink">Cocok Untuk</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {service.useCases.map((useCase) => (
            <div key={useCase} className="rounded-lg border border-ink/10 bg-white p-4 text-sm text-ink/70">
              {useCase}
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2} className="mx-auto block max-w-3xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink">Proses Kerja</h2>
        <ol className="mt-6 space-y-6 border-l border-circuit/30 pl-6">
          {workProcess.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper">
                {i + 1}
              </span>
              <h3 className="font-display font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </FadeInSection>

      {service.faqs && (
        <FadeInSection delay={0.22} className="mx-auto block max-w-3xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink">Pertanyaan Umum</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.25} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">
            Butuh {service.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan kebutuhan Anda, kami bantu rekomendasikan solusi dan estimasi yang sesuai.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}