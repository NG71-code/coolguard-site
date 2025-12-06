// src/pages/NodesGateways.jsx
import React from "react";
import NodesArchitectureSection from "@/nodes/NodesArchitectureSection.jsx";

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0055CC]/80">
    {children}
  </p>
);

export default function NodesGateways() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-10">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#E6F0FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 md:py-10">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start">
            {/* Text */}
            <div className="flex-1">
              <SectionLabel>Nodes &amp; Gateways</SectionLabel>

              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2 mb-3">
                Smart Wireless Gateways &amp; Sensor Nodes for CoolGuard
              </h1>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-5 max-w-xl">
                Nexus wireless gateways and Enviro sensor nodes create the
                wireless capture layer of the CoolGuard platform. From cold
                rooms and deep freezers to production areas and warehouses,
                they move temperature and humidity data securely to the cloud
                in real time.
              </p>

              {/* Hero badges */}
              <div className="flex flex-wrap gap-2.5 mb-5">
                <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#003b8f]">
                  LoRa / Sub-GHz wireless
                </span>
                <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#003b8f]">
                  Cloud-connected Nexus gateways
                </span>
                <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#003b8f]">
                  Battery or mains-powered nodes
                </span>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#gateways"
                  className="inline-flex items-center justify-center rounded-full bg-[#0055CC] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0044aa] transition-colors"
                >
                  View Nexus Gateways
                </a>
                <a
                  href="#nodes"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-semibold text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  View Enviro Wireless Nodes
                </a>
              </div>
            </div>

            {/* Image / Illustration */}
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/3] rounded-3xl bg-[#E6F0FF] border border-[#cfe0ff] flex items-center justify-center overflow-hidden">
                {/* Replace with real composite image: Nexus + Enviro node */}
                <img
                  src="/images/products/nodes-gateways-hero.png"
                  alt="Nexus Gateway and Enviro Wireless Nodes"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <p className="mt-2.5 text-xs text-slate-500 text-center">
                *Representative image. Replace with final render of Nexus
                gateways and Enviro wireless nodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GATEWAYS SECTION */}
      <section id="gateways" className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <SectionLabel>Gateways</SectionLabel>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5">
                Nexus Wireless Gateways
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Smart wireless gateways that aggregate data from Enviro nodes
                and push it securely to CoolGuard Cloud over 4G or Ethernet.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Nexus Lite Gateway */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  Nexus Lite Gateway
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Smart Wireless Gateway
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-3.5">
                Compact, cost-effective gateway for small and medium sites.
                Collects data from Enviro wireless nodes and forwards it to
                CoolGuard over 4G or Ethernet.
              </p>

              <dl className="space-y-1.5 text-sm text-slate-700 mb-3.5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Typical Use</dt>
                  <dd className="font-medium text-right">
                    1–8 cold rooms / freezers
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Backhaul</dt>
                  <dd className="font-medium text-right">4G / Ethernet</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Wireless</dt>
                  <dd className="font-medium text-right">
                    LoRa / Sub-GHz to Enviro nodes
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Small cold stores
                </span>
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Retail freezers
                </span>
              </div>
            </article>

            {/* Nexus Pro Gateway */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  Nexus Pro Gateway
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#E0F2FE] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0369a1]">
                  Multi-mode Gateway
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-3.5">
                High-performance multi-mode gateway for larger facilities needing
                more nodes, redundancy and flexible connectivity options.
              </p>

              <dl className="space-y-1.5 text-sm text-slate-700 mb-3.5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Typical Use</dt>
                  <dd className="font-medium text-right">
                    Multi-room facilities &amp; plants
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Backhaul</dt>
                  <dd className="font-medium text-right">
                    4G / Ethernet / Wi-Fi*
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Key Features</dt>
                  <dd className="font-medium text-right">
                    Multi-network profiles, watchdog, local buffering
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Large cold stores
                </span>
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Processing facilities
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NODES SECTION */}
      <section id="nodes" className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <SectionLabel>Sensor Nodes</SectionLabel>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5">
                Enviro Wireless Nodes
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Battery-powered or externally powered wireless sensor nodes for
                temperature and humidity monitoring inside cold rooms, freezers
                and critical storage areas.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Enviro Wireless Node - Temp */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  Enviro Wireless Node – Temp
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#E6F0FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Temperature
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-3.5">
                Wireless temperature node for cold rooms, freezers and chillers.
                Designed for reliable sensing even in low-temperature and
                high-moisture environments.
              </p>

              <dl className="space-y-1.5 text-sm text-slate-700 mb-3.5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Measurement</dt>
                  <dd className="font-medium text-right">Temperature only</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium text-right">+60°C to −40°C*</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Power</dt>
                  <dd className="font-medium text-right">
                    Battery / external (model-wise)
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Cold rooms &amp; freezers
                </span>
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Pharma &amp; food storage
                </span>
              </div>
            </article>

            {/* Enviro Wireless Node - Temp & RH */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  Enviro Wireless Node – Temp &amp; RH
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#ECFEFF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0e7490]">
                  Temperature &amp; Humidity
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-3.5">
                Wireless sensor node for applications where both product
                temperature and ambient humidity are critical for quality and
                compliance.
              </p>

              <dl className="space-y-1.5 text-sm text-slate-700 mb-3.5">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Measurement</dt>
                  <dd className="font-medium text-right">Temperature + RH</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium text-right">
                    Temp: +60°C to −40°C*, RH: 0–100%*
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Ideal For</dt>
                  <dd className="font-medium text-right">
                    Pharma, seeds, high-value storage
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Pharma warehouses
                </span>
                <span className="inline-flex rounded-full bg-[#F3F6FF] px-2.5 py-1 text-[11px] font-medium text-[#003b8f]">
                  Seed &amp; agri storage
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM (Version 3) */}
      <NodesArchitectureSection />

      {/* DATASHEETS / DOWNLOADS */}
      <section id="downloads" className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Downloads</SectionLabel>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5 mb-1.5">
            Datasheets &amp; Documentation
          </h2>
          <p className="text-sm text-slate-600 mb-5 max-w-2xl">
            Download detailed technical datasheets for Nexus gateways and Enviro
            wireless nodes to share with your engineering, QA and validation
            teams.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Nexus Lite */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Nexus Lite Gateway
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-3">
                  Compact gateway for small cold rooms and retail sites.
                </p>
              </div>
              <a
                href="/docs/nexus-lite-datasheet.pdf"
                className="inline-flex items-center justify-center mt-auto rounded-full bg-[#0055CC] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0041a3] transition"
              >
                Download PDF
              </a>
            </article>

            {/* Nexus Pro */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Nexus Pro Gateway
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-3">
                  High-capacity gateway for multi-room sites and plants.
                </p>
              </div>
              <a
                href="/docs/nexus-pro-datasheet.pdf"
                className="inline-flex items-center justify-center mt-auto rounded-full bg-[#0055CC] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0041a3] transition"
              >
                Download PDF
              </a>
            </article>

            {/* Enviro Temp */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Enviro Node – Temp
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-3">
                  Wireless temperature node for cold rooms and freezers.
                </p>
              </div>
              <a
                href="/docs/enviro-temp-node-datasheet.pdf"
                className="inline-flex items-center justify-center mt-auto rounded-full bg-[#0055CC] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0041a3] transition"
              >
                Download PDF
              </a>
            </article>

            {/* Enviro Temp & RH */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Enviro Node – Temp &amp; RH
                </h3>
                <p className="text-xs text-slate-600 mt-1 mb-3">
                  Wireless temperature &amp; humidity node for high-value stock.
                </p>
              </div>
              <a
                href="/docs/enviro-temp-rh-node-datasheet.pdf"
                className="inline-flex items-center justify-center mt-auto rounded-full bg-[#0055CC] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0041a3] transition"
              >
                Download PDF
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE / CTA */}
      <section className="mt-8 border-t border-[#dde7ff] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Architecture explanation */}
            <div>
              <SectionLabel>Architecture</SectionLabel>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1.5 mb-3">
                End-to-end Wireless Architecture with CoolGuard
              </h2>
              <p className="text-sm text-slate-600 mb-4 max-w-xl">
                Nodes, gateways and the CoolGuard Cloud work together as a
                single system: nodes capture sensor data, Nexus gateways
                aggregate and secure it, and the platform delivers alarms,
                dashboards and reports.
              </p>

              <div className="space-y-2.5 text-sm text-slate-700">
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                  <p>
                    <span className="font-semibold">1. Enviro nodes in field</span>{" "}
                    &mdash; Nodes measure temperature / humidity inside chambers,
                    freezers and storage areas.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                  <p>
                    <span className="font-semibold">2. LoRa / Sub-GHz link</span>{" "}
                    &mdash; Data is transmitted over low-power wireless to the
                    nearest Nexus gateway.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                  <p>
                    <span className="font-semibold">
                      3. Nexus gateway aggregation
                    </span>{" "}
                    &mdash; Gateways validate, buffer and encrypt readings before
                    sending them upstream.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                  <p>
                    <span className="font-semibold">4. Backhaul to cloud</span>{" "}
                    &mdash; Gateways push data to CoolGuard over 4G, Ethernet or
                    Wi-Fi, respecting project connectivity choices.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                  <p>
                    <span className="font-semibold">5. Dashboards &amp; alerts</span>{" "}
                    &mdash; CoolGuard turns raw readings into alarms, reports and
                    analytics for operations, QA and compliance teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Layout card */}
            <div className="rounded-3xl border border-[#d7e3ff] bg-[#F5F7FF] p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2.5">
                Example layout: 2 gateways, 18 nodes
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-3">
                A typical mid-size site may use a mix of gateways and nodes to
                cover multiple chambers and staging areas.
              </p>

              <ul className="text-xs md:text-sm text-slate-700 space-y-1.5 mb-4">
                <li>• Nexus Pro gateway near main cold room panel</li>
                <li>• Nexus Lite gateway covering far-end freezer bank</li>
                <li>• 10 Enviro Temp nodes inside cold rooms &amp; blast freezers</li>
                <li>• 8 Enviro Temp &amp; RH nodes in staging and packing areas</li>
              </ul>

              <p className="text-[11px] text-slate-500">
                Exact counts, ranges and mounting points will be finalized after
                a wireless survey and site walk-through. Use this only as a
                sizing reference.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Need help sizing your Nodes &amp; Gateways?
              </h3>
              <p className="text-xs md:text-sm text-[#E0EBFF] max-w-xl">
                Share your site layout, number of rooms and type of equipment.
                Our team will recommend the right mix of Nexus gateways and
                Enviro nodes for reliable coverage.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#003b8f] shadow-sm hover:bg-[#f3f6ff] transition-colors"
            >
              Talk to CoolGuard Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
