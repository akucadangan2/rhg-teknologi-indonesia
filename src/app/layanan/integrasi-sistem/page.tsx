import { notFound } from "next/navigation";
import { Router, Ticket, Bell, Gauge, Printer, Cpu, Network, ShieldCheck, CheckCircle2 } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { NetworkTopology } from "@/components/network/NetworkTopology";
import { DeviceStatusGrid } from "@/components/network/DeviceStatusGrid";
import { VoucherCard } from "@/components/network/VoucherCard";
import { SectorSplit } from "@/components/network/SectorSplit";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { StatsBar } from "@/components/ui/StatsBar";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Integrasi Sistem Khusus — RHG Teknologi Indonesia",
};

const FEATURES = [
  { icon: Router, title: "Konfigurasi Mikrotik/RouterOS", description: "Setup dan optimasi router untuk kebutuhan jaringan bisnis atau ISP." },
  { icon: Gauge, title: "Monitoring OLT via SNMP", description: "Pantau kondisi perangkat jaringan secara real-time dari dashboard terpusat." },
  { icon: Ticket, title: "Voucher & Billing Hotspot", description: "Sistem voucher PPPoE/hotspot otomatis, tanpa rekap manual." },
  { icon: Bell, title: "Notifikasi Gangguan", description: "Dapat notifikasi otomatis begitu ada perangkat down atau bermasalah." },
  { icon: Printer, title: "Integrasi Hardware", description: "Printer barcode/struk, scanner, dan perangkat lain terhubung ke sistem Anda." },
  { icon: Cpu, title: "Sistem IoT Custom", description: "Monitoring alat atau mesin lewat sensor yang terhubung ke sistem pusat." },
  { icon: Network, title: "Manajemen Bandwidth", description: "Atur alokasi bandwidth per pelanggan atau perangkat." },
  { icon: ShieldCheck, title: "Akses Jarak Jauh Aman", description: "Kelola perangkat dari mana saja lewat koneksi yang terenkripsi." },
];

export default function IntegrasiSistemPage() {
  const service = getServiceBySlug("integrasi-sistem");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <div className="blob pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-600">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Jaringan & Hardware yang{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-circuit bg-clip-text text-transparent">
                Terpantau Terus
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="flex justify-center">
            <NetworkTopology />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
        <StatsBar stats={service.stats ?? []} />
      </FadeInSection>

      <FadeInSection delay={0.1} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Status Perangkat Real-Time</h2>
        <p className="mt-2 text-sm text-ink/60">
          Contoh tampilan dashboard monitoring — pantau kondisi semua perangkat dalam satu layar.
        </p>
        <div className="mt-6">
          <DeviceStatusGrid />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Yang Bisa Kami Bangun</h2>
        <div className="mt-6">
          <FeatureGrid features={FEATURES} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Voucher Hotspot Otomatis</h2>
            <p className="mt-2 text-sm text-ink/60">
              Pelanggan beli akses, voucher aktif otomatis — tanpa rekap manual di buku catatan.
            </p>
          </div>
          <div className="flex justify-center">
            <VoucherCard />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.17} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Cocok Untuk</h2>
        <div className="mt-6">
          <SectorSplit />
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

      {service.pricingTiers && (
        <FadeInSection delay={0.21} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Paket & Estimasi</h2>
          <p className="mt-2 text-sm text-ink/60">
            Estimasi awal — harga final tergantung jumlah perangkat dan lokasi.
          </p>
          <div className="mt-6">
            <PricingTiers tiers={service.pricingTiers} />
          </div>
        </FadeInSection>
      )}

      {service.faqs && (
        <FadeInSection delay={0.23} className="mx-auto block max-w-3xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Pertanyaan Umum</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.25} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">Butuh Jaringan yang Lebih Terpantau?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan setup jaringan Anda saat ini, kami bantu rancang sistem monitoring dan billing yang sesuai.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}