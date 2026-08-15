import { notFound } from "next/navigation";
import {
  Webhook,
  Wallet,
  ShieldCheck,
  RefreshCw,
  UserPlus,
  FileCheck,
  PhoneCall,
  Repeat,
  CheckCircle2,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { ReceiptCard } from "@/components/payment/ReceiptCard";
import { PaymentFlow } from "@/components/payment/PaymentFlow";
import { GatewayCompare } from "@/components/payment/GatewayCompare";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { StatsBar } from "@/components/ui/StatsBar";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { WhySection } from "@/components/sections/WhySection";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Integrasi Payment Gateway — RHG Teknologi Indonesia",
};

const PAYMENT_METHODS = [
  "Midtrans", "DOKU", "Xendit", "QRIS",
  "Virtual Account BCA", "Virtual Account Mandiri",
  "GoPay", "OVO", "DANA", "ShopeePay",
  "Kartu Kredit/Debit", "Indomaret/Alfamart",
];

const FEATURES = [
  { icon: Webhook, title: "Webhook Real-Time", description: "Status transaksi update otomatis begitu pembayaran masuk, tanpa cek manual." },
  { icon: Wallet, title: "Multi Metode Pembayaran", description: "Kartu, VA, e-wallet, QRIS, hingga retail — dalam satu sistem." },
  { icon: RefreshCw, title: "Rekonsiliasi Otomatis", description: "Transaksi tercatat rapi, mengurangi risiko selisih pencatatan manual." },
  { icon: ShieldCheck, title: "Sesuai Standar Keamanan", description: "Integrasi mengikuti best practice dari tiap provider gateway." },
];

const ACCOUNT_HELP = [
  { icon: UserPlus, title: "Pendaftaran Akun Merchant", description: "Bantu daftar akun bisnis di Midtrans, DOKU, atau Xendit dari nol." },
  { icon: FileCheck, title: "Persiapan Dokumen", description: "Panduan dokumen yang dibutuhkan: NPWP, KTP, rekening bisnis, dsb." },
  { icon: ShieldCheck, title: "Verifikasi & Aktivasi", description: "Dampingi proses verifikasi sampai akun aktif dan siap terima pembayaran." },
  { icon: PhoneCall, title: "Konsultasi Pemilihan Gateway", description: "Bantu tentukan provider paling cocok sesuai jenis bisnis Anda." },
];

export default function PaymentGatewayPage() {
  const service = getServiceBySlug("payment-gateway");
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(17,22,43,0.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <div className="blob pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
        <div className="blob-2 pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-circuit/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <FadeInSection>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium text-brand">
              {service.code}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Pembayaran Online yang{" "}
              <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
                Masuk Otomatis
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">{service.description}</p>
            <div className="mt-8 flex gap-3">
              <Button href="/kontak">Konsultasi Project</Button>
              <Button href="/layanan" variant="ghost">Lihat Layanan Lain</Button>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="flex justify-center">
            <ReceiptCard />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection delay={0.05} className="mx-auto block max-w-3xl px-6">
        <StatsBar stats={service.stats ?? []} />
      </FadeInSection>

      <WhySection points={service.sellingPoints} />

      <FadeInSection delay={0.1} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Bagaimana Alurnya</h2>
        <p className="mt-2 text-sm text-ink/60">
          Dari pelanggan bayar sampai dana masuk ke rekening Anda — semua tercatat otomatis.
        </p>
        <div className="mt-6">
          <PaymentFlow />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.12} className="mx-auto block max-w-6xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Yang Bisa Kami Bangun</h2>
        <div className="mt-6">
          <FeatureGrid features={FEATURES} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Pilih Gateway yang Tepat</h2>
        <p className="mt-2 text-sm text-ink/60">
          Setiap provider punya kekuatan berbeda — kami bantu sesuaikan dengan kebutuhan bisnis Anda.
        </p>
        <div className="mt-6">
          <GatewayCompare />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.17} className="mx-auto block max-w-4xl px-6 py-8">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-wide text-ink/40">
          Metode Pembayaran yang Didukung
        </p>
        <TechMarquee items={PAYMENT_METHODS} />
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

      <FadeInSection delay={0.21} className="mx-auto block max-w-6xl px-6 py-12">
        <div className="flex items-center gap-2">
          <Repeat size={18} className="text-brand" />
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
            Bingung Bikin Akun Gateway? Kami Bantu.
          </h2>
        </div>
        <p className="mt-2 text-sm text-ink/60">
          Nggak perlu pusing daftar sendiri — proses ini termasuk pendampingan dari kami.
        </p>
        <div className="mt-6">
          <FeatureGrid features={ACCOUNT_HELP} />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.23} className="mx-auto block max-w-4xl px-6 py-12">
        <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Cocok Untuk</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.useCases.map((useCase) => (
            <span key={useCase} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm text-ink/70">
              {useCase}
            </span>
          ))}
        </div>
      </FadeInSection>

      {service.pricingTiers && (
        <FadeInSection delay={0.25} className="mx-auto block max-w-4xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Paket & Estimasi</h2>
          <p className="mt-2 text-sm text-ink/60">
            Estimasi awal — harga final menyesuaikan scope setelah konsultasi. Biaya transaksi dari provider terpisah dari biaya development.
          </p>
          <div className="mt-6">
            <PricingTiers tiers={service.pricingTiers} />
          </div>
        </FadeInSection>
      )}

      {service.faqs && (
        <FadeInSection delay={0.27} className="mx-auto block max-w-3xl px-6 py-12">
          <h2 className="font-display text-xl font-bold text-ink md:text-2xl">Pertanyaan Umum</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </FadeInSection>
      )}

      <FadeInSection delay={0.29} className="mx-auto block max-w-3xl px-6 py-16">
        <div className="rounded-xl bg-gradient-to-br from-ink to-ink/90 px-8 py-10 text-center">
          <h2 className="font-display text-xl font-bold text-white">Siap Terima Pembayaran Otomatis?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
            Ceritakan bisnis Anda, kami bantu pilih gateway dan siapkan akunnya sampai aktif.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/kontak">Konsultasi Sekarang</Button>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}