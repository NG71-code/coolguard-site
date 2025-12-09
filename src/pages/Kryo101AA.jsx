// src/pages/Kryo101AA.jsx
import React from "react";
import RequestDemoButton from "../components/RequestDemoButton.jsx";
import {
  RadioTower,
  Thermometer,
  Download,
  Cpu,
  FlaskRound,
  Milk,
  Package,
} from "lucide-react";


export default function Kryo101AA() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-8">
      {/* HERO SECTION WITH COLD STORAGE BACKGROUND */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff] border-b">
        {/* SOFT GLOWS */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr] items-center">
            {/* LEFT TEXT SIDE */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-1.5">
                Kryo-100 Series
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-1.5">
                2-Channel Cloud Logger
              </h1>

              <p className="text-xs font-medium text-slate-500 mb-3">
                Kryo-101-AA — Real time chamber temperature monitoring
              </p>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5 max-w-xl">
                Designed for small walk-in chillers (positive chambers) and
                walk-in freezers (negative chambers), this 2-channel cloud
                logger enables precise temperature monitoring with real-time
                cloud alerts and compliant temperature logging.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
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
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 mb-5">
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
                <RequestDemoButton
                  productCode="Kryo-101-AA"
                  productName="Kryo-101-AA 2-Channel Cloud Logger"
                  // optional: custom source tag
                  // source="product-page-kryo-101-aa"
                />

                <a
                  href="/docs/Kryo-101-AA-datasheet.pdf"
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
              <div className="pointer-events-none absolute inset-0 translate-y-5 translate-x-3 rounded-[3rem] bg-sky-300/35 blur-3xl opacity-70" />

              <div
                className="relative w-full max-w-md lg:max-w-lg
                           rounded-[2.5rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.26)]
                           border border-[#dde8ff] overflow-hidden"
              >
                <div className="relative inset-0 px-5 pt-8 pb-6">
                  <div className="relative rounded-[2rem] overflow-hidden">
                    {/*Cold room background*/}
                    <img
                      src="/images/products/2channelbgwithdeviceimage.png"
                      alt="Cold storage background"
                      className="w-full h-full object-cover scale-105"
                    />
                    {/* Dark gradient overlay so device pops */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/45 via-slate-900/18 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE IT FITS / APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-2">
          Typical Deployments
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Where Kryo-101-AA is a perfect fit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* CARD 1 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <FlaskRound className="w-6 h-6 text-[#0055cc]" />
              <h3 className="text-base font-semibold text-slate-900">
                Pharmaceutical Walk-In Chambers
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Positive and negative temperature cold rooms used for vaccines,
              APIs, intermediates, and finished goods.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <Milk className="w-6 h-6 text-[#0055cc]" />
              <h3 className="text-base font-semibold text-slate-900">
                Food &amp; Beverage Walk-In Rooms
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Chillers and freezer rooms for dairy, meat, produce,
              confectionery, and ingredient storage.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <div className="flex items-center gap-3 mb-2.5">
              <Package className="w-6 h-6 text-[#0055cc]" />
              <h3 className="text-base font-semibold text-slate-900">
                Small Cold Storage Enclosures
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compact cold storage chambers in warehouses and retail facilities
              where precise chamber &amp; product monitoring is essential.
            </p>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-2">
          Key Capabilities
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          What Kryo-101-AA brings to your cold chain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* CARD 1 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Precision Environmental Insight
            </h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Dual temperature channels and a dedicated humidity input provide
              deeper diagnostics of chamber behavior and product safety in
              walk-in chillers and freezers.
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>❄️ Identifies temperature variation &amp; stratification patterns</li>
              <li>❄️ Tracks RH stability for moisture-sensitive products</li>
              <li>❄️ Supports chamber qualification &amp; validation studies</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Assured Data Continuity &amp; Sync
            </h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Ensures uninterrupted logging through intermittent power or GSM
              issues, maintaining complete data integrity across operations.
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>❄️ Onboard memory prevents data loss during outages</li>
              <li>❄️ Automatic cloud sync when connectivity restores</li>
              <li>❄️ Stable operation even under fluctuating network conditions</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Intelligent Alerts &amp; Compliance Reporting
            </h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              Provides timely notifications and audit-ready logs to support
              GMP, WHO, and food-safety compliance needs.
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li>❄️ Per-channel threshold &amp; excursion-time monitoring</li>
              <li>❄️ Detailed deviation history for QA investigations</li>
              <li>❄️ Records always available for audits &amp; regulatory checks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      <section className="bg-white border-b border-[#e4ecff] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
            Technical Specifications
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
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

          <p className="mt-2 text-[11px] text-slate-500">
            *For full details, please refer to the Kryo-101-AA datasheet.
          </p>
        </div>
      </section>

      {/* DEPLOYMENT & CONNECTIVITY */}
      <section className="bg-[#f3f7ff] pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.9fr] items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Deployment &amp; Connectivity
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                How Kryo-101-AA fits into the CoolGuard ecosystem
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                The device sits between your field temperature sensors and the
                CoolGuard Cloud, giving operations, quality and management teams
                a single, reliable source of truth.
              </p>

              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Sensors from cold rooms are wired into the 2+1 channels on
                    Kryo-101-AA.
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

            <div className="rounded-3xl border border-dashed border-[#cfe0ff] bg-white p-4 text-xs text-slate-600">
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
                A detailed wiring &amp; commissioning guide can be shared as
                part of the project documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* small helper for the spec table */
function SpecRow({ label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-32 text-right text-[11px] font-semibold text-slate-600">
        {label}
      </span>

      <span className="text-slate-300">|</span>

      <span className="flex-1 text-[11px] text-slate-700">
        {value}
      </span>
    </div>
  );
}
