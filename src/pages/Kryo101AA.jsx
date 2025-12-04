// src/pages/products/Kryo101AA.jsx
import React from "react";
import {
  Gauge,
  RadioTower,
  Thermometer,
  PlayCircle,
  Download,
  Cpu,
} from "lucide-react";

export default function Kryo101AA() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO SECTION WITH COLD STORAGE BACKGROUND */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff] border-b">
        {/* SOFT GLOWS */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] items-center">
            {/* LEFT TEXT SIDE */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Kryo-100 Series
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">
                2-Channel Cloud Logger
              </h1>

              <p className="text-xs font-medium text-slate-500 mb-4">
                Kryo-101-AA — Real time chamber temperature monitoring
              </p>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
               Designed for small walk-in chillers (positive chambers) and walk-in freezers (negative chambers),
this 2-channel cloud logger enables precise temperature monitoring with real-time cloud alerts and compliant temperature logging.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: "Temperature / Humidity", icon: Cpu },
                  { label: "24X7 cloud logging", icon: RadioTower },
                  { label: "Instant SMS / App Alerts", icon: Thermometer },
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

              {/* BULLET FEATURES */}
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 mb-7">
                {[
                  [
                    "Tri-Channel Sensor Architecture",
                    "Dual temperature channels paired with a dedicated humidity channel deliver precise environmental profiling for controlled chambers..",
                  ],
                  [
                    "Local I/O Expandability",
                    "Supports optional local display integration and hooter activation, enabling on-premise alerting and operator notifications.",
                  ],
                  [
                    "Cloud-Native Telemetry",
                    "GSM/GPRS uplink provides uninterrupted data streaming to CoolGuard Cloud for analytics, alerting, and remote diagnostics.",
                  ],
                  [
                    "Fail-Safe Data Buffering",
                    "Non-volatile local memory ensures zero data loss during power or network disruptions, with automatic re-sync upon recovery.",
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
                  href="/datasheets/kryo-101-aa.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  <Download size={18} />
                  Download Datasheet
                </a>
              </div>
            </div>

            {/* RIGHT — IMAGE WITH COLD STORAGE BACKDROP */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow behind card */}
              <div className="pointer-events-none absolute inset-0 translate-y-6 translate-x-4 rounded-[3rem] bg-sky-300/35 blur-3xl opacity-70" />

              <div
                className="relative w-full max-w-md lg:max-w-lg
                           rounded-[2.5rem] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.28)]
                           border border-[#dde8ff] overflow-hidden"
              >
                {/* Top label */}
                <div className="absolute top-5 left-6 z-20 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  2 Channel Cloud Logger
                </div>

                {/* Inner background + overlay */}
                <div className="relative inset-0 px-6 pt-10 pb-8">
                  <div className="relative rounded-[2rem] overflow-hidden">
                    {/* Cold room background */}
                    {/* <img
                      src="/images/products/kryo-hero.png"
                      alt="Cold storage background"
                      className="w-full h-full object-cover scale-105"
                    /> */}
                    {/* Dark gradient overlay so device pops */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/45 via-slate-900/18 to-transparent" />

                    {/* Device image */}
                    <div className="relative z-10 flex items-center justify-center py-6">
                      <img
                        src="/images/products/kryo-device.png"
                        alt="Kryo-101-AA Cloud Logger"
                        className="max-h-[260px] w-auto drop-shadow-[0_22px_46px_rgba(15,23,42,0.55)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom spec line */}
                <div className="relative z-20 px-6 pb-5 text-[10px] text-slate-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-sky-400" />
                  Dual Temperature + Humidity Inputs • Local Display & Hooter Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE IT FITS / APPLICATIONS */}
      <section className="bg-white border-b border-[#e4ecff] py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
            Typical Deployments
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Where Kryo-101-AA is a perfect fit
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Pharmaceutical Walk-In Chambers",
                desc: "Positive and negative temperature cold rooms used for vaccines, APIs, intermediates, and finished goods.",
              },
              {
                title: "Food & Beverage Walk-In Rooms",
                desc: "Chillers and freezer rooms for dairy, meat, produce, confectionery, and ingredient storage",
              },
              {
                title: "Small Cold Storage Enclosures",
                desc: "Compact cold storage chambers in warehouses and retail facilities where precise chamber & product monitoring is essential.",
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
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
    Key Capabilities
  </p>
  <h2 className="text-2xl font-semibold text-slate-900 mb-10">
    What Kryo-101-AA brings to your cold chain
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* CARD 1 */}
    <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        Precision Environmental Insight
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        Dual temperature channels and a dedicated humidity input provide
        deeper diagnostics of chamber behavior and product safety in walk-in
        chillers and freezers.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>❄️ Identifies temperature variation & stratification patterns</li>
        <li>❄️ Tracks RH stability for moisture-sensitive products</li>
        <li>❄️ Supports chamber qualification & validation studies</li>
      </ul>
    </div>

    {/* CARD 2 */}
    <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        Assured Data Continuity & Sync
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        Ensures uninterrupted logging through intermittent power or GSM
        issues, maintaining complete data integrity across operations.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>❄️ Onboard memory prevents data loss during outages</li>
        <li>❄️ Automatic cloud sync when connectivity restores</li>
        <li>❄️ Stable operation even under fluctuating network conditions</li>
      </ul>
    </div>

    {/* CARD 3 */}
    <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        Intelligent Alerts & Compliance Reporting
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        Provides timely notifications and audit-ready logs to support GMP,
        WHO, and food-safety compliance needs.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>❄️ Per-channel threshold & excursion-time monitoring</li>
        <li>❄️ Detailed deviation history for QA investigations</li>
        <li>❄️ Records always available for audits & regulatory checks</li>
      </ul>
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
            Kryo-101-AA at a glance
          </h2>

          <div className="overflow-hidden rounded-2xl border border-[#dde8ff] bg-[#f9fbff]">
            <div className="grid md:grid-cols-2 text-xs text-slate-700">
              <div className="border-b md:border-b-0 md:border-r border-[#dde8ff] p-4 space-y-2">
                <SpecRow label="Channels" value="2 temperature + 1 humidity inputs" />
                <SpecRow
                  label="Sensor type"
                  value="Based on configuration – PT100 / RTD probes"
                />
                <SpecRow
                  label="Logging interval"
                  value="Configurable (e.g., 1–15 minutes)"
                />
                <SpecRow
                  label="On-board memory"
                  value="Buffer for offline logging during network failure"
                />
              </div>
              <div className="p-4 space-y-2">
                <SpecRow
                  label="Connectivity"
                  value="GSM/GPRS to CoolGuard Cloud"
                />
                <SpecRow
                  label="Power"
                  value="24 VDC (typical) – see datasheet for exact range"
                />
                <SpecRow
                  label="Enclosure"
                  value="Compact wall-mountable module"
                />
                <SpecRow
                  label="Environment"
                  value="Designed for industrial cold-room installations"
                />
              </div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            *For full electrical and mechanical details, please refer to the
            Kryo-101-AA datasheet.
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
                How Kryo-101-AA fits into the CoolGuard ecosystem
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                The device sits between your field temperature sensors and the
                CoolGuard Cloud, giving operations, quality and management teams
                a single, reliable source of truth.
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Sensors from cold rooms are
                    wired into the 2+1 channels on Kryo-101-AA.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Data is transmitted over GSM/GPRS to the CoolGuard Cloud
                    platform in near real-time.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Users access dashboards, alerts and reports from the web
                    portal and mobile app.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-dashed border-[#cfe0ff] bg-white p-5 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">
                Typical wiring overview
              </p>
              <ol className="space-y-1.5 list-decimal list-inside mb-3">
                <li>Mount Kryo-101-AA outside the cold room near the door.</li>
                <li>Route sensor cables from chambers / freezers to the logger.</li>
                <li>
                  Connect power supply and GSM antenna at a location with good
                  signal.
                </li>
                <li>
                  Configure channels, limits and site details in the CoolGuard
                  Cloud portal.
                </li>
              </ol>
              <p className="text-[11px] text-slate-500">
                A detailed wiring & commissioning guide can be shared as part of
                the project documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA STRIP
      <section className="mt-0 bg-white border-t border-[#e4ecff] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Ready to pair Kryo-101-AA with the CoolGuard Cloud platform?
            </p>
            <p className="text-xs text-slate-600">
              Talk to us about mapping, installation and validation for your
              cold rooms and freezers.
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

/* small helper for the spec table */
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
