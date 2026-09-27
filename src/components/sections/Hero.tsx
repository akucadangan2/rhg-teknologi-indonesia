import type { CSSProperties } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  MapPinned,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

const CENTER = { x: 300, y: 250 };

const NODES = [
  {
    code: "WEB",
    label: "Website",
    x: 470,
    y: 250,
    delay: "0s",
  },
  {
    code: "MOBILE",
    label: "Mobile Apps",
    x: 385,
    y: 103,
    delay: "0.1s",
  },
  {
    code: "PAYMENT",
    label: "Payment",
    x: 215,
    y: 103,
    delay: "0.2s",
  },
  {
    code: "BACKEND",
    label: "Backend",
    x: 130,
    y: 250,
    delay: "0.3s",
  },
  {
    code: "GIS",
    label: "GIS & Maps",
    x: 215,
    y: 397,
    delay: "0.4s",
  },
  {
    code: "SISTEM",
    label: "Integration",
    x: 385,
    y: 397,
    delay: "0.5s",
  },
];

const CAPABILITIES = [
  {
    icon: Code2,
    label: "Web & Backend",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
  },
  {
    icon: MapPinned,
    label: "GIS & Mapping",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/5">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-paper" />

      <div className="blob pointer-events-none absolute -left-24 -top-28 -z-10 h-[360px] w-[360px] rounded-full bg-brand/15 blur-[100px]" />

      <div className="blob-2 pointer-events-none absolute -right-20 top-24 -z-10 h-[440px] w-[440px] rounded-full bg-circuit/15 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(17,22,43,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,22,43,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-14 px-5 pb-16 pt-14 sm:px-6 md:grid-cols-[1.04fr_0.96fr] md:px-8 md:pb-20 md:pt-20 lg:gap-16 lg:px-10">
        {/* LEFT */}
        <FadeInSection>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.07] px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand sm:text-xs">
                PT RHG Teknologi Indonesia
              </span>
            </div>

            <h1 className="mt-6 max-w-[720px] font-display text-[42px] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl md:text-[56px] lg:text-[68px]">
              <span className="bg-gradient-to-r from-brand via-[#7685d9] to-circuit bg-clip-text text-transparent">
                Menyambungkan sistem,
              </span>{" "}
              dari ide sampai produksi
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink/65 sm:text-base md:text-lg md:leading-8">
              Website, aplikasi mobile, backend, payment gateway, GIS hingga
              sistem operasional terintegrasi — dirancang dan dikembangkan
              end-to-end sesuai kebutuhan bisnis Anda.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/kontak">
                <span className="inline-flex items-center gap-2">
                  Konsultasi Project
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button href="/layanan" variant="ghost">
                Lihat Semua Layanan
              </Button>
            </div>

            {/* Capability tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {CAPABILITIES.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-ink/[0.07] bg-white/60 px-3 py-2 text-xs font-medium text-ink/65 shadow-sm backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            {/* Trust */}
            <div className="mt-8 border-t border-ink/[0.06] pt-6">
              <TrustStrip />

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="inline-flex items-center gap-2 text-xs text-ink/45">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  <span>Pengembangan end-to-end</span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs text-ink/45">
                  <Globe2 className="h-3.5 w-3.5 text-brand" />
                  <span>Proyek Indonesia & internasional</span>
                </div>
              </div>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35 sm:text-xs">
                Melayani proyek Pemerintah, BUMN, dan Swasta
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* RIGHT */}
        <FadeInSection delay={0.15}>
          <div className="relative mx-auto w-full max-w-[620px]">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-circuit/10 blur-[70px]" />

            {/* Diagram card */}
            <div className="relative overflow-hidden rounded-[28px] border border-ink/[0.07] bg-white/45 shadow-[0_25px_80px_rgba(17,22,43,0.06)] backdrop-blur-sm">
              {/* Top */}
              <div className="flex items-center justify-between border-b border-ink/[0.06] px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-semibold text-ink">
                    RHG Technology Ecosystem
                  </p>

                  <p className="mt-0.5 text-[10px] text-ink/40">
                    Connected digital infrastructure
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-brand/10 bg-brand/[0.06] px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-30" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-brand">
                    Connected
                  </span>
                </div>
              </div>

              {/* SVG */}
              <div className="relative px-2 pb-3 pt-1 sm:px-5 sm:pb-5">
                <svg
                  viewBox="0 0 600 500"
                  className="mx-auto w-full"
                  role="img"
                  aria-label="Diagram sistem RHG yang menghubungkan website, aplikasi mobile, payment gateway, backend, GIS, dan integrasi sistem"
                >
                  <defs>
                    <linearGradient
                      id="heroLineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#315EFB" stopOpacity="0.2" />
                      <stop offset="55%" stopColor="#607BEF" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#E58A14" stopOpacity="0.25" />
                    </linearGradient>

                    <radialGradient id="centerGlow">
                      <stop offset="0%" stopColor="#315EFB" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#315EFB" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Decorative rings */}
                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r="180"
                    fill="none"
                    stroke="rgba(49,94,251,0.05)"
                    strokeWidth="1"
                    strokeDasharray="3 8"
                  />

                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r="117"
                    fill="none"
                    stroke="rgba(49,94,251,0.055)"
                    strokeWidth="1"
                  />

                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r="84"
                    fill="url(#centerGlow)"
                  />

                  {/* Lines */}
                  {NODES.map((node) => (
                    <line
                      key={`line-${node.code}`}
                      x1={CENTER.x}
                      y1={CENTER.y}
                      x2={node.x}
                      y2={node.y}
                      pathLength={1}
                      className="diagram-line"
                      style={
                        {
                          "--delay": node.delay,
                        } as CSSProperties
                      }
                      stroke="url(#heroLineGradient)"
                      strokeWidth={1.5}
                    />
                  ))}

                  {/* Travelling dots */}
                  {NODES.map((node) => (
                    <circle
                      key={`pulse-${node.code}`}
                      r={3.8}
                      className="pulse-dot fill-brand"
                      style={
                        {
                          offsetPath: `path("M ${CENTER.x} ${CENTER.y} L ${node.x} ${node.y}")`,
                          "--delay": node.delay,
                          "--duration": "2.8s",
                        } as CSSProperties
                      }
                    />
                  ))}

                  {/* Center rings */}
                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r={43}
                    fill="none"
                    stroke="rgba(49,94,251,0.12)"
                    strokeWidth="1"
                  />

                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r={32}
                    className="fill-ink"
                  />

                  <circle
                    cx={CENTER.x}
                    cy={CENTER.y}
                    r={26}
                    fill="none"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="1"
                  />

                  <text
                    x={CENTER.x}
                    y={CENTER.y + 5}
                    textAnchor="middle"
                    className="fill-paper font-mono text-[13px] font-semibold tracking-wide"
                  >
                    RHG
                  </text>

                  {/* Nodes */}
                  {NODES.map((node) => (
                    <g
                      key={`node-${node.code}`}
                      className="diagram-node"
                      style={
                        {
                          "--delay": node.delay,
                        } as CSSProperties
                      }
                    >
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={29}
                        fill="rgba(255,255,255,0.85)"
                        stroke="rgba(49,94,251,0.16)"
                        strokeWidth={5}
                      />

                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={24}
                        className="fill-paper stroke-circuit"
                        strokeWidth={1.4}
                      />

                      <text
                        x={node.x}
                        y={node.y + 3}
                        textAnchor="middle"
                        className="fill-ink font-mono text-[8px] font-semibold"
                      >
                        {node.code}
                      </text>

                      <text
                        x={node.x}
                        y={node.y + 47}
                        textAnchor="middle"
                        className="fill-ink/40 text-[8px] font-medium"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Bottom info */}
              <div className="grid grid-cols-3 border-t border-ink/[0.06] bg-white/30">
                <div className="border-r border-ink/[0.06] px-3 py-4 text-center">
                  <p className="font-display text-sm font-bold text-ink">
                    Web
                  </p>
                  <p className="mt-1 text-[9px] text-ink/40">
                    Platform
                  </p>
                </div>

                <div className="border-r border-ink/[0.06] px-3 py-4 text-center">
                  <p className="font-display text-sm font-bold text-ink">
                    Mobile
                  </p>
                  <p className="mt-1 text-[9px] text-ink/40">
                    Android & iOS
                  </p>
                </div>

                <div className="px-3 py-4 text-center">
                  <p className="font-display text-sm font-bold text-ink">
                    System
                  </p>
                  <p className="mt-1 text-[9px] text-ink/40">
                    Integration
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="network-map-float absolute -bottom-5 -left-2 hidden rounded-2xl border border-ink/[0.07] bg-white/90 px-4 py-3 shadow-xl backdrop-blur-lg sm:block lg:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10">
                  <Globe2 className="h-4 w-4 text-brand" />
                </div>

                <div>
                  <p className="text-[10px] text-ink/40">
                    Project Coverage
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-ink">
                    Indonesia → Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
