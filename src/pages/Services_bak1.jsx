import React from "react";

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0055CC]/80">
    {children}
  </p>
);

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#E6F0FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-10 items-start">
            {/* Text */}
            <div className="flex-1">
              <SectionLabel>CoolGuard Services</SectionLabel>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2">
                Mapping, Calibration &amp; Validation — end-to-end services for
                your cold chain.
              </h1>
              <p className="mt-3 text-sm md:text-base text-slate-700 max-w-xl">
                We don’t just supply hardware and software — we help you map
                your rooms, calibrate sensors and hand over full validation
                documentation ready for audit.
              </p>

              {/* Quick badges */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <Badge>Cold room mapping</Badge>
                <Badge>Sensors &amp; gateway calibration</Badge>
                <Badge>IQ / OQ style validation reports</Badge>
              </div>
            </div>

            {/* Simple visual illustration */}
            <div className="w-full max-w-sm mx-auto md:mx-0">
              <div className="rounded-3xl bg-[#E6F0FF] border border-[#cfe0ff] p-5">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055CC]/80 mb-3">
                  Visual Layout
                </p>
                <ColdRoomLayout />
                <p className="mt-3 text-[11px] text-slate-500">
                  Example: sensor placement and gateway location visualised for
                  a 4-room cold storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICE CARDS */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5 mb-6">
            Service packages designed for QA, engineering &amp; operations teams
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Room Mapping Study"
              tag="Before installation"
              points={[
                "Site survey and asset listing",
                "Sensor count & placement plan",
                "Simple layout diagram for each room",
              ]}
            />
            <ServiceCard
              title="Calibration &amp; Commissioning"
              tag="During installation"
              points={[
                "On-site sensor verification against reference meter",
                "Logger, gateway and alarm checks",
                "Basic training for local team",
              ]}
            />
            <ServiceCard
              title="Validation &amp; Documentation"
              tag="After go-live"
              points={[
                "Snapshot reports & trend charts",
                "Exception & excursion summary",
                "Audit-ready PDF pack for QA/Compliance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STRIP */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <SectionLabel>Process</SectionLabel>
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 mt-1">
                  How a typical CoolGuard service project runs
                </h2>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 max-w-sm">
                Clear steps and responsibilities — so your team always knows
                what’s happening next.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <StepPill
                step="1"
                title="Plan"
                text="Share layout, equipment list &amp; temperature ranges."
              />
              <Arrow />
              <StepPill
                step="2"
                title="Deploy"
                text="Our team installs, maps and calibrates devices."
              />
              <Arrow />
              <StepPill
                step="3"
                title="Verify"
                text="Joint checks of alarms, dashboards and reports."
              />
              <Arrow />
              <StepPill
                step="4"
                title="Handover"
                text="Final documentation, site sign-off and training."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY COOLGUARD SERVICES */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why it helps</SectionLabel>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5 mb-6">
            Visual, measurable and audit-friendly
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <ReasonCard
              title="Everyone sees the same layout"
              text="Simple diagrams make it easy for QA, maintenance and operations teams to discuss the same picture."
            />
            <ReasonCard
              title="Less text, more evidence"
              text="Trend graphs, heatmaps and exception tables say more than long reports during audits."
            />
            <ReasonCard
              title="Repeatable across sites"
              text="The same template can be used for all your plants, cold rooms and warehouses."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Want us to review your site layout?
              </h3>
              <p className="text-xs md:text-sm text-[#E0EBFF] max-w-xl">
                Send us your cold room / freezer layout and existing monitoring
                approach. We’ll suggest a mapping, calibration and validation
                plan tailored for CoolGuard.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#003b8f] shadow-sm hover:bg-[#f3f6ff] transition-colors"
            >
              Talk to CoolGuard Services
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}

/* ---------- Small helper components ---------- */

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#003b8f]">
      {children}
    </span>
  );
}

function ServiceCard({ title, tag, points }) {
  return (
    <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-sm md:text-base font-semibold text-slate-900">
          {title}
        </h3>
        <span className="inline-flex items-center rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
          {tag}
        </span>
      </div>
      <ul className="space-y-1.5 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0055CC]/70" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StepPill({ step, title, text }) {
  return (
    <div className="flex-1 rounded-2xl bg-[#F5F7FF] border border-[#d7e3ff] px-4 py-3 flex flex-col">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F0FF] text-[11px] font-semibold text-[#0055CC]">
          {step}
        </div>
        <p className="text-xs font-semibold text-slate-900">{title}</p>
      </div>
      <p className="text-[11px] md:text-xs text-slate-600">{text}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center w-6 text-slate-400 text-lg">
      →
    </div>
  );
}

function ReasonCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-[#d7e3ff] p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

/* A tiny “diagram” made only with divs — no images */
function ColdRoomLayout() {
  return (
    <div className="rounded-2xl bg-white border border-[#d7e3ff] p-3">
      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-700">
        <RoomBlock label="CR-1" sensors={3} />
        <RoomBlock label="CR-2" sensors={3} />
        <RoomBlock label="CR-3" sensors={2} />
        <RoomBlock label="CR-4" sensors={2} />
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Sensor point</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span>Nexus gateway</span>
        </div>
      </div>
    </div>
  );
}

function RoomBlock({ label, sensors }) {
  return (
    <div className="relative rounded-xl border border-[#d7e3ff] bg-[#F5F7FF] p-2 h-20 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[10px] text-slate-600">
        <span className="font-semibold text-slate-800">{label}</span>
        <span className="inline-flex items-center rounded-full bg-white px-1.5 py-0.5 border border-[#d7e3ff] text-[9px]">
          {sensors} sensors
        </span>
      </div>
      <div className="flex justify-between items-end">
        {/* sensor dots */}
        <div className="flex gap-1.5">
          {Array.from({ length: sensors }).map((_, idx) => (
            <span
              key={idx}
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(16,185,129,0.2)]"
            />
          ))}
        </div>
        {/* gateway dot */}
        <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_0_2px_rgba(56,189,248,0.25)]" />
      </div>
    </div>
  );
}
