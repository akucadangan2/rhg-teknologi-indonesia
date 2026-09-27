"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Code2,
  CreditCard,
  Database,
  FlaskConical,
  Globe2,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  contactInfo,
  legalInfo,
} from "@/lib/data/company";

const PROJECT_TYPES = [
  {
    value: "Website / Web Platform",
    label: "Web Platform",
    description: "Website, dashboard, portal & web app",
    icon: Globe2,
  },
  {
    value: "Mobile Application",
    label: "Mobile App",
    description: "Android, iOS & aplikasi operasional",
    icon: Smartphone,
  },
  {
    value: "AI / AI Agent",
    label: "AI & Agent",
    description: "AI Agent, RAG, vision & automation",
    icon: Bot,
    featured: true,
  },
  {
    value: "Backend / Data",
    label: "Backend & Data",
    description: "API, database, migration & automation",
    icon: Database,
  },
  {
    value: "Payment Integration",
    label: "Payment",
    description: "QRIS, VA, e-wallet & payment gateway",
    icon: CreditCard,
  },
  {
    value: "System / IoT Integration",
    label: "Integration",
    description: "API, IoT, hardware & system integration",
    icon: Workflow,
  },
  {
    value: "RHG Lab / AI Pilot",
    label: "RHG Lab",
    description: "Applied AI, field testing & pilot project",
    icon: FlaskConical,
    featured: true,
  },
  {
    value: "Custom Software",
    label: "Custom System",
    description: "Software khusus sesuai workflow bisnis",
    icon: Code2,
  },
];

const BUDGET_OPTIONS = [
  "Belum ditentukan",
  "< Rp5 juta",
  "Rp5–15 juta",
  "Rp15–30 juta",
  "Rp30–50 juta",
  "> Rp50 juta",
];

const TIMELINE_OPTIONS = [
  "Fleksibel",
  "< 1 bulan",
  "1–2 bulan",
  "2–3 bulan",
  "3–6 bulan",
  "> 6 bulan",
];

const PROCESS = [
  {
    number: "01",
    title: "Review kebutuhan",
    description:
      "Kami memahami tujuan, user, workflow, data, dan sistem yang sudah Anda gunakan.",
  },
  {
    number: "02",
    title: "Susun pendekatan",
    description:
      "Scope, teknologi, integrasi, estimasi pengerjaan, dan kebutuhan project dibahas lebih lanjut.",
  },
  {
    number: "03",
    title: "Mulai development",
    description:
      "Setelah scope disepakati, project masuk ke tahap development, testing, dan deployment.",
  },
];

