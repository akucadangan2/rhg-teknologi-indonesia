import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CheckCircle2,
  CloudOff,
  Download,
  Headphones,
  Layers,
  LifeBuoy,
  MapPin,
  Mountain,
  RefreshCw,
  Route,
  Ruler,
  Satellite,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";

import { getServiceBySlug } from "@/lib/data/services";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { MapMockup } from "@/components/gis/MapMockup";
import { CoordinateReadout } from "@/components/gis/CoordinateReadout";
import { LayerStack } from "@/components/gis/LayerStack";
import { ComplianceGrid } from "@/components/gis/ComplianceGrid";
import { SectorSplit } from "@/components/gis/SectorSplit";
import { FeatureGrid } from "@/components/mobile/FeatureGrid";
import { PricingTiers } from "@/components/ui/PricingTiers";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "Maps, GIS & WebGIS — RHG Teknologi Indonesia",
  description:
    "Pengembangan WebGIS, pemetaan digital, tracking, dashboard spasial, geotagging, routing, integrasi citra satelit, data lapangan, GIS, GeoAI, dan sistem berbasis lokasi oleh RHG Teknologi Indonesia.",
};

const FIELD_LAT = -3.3853146;
const FIELD_LNG = 102.4969821;

const MAP_EMBED =
  `https://www.google.com/maps?q=${FIELD_LAT},${FIELD_LNG}` +
  "&z=17&t=k&output=embed";

const MAP_LINK =
  `https://www.google.com/maps?q=${FIELD_LAT},${FIELD_LNG}`;

const EARTH_LINK =
  `https://earth.google.com/web/search/${FIELD_LAT},${FIELD_LNG}`;

const FEATURES = [
  {
    icon: Layers,
    title: "Multi-Layer Spatial Data",
    description:
      "Gabungkan asset, jalan, administrasi, point, polygon, citra, sensor, dan berbagai dataset spasial dalam satu WebGIS.",
  },
  {
    icon: MapPin,
    title: "Geotagging",
    description:
      "Menyimpan lokasi dengan koordinat, metadata, foto, status, dan informasi objek langsung ke sistem.",
  },
  {
    icon: Route,
    title: "Routing & Distance",
    description:
      "Perhitungan rute, jarak, titik terdekat, area layanan, dan kebutuhan navigasi untuk operasional maupun logistik.",
  },
  {
    icon: Satellite,
    title: "Satellite & Basemap",
    description:
      "Integrasi basemap satellite, street map, terrain, maupun sumber peta lainnya sesuai kebutuhan project.",
  },
  {
    icon: Truck,
    title: "Real-Time Tracking",
    description:
      "Pantau kendaraan, petugas, asset, maupun objek bergerak melalui dashboard berbasis lokasi.",
  },
  {
    icon: Download,
    title: "Spatial Data Export",
    description:
      "Data dapat diolah dan disiapkan dalam format seperti GeoJSON, KML, SHP, CSV, maupun format lain sesuai kebutuhan.",
  },
  {
    icon: Ruler,
    title: "Spatial Analysis",
    description:
      "Perhitungan luas, jarak, buffer, overlay, intersection, spatial query, dan analisis geometri lainnya.",
  },
  {
    icon: CloudOff,
    title: "Field Data Collection",
    description:
      "Mendukung proses pengumpulan data lapangan dan sinkronisasi data ke database atau dashboard pusat.",
  },
];

const GIS_AREAS = [
  {
    icon: Layers,
    title: "WebGIS Platform",
    description:
      "Peta interaktif berbasis web dengan layer, filter, dashboard, informasi objek, dan kontrol data spasial.",
  },
  {
    icon: MapPin,
    title: "Asset Mapping",
    description:
      "Pemetaan asset, cabang, perangkat, pelanggan, lahan, fasilitas, jaringan, maupun titik operasional.",
  },
  {
    icon: Truck,
    title: "Tracking & Logistics",
    description:
      "Tracking kendaraan, driver, delivery, route, service area, dan operasional lapangan.",
  },
  {
    icon: Satellite,
    title: "Remote Data",
    description:
      "Integrasi citra satellite, drone, basemap, raster, terrain, atau sumber imagery lainnya.",
  },
  {
    icon: Ruler,
    title: "Spatial Analysis",
    description:
      "Analisis jarak, luas, overlay, zoning, buffer, proximity, dan berbagai kebutuhan spatial intelligence.",
  },
  {
    icon: Sprout,
    title: "Field & Agriculture",
    description:
      "Pendataan lahan, tanaman, inspeksi visual, monitoring area, dan data operasional berbasis lokasi.",
  },
];

