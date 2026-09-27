import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  CloudSun,
  Database,
  Droplets,
  ExternalLink,
  Eye,
  FlaskConical,
  Leaf,
  MapPin,
  MapPinned,
  Radio,
  Satellite,
  ScanLine,
  Sprout,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "RHG Applied AI & Field Lab — RHG Teknologi Indonesia",
  description:
    "Real-world environment RHG Teknologi Indonesia untuk eksperimen AI, agriculture technology, computer vision, drone, IoT, GeoAI, dan environmental monitoring di Rejang Lebong, Bengkulu.",
};

const MAP_LAT = -3.3853146;
const MAP_LNG = 102.4969821;

const MAP_EMBED = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&t=k&output=embed`;

const MAP_LINK = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;

const EARTH_LINK = `https://earth.google.com/web/search/${MAP_LAT},${MAP_LNG}`;

const RESEARCH_AREAS = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Applied AI",
    description:
      "Eksperimen model AI untuk pengolahan data lapangan, prediction, classification, decision support, dan automation.",
    tags: ["Machine Learning", "Prediction", "Automation"],
  },
  {
    icon: Eye,
    number: "02",
    title: "Computer Vision",
    description:
      "Pengujian deteksi visual untuk tanaman, daun, buah, objek, kondisi lingkungan, dan inspeksi lapangan.",
    tags: ["Detection", "Classification", "Vision AI"],
  },
  {
    icon: Sprout,
    number: "03",
    title: "Agriculture Technology",
    description:
      "Pengembangan teknologi untuk monitoring tanaman, kesehatan perkebunan, produktivitas, dan pengelolaan pertanian.",
    tags: ["Agriculture", "Plant Health", "Monitoring"],
  },
  {
    icon: Satellite,
    number: "04",
    title: "Drone & Remote Sensing",
    description:
      "Pengujian aerial imagery, orthomosaic, monitoring vegetasi, canopy analysis, dan observasi area secara periodik.",
    tags: ["Drone", "Imagery", "Remote Sensing"],
  },
  {
    icon: Droplets,
    number: "05",
    title: "IoT & Field Sensors",
    description:
      "Eksperimen sensor kelembapan tanah, temperatur, humidity, rainfall, dan data lingkungan lainnya.",
    tags: ["IoT", "Sensor", "Telemetry"],
  },
  {
    icon: MapPinned,
    number: "06",
    title: "GIS & GeoAI",
    description:
      "Analisis terrain, elevasi, slope, drainage, zonasi, perubahan kondisi lahan, dan intelligence berbasis lokasi.",
    tags: ["GIS", "GeoAI", "Terrain"],
  },
];

const EXPERIMENTS = [
  {
    code: "LAB / 001",
    status: "Research Concept",
    title: "Coffee Plant Health Detection",
    description:
      "Computer vision untuk membantu mengidentifikasi kondisi visual tanaman kopi dari data foto lapangan.",
    tech: ["Computer Vision", "Mobile Camera", "AI"],
  },
  {
    code: "LAB / 002",
    status: "Research Concept",
    title: "Drone Plantation Mapping",
    description:
      "Pengumpulan aerial imagery untuk pemetaan tanaman, canopy monitoring, dan perubahan kondisi perkebunan.",
    tech: ["Drone", "GIS", "Remote Sensing"],
  },
  {
    code: "LAB / 003",
    status: "Research Concept",
    title: "Microclimate Intelligence",
    description:
      "Pengumpulan data lingkungan sebagai dasar monitoring dan analisis pola kondisi perkebunan.",
    tech: ["IoT", "Environmental Data", "AI"],
  },
  {
    code: "LAB / 004",
    status: "Research Concept",
    title: "Terrain & Drainage Analysis",
    description:
      "Analisis medan lereng, elevasi, dan pola aliran untuk membantu memahami karakteristik area.",
    tech: ["GeoAI", "Terrain", "GIS"],
  },
];

const FIELD_POINTS = [
  "Perkebunan kopi",
  "Medan lereng",
  "Variasi elevasi",
  "Lingkungan alami",
  "Area pengujian nyata",
  "Data spasial tersedia",
];

