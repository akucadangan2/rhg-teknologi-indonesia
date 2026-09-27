import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Camera,
  Check,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FlaskConical,
  Gauge,
  Leaf,
  MapPin,
  Radio,
  Satellite,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "RHG Applied AI Field Lab — RHG Teknologi Indonesia",
  description:
    "Real-world AI testing environment RHG Teknologi Indonesia untuk computer vision, multimodal AI, AI Agent, edge AI, RAG, prediction, anomaly detection, IoT, dan agriculture AI di Rejang Lebong, Bengkulu.",
};

const MAP_LAT = -3.3853146;
const MAP_LNG = 102.4969821;

const MAP_EMBED = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&t=k&output=embed`;
const MAP_LINK = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;
const EARTH_LINK = `https://earth.google.com/web/search/${MAP_LAT},${MAP_LNG}`;

const AI_RESEARCH_AREAS = [
  {
    icon: Eye,
    code: "AI / 01",
    title: "Vision & Multimodal AI",
    description:
      "Pengujian AI yang memahami gambar dan teks secara bersamaan untuk diagnosis visual, inspection, object recognition, dan visual question answering.",
    tags: ["Vision AI", "VLM", "Multimodal"],
  },
  {
    icon: Bot,
    code: "AI / 02",
    title: "AI Agent & Tool Use",
    description:
      "AI Agent yang dapat membaca data lapangan, mengambil informasi dari database, memanggil API, dan membantu menentukan tindakan berikutnya.",
    tags: ["Agentic AI", "Tools", "Automation"],
  },
  {
    icon: BrainCircuit,
    code: "AI / 03",
    title: "RAG & Knowledge AI",
    description:
      "AI berbasis knowledge yang menggabungkan dokumentasi, SOP, hasil observasi, database, dan pengetahuan domain untuk jawaban yang lebih terarah.",
    tags: ["RAG", "LLM", "Knowledge"],
  },
  {
    icon: Cpu,
    code: "AI / 04",
    title: "Edge & Offline AI",
    description:
      "Pengujian model AI pada perangkat lokal seperti smartphone atau edge device agar inference tetap berjalan saat koneksi internet terbatas.",
    tags: ["Edge AI", "Offline", "On-device"],
  },
  {
    icon: Activity,
    code: "AI / 05",
    title: "Prediction & Time-Series AI",
    description:
      "Pengembangan model untuk membaca pola historis, perubahan lingkungan, data sensor, dan observasi berkala untuk forecasting.",
    tags: ["Forecasting", "Time Series", "Prediction"],
  },
  {
    icon: Search,
    code: "AI / 06",
    title: "Anomaly Detection",
    description:
      "AI untuk menemukan kondisi tidak normal pada tanaman, sensor, lingkungan, pola pertumbuhan, atau data operasional.",
    tags: ["Anomaly", "Monitoring", "Detection"],
  },
  {
    icon: Sparkles,
    code: "AI / 07",
    title: "Few-Shot & Zero-Shot AI",
    description:
      "Eksperimen agar model dapat mengenali kategori atau kondisi baru dengan data training yang lebih sedikit.",
    tags: ["Few-shot", "Zero-shot", "Adaptation"],
  },
  {
    icon: ShieldCheck,
    code: "AI / 08",
    title: "AI Reliability Testing",
    description:
      "Pengujian robustness terhadap cahaya, cuaca, blur, sudut kamera, background, perangkat, dan kondisi lapangan yang berubah.",
    tags: ["Robustness", "Evaluation", "Safety"],
  },
  {
    icon: Camera,
    code: "AI / 09",
    title: "Agriculture Computer Vision",
    description:
      "Deteksi penyakit, kondisi daun, kematangan buah, jumlah objek, kesehatan tanaman, dan perubahan visual menggunakan kamera.",
    tags: ["YOLO", "Detection", "Agriculture"],
  },
];

