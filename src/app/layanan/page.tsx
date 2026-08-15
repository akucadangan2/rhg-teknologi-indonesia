import { services } from "@/lib/data/services";
import { ServiceHubCard } from "@/components/layanan/ServiceHubCard";
import { ServiceOrbit } from "@/components/layanan/ServiceOrbit";
import { FadeInSection } from "@/components/motion/FadeInSection";

export const metadata = {
  title: "Layanan — RHG Teknologi Indonesia",
};

export default function LayananPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="blob-2 pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-circuit/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <FadeInSection className="text-center">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-brand">
            7 Kategori Layanan
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Satu Tim,{" "}
            <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
              Semua Sistem Terhubung
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60 md:text-lg">
            Dari website, aplikasi, backend, pembayaran, pemetaan, jaringan, hingga perawatan
            sistem jangka panjang — dikerjakan oleh satu tim yang paham cara semuanya saling terhubung.
          </p>
          <ServiceOrbit />
        </FadeInSection>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeInSection key={service.slug} delay={i * 0.05}>
              <ServiceHubCard service={service} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}