import { notFound } from "next/navigation";
import {
  Webhook,
  RefreshCw,
  ArrowLeftRight,
  Lock,
  HardDrive,
  ShieldAlert,
  Activity,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TerminalWindow } from "@/components/backend/TerminalWindow";
import { ScanLine } from "@/components/backend/ScanLine";
import { MigrationFlow } from "@/components/backend/MigrationFlow";
import { SecurityChecklist } from "@/components/backend/SecurityChecklist";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { StatsBar } from "@/components/ui/StatsBar";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Jasa IT & Backend Development — RHG Teknologi Indonesia",
};

const FEATURES = [
  { icon: Webhook, title: "API Terdokumentasi", description: "Setiap endpoint didesain dan didokumentasikan dengan jelas, siap diintegrasikan tim lain." },
  { icon: RefreshCw, title: "Migrasi Data Tanpa Downtime", description: "Perpindahan dari sistem lama direncanakan bertahap dengan verifikasi tiap tahap." },
  { icon: ArrowLeftRight, title: "Sinkronisasi Real-Time", description: "Dua sistem atau lebih tetap sinkron otomatis tanpa campur tangan manual." },
  { icon: Lock, title: "Row Level Security", description: "Akses data dibatasi di level database, bukan cuma di aplikasi." },
  { icon: HardDrive, title: "Automated Backup", description: "Backup terjadwal otomatis, data aman meski terjadi kegagalan sistem." },
  { icon: ShieldAlert, title: "Rate Limiting", description: "Mencegah abuse dan serangan brute-force pada API Anda." },
  { icon: Activity, title: "Monitoring & Logging", description: "Setiap akses tercatat untuk kebutuhan audit dan troubleshooting." },
  { icon: Clock, title: "Automasi Proses Bisnis", description: "Proses berulang dijadwalkan otomatis lewat cron job." },
];

const BACKEND_PROCESS = [
  { title: "Audit Sistem Saat Ini", description: "Analisis struktur data dan sistem lama sebelum migrasi/integrasi." },
  { title: "Rancang Arsitektur", description: "Desain skema database, API, dan alur keamanan data." },
  { title: "Development & Migrasi Bertahap", description: "Migrasi dilakukan per-tahap dengan verifikasi data di tiap langkah." },
  { title: "Testing & Keamanan", description: "Pengujian fungsi, beban, dan celah keamanan sebelum go-live." },
  { title: "Deployment", description: "Sistem baru diaktifkan, sistem lama di-nonaktifkan setelah stabil." },
  { title: "Monitoring Berkelanjutan", description: "Pemantauan performa dan keamanan sistem pasca-deploy." },
];

export default function BackendPage() {
  const service = getServiceBySlug("jasa-it-backend");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-circuit/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <ScanLine />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-circuit/20 px-3 py-1 font-mono text-xs font-medium text-circuit">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Backend & IT yang{" "}
              <span className="bg-gradient-to-r from-circuit to-brand bg-clip-text text-transparent">
                Aman, Rapi, Terukur
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base text-white/60">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="flex justify-center">
            <TerminalWindow />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
        <StatsBar stats={service.stats ?? []} />
      </FadeInSection>

      <FadeInSection delay={0.1} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Migrasi Data yang Aman
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Data berpindah tanpa mengorbankan operasional bisnis Anda.
        </p>
        <div className="mt-6">
          <MigrationFlow />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Yang Bisa Kami Bangun
        </h2>
        <div className="mt-6">
          <FeatureGrid features={FEATURES} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Standar Keamanan yang Kami Terapkan
        </h2>
        <div className="mt-6">
          <SecurityChecklist />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.18} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Apa yang Termasuk</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.items.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-ink/10 bg-white p-4 text-sm text-ink/70">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-circuit" />
              {item}
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Proses Kerja</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BACKEND_PROCESS.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-ink/10 bg-white p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-circuit to-brand font-mono text-xs font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{step.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      {service.pricingTiers && (
        <FadeInSection delay={0.22} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Paket & Estimasi</h2>
          <p className="mt-2 text-sm text-ink/60">
            Estimasi awal — harga final menyesuaikan scope setelah konsultasi.
          </p>
          <div className="mt-6">
            <PricingTiers tiers={service.pricingTiers} />
          </div>
        </FadeInSection>
      )}

      {service.faqs && (
        <FadeInSection delay={0.24} className="mx-auto block max-w-3xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Pertanyaan Umum</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.26} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">Butuh Backend yang Lebih Aman?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan sistem Anda saat ini, kami bantu rancang arsitektur dan migrasi yang tepat.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}