export default function LabPage() {
  return (
    <>
      <style>{`
        @keyframes labFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes labGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes labFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes labGlow {
          0%,
          100% {
            transform: translate3d(-6%,0,0);
            opacity: .28;
          }

          50% {
            transform: translate3d(12%,-6%,0);
            opacity: .5;
          }
        }

        .lab-grid-bg {
          background-image:
            linear-gradient(
              rgba(15,23,42,.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.04) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
          animation: labGrid 18s linear infinite;
        }

        .lab-hero-a,
        .lab-hero-b,
        .lab-hero-c,
        .lab-hero-d {
          opacity: 0;
          animation:
            labFadeUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .lab-hero-a {
          animation-delay: .05s;
        }

        .lab-hero-b {
          animation-delay: .13s;
        }

        .lab-hero-c {
          animation-delay: .21s;
        }

        .lab-hero-d {
          animation-delay: .29s;
        }

        .lab-map-card {
          animation:
            labFloat
            7s
            ease-in-out
            infinite;
        }

        .lab-dark-glow {
          animation:
            labGlow
            11s
            ease-in-out
            infinite;
        }

        .research-card {
          position: relative;
          overflow: hidden;

          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .research-card::after {
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

        .research-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,111,15,.18);
          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .research-card:hover::after {
          width: 100%;
        }

        .experiment-card {
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            background-color .35s ease,
            border-color .35s ease;
        }

        .experiment-card:hover {
          transform: translateY(-3px);
          background: #23262b;
          border-color: rgba(255,138,52,.18);
        }

        @supports (animation-timeline: view()) {
          .lab-reveal {
            animation:
              labFadeUp
              linear
              both;

            animation-timeline: view();

            animation-range:
              entry 0%
              cover 24%;
          }
        }

        @media (max-width: 767px) {
          .lab-grid-bg {
            animation: none;
            background-size: 28px 28px;
          }

          .lab-map-card {
            animation: none;
          }

          .research-card:hover,
          .experiment-card:hover {
            transform: none;
          }

          .research-card:hover::after {
            width: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lab-grid-bg,
          .lab-hero-a,
          .lab-hero-b,
          .lab-hero-c,
          .lab-hero-d,
          .lab-map-card,
          .lab-dark-glow,
          .lab-reveal {
            animation: none !important;
          }

          .lab-hero-a,
          .lab-hero-b,
          .lab-hero-c,
          .lab-hero-d {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="overflow-x-hidden bg-[#f7f7f5] text-[#17191c]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="lab-grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-16 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.05] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[.92fr_1.08fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            {/* LEFT */}

            <div>
              <div className="lab-hero-a inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                RHG Applied Technology Lab
              </div>

              <h1 className="lab-hero-b mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] text-[#111315] sm:text-5xl md:text-[58px]">
                Build in software.
                <span className="text-[#ff6f0f]">
                  {" "}
                  Test in the real world.
                </span>
              </h1>

              <p className="lab-hero-c mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                Lingkungan pengujian lapangan RHG untuk eksplorasi,
                pilot project, dan pengembangan teknologi artificial
                intelligence, agriculture technology, computer vision,
                drone, IoT, environmental monitoring, GIS, dan GeoAI.
              </p>

              <div className="lab-hero-d mt-6 flex items-center gap-2 text-sm font-bold text-slate-500">
                <MapPin className="h-4 w-4 shrink-0 text-[#ff6f0f]" />

                Kabupaten Rejang Lebong, Provinsi Bengkulu
              </div>

              <div className="lab-hero-d mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black"
                >
                  Ajukan Kolaborasi

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={EARTH_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Buka Google Earth

                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="lab-hero-d mt-8 flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Agriculture",
                  "Computer Vision",
                  "Drone",
                  "IoT",
                  "GeoAI",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[9px] font-bold text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* MAP */}

            <div className="lab-map-card relative">
              <div className="absolute -right-5 top-5 hidden h-[92%] w-[92%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#17191c] shadow-[0_28px_90px_rgba(15,23,42,.17)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 text-white sm:px-6">
                  <div>
                    <p className="text-sm font-black">
                      RHG Coffee AI Living Lab
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                      Satellite Field View
                    </p>
                  </div>

                  <span className="rounded-full bg-[#ff6f0f]/15 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff9852]">
                    Rejang Lebong
                  </span>
                </div>

                <div className="relative h-[350px] sm:h-[430px]">
                  <iframe
                    src={MAP_EMBED}
                    title="RHG Coffee AI Living Lab Rejang Lebong Bengkulu"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />

                  <div className="pointer-events-none absolute left-4 top-4 rounded-[16px] border border-white/15 bg-black/65 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-[#ff9852]">
                      Field Test Site
                    </p>

                    <p className="mt-1 text-xs font-black">
                      Coffee Plantation
                    </p>

                    <p className="mt-1 text-[9px] text-white/50">
                      Rejang Lebong · Bengkulu
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-t border-white/[0.08] text-white">
                  <div className="border-r border-white/[0.07] px-4 py-4">
                    <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                      Area Mapped
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      ±2.02 ha
                    </p>
                  </div>

                  <div className="border-r border-white/[0.07] px-4 py-4">
                    <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                      Elevation
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      843–910 m
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                      Environment
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      Plantation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FIELD PROFILE
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="lab-reveal">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  Field Environment
                </div>

                <h2 className="mt-4 max-w-lg text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Lingkungan nyata untuk pengujian teknologi.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Area ini memberikan kondisi lapangan yang dapat
                  digunakan untuk pengumpulan data, prototyping,
                  validasi, dan pengujian sistem sebelum diterapkan
                  pada skala yang lebih luas.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {FIELD_POINTS.map((item, index) => (
                  <div
                    key={item}
                    className="lab-reveal rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0e5]">
                        <Check className="h-4 w-4 text-[#ff6f0f]" />
                      </span>

                      <span className="font-mono text-[9px] font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-black">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESEARCH AREAS
        ====================================================== */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="lab-reveal max-w-4xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Research Areas
              </div>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Bukan hanya GeoAI.
                <span className="text-[#ff6f0f]">
                  {" "}
                  Lab untuk berbagai teknologi.
                </span>
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                Coffee AI Living Lab dapat menjadi environment awal
                untuk eksperimen teknologi di sektor pertanian maupun
                pengembangan teknologi lapangan yang lebih luas.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {RESEARCH_AREAS.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.number}
                    className="research-card lab-reveal rounded-[22px] border border-black/[0.07] bg-white p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17191c]">
                        <Icon className="h-5 w-5 text-[#ff8a34]" />
                      </span>

                      <span className="font-mono text-[9px] font-bold text-slate-300">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black tracking-[-0.025em]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-slate-500 sm:text-sm">
                      {area.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f4f4f1] px-2.5 py-1.5 text-[9px] font-bold text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIMENT REGISTRY
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="lab-dark-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="lab-reveal grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                  <span className="h-px w-7 bg-[#ff8a34]" />

                  Experiment Registry
                </div>

                <h2 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Dari ide menjadi
                  <span className="text-[#ff8a34]">
                    {" "}
                    eksperimen terukur.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  Setiap eksperimen dapat memiliki objective, dataset,
                  metode, teknologi, hasil pengujian, dan dokumentasi
                  sehingga proses R&D dapat dievaluasi secara jelas.
                </p>

                <div className="mt-7 inline-flex items-center gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                  <FlaskConical className="h-5 w-5 text-[#ff8a34]" />

                  <div>
                    <p className="text-xs font-black">
                      Current Stage
                    </p>

                    <p className="mt-1 text-[10px] text-white/35">
                      Initial research & development
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {EXPERIMENTS.map((experiment) => (
                  <div
                    key={experiment.code}
                    className="experiment-card rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[9px] font-black text-[#ff8a34]">
                        {experiment.code}
                      </span>

                      <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[8px] font-bold text-white/30">
                        {experiment.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black tracking-[-0.025em]">
                      {experiment.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-white/40 sm:text-[13px]">
                      {experiment.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {experiment.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/[0.045] px-2.5 py-1.5 text-[8px] font-bold text-white/35"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DATA FLOW
        ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="lab-reveal max-w-3xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />

                Field to Intelligence
              </div>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Data lapangan menjadi
                <span className="text-[#ff6f0f]">
                  {" "}
                  intelligence.
                </span>
              </h2>
            </div>

            <div className="lab-reveal mt-10 grid gap-2 sm:grid-cols-5">
              {[
                {
                  icon: Leaf,
                  title: "Field",
                  text: "Real environment",
                },
                {
                  icon: ScanLine,
                  title: "Collect",
                  text: "Image · Sensor · GIS",
                },
                {
                  icon: Database,
                  title: "Data",
                  text: "Structured dataset",
                },
                {
                  icon: BrainCircuit,
                  title: "AI",
                  text: "Model & analysis",
                },
                {
                  icon: Bot,
                  title: "Action",
                  text: "Insight & automation",
                },
              ].map((item, index, array) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative rounded-[18px] border border-black/[0.07] bg-[#fafaf8] p-4 text-center"
                  >
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                      <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                    </span>

                    <p className="mt-3 text-sm font-black">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-400">
                      {item.text}
                    </p>

                    {index < array.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#ff6f0f] sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            COLLABORATION
        ====================================================== */}

        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="lab-reveal overflow-hidden rounded-[28px] bg-[#ff6f0f] p-6 sm:p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-black/45">
                    Open for Collaboration
                  </p>

                  <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                    Punya teknologi yang membutuhkan pengujian di
                    lingkungan nyata?
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-black/55 sm:text-base">
                    Kami terbuka untuk diskusi dengan perusahaan,
                    startup, tim R&D, universitas, peneliti, vendor
                    drone, IoT, sensor, agritech, maupun pengembang
                    artificial intelligence.
                  </p>
                </div>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[54px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
                >
                  Ajukan Pilot Project

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-black/10 pt-6">
                {[
                  "AI Research",
                  "Agritech",
                  "Computer Vision",
                  "IoT",
                  "Drone",
                  "Remote Sensing",
                  "GeoAI",
                  "Environmental Technology",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-2 text-[9px] font-bold text-black/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM MAP LINK
        ====================================================== */}

        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff6f0f]">
                RHG Coffee AI Living Lab
              </p>

              <p className="mt-2 text-sm font-black">
                Kabupaten Rejang Lebong, Provinsi Bengkulu
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-black/[0.08] px-4 text-xs font-bold transition hover:bg-[#f5f5f2]"
              >
                Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <a
                href={EARTH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#17191c] px-4 text-xs font-bold text-white transition hover:bg-black"
              >
                Google Earth
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}