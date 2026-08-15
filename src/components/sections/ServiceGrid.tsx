import { services } from "@/lib/data/services";
import { ServiceHubCard } from "@/components/layanan/ServiceHubCard";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function ServiceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">Layanan Kami</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <FadeInSection key={service.slug} delay={i * 0.05}>
            <ServiceHubCard service={service} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}