const SUPPORT_ITEMS = [
  {
    icon: Bug,
    title: "Bug Fix Warranty",
    description:
      "Perbaikan bug pada fitur WebGIS, dashboard, API, database, maupun integrasi yang termasuk dalam scope project.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Dukungan teknis untuk kendala peta, data, API, spatial database, maupun deployment.",
  },
  {
    icon: Activity,
    title: "Production Review",
    description:
      "Pengecekan ketika terjadi issue pada loading layer, query, API, map rendering, atau data production.",
  },
  {
    icon: RefreshCw,
    title: "Minor Adjustment",
    description:
      "Penyesuaian minor apabila terdapat perubahan dependency, map provider, API, atau environment.",
  },
  {
    icon: ShieldCheck,
    title: "Data & System Review",
    description:
      "Pendampingan pengecekan struktur data, permission, integrasi, dan komponen penting sistem GIS.",
  },
  {
    icon: LifeBuoy,
    title: "Up to 1 Year",
    description:
      "Periode garansi dan technical support dapat diberikan hingga 12 bulan sesuai paket dan scope project.",
  },
];

export default function MapsGisPage() {
  const service = getServiceBySlug("maps-gis");

  if (!service) {
    return notFound();
  }

  return (
    <>
      <style>{`
        @keyframes gisHeroUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gisGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes gisFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes gisGlow {
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

        .gis-grid {
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
            gisGrid
            18s
            linear
            infinite;
        }

        .gis-hero-1,
        .gis-hero-2,
        .gis-hero-3,
        .gis-hero-4 {
          opacity: 0;

          animation:
            gisHeroUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .gis-hero-1 {
          animation-delay: .05s;
        }

        .gis-hero-2 {
          animation-delay: .13s;
        }

        .gis-hero-3 {
          animation-delay: .21s;
        }

        .gis-hero-4 {
          animation-delay: .29s;
        }

        .gis-map {
          animation:
            gisFloat
            7s
            ease-in-out
            infinite;
        }

        .gis-glow {
          animation:
            gisGlow
            10s
            ease-in-out
            infinite;
        }

        .gis-card,
        .support-card,
        .field-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .gis-card::after,
        .support-card::after,
        .field-card::after {
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

        .gis-card:hover,
        .support-card:hover,
        .field-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.2);

          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .gis-card:hover::after,
        .support-card:hover::after,
        .field-card:hover::after {
          width: 100%;
        }

        @media (max-width: 767px) {
          .gis-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .gis-map {
            animation: none;
          }

          .gis-card:hover,
          .support-card:hover,
          .field-card:hover {
            transform: none;
          }

          .gis-card:hover::after,
          .support-card:hover::after,
          .field-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gis-grid,
          .gis-map,
          .gis-glow,
          .gis-hero-1,
          .gis-hero-2,
          .gis-hero-3,
          .gis-hero-4 {
            animation: none !important;
          }

          .gis-hero-1,
          .gis-hero-2,
          .gis-hero-3,
          .gis-hero-4 {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="gis-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_.95fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="gis-hero-1 inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Maps · GIS · Location Intelligence
              </div>

              <div className="gis-hero-2 mt-5">
                <span className="rounded-full bg-[#17191c] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#ff8a34]">
                  {service.code}
                </span>
              </div>

              <h1 className="gis-hero-2 mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                Data lokasi menjadi
                <span className="text-[#ff6f0f]">
                  {" "}
                  sistem yang bisa digunakan.
                </span>
              </h1>

              <p className="gis-hero-3 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG membangun WebGIS, interactive map, tracking,
                asset mapping, routing, spatial dashboard, data
                lapangan, satellite visualization, dan integrasi
                data spasial untuk kebutuhan operasional.
              </p>

              <div className="gis-hero-3 mt-6">
                <CoordinateReadout />
              </div>

              <div className="gis-hero-4 mt-7 flex flex-col gap-2.5 sm:flex-row">
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

              <div className="gis-hero-4 mt-8 flex items-start gap-3 rounded-[18px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                  <ShieldCheck className="h-[18px] w-[18px] text-white" />
                </span>

                <div>
                  <p className="text-xs font-black">
                    Garansi & Support hingga 1 Tahun
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                    Bug fixing dan technical support pasca-launch
                    dapat tersedia hingga 12 bulan sesuai paket dan
                    scope project.
                  </p>
                </div>
              </div>
            </div>

            <div className="gis-map relative flex min-h-[400px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6f0f]/[0.05] blur-[90px]" />

              <div className="relative w-full">
                <MapMockup />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

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

        {/* =====================================================
            GIS CAPABILITIES
        ====================================================== */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-6 md:grid-cols-[.75fr_1.25fr] md:items-end">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="h-px w-7 bg-[#ff6f0f]" />

                    Spatial Technology
                  </div>

                  <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                    Lebih dari sekadar
                    <span className="text-[#ff6f0f]">
                      {" "}
                      menampilkan peta.
                    </span>
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:justify-self-end">
                  Sistem GIS dapat menghubungkan location,
                  database, API, asset, tracking, operational
                  workflow, imagery, hingga data lapangan dalam
                  satu platform.
                </p>
              </div>
            </FadeInSection>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {GIS_AREAS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInSection
                    key={item.title}
                    delay={index * 0.04}
                  >
                    <div className="gis-card h-full rounded-[20px] border border-black/[0.07] bg-white p-5">
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

        {/* =====================================================
            RHG FIELD REFERENCE
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="gis-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="pointer-events-none absolute -bottom-48 -right-40 h-[480px] w-[480px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-14">
                {/* INFO */}

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a34]/20 bg-[#ff6f0f]/10 px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#ff8a34]" />

                    <span className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff8a34]">
                      RHG Field Reference
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-[32px] font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                    Teknologi spasial juga kami uji
                    <span className="text-[#ff8a34]">
                      {" "}
                      di lahan nyata.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    RHG memiliki field site di Kabupaten Rejang
                    Lebong, Bengkulu yang digunakan sebagai
                    environment untuk eksplorasi data lokasi,
                    imagery, field observation, mapping, dan
                    Applied AI.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    <div className="field-card rounded-[17px] border border-white/[0.08] bg-white/[0.035] p-4">
                      <Ruler className="h-4 w-4 text-[#ff8a34]" />

                      <p className="mt-3 text-xl font-black">
                        ±2.02 ha
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/25">
                        Field Area
                      </p>
                    </div>

                    <div className="field-card rounded-[17px] border border-white/[0.08] bg-white/[0.035] p-4">
                      <Mountain className="h-4 w-4 text-[#ff8a34]" />

                      <p className="mt-3 text-xl font-black">
                        843–910 m
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/25">
                        Approx. Elevation
                      </p>
                    </div>

                    <div className="field-card col-span-2 rounded-[17px] border border-white/[0.08] bg-white/[0.035] p-4 sm:col-span-1">
                      <Satellite className="h-4 w-4 text-[#ff8a34]" />

                      <p className="mt-3 text-sm font-black">
                        Satellite
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/25">
                        Site Context
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-4">
                    <Sprout className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8a34]" />

                    <div>
                      <p className="text-xs font-black">
                        RHG Coffee AI Living Lab
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-white/35">
                        Field site ini juga menjadi bagian dari RHG
                        Applied AI Field Lab untuk pengembangan
                        dataset, computer vision, AI Agent, dan
                        eksperimen teknologi lapangan.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href="/lab"
                      className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition hover:bg-[#ff7f25]"
                    >
                      Explore RHG Lab

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={EARTH_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/[0.1] px-5 text-sm font-bold text-white/60 transition hover:border-white/20 hover:text-white"
                    >
                      View Google Earth

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* SATELLITE MAP */}

                <div>
                  <div className="overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#111316] shadow-[0_28px_80px_rgba(0,0,0,.28)]">
                    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3.5 sm:px-5">
                      <div>
                        <p className="text-[11px] font-black">
                          RHG Field Site
                        </p>

                        <p className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-white/25">
                          Rejang Lebong · Bengkulu
                        </p>
                      </div>

                      <span className="flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white/35">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6f0f]" />

                        Satellite
                      </span>
                    </div>

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                      <iframe
                        title="RHG Coffee AI Living Lab Satellite Map"
                        src={MAP_EMBED}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>

                    <div className="grid gap-3 border-t border-white/[0.07] p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f]">
                          <MapPin className="h-4 w-4 text-[#17191c]" />
                        </span>

                        <div>
                          <p className="text-[10px] font-black">
                            Kabupaten Rejang Lebong
                          </p>

                          <p className="mt-0.5 text-[9px] text-white/25">
                            Provinsi Bengkulu · Indonesia
                          </p>
                        </div>
                      </div>

                      <a
                        href={MAP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full border border-white/[0.08] px-4 text-[10px] font-bold text-white/45 transition hover:text-white"
                      >
                        Open Maps

                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            LAYER STACK
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Spatial Layers

                  <span className="h-px w-7 bg-[#ff6f0f]" />
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Satu peta.
                  <span className="text-[#ff6f0f]">
                    {" "}
                    Banyak lapisan data.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Setiap dataset dapat memiliki layer, style,
                  filter, permission, dan informasi yang berbeda
                  tanpa memisahkannya ke banyak sistem.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <LayerStack />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  GIS Capabilities
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Yang bisa kami
                  <span className="text-[#ff6f0f]">
                    {" "}
                    bangun.
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

        {/* =====================================================
            COMPLIANCE
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
            <FadeInSection>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Project Readiness
                </div>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Untuk kebutuhan project
                  <span className="text-[#ff6f0f]">
                    {" "}
                    formal maupun operasional.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Data, projection, format, integration, output,
                  dan dokumentasi dapat disiapkan menyesuaikan
                  kebutuhan project swasta maupun pengadaan.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection
              delay={0.08}
              className="mt-8 block"
            >
              <ComplianceGrid />
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            SECTORS
        ====================================================== */}

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
                    kebutuhan lokasi.
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

        {/* =====================================================
            INCLUDED
        ====================================================== */}

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
                  Scope dapat disesuaikan berdasarkan jumlah
                  layer, format data, luas area, dashboard, API,
                  tracking, field data, maupun analisis yang
                  diperlukan.
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

        {/* =====================================================
            WARRANTY
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="gis-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

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
                  Sistem GIS tidak berhenti setelah deployment.
                  RHG dapat memberikan bug fixing dan technical
                  support hingga 12 bulan untuk membantu menjaga
                  WebGIS dan integrasinya tetap berjalan.
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
                      Garansi berlaku untuk bug pada fitur WebGIS,
                      backend, API, database, map interaction, dan
                      integration yang termasuk dalam scope.
                      Penambahan layer baru, fitur baru, perubahan
                      data besar, biaya map provider, imagery,
                      infrastructure, maupun perubahan sistem oleh
                      pihak lain berada di luar garansi kecuali
                      disepakati secara terpisah.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* =====================================================
            PRICING
        ====================================================== */}

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
                      Estimasi awal. Harga final menyesuaikan luas
                      area, jumlah layer, volume data, field survey,
                      dashboard, API, analysis, tracking,
                      infrastructure, dan kebutuhan dokumentasi.
                      Untuk project tender, estimasi dapat
                      disesuaikan dengan KAK atau dokumen teknis
                      terkait.
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

        {/* =====================================================
            FAQ
        ====================================================== */}

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
                      WebGIS, tracking, atau project pemetaan
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

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#ff6f0f]">
          <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto] md:px-8 md:py-20 lg:px-10">
            <FadeInSection>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.19em] text-black/45">
                  Build With Location Data
                </p>

                <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                  Punya kebutuhan pemetaan, tracking, atau WebGIS?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  Ceritakan jenis data, cakupan area, kebutuhan
                  analisis, tracking, dashboard, maupun output yang
                  dibutuhkan. RHG dapat membantu menyusun architecture
                  dan implementasi GIS yang sesuai.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.08}>
              <Link
                href="/kontak"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
              >
                Konsultasi GIS Project

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}