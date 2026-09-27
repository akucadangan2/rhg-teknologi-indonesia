"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  FlaskConical,
  Mail,
  MapPin,
} from "lucide-react";

import {
  contactInfo,
  legalInfo,
} from "@/lib/data/company";

const NAV_LINKS = [
  {
    href: "/layanan",
    label: "Layanan",
  },
  {
    href: "/portofolio",
    label: "Portofolio",
  },
  {
    href: "/lab",
    label: "RHG Lab",
    featured: true,
  },
  {
    href: "/berita",
    label: "Berita",
  },
  {
    href: "/tentang",
    label: "Tentang Kami",
  },
  {
    href: "/kontak",
    label: "Kontak",
  },
];

const CAPABILITIES = [
  "Web Development",
  "Mobile Apps",
  "AI Agent",
  "Computer Vision",
  "Backend & Data",
  "GIS & GeoAI",
  "IoT Integration",
  "Payment Integration",
];

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.07] bg-[#17191c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.8fr_1fr] lg:gap-10">
          {/* COMPANY */}

          <div className="max-w-md">
            <Link
              href="/"
              aria-label="RHG Teknologi Indonesia"
              className="inline-flex"
            >
              <div className="relative h-[50px] w-[190px] sm:h-[54px] sm:w-[210px]">
                <Image
                  src="/logo-full.png"
                  alt="RHG Teknologi Indonesia"
                  fill
                  sizes="210px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-md text-[13px] leading-7 text-white/45 sm:text-sm">
              RHG Teknologi Indonesia mengembangkan software,
              aplikasi mobile, backend, AI Agent, computer vision,
              GIS, GeoAI, IoT, payment integration, dan sistem
              digital custom untuk bisnis maupun kebutuhan lapangan.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff6f0f]" />

              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/45">
                Technology Engineering · Indonesia
              </span>
            </div>
          </div>

          {/* NAVIGATION */}

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
              Navigasi
            </p>

            <nav className="mt-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-[38px] items-center gap-2 text-[13px] font-semibold text-white/45 transition hover:text-white"
                >
                  {link.featured && (
                    <FlaskConical className="h-3.5 w-3.5 text-[#ff8a34]" />
                  )}

                  <span>{link.label}</span>

                  {link.featured && (
                    <span className="rounded-full bg-[#ff6f0f]/10 px-1.5 py-0.5 text-[7px] font-black uppercase tracking-[0.1em] text-[#ff8a34]">
                      Lab
                    </span>
                  )}

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* CAPABILITIES */}

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
              Capabilities
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              {CAPABILITIES.map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-medium text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/30">
              Kontak
            </p>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-3 text-[12px] leading-6 text-white/45 transition hover:text-white sm:text-[13px]"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] transition group-hover:bg-[#ff6f0f]/15">
                  <Mail className="h-3.5 w-3.5 text-[#ff8a34]" />
                </span>

                <span className="break-all">
                  {contactInfo.email}
                </span>
              </a>

              <div className="flex items-start gap-3 text-[12px] leading-6 text-white/45 sm:text-[13px]">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                  <MapPin className="h-3.5 w-3.5 text-[#ff8a34]" />
                </span>

                <span>{legalInfo.domicile}</span>
              </div>
            </div>

            <Link
              href="/kontak"
              className="group mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-4 text-xs font-black text-[#17191c] transition hover:bg-[#ff8a34]"
            >
              Diskusikan Project

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* RHG LAB STRIP */}

        <div className="mt-12 overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025]">
          <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                <FlaskConical className="h-5 w-5 text-[#17191c]" />
              </span>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff8a34]">
                  RHG Applied AI Field Lab
                </p>

                <h3 className="mt-1.5 text-sm font-black sm:text-base">
                  Coffee AI Living Lab · Rejang Lebong, Bengkulu
                </h3>

                <p className="mt-1.5 max-w-2xl text-[11px] leading-5 text-white/35 sm:text-xs">
                  Real-world testing environment untuk AI Agent,
                  computer vision, multimodal AI, edge AI,
                  agriculture AI, prediction, dan eksperimen
                  teknologi lapangan.
                </p>
              </div>
            </div>

            <Link
              href="/lab"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/[0.09] px-4 text-xs font-bold text-white/70 transition hover:border-[#ff6f0f]/30 hover:bg-[#ff6f0f]/10 hover:text-white md:w-auto"
            >
              Explore RHG Lab

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white/45">
              {legalInfo.companyName}
            </p>

            <p className="mt-1">
              © {currentYear} RHG Teknologi Indonesia.
              Seluruh hak cipta dilindungi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/privacy"
              className="transition hover:text-white/60"
            >
              Kebijakan Privasi
            </Link>

            <Link
              href="/lab"
              className="transition hover:text-white/60"
            >
              RHG Lab
            </Link>

            <span>
              Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}