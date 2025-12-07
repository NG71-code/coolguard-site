// src/pages/products/Kryo101CC.jsx
import React from "react";
import {
  Waves,
  Thermometer,
  RadioTower,
  Cpu,
  Download,
  PlayCircle,
} from "lucide-react";

export default function Kryo101CC() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-4">
      {/* HERO – CloudPlatform-style */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff]">
        {/* soft highlight in the corner */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] items-center">
            {/* LEFT – TEXT BLOCK */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-sky-500 mb-2">
                Kryo-100 Series
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-2">
                8-Channel Cloud Logger
              </h1>

              <p className="text-xs font-medium text-slate-500 mb-4">
                KR-101-CC &mdash; 8-Channel Cluster Cloud Logger
              </p>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                8-channel cloud logger designed for clusters of walk-in chillers,
                freezers and cold rooms located in the same plant room, corridor
                or cold storage block. Supports flexible combinations of
                temperature, humidity and optional CO₂ / ammonia sensors so
                multiple chambers can be monitored through a single device and a
                single CoolGuard cloud connection.
              </p>

              {/* TAG PILLS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: "Up to 8 Inputs", icon: Cpu },
                  { label: "Temp + RH + Gas", icon: Thermometer },
                  { label: "GSM-GPRS Cloud", icon: RadioTower },
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

              {/* FEATURE BULLETS */}
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 mb-7">
                {[
                  [
                    "Clustered Multi-Room Coverage",
                    "Monitor up to 8 sensing points across several adjacent walk-in chillers, freezers or potato cold rooms using a single cloud logger.",
                  ],
                  [
                    "Flexible Sensor Combinations",
                    "Mix temperature, humidity and gas channels—for example 4× temperature, 2× RH, 1× CO₂ and 1× ammonia—based on site design.",
                  ],
                  [
                    "Single Uplink, Shared Visibility",
                    "Use one SIM and one device for a group of chambers, simplifying connectivity, cabling and ongoing service management.",
                  ],
                  [
                    "Engineered for 24×7 Operation",
                    "Continuous logging with local buffering and automatic cloud sync helps ensure uninterrupted records for QA and audits.",
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
                  href="#contact" // adjust if you have a specific demo/contact anchor
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.55)] hover:bg-sky-400 transition-colors"
                >
                  <PlayCircle size={18} className="text-sky-50" />
                  Request a Demo
                </a>
                <a
                  href="/docs/Kryo-101-CC-datasheet.pdf" // update to your actual file path
                  className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  <Download size={18} />
                  Download Datasheet
                </a>
              </div>
            </div>

            {/* RIGHT – PRODUCT MOCKUP CARD (BG + DEVICE OVERLAY) */}
            <div className="relative flex justify-center lg:justify-end">
              {/* glow behind card */}
              <div className="pointer-events-none absolute inset-0 translate-y-6 translate-x-4 rounded-[3rem] bg-sky-300/35 blur-3xl opacity-70" />

              <div
                className="relative w-full max-w-md lg:max-w-lg
                           rounded-[2.5rem] bg-white shadow-[0_28px_90px_rgba(15,23,42,0.28)]
                           border border-[#dde8ff] overflow-hidden"
              >
                {/* top label */}
                <div className="absolute top-4 left-6 text-[10px] uppercase tracking-[0.22em] text-slate-400 z-20">
                  CoolGuard Cloud Logger
                </div>

                {/* background + device overlay */}
                <div className="relative mx-6 my-8 rounded-[2rem] overflow-hidden">
                  {/* background image (cold room / racks / potato storage) */}
                  <img
                    src="/images/products/8channelbg.png" // background only
                    alt="Kryo-101-CC cold room cluster environment"
                    className="w-full h-full object-cover"
                  />

                  {/* light gradient so device pops */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-slate-900/5 to-transparent" />

                  {/* device render on top */}
                  <img
                    src="/images/products/kryo-101-cc-device.png"
                    alt=""
                    className="absolute inset-0 m-auto w-[55%] max-w-[260px] drop-shadow-[0_22px_46px_rgba(15,23,42,0.55)]"
                  />
                </div>

                {/* bottom spec line */}
                <div className="px-6 pb-5 flex items-center gap-2 text-[10px] text-slate-500">
                  <Waves size={14} className="text-sky-500" />
                  GSM / GPRS • 8 Channels • Cloud Connected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES / DEPLOYMENT / CONNECTIVITY */}
      <section className="bg-white py-8 border-b border-[#e4ecff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
            Kryo-101-CC · Key capabilities &amp; deployment
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-6">
            Built for clustered cold rooms, potato storage and multi-parameter monitoring
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Key Capabilities */}
            <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                Key Capabilities
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Designed to capture a complete environmental picture across
                several rooms from a single control point.
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                <li>❄️ Up to 8 sensor inputs for clustered chambers</li>
                <li>❄️ Mix of temperature, RH, CO₂ and ammonia (NH₃) channels*</li>
                <li>❄️ Suitable for long-duration potato and agri storage</li>
                <li>❄️ Supports local display and hooter for on-site indication</li>
              </ul>
            </article>

            {/* Deployment Scenarios */}
            <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                Deployment Scenarios
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Optimised for locations where multiple cold rooms share the same
                service corridor, plant room or utility area.
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                <li>❄️ Potato cold stores with multiple chambers in one block</li>
                <li>❄️ Clusters of walk-in chillers and freezers on a single floor</li>
                <li>❄️ Small cold storage facilities with 3–6 rooms side by side</li>
                <li>❄️ Sites standardising on one logger per cluster instead of per room</li>
              </ul>
            </article>

            {/* Connectivity & Interfaces */}
            <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                Connectivity &amp; Interfaces
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Combines field-side flexibility with cloud-native visibility and
                on-site alarms.
              </p>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                <li>❄️ GSM / GPRS uplink to CoolGuard Cloud</li>
                <li>❄️ Local display option for at-a-glance readings near the rooms</li>
                <li>❄️ Hooter / alarm output for immediate on-site alerts</li>
                <li>❄️ Cloud dashboards, alerts and reports accessible via web &amp; mobile</li>
              </ul>
            </article>
          </div>

          <p className="mt-4 text-[11px] text-slate-400">
            *Final sensor mix and gas sensor compatibility depend on the approved
            project design and hardware configuration.
          </p>
        </div>
      </section>

      {/* KEY USE-CASES / VALUE SECTION */}
      <section className="bg-white py-10 border-b border-[#e4ecff]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* MATCHED HEADING STYLE */}
    <p className="text-sm font-semibold tracking-[0.26em] uppercase text-[#0055cc] mb-2">
      Typical Deployments
    </p>

    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
      Where Kryo-101-CC fits in your cold chain
    </h2>

    <p className="text-sm text-slate-600 mb-8 max-w-3xl leading-relaxed">
      Designed for sites where multiple walk-in chillers, freezers or potato cold
      rooms are located together. Combine several small chambers into one
      multi-point installation and manage them as a single cluster on the
      CoolGuard platform.
    </p>

    {/* CARDS */}
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Potato & Agri Cold Stores",
          desc: "Monitor temperature, humidity and gas levels across multiple potato chambers from one central logging point.",
        },
        {
          title: "Clustered Pharma & Food Cold Rooms",
          desc: "Ideal for multi-room pharma or food facilities where several positive and negative chambers share the same corridor.",
        },
        {
          title: "Multi-Chamber Qualification & Routine Use",
          desc: "Use one 8-channel system for multi-chamber qualification and maintain it as the permanent monitoring system for the cluster.",
        },
      ].map(({ title, desc }) => (
        <article
          key={title}
          className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
        </article>
      ))}
    </div>

  </div>
