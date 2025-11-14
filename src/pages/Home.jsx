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
          Real-time monitoring • Controllers • Cloud
        </div>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Sensors to Cloud — <span className="text-[#007BFF]">CoolGuard</span>
        </h1>

        <p className="mt-4 text-slate-600 md:text-lg">
          Temperature, humidity and facility control for cold rooms, warehouses, and pharma storage.
          Deploy controllers, nodes & gateways and manage everything on the CoolGuard Cloud Platform.
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
            Reliable hardware + cloud platform for continuous monitoring.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Downloads ... your existing section ends here */}
      
      {/* Feature Highlights / Advantages */}
      <section id="features" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why <span className="text-[#007BFF]">CoolGuard</span>
            </h2>
            <p className="mt-2 text-slate-600">
              Industrial-grade hardware + a secure cloud platform designed for cold rooms, warehouses,
              and pharma environments—built for reliability, compliance, and scale.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M12 3l7 3v5a10 10 0 0 1-7 9 10 10 0 0 1-7-9V6l7-3z" strokeWidth="2" />
                    <path d="M9.5 12l1.8 1.8L15 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">21 CFR–ready Audit Trails</h3>
                  <p className="mt-1 text-sm text-slate-600">Immutable actions, e-sign & version history for validation.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M6 10a6 6 0 1 1 12 0v3l1.5 2.5H4.5L6 13v-3z" strokeWidth="2" />
                    <path d="M9 18a3 3 0 0 0 6 0" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Real-time Alerts</h3>
                  <p className="mt-1 text-sm text-slate-600">SMS/Email/WhatsApp for excursions, door open, power fail.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Multi-Site Dashboard</h3>
                  <p className="mt-1 text-sm text-slate-600">Monitor all sites with role-based access and grouping.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" strokeWidth="2" />
                    <path d="M9 4v14M15 6v14" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Mapping & PQ Workflows</h3>
                  <p className="mt-1 text-sm text-slate-600">WHO-style empty/loaded mapping, defrost & uniformity.</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M10 14a4 4 0 1 0 6 3.5V6a2 2 0 1 0-4 0v11.5A4 4 0 0 0 10 14z" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">NABL-Calibrated Sensors</h3>
                  <p className="mt-1 text-sm text-slate-600">Traceable calibration with offset correction & certificates.</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
                    <path d="M7 17h8a4 4 0 1 0-.5-7.98A6 6 0 0 0 6 9" strokeWidth="2" />
                    <path d="M8 20l-2-2 2-2M16 16l2 2-2 2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Offline Logging & Sync</h3>
                  <p className="mt-1 text-sm text-slate-600">Stores locally during outages; auto-syncs when online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer ... continues */}
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
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How CoolGuard Works</h2>
    <p className="mt-2 text-slate-600 max-w-3xl">
      From hardware to dashboards — a reliable pipeline designed for cold rooms, warehouses, and pharma storage.
    </p>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { title: "Sensors", desc: "RTD/Temp/RH with NABL-traceable calibration & offsets." },
        { title: "Nodes & Gateways", desc: "LoRa/RS-485/4G bridges data to the cloud securely." },
        { title: "Cloud Platform", desc: "Storage, alerts, audit trails, PQ workflows & reports." },
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
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <span className="text-[#007BFF] font-bold text-sm">4</span>
          </div>
          <h3 className="text-base font-semibold text-slate-900">Dashboard</h3>
        </div>
        <p className="mt-2 text-sm text-slate-600">Multi-site views, reports (PDF/XLS), validation & exports.</p>
      </div>
    </div>
  </div>
