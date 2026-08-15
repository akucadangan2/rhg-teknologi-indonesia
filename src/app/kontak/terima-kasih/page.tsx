import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Terima Kasih — RHG Teknologi Indonesia",
};

export default function TerimaKasihPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute left-1/2 -top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-lg px-6 py-24 text-center">
        <FadeInSection>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
            <CheckCircle2 size={32} className="text-brand" />
          </span>
          <h1 className="mt-6 font-display text-2xl font-extrabold text-ink">
            Terima Kasih!
          </h1>
          <p className="mt-3 text-ink/60">
            Pesan Anda sudah kami terima. Tim kami akan follow up lewat kontak yang Anda
            cantumkan secepatnya.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/">Kembali ke Beranda</Button>
            <Button href="/portofolio" variant="ghost">
              Lihat Portofolio
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}