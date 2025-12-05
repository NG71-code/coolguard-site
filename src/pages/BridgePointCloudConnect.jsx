// src/pages/BridgePointCloudConnect.jsx
import React from "react";
import {
  Cpu,
  Network,
  RadioTower,
  Cloud,
  Smartphone,
  SlidersHorizontal,
  Bell,
  BarChart3,
  ShieldCheck,
  Download,
} from "lucide-react";

export default function BridgePointCloudConnect() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff]">
        {/* soft glow blobs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
          <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center">
            {/* Left: text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#0055cc] mb-4">
                BridgePoint BCC-100 Series
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                BridgePoint CloudConnect
                <span className="block text-xl md:text-2xl font-normal text-slate-700 mt-2">
                  RS-485 Gateway for Controllers to CoolGuard Cloud
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mb-6">
                The BCC-100 Series is a modular IoT gateway that connects
                cold room controllers over RS-485 / Modbus and streams
                real-time data to the CoolGuard Cloud for centralized
                monitoring, reporting, analytics, and alerts – across
                single sites or multi-facility deployments.
              </p>

              {/* Key badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100">
                  <Network className="w-3.5 h-3.5" />
                  RS-485 / Modbus RTU
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
                  <Cloud className="w-3.5 h-3.5" />
                  CoolGuard Cloud + API
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-amber-100">
                  <RadioTower className="w-3.5 h-3.5" />
                  GSM / Ethernet Connectivity
                </span>
              </div>

              {/* Bullets */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3">
                  <div className="mt-1">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Native controller integration
                    </p>
                    <p className="text-xs text-slate-600">
                      Reads temperature, alarms, door status and more directly
                      from compatible cold room controllers via Modbus.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1">
                    <BarChart3 className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Single view of all chambers
                    </p>
                    <p className="text-xs text-slate-600">
                      Consolidate multiple rooms, floors or sites into one
                      cloud dashboard with alerts and audit-ready logs.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#0055cc] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-200 hover:bg-[#0042a3] transition-colors">
                  <Smartphone className="w-4 h-4" />
                  Schedule a technical demo
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Download BCC-100 overview (PDF)
                </button>
                <p className="w-full text-[11px] md:text-xs text-slate-500 mt-1">
                  Ideal for: pharma cold rooms, food distribution centers, walk-in
                  freezers, blast freezers &amp; central plants.
                </p>
              </div>
            </div>

            {/* Right: device / architecture image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-100 via-white to-indigo-50 blur-xl opacity-80" />
              <div className="relative rounded-[28px] bg-white border border-slate-200 shadow-xl shadow-sky-100 px-8 py-10 flex flex-col items-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 border border-sky-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-medium text-sky-800">
                    Online · Controllers streaming data to CoolGuard Cloud
                  </span>
                </div>
                <img
                  src="/images/products/bphero.png"
                  alt="BridgePoint CloudConnect – BCC-100 Gateway"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] object-contain mb-4"
                />
                <p className="text-xs text-slate-500 text-center max-w-xs">
                  Representative diagram. Replace with final BridgePoint
                  CloudConnect gateway / architecture visual under{" "}
                  <span className="font-mono text-[11px]">
                    /images/products/bridgepoint-bcc100.png
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODELS / EDITIONS */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
                BCC-100 Series Editions
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Scalable gateways for every facility size
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Choose the right edition based on the number of cold room
                controllers at your site. All models run the same firmware and
                integrate with the same CoolGuard Cloud platform.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <EditionCard
              title="BCC-101-4"
              subtitle="Zone Edition"
              tag="Up to 4 controllers"
              description="Compact gateway for small plants, pilot deployments, or single-zone projects."
            />
            <EditionCard
              title="BCC-101-8"
              subtitle="Facility Edition"
              tag="Up to 8 controllers"
              description="Ideal for multi-chamber sites where several cold rooms and freezers share one plant."
              highlighted
            />
            <EditionCard
              title="BCC-101-16"
              subtitle="Enterprise Edition"
              tag="Up to 16 controllers"
              description="Enterprise-grade gateway for large campuses and high-density cold storage hubs."
            />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE OVERVIEW */}
      <section className="border-b bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
                System architecture
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                From controller RS-485 bus to cloud dashboards
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                BridgePoint CloudConnect sits between your existing cold room
                controllers and the CoolGuard Cloud, acting as a secure, always-on
                data bridge.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <FeatureCard
              icon={Network}
              title="Controller interface"
              description="Connects to industry standard controllers via RS-485 / Modbus RTU. Reads key registers such as temperature, alarms, door, defrost, compressor status, and more*."
              pill="Field side"
            />
            <FeatureCard
              icon={RadioTower}
              title="IoT data gateway"
              description="Polls data at configured intervals and pushes to the cloud using GSM, Ethernet or future optional connectivity modes."
              pill="Gateway layer"
            />
            <FeatureCard
              icon={Cloud}
              title="CoolGuard Cloud platform"
              description="Provides dashboards, trend graphs, reports, alerts, mobile access and APIs to integrate with ERP or quality systems."
              pill="Cloud side"
            />
          </div>

          <p className="text-[11px] text-slate-500 mt-4">
            *Available data points depend on the connected controller model and
            supported Modbus register map.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
                Key capabilities
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Built for real-world cold room operations
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Move from local controller displays to centralized, multi-site
                visibility – without replacing your existing equipment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <FeatureCard
              icon={Cpu}
              title="Plug-and-play RS-485 integration"
              description="Quickly wire into the existing Modbus RS-485 bus of compatible cold room controllers."
            />
            <FeatureCard
              icon={SlidersHorizontal}
              title="Flexible polling intervals"
              description="Configure data intervals from 1 to 15 minutes depending on application and bandwidth requirements."
            />
            <FeatureCard
              icon={Bell}
              title="Smart alarms &amp; alerts"
              description="Receive email / SMS / app notifications for temperature excursions, controller alarms and communication failures."
            />
            <FeatureCard
              icon={BarChart3}
              title="Compliance-ready reporting"
              description="Generate temperature and alarm logs for audits and quality documentation in a few clicks."
            />
            <FeatureCard
              icon={Cloud}
              title="API &amp; integrations"
              description="Optional REST APIs make it easier to feed data into SAP / ERP / QMS or custom analytics systems."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Energy integration option"
              description="Can be combined with energy meters for unified temperature + energy dashboards and benchmarking."
            />
          </div>
        </div>
      </section>

      {/* TECH SPECS + NOTICE */}
      <section className="border-b bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
                Technical specification
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                BridgePoint CloudConnect — BCC-100 Series
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Use this section as a reference for proposals, engineering
                drawings and qualification documents. Update values as final
                hardware decisions are frozen.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {/* Column 1 */}
            <div className="space-y-3">
              <SpecItem label="Models" value="BCC-101-4, BCC-101-8, BCC-101-16" />
              <SpecItem
                label="Controller capacity"
                value="4 / 8 / 16 RS-485 controller channels (as per model)"
              />
              <SpecItem
                label="Controller interface"
                value="RS-485, Modbus RTU (2-wire, half-duplex)"
              />
              <SpecItem
                label="Data points"
                value="Temperature, setpoint, alarms, door, defrost, compressor status*"
              />
              <SpecItem
                label="Polling interval"
                value="Configurable; typical 5–10 minutes, optional 1 minute"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <SpecItem
                label="Uplink connectivity"
                value="GSM (4G/2G fallback) / Ethernet (where available)"
              />
              <SpecItem
                label="Cloud platform"
                value="CoolGuard IoT – multi-site dashboard &amp; mobile app"
              />
              <SpecItem
                label="Alerts"
                value="Email, SMS &amp; in-app notifications via CoolGuard Cloud"
              />
              <SpecItem
                label="Local buffering"
                value="On-board storage for several days of readings in case of network loss"
              />
              <SpecItem
                label="Power supply"
                value="External power adaptor; surge protection as per design*"
              />
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <SpecItem
                label="Mounting"
                value="Panel / wall-mount indoor enclosure near controller panel"
              />
              <SpecItem
                label="Operating environment"
                value="+0°C to +50°C, indoor electrical room or panel room"
              />
              <SpecItem
                label="Integration options"
                value="REST APIs / exports for ERP, SAP, QMS systems*"
              />
              <SpecItem
                label="Typical applications"
                value="Cold rooms, walk-in freezers, blast freezers, ripening chambers, central plants"
              />
              <SpecItem
                label="Data compatibility notice"
                value="Only data points available and supported on the controller’s Modbus map are captured."
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-4">
            *To be finalized based on the selected controller makes, site
            engineering design and customer integration requirements.
          </p>

          {/* Highlight notice box */}
          <div className="mt-8 rounded-2xl bg-[#eef5ff] border border-[#cfe0ff] p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Data Compatibility Notice
            </h3>
            <p className="text-xs md:text-sm text-gray-700">
              BridgePoint CloudConnect captures only the data points that are
              supported and exposed by the connected controller. Custom or
              proprietary registers will not be processed unless they are
              explicitly implemented as part of a dedicated integration or
              project-specific Modbus map.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOADS & DOCUMENTS */}
      {/* <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-2">
                Documentation &amp; downloads
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Hand-over packs for engineering &amp; QA teams
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Link each item below to your finalized PDFs so that customers
                have a clean, self-contained handover bundle.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <DownloadCard
              title="BridgePoint CloudConnect – BCC-100 Datasheet"
              description="One-pager covering models, capacity, connectivity and key specifications."
              href="#"
            />
            <DownloadCard
              title="Installation &amp; Wiring Guide"
              description="Panel wiring, RS-485 bus topology, grounding and GSM / Ethernet setup."
              href="#"
            />
            <DownloadCard
              title="CoolGuard Cloud – Controller Integration Guide"
              description="Explains how controller tags, alarms and sites are configured in the platform."
              href="#"
            />
          </div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      {/* <section className="bg-gradient-to-r from-[#0055cc] via-[#0042a3] to-[#022b62]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-100 mb-2">
                Ready to connect your controllers to the cloud?
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2">
                Start with a BridgePoint CloudConnect pilot.
              </h2>
              <p className="text-sm text-sky-100 max-w-xl">
                Enable a few critical cold rooms, validate data and alarms with
                your engineering and QA teams, and then roll out across all
                facilities – without replacing your existing controllers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0055cc] shadow-md shadow-sky-900/40 hover:bg-slate-50 transition-colors">
                Book a consultation
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-transparent border border-sky-200/60 px-4 py-2.5 text-xs md:text-sm font-medium text-sky-50 hover:bg-white/5 transition-colors">
                Download solution overview
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

/* ---------- Helper components (same style as Frigo/Kryo pages) ---------- */

function FeatureCard({ icon: Icon, title, description, pill }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
          <Icon className="w-4.5 h-4.5 text-[#0055cc]" />
        </div>
        {pill && (
          <span className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-full px-2 py-0.5">
            {pill}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

function SpecItem({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-sm text-slate-800">{value}</span>
    </div>
  );
}

function DownloadCard({ title, description, href }) {
  return (
    <a
      href={href}
      className="group h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm hover:shadow-md hover:border-[#0055cc] transition-all flex flex-col justify-between"
    >
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-[#0055cc]">
          {title}
        </h3>
        <p className="text-xs text-slate-600 mb-3">{description}</p>
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-[#0055cc]">
        <Download className="w-4 h-4" />
        <span>Download PDF</span>
      </div>
    </a>
  );
}

function EditionCard({ title, subtitle, tag, description, highlighted }) {
  return (
    <div
      className={`h-full rounded-2xl border p-6 shadow-sm bg-white ${
        highlighted
          ? "border-[#0055cc] shadow-sky-100 ring-1 ring-sky-100"
          : "border-[#cfe0ff]"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-[#003b8f]">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <span className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-2 py-0.5">
          {tag}
        </span>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
