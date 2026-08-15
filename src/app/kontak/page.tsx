import { User, Mail, MessageSquare, Tag, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { submitLead } from "./actions";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { SupportChannels } from "@/components/maintenance/SupportChannels";

export const metadata = {
  title: "Kontak — RHG Teknologi Indonesia",
};

const PREP_ITEMS = [
  "Gambaran umum kebutuhan (website, aplikasi, sistem, dsb)",
  "Target platform atau kategori layanan yang diminati",
  "Perkiraan timeline, kalau ada tenggat tertentu",
  "Budget kisaran, opsional — membantu rekomendasi paket yang tepat",
];

export default function KontakPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="blob-2 pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-circuit/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <FadeInSection>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-brand">
            Konsultasi Project
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Ceritakan Kebutuhan Anda
          </h1>
          <p className="mt-4 text-base text-ink/70">
            Kami akan follow up secepatnya untuk membahas detail dan estimasi yang sesuai.
          </p>

          <div className="mt-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
              Sebelum Konsultasi, Siapkan
            </h2>
            <ul className="mt-4 space-y-3">
              {PREP_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/70">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
              Kanal Bantuan
            </h2>
            <div className="mt-4">
              <SupportChannels />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <form action={submitLead} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:p-8">
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
                <User size={14} className="text-brand" /> Nama
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Nama lengkap Anda"
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="mt-5">
              <label className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
                <Mail size={14} className="text-brand" /> Email / WhatsApp
              </label>
              <input
                type="text"
                name="contact"
                required
                placeholder="email@domain.com atau nomor WA"
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
              />
            </div>

            <div className="mt-5">
              <label className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
                <Tag size={14} className="text-brand" /> Kategori Layanan
              </label>
              <select
                name="service_interest"
                defaultValue=""
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
              >
                <option value="">Pilih kategori (opsional)</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className="flex items-center gap-1.5 text-sm font-medium text-ink/70">
                <MessageSquare size={14} className="text-brand" /> Kebutuhan Project
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Jelaskan kebutuhan project Anda secara singkat..."
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-brand to-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-all hover:shadow-lg hover:shadow-brand/30"
            >
              Kirim Permintaan Konsultasi
            </button>
          </form>
        </FadeInSection>
      </div>
    </section>
  );
}