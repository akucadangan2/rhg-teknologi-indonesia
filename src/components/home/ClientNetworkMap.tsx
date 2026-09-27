"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  MapPin,
  Network,
  Radio,
} from "lucide-react";

import { FadeInSection } from "@/components/motion/FadeInSection";

const LOCATIONS = [
  {
    id: "jakarta",
    name: "Jakarta",
    description: "Kantor Pusat",
    x: 300,
    y: 252,
    type: "hq",
  },
  {
    id: "padang",
    name: "Padang",
    description: "Jaringan Klien",
    x: 184,
    y: 188,
    type: "client",
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    description: "Jaringan Klien",
    x: 365,
    y: 153,
    type: "client",
  },
  {
    id: "sulawesi",
    name: "Sulawesi",
    description: "Jaringan Klien",
    x: 470,
    y: 191,
    type: "client",
  },
  {
    id: "australia",
    name: "Australia",
    description: "International Client",
    x: 637,
    y: 390,
    type: "client",
  },
];

const HQ = LOCATIONS[0];

export function ClientNetworkMap() {
  return (
    <section className="network-map relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-white/20" />

      <FadeInSection className="relative mx-auto block max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span
              className="
                inline-flex items-center gap-2 rounded-full
                border border-brand/15 bg-brand/[0.07]
                px-3.5 py-1.5 font-mono text-[10px]
                font-semibold uppercase tracking-[0.14em]
                text-brand sm:text-xs
              "
            >
              <Network className="h-3.5 w-3.5" />
              Project Network
            </span>

            <h2
              className="
                mt-5 max-w-xl font-display text-3xl
                font-extrabold leading-tight tracking-[-0.025em]
                text-ink md:text-4xl lg:text-[44px]
              "
            >
              Jangkauan Proyek yang{" "}
              <span className="bg-gradient-to-r from-brand to-circuit bg-clip-text text-transparent">
                Terus Berkembang
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-ink/55 sm:text-base">
              Berpusat di Jakarta, RHG Teknologi Indonesia telah menangani
              kebutuhan dan kolaborasi proyek di berbagai wilayah Indonesia
              hingga Australia.
            </p>
          </div>
        </div>

        {/* Main */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[0.32fr_0.68fr]">
          {/* LEFT INFO */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* HQ */}
            <div
              className="
                relative overflow-hidden rounded-[24px]
                border border-brand/15
                bg-gradient-to-br from-brand/[0.08] via-white to-white
                p-6 shadow-[0_16px_50px_rgba(49,94,251,0.06)]
              "
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/10 blur-[50px]" />

              <div className="relative">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl bg-brand text-white
                    shadow-[0_10px_25px_rgba(49,94,251,0.22)]
                  "
                >
                  <Building2 className="h-5 w-5" />
                </div>

                <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Headquarters
                </p>

                <h3 className="mt-1 font-display text-xl font-bold text-ink">
                  Jakarta, Indonesia
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink/50">
                  Pusat koordinasi pengembangan sistem, konsultasi proyek, dan
                  kolaborasi dengan klien.
                </p>
              </div>
            </div>

            {/* Coverage */}
            <div className="rounded-[24px] border border-ink/[0.07] bg-white/70 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-circuit/10">
                  <Globe2 className="h-4 w-4 text-circuit" />
                </div>

                <div>
                  <p className="font-display text-sm font-bold text-ink">
                    Regional & International
                  </p>
                  <p className="mt-0.5 text-[10px] text-ink/40">
                    Project coverage
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {LOCATIONS.slice(1).map((location) => (
                  <div
                    key={location.id}
                    className="
                      flex items-center justify-between
                      rounded-xl border border-ink/[0.05]
                      bg-ink/[0.015] px-3.5 py-3
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="network-status-dot" />

                      <span className="text-xs font-semibold text-ink/65">
                        {location.name}
                      </span>
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-wider text-ink/30">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 gap-3">
              <div className="network-stat-card rounded-2xl p-4">
                <p className="font-display text-2xl font-extrabold text-ink">
                  4+
                </p>

                <p className="mt-1 text-[10px] leading-4 text-ink/40">
                  Wilayah jaringan proyek
                </p>
              </div>

              <div className="network-stat-card rounded-2xl p-4">
                <p className="font-display text-2xl font-extrabold text-ink">
                  2
                </p>

                <p className="mt-1 text-[10px] leading-4 text-ink/40">
                  Negara terjangkau
                </p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="network-map-card min-h-[460px] rounded-[28px] p-3 sm:p-5 lg:min-h-[600px]">
            <div className="network-map-grid" />

            {/* Map header */}
            <div className="relative z-10 flex items-center justify-between px-2 pb-3 sm:px-3">
              <div>
                <p className="text-xs font-semibold text-ink">
                  RHG Client Network
                </p>

                <p className="mt-0.5 text-[9px] text-ink/35">
                  Indonesia & Australia
                </p>
              </div>

              <div
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-brand/10 bg-white/80
                  px-2.5 py-1.5 backdrop-blur
                "
              >
                <Radio className="h-3 w-3 text-brand" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-wider text-brand">
                  Network
                </span>
              </div>
            </div>

            <div className="relative z-10 flex min-h-[390px] items-center justify-center sm:min-h-[490px]">
              <svg
                viewBox="0 0 800 520"
                className="network-map-svg"
                role="img"
                aria-label="Peta jangkauan proyek RHG Teknologi Indonesia dari kantor pusat Jakarta menuju Padang, Kalimantan, Sulawesi, dan Australia"
              >
                <defs>
                  <linearGradient
                    id="networkGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#315EFB"
                      stopOpacity="0.9"
                    />

                    <stop
                      offset="65%"
                      stopColor="#536FEA"
                      stopOpacity="0.7"
                    />

                    <stop
                      offset="100%"
                      stopColor="#E58A14"
                      stopOpacity="0.8"
                    />
                  </linearGradient>

                  <filter id="mapShadow">
                    <feDropShadow
                      dx="0"
                      dy="7"
                      stdDeviation="10"
                      floodColor="#11162B"
                      floodOpacity="0.06"
                    />
                  </filter>
                </defs>

                {/* ============================= */}
                {/* INDONESIA SILHOUETTE          */}
                {/* ============================= */}

                {/* Sumatra */}
                <path
                  className="network-map-country"
                  filter="url(#mapShadow)"
                  d="
                    M130 111
                    C147 106 163 118 174 135
                    C187 155 199 176 210 201
                    C221 224 225 243 217 257
                    C210 270 196 267 185 253
                    C171 235 160 213 149 193
                    C138 172 126 152 120 135
                    C116 123 119 114 130 111
                    Z
                  "
                />

                {/* Java */}
                <path
                  className="network-map-country"
                  d="
                    M225 274
                    C250 270 279 271 306 275
                    L365 283
                    C378 285 380 295 365 300
                    L311 297
                    C279 295 250 293 224 288
                    C211 285 211 277 225 274
                    Z
                  "
                />

                {/* Bali + Nusa Tenggara */}
                <path
                  className="network-map-country"
                  d="
                    M376 292
                    C389 289 397 291 404 296
                    C410 301 406 307 395 307
                    C386 307 377 302 373 298
                    C370 295 372 293 376 292
                    Z

                    M416 302
                    C437 300 461 303 481 306
                    C491 308 492 314 483 317
                    C460 317 438 315 417 312
                    C408 310 408 304 416 302
                    Z
                  "
                />

                {/* Kalimantan */}
                <path
                  className="network-map-country"
                  d="
                    M317 111
                    C341 99 373 105 390 122
                    C405 138 408 163 400 187
                    C394 208 379 228 359 238
                    C341 245 319 237 308 220
                    C296 201 297 178 301 157
                    C305 136 306 118 317 111
                    Z
                  "
                />

                {/* Sulawesi */}
                <path
                  className="network-map-country"
                  d="
                    M445 150
                    C457 138 471 143 472 157
                    C473 171 463 182 471 193
                    C479 205 492 197 499 205
                    C505 214 499 225 489 230
                    C478 236 472 246 475 258
                    C477 268 468 275 458 268
                    C448 260 449 245 451 231
                    C453 220 445 215 436 221
                    C425 228 415 220 421 210
                    C428 198 441 197 444 186
                    C447 174 437 159 445 150
                    Z
                  "
                />

                {/* Maluku */}
                <path
                  className="network-map-country"
                  d="
                    M526 215
                    C537 209 545 213 544 222
                    C543 232 532 237 524 232
                    C517 227 519 219 526 215
                    Z

                    M553 240
                    C562 235 570 239 568 247
                    C566 254 556 257 550 252
                    C545 248 547 243 553 240
                    Z
                  "
                />

                {/* Papua */}
                <path
                  className="network-map-country"
                  d="
                    M582 177
                    C611 164 650 166 681 178
                    C700 186 713 204 708 219
                    C704 233 688 238 671 232
                    C651 225 638 230 619 237
                    C599 244 579 235 573 219
                    C568 202 568 184 582 177
                    Z
                  "
                />

                {/* ============================= */}
                {/* AUSTRALIA                     */}
                {/* ============================= */}

                <path
                  className="network-map-country"
                  filter="url(#mapShadow)"
                  d="
                    M546 337
                    C570 315 608 304 645 307
                    C681 310 718 327 737 354
                    C753 377 751 408 733 431
                    C714 454 687 469 656 472
                    C627 474 606 459 588 445
                    C568 430 545 418 534 395
                    C523 373 529 352 546 337
                    Z
                  "
                />

                {/* Tasmania */}
                <path
                  className="network-map-country"
                  d="
                    M681 481
                    C691 477 701 481 702 490
                    C702 499 692 506 684 503
                    C676 500 674 487 681 481
                    Z
                  "
                />

                {/* ROUTE GLOWS */}
                {LOCATIONS.slice(1).map((location) => (
                  <path
                    key={`soft-${location.id}`}
                    d={`M ${HQ.x} ${HQ.y} Q ${
                      (HQ.x + location.x) / 2
                    } ${Math.min(HQ.y, location.y) - 40} ${location.x} ${
                      location.y
                    }`}
                    className="network-route-soft"
                  />
                ))}

                {/* ROUTES */}
                {LOCATIONS.slice(1).map((location) => (
                  <motion.path
                    key={`route-${location.id}`}
                    d={`M ${HQ.x} ${HQ.y} Q ${
                      (HQ.x + location.x) / 2
                    } ${Math.min(HQ.y, location.y) - 40} ${location.x} ${
                      location.y
                    }`}
                    className="network-route"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                      opacity: 0.7,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                    }}
                  />
                ))}

                {/* LOCATIONS */}
                {LOCATIONS.map((location, index) => (
                  <motion.g
                    key={location.id}
                    className="network-location"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.12,
                      duration: 0.4,
                    }}
                  >
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={17}
                      className={`network-location-ring ${
                        location.type === "hq" ? "hq" : ""
                      }`}
                    />

                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={7}
                      className={`network-location-dot ${
                        location.type === "hq" ? "hq" : "client"
                      }`}
                    />

                    {location.type === "hq" && (
                      <circle
                        cx={location.x}
                        cy={location.y}
                        r={2.4}
                        fill="white"
                      />
                    )}

                    <text
                      x={location.x}
                      y={location.y - 17}
                      textAnchor="middle"
                      className="network-location-label"
                    >
                      {location.name}
                    </text>

                    <text
                      x={location.x}
                      y={location.y + 26}
                      textAnchor="middle"
                      className="network-location-subtitle"
                    >
                      {location.description}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div
              className="
                relative z-10 flex flex-wrap items-center gap-5
                border-t border-ink/[0.06] px-3 pt-4
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E58A14]" />

                <span className="text-[9px] text-ink/40">
                  Kantor Pusat
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />

                <span className="text-[9px] text-ink/40">
                  Jaringan Proyek / Klien
                </span>
              </div>

              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <MapPin className="h-3 w-3 text-ink/30" />

                <span className="font-mono text-[8px] uppercase tracking-wider text-ink/30">
                  RHG Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}