</section>

      {/* TECHNICAL HIGHLIGHTS SUMMARY */}
    <section className="bg-[#f5f7ff] pt-6 pb-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* MATCHED HEADER STYLE */}
    <p className="text-sm font-semibold tracking-[0.26em] uppercase text-[#0055cc] mb-2">
      Technical Highlights
    </p>

    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
      Quick view of Kryo-101-CC capabilities
    </h2>

    <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
      Detailed specifications are available in the datasheet. This quick view helps
      engineering and validation teams understand how Kryo-101-CC fits into multi-room
      cold storage layouts.
    </p>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-xs text-slate-700">

      {/* COLUMN 1 */}
      <div>
        <p className="font-semibold text-slate-900 mb-2">
          Channels &amp; Inputs
        </p>
        <ul className="space-y-2 pl-4">
          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>
              8 sensor inputs supporting temperature, humidity and optional CO₂ / NH₃ gas sensors
            </span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>
              Typical layouts: 4× temperature + 4× humidity, or other combinations based on site design
            </span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>
              Channel-to-room mapping in CoolGuard for clear association with chambers, racks or zones
            </span>
          </li>
        </ul>
      </div>

      {/* COLUMN 2 */}
      <div>
        <p className="font-semibold text-slate-900 mb-2">
          Connectivity &amp; Cloud
        </p>
        <ul className="space-y-2 pl-4">
          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>GSM / GPRS uplink to CoolGuard Cloud platform</span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>Automatic reconnect and background data backfill after link restoration</span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>
              Multi-chamber view, alerts and reporting on the CoolGuard dashboard
            </span>
          </li>
        </ul>
      </div>

      {/* COLUMN 3 */}
      <div>
        <p className="font-semibold text-slate-900 mb-2">
          Power, Local Interfaces &amp; Reliability
        </p>
        <ul className="space-y-2 pl-4">
          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>Designed for 24×7 operation in cold-room environments</span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>Local memory for offline logging during power or network events</span>
          </li>

          <li className="flex gap-2 leading-relaxed">
            <span className="text-slate-500">•</span>
            <span>
              Provision for local display and hooter/alarm output for on-site indication*
            </span>
          </li>
        </ul>
      </div>

    </div>

    <p className="mt-5 text-[11px] text-slate-400 leading-relaxed">
      *Final enclosure, display type and alarm wiring to be confirmed based on approved
      hardware specification and project design.
    </p>

  </div>
