import { notFound } from "next/navigation";
import { Layers, MapPin, Route, Satellite, Truck, Download, Ruler, CloudOff, CheckCircle2 } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { MapMockup } from "@/components/gis/MapMockup";
import { CoordinateReadout } from "@/components/gis/CoordinateReadout";
import { LayerStack } from "@/components/gis/LayerStack";
import { ComplianceGrid } from "@/components/gis/ComplianceGrid";
import { SectorSplit } from "@/components/gis/SectorSplit";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { StatsBar } from "@/components/ui/StatsBar";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Maps & GIS / WebGIS — RHG Teknologi Indonesia",
};

const FEATURES = [
  { icon: Layers, title: "Multi-Layer Data Spasial", description: "Gabungkan banyak sumber data — aset, jalan, batas wilayah, citra satelit — dalam satu peta interaktif." },
  { icon: MapPin, title: "Geotagging Presisi", description: "Tandai lokasi dengan koordinat akurat, lengkap dengan foto dan metadata." },
  { icon: Route, title: "Routing & Estimasi Jarak", description: "Perhitungan rute otomatis menggunakan OSRM untuk kebutuhan logistik." },
  { icon: Satellite, title: "Integrasi Citra Satelit", description: "Visualisasi dengan basemap satelit, jalan, atau terrain sesuai kebutuhan." },
  { icon: Truck, title: "Tracking Armada Real-Time", description: "Pantau posisi kendaraan atau petugas lapangan secara langsung." },
  { icon: Download, title: "Export Multi-Format", description: "Data bisa diekspor ke SHP, KML, atau GeoJSON untuk sistem lain." },
  { icon: Ruler, title: "Presisi Sesuai Standar", description: "Sistem koordinat dan akurasi mengikuti standar kadaster/pemetaan nasional." },
  { icon: CloudOff, title: "Siap Input Data Lapangan", description: "Mendukung pengumpulan data langsung dari lokasi, tersinkron ke sistem pusat." },
];

export default function MapsGisPage() {
  const service = getServiceBySlug("maps-gis");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="blob-2 pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-circuit/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium text-brand">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Pemetaan &{" "}
              <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
                Tracking Lokasi
              </span>{" "}
              yang Presisi
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">{service.description}</p>
            <div className="mt-6">
              <CoordinateReadout />
            </div>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="flex justify-center">
            <MapMockup />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
        <StatsBar stats={service.stats ?? []} />
      </FadeInSection>

      <FadeInSection delay={0.1} className="mx-auto block max-w-3xl px-6 py-12">
        <h2 className="text-center font-display text-xl font-bold text-ink md:text-2xl">
          Satu Peta, Banyak Lapisan Data
        </h2>
        <p className="mt-2 text-center text-sm text-ink/60">
          Setiap jenis data punya lapisannya sendiri — bisa dikombinasikan sesuai kebutuhan.
        </p>
        <div className="mt-8">
          <LayerStack />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Yang Bisa Kami Bangun</h2>
        <div className="mt-6">
          <FeatureGrid features={FEATURES} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
          Siap untuk Kebutuhan Tender
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Standar teknis yang kami ikuti, relevan untuk pengadaan pemerintah maupun swasta.
        </p>
        <div className="mt-6">
          <ComplianceGrid />
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
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-circuit" />
              {item}
            </div>
          ))}
        </div>
      </FadeInSection>

      {service.pricingTiers && (
        <FadeInSection delay={0.21} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Paket & Estimasi</h2>
          <p className="mt-2 text-sm text-ink/60">
            Estimasi awal — untuk project tender, estimasi disesuaikan dengan dokumen KAK/RAB yang berlaku.
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
          <h2 className="font-display text-xl font-bold text-white">Punya Kebutuhan Pemetaan atau Tender?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan cakupan project Anda, kami bantu susun solusi teknis dan dokumentasinya.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}