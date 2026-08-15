import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <FadeInSection className="rounded-xl bg-ink px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold text-white">
          Punya kebutuhan project spesifik?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          Ceritakan kebutuhan Anda, kami bantu rekomendasikan solusi dan
          estimasi yang sesuai.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/kontak">Hubungi Kami</Button>
        </div>
      </FadeInSection>
    </section>
  );
}