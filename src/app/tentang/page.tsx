import Image from "next/image";
import { companyStory, values, coreTech, legalInfo } from "@/lib/data/company";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhySection } from "@/components/sections/WhySection";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { VisionMission } from "@/components/about/VisionMission";
import { LegalCard } from "@/components/home/LegalCard";

export const metadata = {
  title: "Tentang Kami — RHG Teknologi Indonesia",
};

export default function TentangPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
          <FadeInSection>
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="RHG Teknologi Indonesia"
                width={56}
                height={56}
                className="rounded-xl border border-ink/10"
              />
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wide text-brand">
                  Tentang Kami
                </span>
                <h1 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                  {legalInfo.companyName}
                </h1>
              </div>
            </div>
            <p className="mt-6 text-base text-ink/70">{companyStory}</p>
            <TrustStrip />
          </FadeInSection>
        </div>
      </section>

      <VisionMission />

      <WhySection points={values} title="Nilai-Nilai Kami" />

      <FadeInSection delay={0.08} className="mx-auto block max-w-4xl px-6 py-4">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-wide text-ink/40">
          Teknologi yang Kami Kuasai
        </p>
        <TechMarquee items={coreTech} />
      </FadeInSection>

      <LegalCard />

      <FadeInSection delay={0.1} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">Ingin Kenal Lebih Jauh?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Diskusikan kebutuhan project Anda langsung dengan tim kami.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}