import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CheckCircle2,
  CreditCard,
  FileCheck,
  Headphones,
  LifeBuoy,
  LockKeyhole,
  PhoneCall,
  RefreshCw,
  Repeat,
  ShieldCheck,
  UserPlus,
  Wallet,
  Webhook,
  Workflow,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { ReceiptCard } from "@/components/payment/ReceiptCard";
import { PaymentFlow } from "@/components/payment/PaymentFlow";
import { GatewayCompare } from "@/components/payment/GatewayCompare";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Integrasi Payment Gateway — RHG Teknologi Indonesia",
  description:
    "Integrasi payment gateway, QRIS, virtual account, e-wallet, kartu, webhook pembayaran, rekonsiliasi transaksi, merchant onboarding, dan sistem pembayaran digital oleh RHG Teknologi Indonesia.",
};

const PAYMENT_METHODS = [
  "Midtrans",
  "DOKU",
  "Xendit",
  "QRIS",
  "Virtual Account",
  "Bank Transfer",
  "GoPay",
  "OVO",
  "DANA",
  "ShopeePay",
  "Credit / Debit Card",
  "Retail Payment",
];

const FEATURES = [
  {
    icon: Webhook,
    title: "Real-Time Webhook",
    description:
      "Status pembayaran dapat diproses otomatis setelah provider mengirimkan event transaksi ke sistem.",
  },
  {
    icon: Wallet,
    title: "Multi Payment Method",
    description:
      "Satu sistem dapat mendukung QRIS, virtual account, e-wallet, kartu, maupun metode lain sesuai provider.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Reconciliation",
    description:
      "Status order dan pembayaran dapat dicocokkan otomatis sehingga mengurangi proses pengecekan manual.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Integration",
    description:
      "Implementasi signature, webhook validation, authentication, dan server-side verification mengikuti kebutuhan provider.",
  },
  {
    icon: Workflow,
    title: "Payment Automation",
    description:
      "Pembayaran dapat memicu proses otomatis seperti aktivasi layanan, update order, invoice, atau workflow bisnis lainnya.",
  },
  {
    icon: Activity,
    title: "Transaction Monitoring",
    description:
      "Riwayat transaksi, payment status, callback, dan error dapat ditampilkan dalam dashboard untuk mempermudah monitoring.",
  },
];

const PAYMENT_AREAS = [
  {
    icon: CreditCard,
    title: "Checkout Integration",
    description:
      "Integrasi pembayaran ke website, mobile application, marketplace, membership, maupun sistem custom.",
  },
  {
    icon: Webhook,
    title: "Payment Webhook",
    description:
      "Server menerima update transaksi dari provider dan menjalankan business logic secara otomatis.",
  },
  {
    icon: RefreshCw,
    title: "Reconciliation",
    description:
      "Status payment, order, invoice, dan database dapat disinkronkan untuk mengurangi ketidaksesuaian data.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Pembayaran berhasil dapat memicu aktivasi produk, voucher, subscription, notification, maupun proses lainnya.",
  },
  {
    icon: LockKeyhole,
    title: "Server Verification",
    description:
      "Status transaksi diverifikasi dari backend agar aplikasi tidak hanya mempercayai informasi dari sisi client.",
  },
  {
    icon: Wallet,
    title: "Multi-Gateway Ready",
    description:
      "Arsitektur dapat dirancang agar mendukung satu atau beberapa provider sesuai kebutuhan bisnis.",
  },
];

const ACCOUNT_HELP = [
  {
    icon: UserPlus,
    title: "Merchant Registration",
    description:
      "Pendampingan proses pendaftaran akun merchant ke provider payment gateway yang dipilih.",
  },
  {
    icon: FileCheck,
    title: "Document Preparation",
    description:
      "Membantu memahami dokumen dan informasi bisnis yang perlu dipersiapkan untuk proses verifikasi provider.",
  },
  {
    icon: ShieldCheck,
    title: "Verification & Activation",
    description:
      "Pendampingan teknis selama proses aktivasi sampai akun siap digunakan untuk tahap integrasi.",
  },
  {
    icon: PhoneCall,
    title: "Gateway Consultation",
    description:
      "Membantu menentukan provider dan metode pembayaran berdasarkan kebutuhan sistem dan model bisnis.",
  },
];

