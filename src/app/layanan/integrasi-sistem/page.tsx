import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bug,
  Check,
  CheckCircle2,
  Cpu,
  Gauge,
  Headphones,
  LifeBuoy,
  Link as LinkIcon,
  Network,
  Printer,
  RefreshCw,
  Router,
  ServerCog,
  ShieldCheck,
  Ticket,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { NetworkTopology } from "@/components/network/NetworkTopology";
import { DeviceStatusGrid } from "@/components/network/DeviceStatusGrid";
import { VoucherCard } from "@/components/network/VoucherCard";
import { SectorSplit } from "@/components/network/SectorSplit";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Integrasi Sistem & Infrastruktur — RHG Teknologi Indonesia",
  description:
    "Integrasi MikroTik, RouterOS, OLT SNMP, billing ISP, voucher hotspot, IoT, hardware, monitoring jaringan, automation, dan sistem custom oleh RHG Teknologi Indonesia.",
};

const FEATURES = [
  {
    icon: Router,
    title: "MikroTik & RouterOS",
    description:
      "Setup, konfigurasi, monitoring, provisioning, bandwidth management, dan integrasi MikroTik ke sistem.",
  },
  {
    icon: Gauge,
    title: "OLT & SNMP Monitoring",
    description:
      "Pantau perangkat, status koneksi, signal, interface, dan informasi jaringan melalui dashboard terpusat.",
  },
  {
    icon: Ticket,
    title: "Voucher & Billing",
    description:
      "Otomasi voucher hotspot, PPPoE, billing pelanggan, pembayaran, dan aktivasi layanan.",
  },
  {
    icon: Bell,
    title: "Alert & Notification",
    description:
      "Notifikasi otomatis ketika perangkat, uplink, service, atau koneksi pelanggan mengalami masalah.",
  },
  {
    icon: Printer,
    title: "Hardware Integration",
    description:
      "Integrasi printer thermal, barcode scanner, QR scanner, perangkat operasional, dan hardware lainnya.",
  },
  {
    icon: Cpu,
    title: "IoT & Sensor",
    description:
      "Monitoring sensor, perangkat lapangan, mesin, atau hardware melalui sistem dan dashboard terpusat.",
  },
  {
    icon: Network,
    title: "Bandwidth Management",
    description:
      "Pengelolaan profile, bandwidth, queue, pelanggan, dan konfigurasi jaringan dari dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Remote Access",
    description:
      "Menghubungkan perangkat remote secara aman melalui tunnel, VPN, relay, maupun arsitektur private access.",
  },
];

const INTEGRATION_AREAS = [
  {
    icon: Router,
    title: "Network Infrastructure",
    description:
      "MikroTik, RouterOS, hotspot, PPPoE, OLT, SNMP, uplink, dan network monitoring.",
  },
  {
    icon: ServerCog,
    title: "Backend & API",
    description:
      "API, database, authentication, webhook, scheduler, dan service untuk menghubungkan berbagai sistem.",
  },
  {
    icon: Printer,
    title: "Hardware",
    description:
      "Printer, scanner, terminal, barcode, perangkat lokal, dan kebutuhan hardware operasional.",
  },
  {
    icon: Cpu,
    title: "IoT",
    description:
      "Sensor dan perangkat lapangan yang mengirimkan data ke dashboard atau sistem monitoring.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Mengurangi proses manual dengan workflow otomatis berbasis event, webhook, API, atau scheduler.",
  },
  {
    icon: LinkIcon,
    title: "Existing System",
    description:
      "Sistem baru dapat dihubungkan ke database, aplikasi, API, maupun infrastructure yang sudah dimiliki.",
  },
];

const SUPPORT_ITEMS = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Perbaikan bug pada fitur dan integrasi yang termasuk dalam scope development selama periode garansi.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dukungan teknis untuk kendala sistem, integrasi, API, perangkat, maupun proses operasional terkait project.",
  },
  {
    icon: Gauge,
    title: "Monitoring Assistance",
    description:
      "Pendampingan pengecekan service, integration flow, konektivitas, dan komponen utama saat terjadi kendala.",
  },
  {
    icon: RefreshCw,
    title: "Minor Adjustment",
    description:
      "Penyesuaian minor untuk menjaga sistem tetap berjalan ketika ada perubahan dependency atau environment.",
  },
  {
    icon: ShieldCheck,
    title: "Production Reliability",
    description:
      "Evaluasi issue production yang berhubungan dengan sistem dan integrasi yang telah dibangun.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Garansi dan technical support dapat diberikan hingga 12 bulan sesuai paket dan scope project.",
  },
];

