import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { HeartbeatMonitor } from "@/components/maintenance/HeartbeatMonitor";
import { ResponseTimeline } from "@/components/maintenance/ResponseTimeline";
import { HealthChecklist } from "@/components/maintenance/HealthChecklist";
import { SupportChannels } from "@/components/maintenance/SupportChannels";
import { WhySection } from "@/components/sections/WhySection";
import { StatsBar } from "@/components/ui/StatsBar";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Maintenance & Support — RHG Teknologi Indonesia",
};

export default function MaintenanceSupportPage() {
  const service = getServiceBySlug("maintenance-support");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-600">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Sistem yang{" "}
              <span className="bg-gradient-to-r from-brand to-emerald-500 bg-clip-text text-transparent">
                Terus Terpantau
              </span>{" "}
              Kesehatannya
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="flex justify-center">
            <HeartbeatMonitor />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
        <StatsBar stats={service.stats ?? []} />
      </FadeInSection>

      <WhySection points={service.sellingPoints} />

      <FadeInSection delay={0.1} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Saat Ada Masalah, Ini Alurnya
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Bukan cuma janji respon cepat — ini alur nyatanya dari laporan sampai terverifikasi normal.
        </p>
        <div className="mt-10">
          <ResponseTimeline />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.13} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Pemeriksaan Rutin, Bukan Menunggu Rusak
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Layaknya checkup kesehatan — dicek berkala supaya masalah ketahuan sebelum jadi besar.
        </p>
        <div className="mt-6">
          <HealthChecklist />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.16} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Kanal Bantuan</h2>
        <p className="mt-2 text-sm text-ink/60">Lapor lewat mana saja, sesuai kanal yang paling nyaman.</p>
        <div className="mt-6">
          <SupportChannels />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.19} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Apa yang Termasuk</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.items.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-ink/10 bg-white p-4 text-sm text-ink/70">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
              {item}
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.21} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Cocok Untuk</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.useCases.map((useCase) => (
            <span key={useCase} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink/70">
              {useCase}
            </span>
          ))}
        </div>
      </FadeInSection>

      {service.pricingTiers && (
        <FadeInSection delay={0.23} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Paket Berlangganan</h2>
          <p className="mt-2 text-sm text-ink/60">
            Maintenance biasanya berbentuk retainer bulanan — estimasi awal, final menyesuaikan skala sistem.
          </p>
          <div className="mt-6">
            <PricingTiers tiers={service.pricingTiers} />
          </div>
        </FadeInSection>
      )}

      {service.faqs && (
        <FadeInSection delay={0.25} className="mx-auto block max-w-3xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Pertanyaan Umum</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.27} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">Sistem Anda Sudah Live?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Jangan tunggu sampai bermasalah — mulai pantau kesehatan sistem Anda sekarang.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}