const EXPERIMENTS = [
  {
    code: "LAB / 001",
    status: "Research Concept",
    title: "Coffee Disease Vision AI",
    description:
      "Model computer vision untuk mendeteksi indikasi penyakit atau kondisi abnormal pada daun dan tanaman kopi dari foto lapangan.",
    tech: ["Computer Vision", "Detection", "Vision AI"],
  },
  {
    code: "LAB / 002",
    status: "Research Concept",
    title: "Coffee Vision-Language Assistant",
    description:
      "Pengguna mengunggah foto tanaman lalu bertanya dalam bahasa alami mengenai kondisi visual yang terlihat pada gambar.",
    tech: ["VLM", "Multimodal AI", "Visual Q&A"],
  },
  {
    code: "LAB / 003",
    status: "Research Concept",
    title: "AI Field Agent",
    description:
      "AI Agent yang menggabungkan hasil inspeksi, foto, catatan, database, dan data lain untuk membantu menentukan area yang perlu diperiksa.",
    tech: ["AI Agent", "Tool Use", "Database"],
  },
  {
    code: "LAB / 004",
    status: "Research Concept",
    title: "Knowledge-Grounded Diagnosis",
    description:
      "Menggabungkan hasil computer vision dengan RAG agar jawaban AI dapat menggunakan knowledge base dan dokumentasi yang relevan.",
    tech: ["RAG", "LLM", "Computer Vision"],
  },
  {
    code: "LAB / 005",
    status: "Research Concept",
    title: "Edge AI Offline Detection",
    description:
      "Pengujian model vision pada smartphone atau edge device untuk melihat performa inference tanpa ketergantungan koneksi cloud.",
    tech: ["Edge AI", "Mobile", "Offline"],
  },
  {
    code: "LAB / 006",
    status: "Research Concept",
    title: "Coffee Fruit Detection & Counting",
    description:
      "Computer vision untuk mendeteksi dan menghitung buah kopi pada citra sebagai dasar eksplorasi estimasi produksi.",
    tech: ["Object Detection", "Counting", "Vision AI"],
  },
  {
    code: "LAB / 007",
    status: "Research Concept",
    title: "Ripeness Classification",
    description:
      "Eksperimen klasifikasi visual tingkat kematangan buah kopi menggunakan citra dari kondisi lapangan nyata.",
    tech: ["Classification", "Vision AI", "Dataset"],
  },
  {
    code: "LAB / 008",
    status: "Research Concept",
    title: "Plant Anomaly Detection",
    description:
      "Model yang belajar mengenali kondisi normal kemudian menandai visual tanaman yang berbeda atau membutuhkan pemeriksaan.",
    tech: ["Anomaly Detection", "Vision", "Monitoring"],
  },
  {
    code: "LAB / 009",
    status: "Research Concept",
    title: "AI Yield Prediction",
    description:
      "Eksplorasi prediksi hasil menggunakan kombinasi observasi tanaman, histori, jumlah buah, kondisi lingkungan, dan data periodik.",
    tech: ["Prediction", "Machine Learning", "Time Series"],
  },
  {
    code: "LAB / 010",
    status: "Research Concept",
    title: "Environmental Anomaly AI",
    description:
      "AI untuk mengenali perubahan tidak biasa dari data lingkungan apabila sensor lapangan mulai digunakan.",
    tech: ["Time Series", "Anomaly AI", "IoT"],
  },
  {
    code: "LAB / 011",
    status: "Research Concept",
    title: "Few-Shot Disease Adaptation",
    description:
      "Pengujian kemampuan model beradaptasi terhadap kondisi atau kelas baru dengan jumlah contoh lokal yang terbatas.",
    tech: ["Few-shot", "VLM", "Adaptation"],
  },
  {
    code: "LAB / 012",
    status: "Research Concept",
    title: "Real-World Model Robustness",
    description:
      "Menguji bagaimana performa AI berubah akibat cahaya, hujan, blur, bayangan, jarak, perangkat kamera, dan background berbeda.",
    tech: ["Evaluation", "Robustness", "Benchmark"],
  },
];

const FIELD_CONDITIONS = [
  {
    icon: Camera,
    title: "Natural Visual Variance",
    description:
      "Cahaya, bayangan, sudut kamera, background, blur, dan jarak berubah secara alami.",
  },
  {
    icon: Leaf,
    title: "Real Biological Variation",
    description:
      "Daun, buah, tanaman, dan kondisi biologis tidak selalu memiliki bentuk yang seragam.",
  },
  {
    icon: Activity,
    title: "Temporal Changes",
    description:
      "Objek dan kondisi lapangan dapat diamati kembali untuk membentuk data perubahan dari waktu ke waktu.",
  },
  {
    icon: Smartphone,
    title: "Device Variation",
    description:
      "Dataset dapat diuji menggunakan kamera smartphone dan perangkat dengan kualitas berbeda.",
  },
  {
    icon: Radio,
    title: "Connectivity Constraints",
    description:
      "Cocok untuk mengevaluasi kebutuhan edge AI dan workflow yang tidak selalu bergantung pada cloud.",
  },
  {
    icon: Database,
    title: "Real Dataset Development",
    description:
      "Data dapat dikumpulkan, dianotasi, dievaluasi, dan digunakan untuk eksperimen model secara bertahap.",
  },
];