export default function IntegrasiSistemPage() {
  const service = getServiceBySlug("integrasi-sistem");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes integrationHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes integrationGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes integrationFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes integrationGlow {
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

        .integration-grid {
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
          animation:
            integrationGrid
            18s
            linear
            infinite;
        }

        .integration-hero-1,
        .integration-hero-2,
        .integration-hero-3,
        .integration-hero-4 {
          opacity: 0;

          animation:
            integrationHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .integration-hero-1 {
          animation-delay: .05s;
        }

        .integration-hero-2 {
          animation-delay: .13s;
        }

        .integration-hero-3 {
          animation-delay: .21s;
        }

        .integration-hero-4 {
          animation-delay: .29s;
        }

        .integration-visual {
          animation:
            integrationFloat
            7s
            ease-in-out
            infinite;
        }

        .integration-glow {
          animation:
            integrationGlow
            10s
            ease-in-out
            infinite;
        }

        .integration-card,
        .support-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .integration-card::after,
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

          transition:
            width .4s ease;
        }

        .integration-card:hover,
        .support-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .integration-card:hover::after,
        .support-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .integration-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .integration-visual {
            animation: none;
          }

          .integration-card:hover,
          .support-card:hover {
            transform: none;
          }

          .integration-card:hover::after,
          .support-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .integration-grid,
          .integration-visual,
          .integration-glow,
          .integration-hero-1,
          .integration-hero-2,
          .integration-hero-3,
          .integration-hero-4 {
            animation: none !important;
          }

          .integration-hero-1,
          .integration-hero-2,
          .integration-hero-3,
          .integration-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="integration-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.95fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="integration-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                System & Infrastructure Integration
              </div>

              <div className="integration-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="integration-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Hubungkan jaringan, perangkat, dan software
                <span className="text-[#ff6f0f]">
                  {" "}
                  dalam satu sistem.
                </span>
              </h1>

              <p className="integration-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG membangun integrasi untuk MikroTik, RouterOS,
                OLT, SNMP, billing ISP, hotspot, IoT, hardware,
                automation, API, dan sistem operasional sehingga
                monitoring dan kontrol dapat dilakukan lebih terpusat.
              </p>

              <div className="integration-hero-3 mt-6 flex flex-wrap gap-2">
                {[
                  "MikroTik",
                  "RouterOS",
                  "OLT",
                  "SNMP",
                  "IoT",
                  "Hardware",
                  "Billing",
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

              <div className="integration-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Konsultasi Project

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

              <div className="integration-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Garansi & Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Technical support dan bug fixing pasca-deployment
                    dapat tersedia hingga 12 bulan sesuai paket dan
                    scope project.
                  </p>
                </div>
              </div>
            </div>

            <div className="integration-visual relative flex min-h-[390px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.05] blur-[85px]" />

              <div className="relative w-full">
                <NetworkTopology />
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

        {/* OVERVIEW */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Integration Capability
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Bukan hanya jaringan.
                    <span className="text-[#ff6f0f]">
                      {" "}
                      Seluruh sistem bisa terhubung.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Kami dapat menghubungkan perangkat jaringan,
                  hardware, database, API, aplikasi, billing,
                  payment, dan sensor agar dapat bekerja sebagai
                  satu workflow operasional.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {INTEGRATION_AREAS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="integration-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
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

        {/* DEVICE MONITORING */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Monitoring
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Pantau perangkat dari
                  <span className="text-[#ff6f0f]">
                    {" "}
                    satu dashboard.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Contoh tampilan dashboard monitoring untuk melihat
                  kondisi perangkat, koneksi, dan status jaringan
                  secara lebih terpusat.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <DeviceStatusGrid />
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

                  Capabilities
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Yang bisa kami
                  <span className="text-[#ff6f0f]">
                    {" "}
                    bangun.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Dari network monitoring sederhana hingga sistem
                  operasional yang menghubungkan hardware, backend,
                  automation, dan pembayaran.
                </p>
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

        {/* VOUCHER */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:px-8 md:py-28">
            <FadeInSection>
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Automated Billing
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Voucher hotspot
                  <span className="text-[#ff6f0f]">
                    {" "}
                    otomatis.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Pelanggan dapat membeli akses, melakukan pembayaran,
                  kemudian sistem membuat atau mengaktifkan voucher
                  secara otomatis tanpa perlu rekap manual.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Integrasi payment gateway / QRIS",
                    "Generate voucher otomatis",
                    "Sinkronisasi dengan MikroTik",
                    "Riwayat transaksi terpusat",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[12px] font-semibold text-slate-500"
                    >
                      <Check className="h-3.5 w-3.5 text-[#ff6f0f]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="flex justify-center"
            >
              <VoucherCard />
            </FadeInSection>
          </div>
        </section>

        {/* SECTOR */}
        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
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
                    operasional.
                  </span>
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <SectorSplit />
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

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Scope dapat disesuaikan berdasarkan perangkat,
                  topology jaringan, lokasi, API, backend, serta
                  sistem existing yang dimiliki.
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
          <div className="integration-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff8a34]">
                    <span className="h-px w-7 bg-[#ff8a34]" />

                    Post-Deployment Support
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
                  Integrasi sistem sering melibatkan banyak komponen.
                  Karena itu RHG dapat memberikan support hingga
                  12 bulan agar sistem tetap dapat digunakan setelah
                  masuk production.
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
                      Garansi berlaku untuk bug atau kendala pada
                      fungsi yang termasuk dalam scope project.
                      Penambahan fitur, perubahan topology besar,
                      perubahan perangkat, biaya provider, kerusakan
                      hardware, perubahan konfigurasi oleh pihak lain,
                      atau kebutuhan di luar scope tidak termasuk
                      garansi kecuali disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* PRICING */}
        {service.pricingTiers &&
          service.pricingTiers.length > 0 && (
            <section className="bg-[#f7f7f5]">
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
                      Estimasi awal. Harga final dipengaruhi jumlah
                      perangkat, lokasi, topology, backend, API,
                      automation, hardware, dan kebutuhan integrasi.
                    </p>
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
                      Beberapa hal yang biasanya dibahas sebelum
                      integrasi jaringan, perangkat, atau sistem
                      dimulai.
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
                  Build an Integrated System
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Perangkat masih dikelola satu per satu?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan topology, perangkat, workflow, dan sistem
                  yang Anda gunakan sekarang. RHG dapat membantu
                  merancang integrasi, monitoring, dan automation
                  yang lebih terpusat.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi Sekarang

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}