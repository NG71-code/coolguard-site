// src/pages/Home.jsx
import { useMemo, useState } from "react";
import { CATALOG, LOGO_SRC } from "../data/catalog.js";
import { SERVICES } from "../data/services.js";

/* ---------------- Thumbnail helper ---------------- */
function hashToGrad(key) {
  const palettes = [
    ["from-sky-200","to-sky-400","text-sky-800"],
    ["from-emerald-200","to-emerald-400","text-emerald-800"],
    ["from-indigo-200","to-indigo-400","text-indigo-800"],
    ["from-amber-200","to-amber-400","text-amber-800"],
    ["from-fuchsia-200","to-fuchsia-400","text-fuchsia-800"],
    ["from-rose-200","to-rose-400","text-rose-800"],
    ["from-cyan-200","to-cyan-400","text-cyan-800"],
  ];
  let h = 0; for (let i=0;i<key.length;i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}
function Thumb({ code, label }) {
  const [from,to,text] = hashToGrad(String(code || label || "CG"));
  const initials = (code || label || "CG").slice(0,4).toUpperCase();
  return (
    <div className={`h-14 w-14 shrink-0 rounded-xl bg-gradient-to-br ${from} ${to} flex items-center justify-center border border-white/60 shadow-sm`}>
      <span className={`text-xs font-bold ${text}`}>{initials}</span>
    </div>
  );
}

/* ---------------- Main Page ---------------- */
export default function Home() {
  // state
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // grid data
  const categories = useMemo(() => {
    const set = new Set();
    (CATALOG || []).forEach((p) => p?.category && set.add(p.category));
    return ["All", ...Array.from(set).sort()];
  }, []);
  const filtered = useMemo(() => {
    let items = Array.isArray(CATALOG) ? CATALOG : [];
    if (activeCategory !== "All") items = items.filter((p) => (p?.category || "") === activeCategory);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(
        (p) =>
          String(p?.code || "").toLowerCase().includes(q) ||
          String(p?.name || "").toLowerCase().includes(q) ||
          String(p?.description || "").toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* (No header here) The global header comes from src/components/Header.jsx */}

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 border-b" id="home-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Copy + CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border px-3 py-1 text-xs text-slate-700">
                <span className="inline-block h-2 w-2 rounded-full bg-[#007BFF]" />
                IoT Sensors • Gateways & Controllers • Cloud Analytics
              </div>

              <h1 className="mt-3 text-2xl md:text-4xl font-semibold leading-tight text-slate-900">
                <span className="text-[#007BFF] font-bold">CoolGuard</span><br />
                <span className="text-slate-600 font-normal">Intelligence for the Cold Chain</span>
              </h1>

              <p className="mt-4 text-slate-600 md:text-lg">
                Cold storage environments demand precision, accountability, and uninterrupted visibility.
                CoolGuard ensures compliance, reduces operational risk, and protects product integrity through continuous
                monitoring and automated oversight — across every facility, asset, and region.
                Whether it's one facility or a distributed network of cold rooms, freezers, chillers, and warehouses —
                CoolGuard provides unified visibility and control.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#cloud-platform"
                  className="inline-flex items-center rounded-xl bg-[#007BFF] px-4 py-2.5 text-white font-medium hover:opacity-90 shadow transition"
                >
                  Contact Us
                </a>
              </div>

              {/* Quick links row to match navbar order */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <a href="#cloud-loggers" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Cloud Loggers
                </a>
                <a href="#nodes-gateways" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Nodes & Gateways
                </a>
                <a href="#controllers" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Controllers
                </a>
                <a href="#sensors" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Sensors
                </a>
                <a href="#services" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Services
                </a>
                <a href="#cloud-platform" className="group inline-flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2 hover:bg-blue-50/50">
                  <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                  Cloud Platform
                </a>
              </div>
            </div>

            {/* Right: Visual card (auto-swaps to image if present) */}
            <div className="order-first md:order-last">
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm">
                {/* Optional: Add /public/coolguard-hero.png */}
                <img
                  src="/cold-storage-hero.png"
                  alt=""
                  className="hidden md:block mx-auto h-48 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="md:hidden flex items-center justify-center">
                  <img src="/coolguard-logo.png" alt="CoolGuard Logo" className="mx-auto h-16 w-auto" />
                </div>
                <p className="mt-4 text-center text-sm text-slate-600">
                  Smart sensors, reliable hardware, and a cloud platform working together to protect your cold chain—24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights / Advantages */}
      <section id="features" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why <span className="text-[#007BFF]">CoolGuard</span>
            </h2>
            <p className="mt-2 text-slate-600">
              CoolGuard combines industrial-grade hardware, certified measurement accuracy, and a secure cloud platform
              — built specifically for temperature-controlled storage where reliability and compliance cannot fail.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* 1. Hardware foundation */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <rect x="3" y="8" width="7" height="10" rx="1.5" strokeWidth="2" />
                    <rect x="14" y="6" width="7" height="12" rx="1.5" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Industrial-Grade Hardware</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Sensors, gateways, and controllers designed for cold rooms, freezers, chillers, and warehouses —
                    not repurposed generic IoT devices.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Measurement accuracy */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path d="M12 7v6l3 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">NABL-Calibrated Accuracy</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Traceable calibration and offset correction to ensure temperature and humidity readings
                    match regulatory and QA expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Monitoring & alerts */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M12 4l7 4v4c0 3.87-3.13 7-7 7s-7-3.13-7-7V8l7-4z" strokeWidth="2" />
                    <path d="M12 10v3M12 17h.01" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Real-Time Monitoring & Alerts</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Continuous monitoring with SMS, Email, and WhatsApp alerts for excursions, door openings,
                    power failures, and equipment issues.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Compliance & reporting */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                    <path d="M8 9h8M8 13h5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Compliance & Audit-Ready Records</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Secure, timestamped logs and structured reports to support audits, investigations,
                    and regulatory documentation without manual logbooks.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Multi-site scalability */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <circle cx="6" cy="9" r="2" strokeWidth="2" />
                    <circle cx="18" cy="9" r="2" strokeWidth="2" />
                    <circle cx="12" cy="16" r="2" strokeWidth="2" />
                    <path d="M8 9h3l1 5m2-5h3l-1 5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Scales Across Sites & Assets</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Start with a single cold room and grow to multi- state / country deployments using the same
                    platform, dashboards, and processes.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Resilience & validation */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M4 7h9l5 5v5H4V7z" strokeWidth="2" />
                    <path d="M9 12h3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Resilient by Design</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Offline logging during network outages, seamless sync when connectivity returns,
                    and built-in support for mapping and PQ workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KPI / Stats Band */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">10k+</div>
              <div className="text-xs text-slate-600 mt-1">Sensors Deployed</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">200+</div>
              <div className="text-xs text-slate-600 mt-1">Sites Monitored</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">99.9%</div>
              <div className="text-xs text-slate-600 mt-1">Uptime</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">72 hr</div>
              <div className="text-xs text-slate-600 mt-1">Offline Buffer</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">21 CFR</div>
              <div className="text-xs text-slate-600 mt-1">Audit-Ready</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-2xl font-extrabold text-[#007BFF]">NABL</div>
              <div className="text-xs text-slate-600 mt-1">Calibration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section id="process" className="bg-slate-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
  <span>CoolGuard Architecture</span><br />
  <span className="text-[#007BFF]">End-to-End Monitoring Pipeline</span>
</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            From hardware to dashboards — a unified pipeline designed for cold rooms, warehouses,
            and storage, ensuring that every reading is captured, validated, and made actionable.
          </p>

          {/* Architecture diagram */}
          <div className="mt-6 rounded-3xl bg-white border border-slate-200 shadow-sm px-4 py-5 md:px-8 md:py-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6">
              {/* Node 1 */}
              <div className="flex items-center gap-3 md:gap-2">
                <div className="h-9 w-9 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#007BFF]">1</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Sensors
                  </div>
                  <div className="text-[11px] text-slate-600">
                    RTD / Temp / RH · NABL-traceable calibration
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-slate-300 text-xl">➜</span>
              </div>
              <div className="md:hidden flex items-center justify-center">
                <span className="text-slate-300 text-lg">⬇</span>
              </div>

              {/* Node 2 */}
              <div className="flex items-center gap-3 md:gap-2">
                <div className="h-9 w-9 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#007BFF]">2</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Nodes &amp; Gateways
                  </div>
                  <div className="text-[11px] text-slate-600">
                    LoRa / RS-485 / 4G · Secure data backbone
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-slate-300 text-xl">➜</span>
              </div>
              <div className="md:hidden flex items-center justify-center">
                <span className="text-slate-300 text-lg">⬇</span>
              </div>

              {/* Node 3 */}
              <div className="flex items-center gap-3 md:gap-2">
                <div className="h-9 w-9 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#007BFF]">3</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Cloud Platform
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Storage · alerts · audit trails · PQ workflows
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-slate-300 text-xl">➜</span>
              </div>
              <div className="md:hidden flex items-center justify-center">
                <span className="text-slate-300 text-lg">⬇</span>
              </div>

              {/* Node 4 */}
              <div className="flex items-center gap-3 md:gap-2">
                <div className="h-9 w-9 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#007BFF]">4</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                    Dashboards &amp; Reports
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Multi-site views · analytics · PDF / XLS / API
                  </div>
                </div>
              </div>
            </div>

            {/* Optional caption */}
            <p className="mt-4 text-[11px] text-slate-500 text-center">
              Data flows from calibrated field hardware to a validated cloud platform, then into dashboards and reports
              used by operations, quality, and compliance teams.
            </p>
          </div>

          {/* Existing cards below (kept, but you can tweak text to match) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Sensors", desc: "RTD/Temp/RH with NABL-traceable calibration & offsets." },
              { title: "Nodes & Gateways", desc: "LoRa/RS-485/4G bridges data to the cloud securely." },
              { title: "Cloud Platform", desc: "Storage, alerts, audit trails, PQ workflows & reports." },
              { title: "Dashboard", desc: "Multi-site views, reports (PDF/XLS), validation & exports." },
            ].map((s, i) => (
              <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
                    <span className="text-[#007BFF] font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem Overview */}
      <section id="overview" className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Product <span className="text-[#007BFF]">Ecosystem Overview</span>
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              From field sensors to the cloud, CoolGuard delivers an integrated system for monitoring, controlling,
              and validating cold-chain infrastructure across single or multi-site operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Cloud Loggers",
                desc: "Universal temperature/RH loggers purpose-built for cold rooms, freezers, and chillers.",
                href: "#cloud-loggers",
              },
              {
                title: "Cloud Connectors",
                desc: "Connect existing industrial controllers to the platform without hardware replacement.",
                href: "#cloud-connectors",
              },
              {
                title: "Nodes & Gateways",
                desc: "LoRa, RS-485, and 4G connectivity enabling scalable multi-zone monitoring.",
                href: "#nodes-gateways",
              },
              {
                title: "Controllers",
                desc: "Intelligent refrigeration control with alarms, defrost logic, and cloud sync.",
                href: "#controllers",
              },
              {
                title: "Sensors",
                desc: "NABL-traceable temperature, humidity, door and process sensors.",
                href: "#sensors",
              },
              {
                title: "Mapping & Calibration Services",
                desc: "WHO-aligned mapping, calibration, and validation for regulatory compliance.",
                href: "/services",
              },
              {
                title: "Cloud Platform",
                desc: "Central dashboards, alerts, audit trails, workflows and enterprise reporting.",
                href: "#cloud-platform",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group block rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
                    <span className="text-[#007BFF] text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>

                {/* CTA aligned right with no separator line */}
                <div className="mt-4 flex justify-end">
                  <p className="text-xs font-medium text-[#007BFF] flex items-center gap-1">
                    View Details <span className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platform */}
      <section id="cloud-platform" className="bg-slate-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                CoolGuard <span className="text-[#007BFF]">Cloud Platform</span>
              </h2>
              <p className="mt-3 text-slate-600">
                The central control layer for your cold-chain — consolidating sites, devices, alarms, and
                compliance data into a single, secure platform designed for regulated environments.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
                    <p>
                      <span className="font-semibold">Operational visibility</span><br />
                      Real-time dashboards for sites, rooms, sensors, and alarm status.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
                    <p>
                      <span className="font-semibold">Alerts & escalation</span><br />
                      Email, SMS, and WhatsApp alerts with configurable thresholds and escalation paths.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
                    <p>
                      <span className="font-semibold">Compliance & audit trails</span><br />
                      Secure, timestamped records to support 21&nbsp;CFR, WHO PQ, and internal QA audits.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
                    <p>
                      <span className="font-semibold">Reporting & integrations</span><br />
                      PDF/XLS exports, APIs and industrial interfaces (Modbus/RS-485) for system integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl bg-[#007BFF] px-4 py-2.5 text-white font-medium hover:opacity-90 shadow"
                >
                  Request a demo
                </a>
                <a
                  href="/cloud-platform"
                  className="inline-flex items-center rounded-xl px-4 py-2.5 border font-medium hover:bg-white"
                >
                  View platform details
                </a>
              </div>
            </div>

            {/* Visual */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/cloud-platform.png"   // place in /public
                  alt="CoolGuard Cloud Platform dashboard"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                  onError={(e) => { e.currentTarget.src = "/coolguard-dashboard.png"; }}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-900/0 to-blue-600/10" />
              </div>

              {/* Small feature chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Multi-site dashboards",
                  "Alerting & escalation",
                  "Audit trails",
                  "Mapping & validation",
                  "Reporting & exports",
                  "APIs & integrations",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border bg-white px-3 py-1 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      =============================
      Trusted By – logo strip (temporarily disabled)
      =============================

      <section id="trusted-by" className="bg-slate-50 border-t py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm md:text-base font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Trusted by cold chain, pharma, food & manufacturing leaders
          </h2>

          <p className="mt-2 text-center text-xs md:text-sm text-slate-500">
            Organizations that run mission-critical temperature operations with CoolGuard.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {[
              { src: "/logos/tci.png", alt: "TCI Cold Chain" },
              { src: "/logos/tataadvanced.png", alt: "Tata Advanced Systems" },
              { src: "/logos/sneha.png", alt: "Sneha Fresh Chicken" },
              { src: "/logos/jwl.png", alt: "JWL" },
              { src: "/logos/haano.png", alt: "Haano Foods" },
              { src: "/logos/gulfprocessing.png", alt: "Gulf Processing Industries" },
              { src: "/logos/swiggy.png", alt: "Swiggy" },
              { src: "/logos/hilti.png", alt: "Hilti" },
              { src: "/logos/qatarmeat.png", alt: "Qatar Meat" },
              { src: "/logos/khalid-scientific.png", alt: "Khalid Scientific" },
              { src: "/logos/omanfisheries.png", alt: "Oman Fisheries" },
              { src: "/logos/shalimar.png", alt: "Shalimar Group" },
            ].map((logo) => (
              <div
                key={logo.src}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs md:text-sm text-slate-500">
            + more enterprise deployments across India and the Middle East.
          </div>
        </div>
      </section>
      */}

      {/* Cloud Loggers (anchor only; populate later if you want a separate section) */}
      <section id="cloud-loggers" className="py-1" aria-hidden="true"></section>

      {/* Nodes & Gateways (anchor only) */}
      <section id="nodes-gateways" className="py-1" aria-hidden="true"></section>

      {/* Controllers – anchor only while grid is disabled */}
      <section id="controllers" className="py-1" aria-hidden="true"></section>

      {/*
      =============================
      Controllers & Gateways grid (temporarily disabled)
      =============================

      <section id="controllers" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Controllers & Gateways</h2>
              <p className="mt-1 text-slate-600">Browse by category or search by model / description.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-64 md:w-80 rounded-xl border px-3 py-2.5 pl-10 text-sm outline-none focus:border-blue-500"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-full border text-sm ${
                  activeCategory === c ? "bg-blue-600 text-white border-blue-600" : "hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <article key={p?.id || p?.code} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Thumb code={p?.code} label={p?.name} />
                    <div>
                      <h3 className="font-semibold text-lg">{p?.name || p?.model || "Unnamed Product"}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {p?.code}
                        {p?.category ? ` • ${p.category}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p?.description || "—"}</p>
                <dl className="mt-4 space-y-1.5 text-xs">
                  {p?.connectivity ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">Connectivity</dt>
                      <dd className="font-medium">{p.connectivity}</dd>
                    </div>
                  ) : null}
                  {p?.channels ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">Channels</dt>
                      <dd className="font-medium">{p.channels}</dd>
                    </div>
                  ) : null}
                  {p?.hsn ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">HSN</dt>
                      <dd className="font-medium">{p.hsn}</dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 text-center text-slate-500">No products match your filters.</p>
          )}
        </div>
      </section>
      */}

      {/* Sensors (anchor only; optional real content later) */}
      <section id="sensors" className="py-1" aria-hidden="true"></section>

      {/*
      =============================
      Services section (temporarily disabled)
      =============================

      <section id="services" className="py-12 md:py-16 bg-slate-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
          <p className="mt-1 text-slate-600">Calibration, mapping, validation and more.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(SERVICES || []).map((s) => (
              <article key={s?.id || s?.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-lg">{s?.title || "Service"}</h3>
                <p className="mt-2 text-sm text-slate-600">{s?.description || "—"}</p>
                {s?.bullets?.length ? (
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      {/*
      =============================
      Downloads section (temporarily disabled)
      =============================

      <section id="downloads" className="py-12 md:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:3xl font-bold">Downloads</h2>
          <p className="mt-1 text-slate-600">Datasheets, manuals, certificates and quick-start guides.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">CG-100 Series – Datasheet (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Controllers overview, specs and wiring.</div>
            </a>
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">Kryo-100 / 101 – User Manual (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Logger & gateway installation and setup.</div>
            </a>
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">Bridgepoint CloudConnect – Guide (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Integration steps and Modbus mapping.</div>
            </a>
          </div>
        </div>
      </section>
      */}
{/* Final CTA Banner */}
<section className="bg-gradient-to-r from-[#007BFF] via-sky-500 to-cyan-500">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
    <div className="rounded-3xl bg-white/5 border border-white/20 px-6 py-8 md:px-10 md:py-10 shadow-lg backdrop-blur">
      <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
        {/* Copy */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100 uppercase">
            Next step
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Ready to modernize your cold chain monitoring?
          </h2>
          <p className="mt-3 text-sm md:text-base text-cyan-50/90 max-w-2xl">
            Discuss your sites, assets, and compliance requirements with our team.
            We can help you scope a phased rollout or a focused pilot deployment
            across selected cold rooms, freezers, or warehouses.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-[#007BFF] shadow-sm hover:bg-slate-50 transition"
          >
            Book a consultation
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/70 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Request a pilot deployment
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer / Contact anchor */}
      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC || "/coolguard-logo.png"} alt="CoolGuard" className="h-7 w-auto" />
              <div className="text-sm text-slate-600">
                <div className="font-medium">CoolGuard</div>
                <div>Sensors to Cloud</div>
              </div>
            </div>
            <div className="text-sm text-slate-600">
              <div>
                Need help?{" "}
                <a className="text-blue-600 hover:underline" href="mailto:support@coolguard.cloud">
                  support@coolguard.cloud
                </a>
              </div>
              <div className="mt-1">© {new Date().getFullYear()} CoolGuard</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
