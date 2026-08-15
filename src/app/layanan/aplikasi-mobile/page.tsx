import { notFound } from "next/navigation";
import {
  CloudOff,
  Bell,
  Fingerprint,
  Link as LinkIcon,
  Users,
  Wallet,
  MapPin,
  RefreshCw,
  Check,
  X,
  CheckCircle2,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PhoneMockup } from "@/components/mobile/PhoneMockup";
import { PlatformCompare } from "@/components/mobile/PlatformCompare";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Pembuatan Aplikasi Mobile — RHG Teknologi Indonesia",
};

const FEATURES = [
  { icon: CloudOff, title: "Offline-First Support", description: "Data tetap bisa diakses meski koneksi terputus, sinkron otomatis saat online kembali." },
  { icon: Bell, title: "Push Notification Real-Time", description: "Notifikasi langsung sampai ke pengguna lewat Firebase Cloud Messaging." },
  { icon: Fingerprint, title: "Biometric Login", description: "Login cepat & aman pakai sidik jari atau Face ID." },
  { icon: LinkIcon, title: "Deep Linking", description: "Buka halaman spesifik dari luar aplikasi (WA, email, iklan) langsung ke konten yang dituju." },
  { icon: Users, title: "Multi-Role Access", description: "Satu aplikasi, banyak peran: user, mitra/driver, dan admin dengan hak akses berbeda." },
  { icon: Wallet, title: "In-App Payment", description: "Pembayaran langsung dari dalam aplikasi, terhubung ke Midtrans/DOKU/Xendit." },
  { icon: MapPin, title: "Real-Time GPS Tracking", description: "Pelacakan lokasi langsung untuk kebutuhan delivery, armada, atau driver." },
  { icon: RefreshCw, title: "Siap Update Berkelanjutan", description: "Struktur kode rapi supaya mudah dikembangkan pasca-launch." },
];

const MOBILE_PROCESS = [
  { title: "Konsultasi & Riset Fitur", description: "Menentukan platform target dan fitur inti sesuai kebutuhan bisnis." },
  { title: "Desain UI/UX", description: "Wireframe dan prototype interaktif sebelum masuk development." },
  { title: "Development", description: "Coding native (Kotlin) atau cross-platform (Flutter) dengan update progress berkala." },
  { title: "Testing di Real Device", description: "Pengujian di perangkat fisik, bukan cuma emulator." },
  { title: "Submit ke Store", description: "Proses submission dan handling review policy Play Store & App Store." },
  { title: "Maintenance & Update", description: "Perawatan pasca-launch dan update kompatibilitas OS terbaru." },
];

export default function AplikasiMobilePage() {
  const service = getServiceBySlug("aplikasi-mobile");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-circuit/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-circuit/10 px-3 py-1 font-mono text-xs font-medium text-circuit">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Aplikasi Mobile{" "}
              <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
                Android & iOS
              </span>{" "}
              Tanpa Kompromi
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <div className="flex justify-center gap-4">
            <PhoneMockup variant="android" className="rotate-[-6deg]" floatDelay={0} />
            <PhoneMockup variant="ios" className="mt-8 rotate-[6deg]" floatDelay={0.6} />
          </div>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="text-center font-display text-xl font-bold text-ink md:text-2xl">
          Kenapa Native, Bukan Hybrid/WebView?
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink/10 bg-white p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-ink/40">
              Hybrid / WebView
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Animasi terasa patah-patah",
                "Akses hardware (kamera, biometrik) terbatas",
                "Proses review store lebih rawan ditolak",
                'Terasa seperti "website dibungkus"',
              ].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink/60">
                  <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-brand/30 bg-brand/5 p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-wide text-brand">
              Native (Kotlin & Flutter)
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Animasi & scroll mulus 60fps",
                "Akses penuh kamera, GPS, biometrik",
                "Lebih mudah lolos review store",
                "Terasa premium & responsif",
              ].map((c) => (
                <li key={c} className="flex gap-2 text-sm text-ink/70">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Fitur yang Bisa Kami Bangun
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Bukan cuma tampilan — fitur-fitur ini yang bikin aplikasi Anda benar-benar berfungsi di dunia nyata.
        </p>
        <div className="mt-6">
          <FeatureGrid features={FEATURES} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Android vs iOS: Apa Bedanya?
        </h2>
        <div className="mt-6">
          <PlatformCompare />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
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

      <FadeInSection delay={0.18} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Cocok Untuk</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.useCases.map((useCase) => (
            <span key={useCase} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink/70">
              {useCase}
            </span>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.2} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Proses Kerja</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOBILE_PROCESS.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-ink/10 bg-white p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-circuit font-mono text-xs font-semibold text-white">
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
          <h2 className="font-display text-xl font-bold text-white">Siap Bangun Aplikasi Anda?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan kebutuhan Anda, kami bantu rekomendasikan platform dan estimasi yang sesuai.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}