const EVALUATION_METRICS = [
  {
    icon: Gauge,
    title: "Accuracy",
    description:
      "Apakah prediksi AI benar pada data yang benar-benar berasal dari lapangan?",
  },
  {
    icon: ShieldCheck,
    title: "Robustness",
    description:
      "Apakah performa tetap stabil ketika kondisi gambar dan lingkungan berubah?",
  },
  {
    icon: Zap,
    title: "Latency",
    description:
      "Berapa cepat model memberikan inference pada cloud, smartphone, atau edge device?",
  },
  {
    icon: Database,
    title: "Data Efficiency",
    description:
      "Berapa banyak data lokal yang diperlukan sebelum model memberikan hasil yang berguna?",
  },
  {
    icon: BrainCircuit,
    title: "Grounding",
    description:
      "Apakah jawaban generative AI dapat didukung oleh knowledge dan data yang tersedia?",
  },
  {
    icon: BarChart3,
    title: "Operational Value",
    description:
      "Apakah hasil AI menghasilkan insight atau workflow yang benar-benar dapat digunakan?",
  },
];

const FIELD_PIPELINE = [
  {
    icon: Camera,
    title: "Capture",
    text: "Image · Video · Observation",
  },
  {
    icon: Database,
    title: "Dataset",
    text: "Store · Label · Version",
  },
  {
    icon: BrainCircuit,
    title: "Model",
    text: "Train · Adapt · Evaluate",
  },
  {
    icon: Cpu,
    title: "Deploy",
    text: "Cloud · Mobile · Edge",
  },
  {
    icon: Bot,
    title: "Agent",
    text: "Reason · Retrieve · Act",
  },
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

        .ai-track-card,
        .condition-card,
        .metric-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .35s cubic-bezier(.22,1,.36,1),
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .ai-track-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
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

        .ai-track-card:hover,
        .condition-card:hover,
        .metric-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,111,15,.18);
          box-shadow:
            0 18px 45px
            rgba(15,23,42,.05);
        }

        .ai-track-card:hover::after {
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
          border-color: rgba(255,138,52,.2);
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

          .ai-track-card:hover,
          .condition-card:hover,
          .metric-card:hover,
          .experiment-card:hover {
            transform: none;
          }

          .ai-track-card:hover::after {
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
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-black/[0.06]">
          <div className="lab-grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

          <div className="pointer-events-none absolute -left-40 -top-32 h-[430px] w-[430px] rounded-full bg-[#ff6f0f]/[0.07] blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 top-16 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:py-20 md:grid-cols-[.92fr_1.08fr] md:px-8 md:py-24 lg:gap-16 lg:px-10">
            <div>
              <div className="lab-hero-a inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />
                RHG Applied AI Field Lab
              </div>

              <h1 className="lab-hero-b mt-5 max-w-3xl text-[38px] font-black leading-[1.01] tracking-[-0.05em] text-[#111315] sm:text-5xl md:text-[58px]">
                AI tidak cukup hanya
                <span className="text-[#ff6f0f]">
                  {" "}
                  bekerja di dataset.
                </span>
              </h1>

              <p className="lab-hero-c mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
                RHG Coffee AI Living Lab digunakan sebagai real-world
                environment untuk mengeksplorasi computer vision,
                multimodal AI, AI Agent, RAG, edge AI, prediction,
                anomaly detection, dan deployment AI dalam kondisi
                lapangan yang berubah secara alami.
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
                  Bahas Pilot AI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={EARTH_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-bold transition hover:border-black/20"
                >
                  Lihat Field Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="lab-hero-d mt-8 flex flex-wrap gap-2">
                {[
                  "Vision-Language AI",
                  "AI Agent",
                  "RAG",
                  "Edge AI",
                  "Computer Vision",
                  "Prediction",
                  "Anomaly Detection",
                  "Agriculture AI",
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

            <div className="lab-map-card relative">
              <div className="absolute -right-5 top-5 hidden h-[92%] w-[92%] rounded-[30px] border border-[#ff6f0f]/15 bg-[#ff6f0f]/[0.04] sm:block" />

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#17191c] shadow-[0_28px_90px_rgba(15,23,42,.17)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 text-white sm:px-6">
                  <div>
                    <p className="text-sm font-black">
                      RHG Coffee AI Living Lab
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/30">
                      Real-World AI Test Environment
                    </p>
                  </div>

                  <span className="rounded-full bg-[#ff6f0f]/15 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#ff9852]">
                    AI FIELD LAB
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
                      Real Field Dataset
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
                      Area
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      ±2.02 ha
                    </p>
                  </div>

                  <div className="border-r border-white/[0.07] px-4 py-4">
                    <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                      Environment
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      Real Field
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="text-[8px] uppercase tracking-[0.13em] text-white/25">
                      Primary Focus
                    </p>

                    <p className="mt-1 text-xs font-black text-white/75">
                      Applied AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY REAL WORLD */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr]">
              <div className="lab-reveal">
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                  <span className="h-px w-7 bg-[#ff6f0f]" />
                  Why Real-World AI
                </div>

                <h2 className="mt-4 max-w-xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  AI harus tetap bekerja saat dunia nyata
                  <span className="text-[#ff6f0f]">
                    {" "}
                    tidak sempurna.
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Dataset bersih tidak selalu mewakili kondisi
                  production. Field Lab memberi kesempatan untuk
                  menguji AI terhadap variasi yang benar-benar
                  ditemukan di lapangan.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {FIELD_CONDITIONS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="condition-card lab-reveal rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e5]">
                        <Icon className="h-[18px] w-[18px] text-[#ff6f0f]" />
                      </span>

                      <h3 className="mt-4 text-sm font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[12px] leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* AI RESEARCH TRACKS */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="lab-reveal max-w-4xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />
                AI Research Tracks
              </div>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Fokus utama kami sekarang adalah
                <span className="text-[#ff6f0f]">
                  {" "}
                  Applied AI.
                </span>
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                GIS, drone, dan sensor dapat digunakan sebagai sumber
                data bila dibutuhkan. Namun inti pengujiannya adalah
                bagaimana model AI memahami, memprediksi, beradaptasi,
                dan bekerja pada data dunia nyata.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {AI_RESEARCH_AREAS.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.code}
                    className="ai-track-card lab-reveal rounded-[22px] border border-black/[0.07] bg-white p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17191c]">
                        <Icon className="h-5 w-5 text-[#ff8a34]" />
                      </span>

                      <span className="font-mono text-[9px] font-bold text-slate-300">
                        {area.code}
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

        {/* EXPERIMENT REGISTRY */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="lab-dark-glow pointer-events-none absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.09] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28 lg:px-10">
            <div className="lab-reveal max-w-4xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                <span className="h-px w-7 bg-[#ff8a34]" />
                AI Experiment Registry
              </div>

              <h2 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Contoh eksperimen yang dapat
                <span className="text-[#ff8a34]">
                  {" "}
                  dikembangkan di Lab.
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                Experiment di bawah merupakan research concept, bukan
                klaim bahwa seluruh sistem sudah aktif. Setiap eksperimen
                dapat dikembangkan bertahap berdasarkan dataset,
                perangkat, dan kebutuhan partner.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                <FlaskConical className="h-5 w-5 text-[#ff8a34]" />

                <div>
                  <p className="text-xs font-black">
                    Research Stage
                  </p>

                  <p className="mt-1 text-[10px] text-white/35">
                    Concept · Data Collection · Prototype · Evaluation
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERIMENTS.map((experiment) => (
                <div
                  key={experiment.code}
                  className="experiment-card lab-reveal rounded-[20px] border border-white/[0.08] bg-[#1d2024] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
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
        </section>

        {/* EVALUATION */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="lab-reveal max-w-4xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />
                AI Evaluation
              </div>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Tidak hanya mengejar
                <span className="text-[#ff6f0f]">
                  {" "}
                  accuracy.
                </span>
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                Model yang bagus di benchmark belum tentu siap
                digunakan. Pengujian diarahkan pada kualitas model
                sekaligus kesiapan deployment.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EVALUATION_METRICS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="metric-card lab-reveal rounded-[20px] border border-black/[0.07] bg-[#fafaf8] p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17191c]">
                      <Icon className="h-[18px] w-[18px] text-[#ff8a34]" />
                    </span>

                    <h3 className="mt-4 text-base font-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FIELD TO AI */}
        <section className="border-y border-black/[0.06] bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="lab-reveal max-w-3xl">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
                <span className="h-px w-7 bg-[#ff6f0f]" />
                Field to AI
              </div>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Dari kondisi nyata menjadi
                <span className="text-[#ff6f0f]">
                  {" "}
                  AI yang dapat diuji.
                </span>
              </h2>
            </div>

            <div className="lab-reveal mt-10 grid gap-2 sm:grid-cols-5">
              {FIELD_PIPELINE.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative rounded-[18px] border border-black/[0.07] bg-white p-4 text-center"
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

                    {index < FIELD_PIPELINE.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#ff6f0f] sm:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lab-reveal mt-5 rounded-[22px] border border-black/[0.07] bg-white p-5 sm:p-6">
              <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff6f0f]">
                    Dataset Development
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                    Local data menjadi aset R&D.
                  </h3>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Field photography",
                    "Image annotation",
                    "Plant observations",
                    "Model prediction logs",
                    "Repeated observations",
                    "Environmental data",
                    "Human validation",
                    "Evaluation dataset",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[11px] font-semibold text-slate-500"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#ff6f0f]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI AGENT */}
        <section className="relative overflow-hidden bg-[#17191c] text-white">
          <div className="lab-dark-glow pointer-events-none absolute -right-40 -top-44 h-[520px] w-[520px] rounded-full bg-[#ff6f0f]/[0.08] blur-[130px]" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8 md:py-28 lg:px-10">
            <div className="lab-reveal">
              <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                <span className="h-px w-7 bg-[#ff8a34]" />
                Future Capability
              </div>

              <h2 className="mt-5 text-[30px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Field AI Agent.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                Tujuannya bukan hanya membuat model yang memberikan
                label. AI dapat dikembangkan menjadi agent yang membaca
                berbagai sumber data dan membantu pengguna memahami apa
                yang terjadi di lapangan.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Photo Analysis",
                  "Knowledge Retrieval",
                  "Database Query",
                  "Sensor Data",
                  "Historical Context",
                  "AI Recommendations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-2 text-[9px] font-bold text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lab-reveal overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#1d2024]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6f0f]">
                    <Bot className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      RHG Field AI
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/30">
                      Concept interface
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[8px] text-white/30">
                  R&D
                </span>
              </div>

              <div className="space-y-3 p-5">
                {[
                  "Analisis foto ini dan jelaskan kondisi visual yang terlihat.",
                  "Tanaman mana yang hasil inspeksinya berbeda dari pengamatan sebelumnya?",
                  "Apa data tambahan yang diperlukan sebelum membuat kesimpulan?",
                  "Tampilkan observasi yang perlu diverifikasi manusia.",
                ].map((question) => (
                  <div
                    key={question}
                    className="rounded-[16px] border border-white/[0.06] bg-white/[0.035] px-4 py-3 text-[11px] leading-5 text-white/45"
                  >
                    {question}
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.07] p-4">
                <div className="flex items-center justify-between rounded-full bg-white/[0.05] px-4 py-3">
                  <span className="text-[10px] text-white/25">
                    Ask the Field AI...
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-[#ff8a34]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATION */}
        <section className="bg-[#f7f7f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
            <div className="lab-reveal overflow-hidden rounded-[28px] bg-[#ff6f0f] p-6 sm:p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-black/45">
                    AI Research Collaboration
                  </p>

                  <h2 className="mt-3 max-w-4xl text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#17191c] sm:text-4xl md:text-5xl">
                    Butuh environment nyata untuk menguji AI?
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-black/55 sm:text-base">
                    RHG terbuka untuk pembahasan pilot project dengan
                    perusahaan, startup AI, agritech, universitas,
                    researcher, vendor hardware, maupun tim R&D yang
                    membutuhkan data atau environment lapangan untuk
                    pengembangan dan evaluasi teknologi.
                  </p>
                </div>

                <Link
                  href="/kontak"
                  className="group inline-flex min-h-[54px] w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:bg-black md:w-auto"
                >
                  Bahas Pilot AI
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-black/10 pt-6">
                {[
                  "AI Agent",
                  "Vision-Language Model",
                  "Computer Vision",
                  "Edge AI",
                  "RAG",
                  "Prediction",
                  "Anomaly Detection",
                  "Agriculture AI",
                  "AI Evaluation",
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

        {/* FOOTER INFO */}
        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#ff6f0f]">
                RHG Applied AI Field Lab
              </p>

              <p className="mt-2 text-sm font-black">
                Coffee AI Living Lab · Rejang Lebong, Bengkulu
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