</section>


      {/* DEPLOYMENT & CONNECTIVITY – COOLGUARD ECOSYSTEM */}
<section className="bg-white pt-4 pb-6 border-b border-[#e4ecff]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
      Deployment & Connectivity
    </p>
    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-6">
      How Kryo-101-CC fits into the CoolGuard ecosystem
    </h2>

    <div className="grid gap-6 md:grid-cols-3">
      {/* Deployment */}
      <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Cluster Deployment</h3>
        <p className="text-xs text-slate-600 mb-3">
          Ideal for locations where multiple cold rooms share the same service corridor,
          plant room or process area.
        </p>
        <ul className="space-y-1.5 text-[11px] text-slate-700">
          <li>❄️ Potato storage blocks with 3–6 rooms in proximity</li>
          <li>❄️ Walk-in chiller + freezer clusters on the same floor</li>
          <li>❄️ Multi-chamber facilities that prefer one SIM/device per group</li>
          <li>❄️ Long-duration agri and food storages with shared utilities</li>
        </ul>
      </article>

      {/* Sensor & Input Flexibility */}
      <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Sensor Flexibility</h3>
        <p className="text-xs text-slate-600 mb-3">
          Designed to adapt to diverse environmental monitoring needs.
        </p>
        <ul className="space-y-1.5 text-[11px] text-slate-700">
          <li>❄️ Supports temperature, humidity, CO₂ and ammonia sensors*</li>
          <li>❄️ Mix any combination — e.g., 4× Temp + 4× RH or 6× Temp + 1× CO₂ + 1× NH₃</li>
          <li>❄️ Channel-to-room mapping inside CoolGuard dashboard</li>
          <li>❄️ Consistent calibration workflow across all sensors</li>
        </ul>
      </article>

      {/* Connectivity */}
      <article className="rounded-2xl border border-[#dfe8ff] bg-[#f7f9ff] p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Connectivity & Alarms</h3>
        <p className="text-xs text-slate-600 mb-3">
          Seamless integration with field devices and CoolGuard Cloud.
        </p>
        <ul className="space-y-1.5 text-[11px] text-slate-700">
          <li>❄️ GSM / GPRS uplink to CoolGuard Cloud</li>
          <li>❄️ Automatic backfill after network restoration</li>
          <li>❄️ Local display support for on-site viewing</li>
          <li>❄️ Hooter/alarm output for immediate local indication</li>
          <li>❄️ Real-time dashboards, alerts and reporting via CoolGuard mobile & web</li>
        </ul>
      </article>
    </div>

    <p className="mt-4 text-[11px] text-slate-400">
      *Final gas-sensor compatibility (CO₂/NH₃) depends on approved project design and selected hardware configuration.
    </p>
  </div>
</section>

    </main>
  );
}