const SUPPORT_ITEMS = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Perbaikan bug pada payment flow, webhook, callback, API, dan integrasi yang termasuk dalam scope project.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dukungan teknis ketika terdapat kendala integrasi, transaction flow, webhook, API, maupun production environment.",
  },
  {
    icon: Activity,
    title: "Transaction Issue Review",
    description:
      "Membantu menelusuri transaksi bermasalah melalui payment status, log, webhook, database, dan request flow.",
  },
  {
    icon: RefreshCw,
    title: "Integration Adjustment",
    description:
      "Penyesuaian minor apabila provider membutuhkan perubahan konfigurasi atau terdapat update pada integration flow.",
  },
  {
    icon: ShieldCheck,
    title: "Production Review",
    description:
      "Pendampingan pengecekan signature, callback, endpoint, authentication, dan proses pembayaran di production.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Garansi bug fixing dan technical support dapat tersedia hingga 12 bulan sesuai paket dan scope project.",
  },
];

export default function PaymentGatewayPage() {
  const service = getServiceBySlug("payment-gateway");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes paymentHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes paymentGrid {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 40px 40px;
          }
        }

        @keyframes paymentFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes paymentGlow {
          0%,
          100% {
            opacity: .25;
            transform: translate3d(-5%,0,0);
          }
          50% {
            opacity: .48;
            transform: translate3d(10%,-5%,0);
          }
        }

        .payment-grid {
          background-image:
            linear-gradient(
              rgba(15,23,42,.038) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.038) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          animation: paymentGrid 18s linear infinite;
        }

        .payment-hero-1,
        .payment-hero-2,
        .payment-hero-3,
        .payment-hero-4 {
          opacity: 0;
          animation:
            paymentHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .payment-hero-1 {
          animation-delay: .05s;
        }

        .payment-hero-2 {
          animation-delay: .13s;
        }

        .payment-hero-3 {
          animation-delay: .21s;
        }

        .payment-hero-4 {
          animation-delay: .29s;
        }

        .payment-receipt {
          animation:
            paymentFloat
            7s
            ease-in-out
            infinite;
        }

        .payment-glow {
          animation:
            paymentGlow
            10s
            ease-in-out
            infinite;
        }

        .payment-card,
        .support-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .payment-card::after,
        .support-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background:
            linear-gradient(
              90deg,
              #ff6f0f,
              transparent
            );
          transition: width .4s ease;
        }

        .payment-card:hover,
        .support-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);
          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .payment-card:hover::after,
        .support-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .payment-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .payment-receipt {
            animation: none;
          }

          .payment-card:hover,
          .support-card:hover {
            transform: none;
          }

          .payment-card:hover::after,
          .support-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .payment-grid,
          .payment-receipt,
          .payment-glow,
          .payment-hero-1,
          .payment-hero-2,
          .payment-hero-3,
          .payment-hero-4 {
            animation: none !important;
          }

          .payment-hero-1,
          .payment-hero-2,
          .payment-hero-3,
          .payment-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="payment-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.9fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="payment-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />
                Payment Infrastructure
              </div>

              <div className="payment-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="payment-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Pembayaran masuk.
                <span className="text-[#ff6f0f]">
                  {" "}
                  Sistem memproses otomatis.
                </span>
              </h1>

              <p className="payment-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                Integrasikan QRIS, virtual account, e-wallet,
                kartu, dan metode pembayaran lain ke website,
                aplikasi mobile, billing, marketplace, maupun
                sistem internal Anda.
              </p>

              <div className="payment-hero-3 mt-6 flex flex-wrap gap-2">
                {[
                  "QRIS",
                  "Virtual Account",
                  "E-Wallet",
                  "Card",
                  "Webhook",
                  "Reconciliation",
                  "Automation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[9px] font-bold text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="payment-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Konsultasi Payment

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/layanan"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/[0.09] bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Layanan Lain

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="payment-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Garansi & Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Bug fixing dan technical support untuk payment
                    integration dapat tersedia hingga 12 bulan sesuai
                    paket dan scope project.
                  </p>
                </div>
              </div>
            </div>

            <div className="payment-receipt relative flex min-h-[390px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.05] blur-[90px]" />

              <div className="relative">
                <ReceiptCard />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        {service.stats && service.stats.length > 0 && (
          <section className="border-b border-black/[0.06] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="grid grid-cols-2 border-x border-black/[0.06] md:grid-cols-4">
                {service.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-r border-black/[0.06] px-4 py-6 last:border-r-0 md:border-b-0 sm:px-6"
                  >
                    <p className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                      {stat.value}
                      <span className="text-[#ff6f0f]">
                        {stat.suffix}
                      </span>
                    </p>

                    <p className="mt-1.5 text-[9px] font-semibold leading-4 text-slate-400 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PAYMENT CAPABILITY */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />
                    Payment Engineering
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Bukan hanya tombol
                    <span className="text-[#ff6f0f]">
                      {" "}
                      “Bayar”.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Payment integration membutuhkan checkout,
                  transaction creation, webhook, verification,
                  database update, reconciliation, error handling,
                  dan business automation agar transaksi berjalan
                  sebagai satu flow.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {PAYMENT_AREAS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="payment-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                        <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                      </span>

                      <h3 className="mt-5 text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* PAYMENT FLOW */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Transaction Flow
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Dari checkout hingga
                  <span className="text-[#ff6f0f]">
                    {" "}
                    status terverifikasi.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Sistem dapat memperbarui order secara otomatis
                  setelah menerima dan memverifikasi status
                  pembayaran dari provider.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <PaymentFlow />
            </FadeInSection>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Payment Capabilities
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Yang bisa kami
                  <span className="text-[#ff6f0f]">
                    {" "}
                    integrasikan.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-10 block lg:mt-14"
            >
              <FeatureGrid features={FEATURES} />
            </FadeInSection>
          </div>
        </section>

        {/* GATEWAY COMPARE */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Provider Selection
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Pilih gateway sesuai
                  <span className="text-[#ff6f0f]">
                    {" "}
                    kebutuhan bisnis.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Pemilihan provider dapat disesuaikan dengan
                  metode pembayaran yang dibutuhkan, model bisnis,
                  proses onboarding, dan architecture sistem.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <GatewayCompare />
            </FadeInSection>
          </div>
        </section>

        {/* PAYMENT METHODS */}
        <section className="border-y border-black/[0.06] bg-[#17191c] text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.55fr_1.45fr] md:items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff8a34]">
                    Payment Ecosystem
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                    Metode & provider.
                  </h2>

                  <p className="mt-2 max-w-md text-[11px] leading-5 text-white/35">
                    Dukungan akhir bergantung pada provider dan
                    akun merchant yang digunakan.
                  </p>
                </div>

                <TechMarquee items={PAYMENT_METHODS} />
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* MERCHANT ONBOARDING */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.72fr_1.28fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />
                    Merchant Onboarding
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Belum punya akun
                    <span className="text-[#ff6f0f]">
                      {" "}
                      payment gateway?
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Kami dapat membantu proses awal mulai dari
                  pemilihan provider, persiapan kebutuhan
                  onboarding, hingga integrasi teknis setelah akun
                  merchant siap digunakan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-10 block lg:mt-14"
            >
              <FeatureGrid features={ACCOUNT_HELP} />
            </FadeInSection>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.72fr_1.28fr] md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Project Scope
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Apa yang termasuk.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Scope akhir menyesuaikan provider, metode
                  pembayaran, platform, business flow, webhook,
                  dashboard, dan automation yang dibutuhkan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {service.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-[76px] items-start gap-3 rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0e5]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6f0f]" />
                    </span>

                    <div>
                      <p className="font-mono text-[8px] font-black text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-1 text-[12px] leading-6 text-slate-600 sm:text-[13px]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* WARRANTY */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="payment-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34]">
                    <span className="h-px w-7 bg-[#ff8a34]" />
                    Post-Launch Support
                  </div>

                  <h2 className="mt-5 max-w-2xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                    Garansi & technical support
                    <span className="text-[#ff8a34]">
                      {" "}
                      hingga 1 tahun.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8 md:justify-self-end">
                  Payment adalah bagian kritis dalam sistem.
                  Karena itu RHG dapat menyediakan bug fixing dan
                  technical support hingga 12 bulan setelah
                  integrasi masuk production.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {SUPPORT_ITEMS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="support-card h-full rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6f0f]">
                        <Icon className="h-[18px] w-[18px] text-white" />
                      </span>

                      <h3 className="mt-5 text-base font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>

            <FadeInSection delay={0.15}>
              <div className="mt-8 rounded-[20px] border border-[#ff8a34]/20 bg-[#ff6f0f]/[0.07] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8a34]" />

                  <div>
                    <p className="text-sm font-black">
                      Ketentuan garansi
                    </p>

                    <p className="mt-2 max-w-4xl text-[11px] leading-6 text-white/40 sm:text-xs">
                      Garansi berlaku untuk bug pada integration,
                      webhook, API, payment flow, dan business logic
                      yang termasuk dalam scope project. Biaya
                      transaksi, biaya provider, perubahan kebijakan
                      provider, proses approval merchant, penambahan
                      metode pembayaran, fitur baru, maupun perubahan
                      sistem di luar scope tidak termasuk garansi
                      kecuali disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Use Cases
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Cocok untuk berbagai
                  <span className="text-[#ff6f0f]">
                    {" "}
                    transaction flow.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.06}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="rounded-full border border-black/[0.08] bg-[#fafaf8] px-4 py-2.5 text-[11px] font-semibold text-slate-500 sm:text-xs"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* PRICING */}
        {service.pricingTiers &&
          service.pricingTiers.length > 0 && (
            <section className="border-t border-black/[0.06] bg-[#f7f7f5]">
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />
                      Investment
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Paket & estimasi.
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      Harga development menyesuaikan jumlah provider,
                      metode pembayaran, checkout flow, webhook,
                      dashboard, reconciliation, automation, dan
                      platform yang digunakan.
                    </p>

                    <div className="mt-4 flex items-start gap-2.5 rounded-[16px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                      <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-[#ff6f0f]" />

                      <p className="text-[11px] leading-5 text-slate-500">
                        Biaya transaksi, settlement, MDR, atau biaya
                        lain dari provider payment gateway berada di
                        luar biaya development RHG.
                      </p>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection
                  delay={0.08}
                  className="mt-10 block lg:mt-14"
                >
                  <PricingTiers
                    tiers={service.pricingTiers}
                  />
                </FadeInSection>
              </div>
            </section>
          )}

        {/* FAQ */}
        {service.faqs &&
          service.faqs.length > 0 && (
            <section className="border-t border-black/[0.06] bg-white">
              <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.65fr_1.35fr] md:px-8 md:py-28 lg:px-10">
                <FadeInSection>
                  <div>
                    <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <span className="h-px w-7 bg-[#ff6f0f]" />
                      FAQ
                    </div>

                    <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                      Pertanyaan umum.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                      Beberapa hal yang biasanya perlu diketahui
                      sebelum payment gateway diintegrasikan ke
                      sistem.
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={0.08}>
                  <FaqAccordion
                    faqs={service.faqs}
                  />
                </FadeInSection>
              </div>
            </section>
          )}

        {/* CTA */}
        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-black/45">
                  Automate Your Payments
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Masih verifikasi pembayaran secara manual?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan aplikasi, website, billing system,
                  metode pembayaran, dan flow bisnis Anda. RHG
                  dapat membantu memilih architecture dan
                  mengintegrasikan payment gateway dari checkout
                  hingga transaksi terverifikasi.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi Payment

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}