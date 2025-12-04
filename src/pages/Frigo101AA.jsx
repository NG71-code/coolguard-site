// src/pages/products/Frigo101AA.jsx
import React from "react";
import {
  Thermometer,
  RadioTower,
  Gauge,
  PlayCircle,
  Download,
  Cpu,
} from "lucide-react";

export default function Frigo101AA() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO SECTION – FREEZER / COOLER FOCUSED */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff] border-b">
        {/* Soft glows */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* LEFT – TEXT */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Frigo-100 Series
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">
                Frigo-101-AA
              </h1>

              <p className="text-xs font-medium text-slate-500 mb-4">
                FR-101-AA — Cloud Temperature Logger for Freezers &amp; Coolers
              </p>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                Frigo-101-AA is a compact cloud-connected temperature logger
                designed specifically for deep freezers, chest freezers and
                upright coolers. It continuously records temperature, sends data
                to the CoolGuard Cloud, and raises instant alerts for excursions
                &mdash; keeping your stock protected and your operation
                audit-ready.
              </p>

              {/* TAG PILLS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: "Single Probe*", icon: Cpu },
                  { label: "4G / GSM", icon: RadioTower },
                  { label: "–40°C to +60°C", icon: Thermometer },
                ].map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-sky-100 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
                  >
                    <Icon size={14} className="text-sky-500" />
                    {label}
                  </span>
                ))}
              </div>

              {/* KEY POINTS */}
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 mb-7">
                {[
                  [
                    "Purpose-built for Freezers",
                    "Ideal for –20°C and –40°C deep freezers, chest freezers and upright vaccine / food coolers.",
                  ],
                  [
                    "Always Connected to Cloud",
                    "Logs temperature locally and syncs automatically to CoolGuard Cloud.",
                  ],
                  [
                    "Instant Excursion Alerts",
                    "SMS / email / app notifications when temperature crosses limits.",
                  ],
                  [
                    "Compliance & Audit Support",
                    "Continuous records ready for WHO / GMP / internal audits.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <div className="text-xs text-slate-700">
                      <div className="font-semibold text-slate-900">
                        {title}
                      </div>
                      <div>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.55)] hover:bg-sky-400 transition-colors"
                >
                  <PlayCircle size={18} className="text-sky-50" />
                  Request a Demo
                </a>

                <a
                  href="/docs/frigo-101-aa-datasheet.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  <Download size={18} />
                  Download Datasheet
                </a>
              </div>
            </div>

            {/* RIGHT – PRODUCT HERO CARD (slightly smaller) */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow behind card */}
              <div className="pointer-events-none absolute inset-0 translate-y-5 translate-x-3 rounded-[2.5rem] bg-sky-300/35 blur-3xl opacity-60" />

              <div
                className="relative w-full max-w-sm lg:max-w-md
                           rounded-[2.3rem] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.25)]
                           border border-[#dde8ff] overflow-hidden"
              >
                {/* Top label */}
                <div className="absolute top-4 left-6 z-20 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  CoolGuard Freezer Logger
                </div>

                {/* Inner background + overlay + device */}
                <div className="relative inset-0 px-5 pt-9 pb-6">
                  <div className="relative rounded-[1.9rem] overflow-hidden">
                    {/* FREEZER BACKGROUND */}
                    <img
                      src="/images/products/frigo101aabg.png"
                      alt="Freezer / cooler background"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay so device pops */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/16 to-transparent" />

                    {/* DEVICE ON TOP OF BACKGROUND */}
                    <div className="relative z-10 flex items-center justify-center py-5">
                      <img
                        src="/images/products/aa.png"
                        alt="."
                        className="max-h-[200px] w-auto drop-shadow-[0_18px_38px_rgba(15,23,42,0.55)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom spec line */}
                <div className="relative z-20 px-6 pb-4 text-[10px] text-slate-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sky-400" />
                  –40°C to +60°C • 4G / GSM • Cloud Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE IT FITS */}
      <section className="bg-white border-b border-[#e4ecff] py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
            Typical Deployments
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Where Frigo-101-AA is a perfect fit
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Vaccine & Pharma Freezers",
                desc: "Deep freezers and vaccine fridges that must stay within tight limits.",
              },
              {
                title: "Food & Dairy Freezers",
                desc: "Walk-in freezers, chest freezers and display freezers in retail and hubs.",
              },
              {
                title: "QA & QA-monitored Coolers",
                desc: "Any temperature-sensitive cooler that needs traceable records.",
              },
            ].map(({ title, desc }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#dde8ff] bg-gradient-to-b from-[#f9fbff] to-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="bg-[#f7f9ff] border-b border-[#dde8ff] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Key Capabilities
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                What Frigo-101-AA does for your freezers &amp; coolers
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Gauge size={14} className="text-sky-500" />
              <span>Designed for continuous, unattended monitoring</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Continuous Temperature Recording",
                desc: "No gaps, no manual readings. Every minute is captured and stored.",
                bullets: [
                  "Configurable sampling interval",
                  "Secure cloud backup of readings",
                ],
              },
              {
                title: "Real-time Alerting",
                desc: "Know immediately when freezers warm up or doors are left open.",
                bullets: [
                  "High / low limits per asset",
                  "SMS / email / app alerts and escalation",
                ],
              },
              {
                title: "Audit & Compliance Support",
                desc: "Generate freezer-wise reports in a few clicks during inspections.",
                bullets: [
                  "Daily / monthly temperature reports",
                  "Excursion summary for investigations",
                ],
              },
            ].map(({ title, desc, bullets }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b 
                           from-white to-[#f3f7ff] border border-[#d7e3ff] shadow-sm 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-sky-300 opacity-70" />
                <div className="p-5 pt-6 flex flex-col h-full">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">{desc}</p>
                  <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-1.5">
                        <span className="mt-[5px] h-1 w-1 rounded-full bg-sky-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="bg-white border-b border-[#e4ecff] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
            Technical Specifications
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Frigo-101-AA at a glance
          </h2>

          <div className="overflow-hidden rounded-2xl border border-[#dde8ff] bg-[#f9fbff]">
            <div className="grid md:grid-cols-2 text-xs text-slate-700">
              <div className="border-b md:border-b-0 md:border-r border-[#dde8ff] p-4 space-y-2">
                <SpecRow label="Application" value="Freezers & coolers" />
                <SpecRow label="Temperature range" value="–40°C to +60°C" />
                <SpecRow
                  label="Channels"
                  value="Single / dual probe options*"
                />
                <SpecRow
                  label="Logging interval"
                  value="Configurable (e.g., 1–15 minutes)"
                />
              </div>
              <div className="p-4 space-y-2">
                <SpecRow
                  label="Connectivity"
                  value="4G / GSM to CoolGuard Cloud"
                />
                <SpecRow
                  label="Power / battery"
                  value="External power with battery backup (see datasheet)"
                />
                <SpecRow
                  label="Enclosure"
                  value="Compact wall / magnet mount enclosure"
                />
                <SpecRow
                  label="Environment"
                  value="Suitable for mounting near or on freezers & coolers"
                />
              </div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            *Exact options and configurations depend on the selected model /
            project. Refer to the Frigo-101-AA datasheet for final specs.
          </p>
        </div>
      </section>

      {/* DEPLOYMENT & CONNECTIVITY */}
      <section className="bg-[#f3f7ff] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr] items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Deployment & Connectivity
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                How Frigo-101-AA fits into the CoolGuard ecosystem
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                The device mounts directly on or near your freezer / cooler and
                acts as a dedicated temperature guard for that asset.
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Sensor probe installed inside the freezer or cooler, while
                    Frigo-101-AA stays outside in ambient conditions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Device sends temperature data over 4G / GSM to the CoolGuard
                    Cloud in near real-time.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Alarms and reports are configured centrally on the
                    CoolGuard platform and visible on web &amp; mobile.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-dashed border-[#cfe0ff] bg-white p-5 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">
                Typical installation steps
              </p>
              <ol className="space-y-1.5 list-decimal list-inside mb-3">
                <li>Mount Frigo-101-AA on or near the freezer / cooler.</li>
                <li>Route the probe cable into the chamber and fix the sensor.</li>
                <li>Connect power and verify network signal.</li>
                <li>
                  Register the device on CoolGuard Cloud and set temperature
                  limits.
                </li>
              </ol>
              <p className="text-[11px] text-slate-500">
                Mapping and commissioning SOPs can be shared as part of the
                project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      {/* <section className="mt-0 bg-white border-t border-[#e4ecff] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Want to standardize all your freezers on Frigo-101-AA?
            </p>
            <p className="text-xs text-slate-600">
              Talk to us about roll-out plans, calibration and cloud
              configuration for your sites.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white hover:bg-sky-400 transition-colors"
            >
              <PlayCircle size={16} />
              Talk to Sales
            </a>
            <a
              href="/cloud-platform"
              className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-5 py-2 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
            >
              View Cloud Platform
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}

/* helper for spec table */
function SpecRow({ label, value }) {
  return (
    <div className="flex gap-3">
      <span className="w-32 text-[11px] font-semibold text-slate-500">
        {label}
      </span>
      <span className="flex-1 text-[11px] text-slate-700">{value}</span>
    </div>
  );
}
