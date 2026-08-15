import { Button } from "@/components/ui/Button";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

const CENTER = { x: 300, y: 250 };

const NODES = [
  { code: "WEB", x: 470, y: 250, delay: "0s" },
  { code: "MOBILE", x: 385, y: 103, delay: "0.1s" },
  { code: "PAYMENT", x: 215, y: 103, delay: "0.2s" },
  { code: "BACKEND", x: 130, y: 250, delay: "0.3s" },
  { code: "GIS", x: 215, y: 397, delay: "0.4s" },
  { code: "SISTEM", x: 385, y: 397, delay: "0.5s" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="blob pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="blob-2 pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-circuit/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-2 md:items-center md:pt-28">
        <FadeInSection>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-brand">
            PT RHG Teknologi Indonesia
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
              Menyambungkan sistem,
            </span>{" "}
            dari ide sampai produksi
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink/70 md:text-lg">
            Website, aplikasi mobile, integrasi payment gateway, backend, hingga
            sistem berbasis lokasi (GIS) — dikerjakan end-to-end sesuai kebutuhan
            bisnis Anda.
          </p>
          <div className="mt-8 flex gap-3">
            <Button href="/kontak">Konsultasi Project</Button>
            <Button href="/layanan" variant="ghost">
              Lihat Semua Layanan
            </Button>
          </div>
           <TrustStrip />
          <p className="mt-4 font-mono text-xs text-ink/40">
            Melayani proyek Pemerintah, BUMN, dan Swasta
          </p>
        </FadeInSection>

        <svg
          viewBox="0 0 600 500"
          className="w-full max-w-md justify-self-center md:max-w-none"
          role="img"
          aria-label="Diagram sistem yang saling terhubung: website, aplikasi mobile, payment gateway, backend, GIS, dan integrasi sistem"
        >
          {NODES.map((node) => (
            <line
              key={`line-${node.code}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={node.x}
              y2={node.y}
              pathLength={1}
              className="diagram-line stroke-circuit/40"
              style={{ ["--delay" as string]: node.delay }}
              strokeWidth={1.5}
            />
          ))}

          {NODES.map((node) => (
            <circle
              key={`pulse-${node.code}`}
              r={4}
              className="pulse-dot fill-brand"
              style={
                {
                  offsetPath: `path('M ${CENTER.x} ${CENTER.y} L ${node.x} ${node.y}')`,
                  "--delay": node.delay,
                  "--duration": "2.5s",
                } as React.CSSProperties
              }
            />
          ))}

          <circle cx={CENTER.x} cy={CENTER.y} r={30} className="fill-ink" />
          <text
            x={CENTER.x}
            y={CENTER.y + 5}
            textAnchor="middle"
            className="fill-paper font-mono text-[13px] font-medium"
          >
            RHG
          </text>

          {NODES.map((node) => (
            <g
              key={`node-${node.code}`}
              className="diagram-node"
              style={{ ["--delay" as string]: node.delay }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={22}
                className="fill-paper stroke-circuit"
                strokeWidth={1.5}
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                className="fill-ink font-mono text-[9px] font-medium"
              >
                {node.code}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}