</section>
{/* Product Overview */}
<section id="overview" className="bg-white border-t">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        Product <span className="text-[#007BFF]">Overview</span>
      </h2>
      <p className="mt-2 text-slate-600">Everything you need — from sensors to the cloud.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Cloud Loggers */}
      <a href="#cloud-loggers" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <path d="M4 8c4 6 12 6 16 0" strokeWidth="2" strokeLinecap="round"/>
              <rect x="5" y="10" width="14" height="8" rx="2" strokeWidth="2"/>
              <circle cx="12" cy="14" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Cloud Loggers</h3>
            <p className="mt-1 text-sm text-slate-600">Always-on temperature/RH with secure cloud sync.</p>
          </div>
        </div>
      </a>

      {/* Nodes & Gateways */}
      <a href="#nodes-gateways" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <circle cx="6" cy="12" r="2" strokeWidth="2" />
              <circle cx="12" cy="6" r="2" strokeWidth="2" />
              <circle cx="18" cy="12" r="2" strokeWidth="2" />
              <path d="M8 12h4M12 8v4M14 12h4" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Nodes & Gateways</h3>
            <p className="mt-1 text-sm text-slate-600">LoRa / RS-485 / 4G to bridge sensors to cloud.</p>
          </div>
        </div>
      </a>

      {/* Controllers */}
      <a href="#controllers" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <rect x="4" y="7" width="16" height="10" rx="2" strokeWidth="2" />
              <path d="M9 10v4M12 9v6M15 11v2" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Controllers</h3>
            <p className="mt-1 text-sm text-slate-600">Single/dual compressor control with alarms.</p>
          </div>
        </div>
      </a>

      {/* Sensors */}
      <a href="#sensors" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <path d="M12 6v12M8 10v4M16 9v6" strokeWidth="2" />
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Sensors</h3>
            <p className="mt-1 text-sm text-slate-600">NABL traceable temperature & humidity sensors.</p>
          </div>
        </div>
      </a>

      {/* Services */}
      <a href="#services" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <path d="M7 7h10v10H7z" strokeWidth="2" />
              <path d="M7 12h10M12 7v10" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Services</h3>
            <p className="mt-1 text-sm text-slate-600">Mapping, PQ validation, calibration & SOPs.</p>
          </div>
        </div>
      </a>

      {/* Cloud Platform */}
      <a href="#cloud-platform" className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#007BFF]" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="8" strokeWidth="2" />
              <path d="M8 12h8M12 8v8" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#007BFF]">Cloud Platform</h3>
            <p className="mt-1 text-sm text-slate-600">Dashboards, alerts, audit trails & reports.</p>
          </div>
        </div>
      </a>
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
          A secure, multi-tenant platform that centralizes your sites, devices, alarms, and reports —
          with audit-ready trails for 21 CFR and workflows for WHO PQ mapping.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
            Real-time dashboards: sites, rooms, sensors, alarm status
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
            Alerts via Email/SMS/WhatsApp with escalation policies
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
            Audit trails & e-sign (21 CFR–ready), user roles & permissions
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
            WHO PQ: empty/loaded mapping, defrost, uniformity, reports
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#007BFF]" />
            PDF/XLS exports, APIs & webhooks, Modbus/RS-485 integrations
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center rounded-xl bg-[#007BFF] px-4 py-2.5 text-white font-medium hover:opacity-90 shadow">
            Request a demo
          </a>
          <a href="#downloads" className="inline-flex items-center rounded-xl px-4 py-2.5 border font-medium hover:bg-white">
            Platform datasheet
          </a>
        </div>
      </div>


      {/* Visual */}
      <div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/cloud-platform.png"     /* put your image in /public; fallback below */
            alt="CoolGuard Cloud Platform"
            className="w-full h-[360px] md:h-[420px] object-cover"
            onError={(e) => { e.currentTarget.src = "/coolguard-dashboard.png"; }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-900/0 to-blue-600/10" />
        </div>

        {/* Small feature chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Dashboards", "Alerts", "Audit Trails", "Mapping PQ", "Reports", "APIs & Webhooks"].map((t) => (
            <span key={t} className="text-xs rounded-full border bg-white px-3 py-1 text-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
{/* Trusted By – premium style */}
<section id="trusted-by" className="bg-slate-50 border-t">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-center text-sm md:text-base font-semibold tracking-[0.18em] text-slate-500 uppercase">
      Trusted by leading cold chain and manufacturing brands
    </h2>

    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {[
        { src: "tci.png", alt: "TCI Cold Chain" },
        { src: "tataadvanced.png", alt: "Tata Advanced Systems" },
        { src: "Sneha.png", alt: "Sneha Fresh Chicken" },
        { src: "jwl.png", alt: "JWL Cold Store" },
        { src: "Haano.png", alt: "Haano Foods" },
        { src: "Gulfprocessing.png", alt: "Gulf Processing Industries" },
        { src: "Swiggy.png", alt: "Swiggy" },
        { src: "Hilti.png", alt: "Hilti" },
        { src: "qatarmeat.png", alt: "Qatar Meat" },
        { src: "khalid scientific.png", alt: "Khalid Scientific" },
        { src: "omanfisheries.png", alt: "Oman Fisheries" },
        { src: "shalimar.png", alt: "Shalimar Group" },
      ].map((logo) => (
        <div
          key={logo.src}
          className="flex items-center justify-center rounded-xl bg-white/80 px-3 py-3 shadow-sm"
        >
          <img
            src={`/logos/${logo.src}`}
            alt={logo.alt}
            className="
              h-12 md:h-14 w-auto object-contain
              filter grayscale opacity-80
              hover:grayscale-0 hover:opacity-100
              transition duration-200
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Cloud Loggers (anchor only; populate later if you want a separate section) */}
      <section id="cloud-loggers" className="py-1" aria-hidden="true"></section>

      {/* Nodes & Gateways (anchor only) */}
      <section id="nodes-gateways" className="py-1" aria-hidden="true"></section>

      {/* Controllers grid (existing) */}
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

          {/* Category pills */}
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

          {/* Cards */}
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

      {/* Sensors (anchor only; optional real content later) */}
      <section id="sensors" className="py-1" aria-hidden="true"></section>
/*
      {/* Services */}
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
      </section>*/
      {/* Downloads ... your existing section ends here */}

      {/* Downloads */}
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
              <div>Need help? <a className="text-blue-600 hover:underline" href="mailto:support@coolguard.cloud">support@coolguard.cloud</a></div>
              <div className="mt-1">© {new Date().getFullYear()} CoolGuard</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