type FormState = {
  name: string;
  company: string;
  contact: string;
  category: string;
  budget: string;
  timeline: string;
  description: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  company: "",
  contact: "",
  category: "",
  budget: "Belum ditentukan",
  timeline: "Fleksibel",
  description: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.contact.trim() ||
      !form.category ||
      !form.description.trim()
    ) {
      setError(
        "Lengkapi nama, kontak, jenis project, dan kebutuhan project terlebih dahulu."
      );
      return;
    }

    const subject = `Project Inquiry — ${form.category}`;

    const body = [
      "Halo RHG Teknologi Indonesia,",
      "",
      "Saya ingin mendiskusikan kebutuhan project berikut:",
      "",
      `Nama: ${form.name}`,
      `Perusahaan / Institusi: ${
        form.company || "-"
      }`,
      `Email / WhatsApp: ${form.contact}`,
      `Jenis Project: ${form.category}`,
      `Budget: ${form.budget}`,
      `Target Timeline: ${form.timeline}`,
      "",
      "Kebutuhan Project:",
      form.description,
      "",
      "Terima kasih.",
    ].join("\n");

    window.location.href =
      `mailto:${contactInfo.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <style>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 40px 40px;
          }
        }

        @keyframes contactGlow {
          0%,
          100% {
            transform: translate3d(0,0,0);
            opacity: .3;
          }

          50% {
            transform: translate3d(30px,-20px,0);
            opacity: .55;
          }
        }

        .contact-grid {
          background-image:
            linear-gradient(
              rgba(15,23,42,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.035) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
          animation:
            contactGrid
            20s
            linear
            infinite;
        }

        .contact-hero {
          opacity: 0;
          animation:
            contactFadeUp
            .7s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .contact-hero-2 {
          animation-delay: .08s;
        }

        .contact-hero-3 {
          animation-delay: .16s;
        }

        .contact-glow {
          animation:
            contactGlow
            10s
            ease-in-out
            infinite;
        }

        .project-option {
          transition:
            border-color .25s ease,
            background-color .25s ease,
            transform .25s ease,
            box-shadow .25s ease;
        }

        .project-option:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 767px) {
          .contact-grid {
            animation: none;
            background-size: 28px 28px;
          }

          .project-option:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-grid,
          .contact-hero,
          .contact-glow {
            animation: none !important;
          }

          .contact-hero {
            opacity: 1 !important;
          }
        }
      `}</style>

      <main className="relative overflow-hidden bg-[#f7f7f5] text-[#17191c]">
        <div className="contact-grid pointer-events-none absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

        <div className="contact-glow pointer-events-none absolute -left-40 -top-32 h-[460px] w-[460px] rounded-full bg-[#ff6f0f]/[0.07] blur-[120px]" />

        <div className="pointer-events-none absolute -right-48 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20 md:px-8 lg:px-10">
            <div className="contact-hero inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
              <span className="h-px w-7 bg-[#ff6f0f]" />

              Start a Project
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div className="contact-hero contact-hero-2">
                <h1 className="max-w-4xl text-[38px] font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-[58px]">
                  Ceritakan apa yang
                  <span className="text-[#ff6f0f]">
                    {" "}
                    ingin Anda bangun.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                  Software baru, AI Agent, aplikasi mobile,
                  integrasi sistem, payment, backend, hingga
                  pilot project di RHG Lab. Berikan gambaran
                  kebutuhan Anda dan kami bantu menyusun
                  pendekatan teknisnya.
                </p>
              </div>

              <div className="contact-hero contact-hero-3 lg:justify-self-end">
                <div className="flex items-start gap-3 rounded-[18px] border border-black/[0.07] bg-white/80 p-4 backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5]">
                    <Sparkles className="h-[18px] w-[18px] text-[#ff6f0f]" />
                  </span>

                  <div>
                    <p className="text-xs font-black">
                      Tidak perlu brief yang sempurna.
                    </p>

                    <p className="mt-1 max-w-xs text-[11px] leading-5 text-slate-500">
                      Gambaran awal sudah cukup. Detail scope
                      dapat dibahas bersama setelah kami memahami
                      kebutuhan project Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTACT
        ====================================================== */}

        <section className="relative pb-16 sm:pb-20 md:pb-28">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-7 lg:px-10">
            {/* LEFT */}

            <aside className="space-y-4">
              {/* COMPANY CARD */}

              <div className="overflow-hidden rounded-[24px] bg-[#17191c] p-5 text-white shadow-[0_22px_65px_rgba(15,23,42,.12)] sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff8a34]">
                      RHG Teknologi Indonesia
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                      Technology engineering partner.
                    </h2>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff6f0f] sm:flex">
                    <Code2 className="h-5 w-5 text-[#17191c]" />
                  </span>
                </div>

                <p className="mt-4 text-[12px] leading-6 text-white/42 sm:text-[13px]">
                  Kami dapat membantu dari discovery, design,
                  development, integration, testing hingga
                  production deployment.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[
                    "Web & Mobile",
                    "AI & Automation",
                    "Backend & Data",
                    "System Integration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2.5"
                    >
                      <Check className="h-3 w-3 shrink-0 text-[#ff8a34]" />

                      <span className="text-[9px] font-semibold text-white/45 sm:text-[10px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTACT INFO */}

              <div className="rounded-[24px] border border-black/[0.07] bg-white p-5 sm:p-6">
                <p className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
                  Direct Contact
                </p>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group mt-5 flex items-center gap-3 rounded-[16px] border border-black/[0.06] bg-[#fafaf8] p-3.5 transition hover:border-[#ff6f0f]/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5]">
                    <Mail className="h-4 w-4 text-[#ff6f0f]" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 truncate text-[12px] font-black sm:text-[13px]">
                      {contactInfo.email}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-[#ff6f0f]" />
                </a>

                <div className="mt-2.5 flex items-start gap-3 rounded-[16px] border border-black/[0.06] bg-[#fafaf8] p-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e5]">
                    <MapPin className="h-4 w-4 text-[#ff6f0f]" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                      Domisili
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-5 sm:text-[13px]">
                      {legalInfo.domicile}
                    </p>
                  </div>
                </div>
              </div>

              {/* LAB */}

              <Link
                href="/lab"
                className="group block overflow-hidden rounded-[24px] border border-[#ff6f0f]/15 bg-[#fff5ed] p-5 transition hover:border-[#ff6f0f]/30 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6f0f]">
                    <FlaskConical className="h-5 w-5 text-[#17191c]" />
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-[#ff6f0f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="mt-5 text-[9px] font-black uppercase tracking-[0.17em] text-[#ff6f0f]">
                  RHG Applied AI Field Lab
                </p>

                <h3 className="mt-2 text-lg font-black tracking-[-0.025em]">
                  Ingin melakukan pilot atau pengujian AI?
                </h3>

                <p className="mt-2 text-[12px] leading-6 text-slate-500">
                  Lihat RHG Coffee AI Living Lab untuk applied
                  AI, computer vision, AI Agent, edge AI dan
                  research collaboration.
                </p>
              </Link>
            </aside>

            {/* FORM */}

            <div className="overflow-hidden rounded-[26px] border border-black/[0.07] bg-white shadow-[0_25px_70px_rgba(15,23,42,.07)]">
              <div className="border-b border-black/[0.07] px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff6f0f]">
                      Project Intake
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                      Informasi project
                    </h2>

                    <p className="mt-1.5 text-[11px] leading-5 text-slate-400 sm:text-xs">
                      Isi informasi dasar supaya kebutuhan dapat
                      kami pahami sebelum diskusi lebih lanjut.
                    </p>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#17191c] sm:flex">
                    <BriefcaseBusiness className="h-5 w-5 text-[#ff8a34]" />
                  </span>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-7"
              >
                {/* BASIC INFO */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[11px] font-black text-[#25282b]"
                    >
                      Nama
                      <span className="ml-1 text-[#ff6f0f]">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="Nama lengkap"
                      className="mt-2 h-12 w-full rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-[11px] font-black text-[#25282b]"
                    >
                      Company / Institution
                    </label>

                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(event) =>
                        updateField(
                          "company",
                          event.target.value
                        )
                      }
                      placeholder="Nama perusahaan, opsional"
                      className="mt-2 h-12 w-full rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact"
                    className="text-[11px] font-black text-[#25282b]"
                  >
                    Email / WhatsApp
                    <span className="ml-1 text-[#ff6f0f]">
                      *
                    </span>
                  </label>

                  <input
                    id="contact"
                    type="text"
                    value={form.contact}
                    onChange={(event) =>
                      updateField(
                        "contact",
                        event.target.value
                      )
                    }
                    placeholder="email@company.com atau nomor WhatsApp"
                    className="mt-2 h-12 w-full rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 text-[13px] outline-none transition placeholder:text-slate-300 focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                  />
                </div>

                {/* PROJECT TYPE */}

                <div className="mt-7 border-t border-black/[0.06] pt-6">
                  <div>
                    <p className="text-[11px] font-black text-[#25282b]">
                      Apa yang ingin dibangun?
                      <span className="ml-1 text-[#ff6f0f]">
                        *
                      </span>
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Pilih kategori yang paling mendekati.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {PROJECT_TYPES.map((item) => {
                      const Icon = item.icon;

                      const selected =
                        form.category === item.value;

                      return (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() =>
                            updateField(
                              "category",
                              item.value
                            )
                          }
                          className={`project-option relative flex items-start gap-3 rounded-[15px] border p-3.5 text-left ${
                            selected
                              ? "border-[#ff6f0f]/50 bg-[#fff7f1] shadow-[0_8px_24px_rgba(255,111,15,.06)]"
                              : "border-black/[0.07] bg-[#fafaf9] hover:border-black/[0.14] hover:bg-white"
                          }`}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${
                              selected
                                ? "bg-[#ff6f0f] text-white"
                                : "bg-white text-slate-500"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>

                          <span className="min-w-0">
                            <span
                              className={`block text-[11px] font-black ${
                                selected
                                  ? "text-[#17191c]"
                                  : "text-slate-700"
                              }`}
                            >
                              {item.label}
                            </span>

                            <span className="mt-1 block text-[9px] leading-4 text-slate-400">
                              {item.description}
                            </span>
                          </span>

                          {selected && (
                            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#17191c]">
                              <Check className="h-3 w-3 text-white" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* PROJECT DETAILS */}

                <div className="mt-7 grid gap-4 border-t border-black/[0.06] pt-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="budget"
                      className="text-[11px] font-black text-[#25282b]"
                    >
                      Estimasi Budget
                    </label>

                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(event) =>
                        updateField(
                          "budget",
                          event.target.value
                        )
                      }
                      className="mt-2 h-12 w-full rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 text-[12px] outline-none transition focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                    >
                      {BUDGET_OPTIONS.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="text-[11px] font-black text-[#25282b]"
                    >
                      Target Timeline
                    </label>

                    <select
                      id="timeline"
                      value={form.timeline}
                      onChange={(event) =>
                        updateField(
                          "timeline",
                          event.target.value
                        )
                      }
                      className="mt-2 h-12 w-full rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 text-[12px] outline-none transition focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                    >
                      {TIMELINE_OPTIONS.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="text-[11px] font-black text-[#25282b]"
                  >
                    Ceritakan kebutuhan project
                    <span className="ml-1 text-[#ff6f0f]">
                      *
                    </span>
                  </label>

                  <textarea
                    id="description"
                    rows={6}
                    value={form.description}
                    onChange={(event) =>
                      updateField(
                        "description",
                        event.target.value
                      )
                    }
                    placeholder="Contoh: Kami membutuhkan aplikasi operasional untuk 5 cabang, memiliki database existing, membutuhkan dashboard admin dan aplikasi mobile untuk staff..."
                    className="mt-2 w-full resize-none rounded-[13px] border border-black/[0.09] bg-[#fafaf9] px-4 py-3.5 text-[13px] leading-6 outline-none transition placeholder:text-slate-300 focus:border-[#ff6f0f]/50 focus:bg-white focus:ring-4 focus:ring-[#ff6f0f]/[0.06]"
                  />
                </div>

                {error && (
                  <div className="mt-4 rounded-[13px] border border-red-200 bg-red-50 px-4 py-3 text-[11px] font-semibold leading-5 text-red-600">
                    {error}
                  </div>
                )}

                <div className="mt-5 flex flex-col gap-3 border-t border-black/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-2 text-[9px] leading-4 text-slate-400">
                    <MessageSquareText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ff6f0f]" />

                    <span>
                      Informasi ini digunakan untuk memahami
                      kebutuhan awal project.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#17191c] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_14px_30px_rgba(15,23,42,.14)] sm:w-auto"
                  >
                    Kirim Brief Project

                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <section className="border-t border-black/[0.06] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="h-px w-7 bg-[#ff6f0f]" />

                  What Happens Next
                </div>

                <h2 className="mt-4 max-w-xl text-[28px] font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                  Dari brief awal menuju scope yang jelas.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Kami tidak langsung memaksakan teknologi.
                  Kebutuhan bisnis dan kondisi sistem dipahami
                  terlebih dahulu.
                </p>
              </div>

              <div className="border-t border-black/[0.07]">
                {PROCESS.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-3 border-b border-black/[0.07] py-5 sm:grid-cols-[70px_180px_1fr] sm:gap-4 sm:py-6"
                  >
                    <span className="font-mono text-[10px] font-black text-[#ff6f0f]">
                      {item.number}
                    </span>

                    <h3 className="text-sm font-black sm:text-base">
                      {item.title}
                    </h3>

                    <p className="text-[12px] leading-6 text-slate-500 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL
        ====================================================== */}

        <section className="bg-[#17191c] text-white">
          <div className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[1fr_auto] md:items-center md:px-8 lg:px-10">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.17em] text-[#ff8a34]">
                Not Sure Where to Start?
              </p>

              <h2 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                Belum tahu teknologi atau scope yang tepat?
              </h2>

              <p className="mt-2 max-w-2xl text-[12px] leading-6 text-white/40 sm:text-sm">
                Tidak masalah. Jelaskan masalah bisnis atau proses
                yang ingin diperbaiki. Kami bantu mengidentifikasi
                pendekatan yang paling sesuai.
              </p>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#ff6f0f] px-5 text-sm font-black text-[#17191c] transition hover:bg-[#ff8a34] md:w-auto"
            >
              Hubungi via Email

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}