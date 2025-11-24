// src/pages/NodesGateways.jsx
import React from "react";

export default function NodesGateways() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10 flex flex-col lg:flex-row gap-10 items-start">
            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
                Nodes &amp; Gateways
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Smart Wireless Gateways &amp; Sensor Nodes for CoolGuard
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Nexus gateways and Enviro wireless nodes form the wireless
                backbone of the CoolGuard IoT platform. From cold rooms and
                freezers to production areas and warehouses, they securely
                transport temperature and humidity data to the cloud in real
                time.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  LoRa / Sub-GHz Wireless
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  Cloud Connected
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  Flexible Power Options
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#gateways"
                  className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0044aa] transition-colors"
                >
                  View Nexus Gateways
                </a>
                <a
                  href="#nodes"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  View Enviro Wireless Nodes
                </a>
              </div>
            </div>

            {/* Image / Illustration */}
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/3] rounded-3xl bg-[#e6f0ff] border border-[#cfe0ff] flex items-center justify-center overflow-hidden">
                {/* Replace with real composite image: Nexus + Enviro node */}
                <img
                  src="/images/products/nodes-gateways-hero.png"
                  alt="Nexus Gateway and Enviro Wireless Nodes"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">
                *Representative image of Nexus gateways and Enviro wireless nodes.
                Replace with final product render.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GATEWAYS SECTION */}
      <section id="gateways" className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Nexus Wireless Gateways
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Smart wireless gateways that collect data from Enviro nodes and
                push it securely to CoolGuard cloud.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Nexus Lite Gateway */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Nexus Lite Gateway
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Smart Wireless Gateway
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Compact smart gateway for small and medium sites. Collects data
                from Enviro wireless nodes and forwards it to CoolGuard over
                4G / Ethernet.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Use</dt>
                  <dd className="font-medium">1–8 cold rooms / freezers</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Backhaul</dt>
                  <dd className="font-medium">4G / Ethernet</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Wireless</dt>
                  <dd className="font-medium">LoRa / Sub-GHz to Enviro nodes</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Small Cold Stores
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Retail Freezers
                </span>
              </div>
            </article>

            {/* Nexus Pro Gateway */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Nexus Pro Gateway
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#e0f2fe] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0369a1]">
                  Smart Wireless Multi-mode Gateway
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                High-performance multi-mode gateway for larger facilities needing
                more nodes, redundancy, and flexible connectivity options.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Use</dt>
                  <dd className="font-medium">Multi-room facilities &amp; plants</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Backhaul</dt>
                  <dd className="font-medium">4G / Ethernet / Wi-Fi*</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Features</dt>
                  <dd className="font-medium">Multi-network profiles, watchdog</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Large Cold Stores
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Processing Facilities
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* NODES SECTION */}
      <section id="nodes" className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Enviro Wireless Nodes
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Battery-powered or externally powered wireless sensor nodes for
                temperature and humidity monitoring inside your assets.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Enviro Wireless Node - Temp */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Enviro Wireless Node
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Temperature
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Wireless temperature sensor node for cold rooms, freezers, and
                chillers. Designed for reliable sensing even in harsh
                low-temperature environments.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Measurement</dt>
                  <dd className="font-medium">Temperature only</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">+60°C to −40°C*</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Power</dt>
                  <dd className="font-medium">Battery / External (model-wise)</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Cold Rooms &amp; Freezers
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Pharma &amp; Food Storage
                </span>
              </div>
            </article>

            {/* Enviro Wireless Node - Temp & RH */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Enviro Wireless Node
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#ecfeff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0e7490]">
                  Temperature &amp; Humidity
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Wireless temperature &amp; humidity sensor node for applications
                where both product temperature and ambient RH are critical.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Measurement</dt>
                  <dd className="font-medium">Temperature + RH</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">
                    Temp: +60°C to −40°C*, RH: 0–100%*
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Ideal For</dt>
                  <dd className="font-medium">
                    Pharma, seeds, high-value storage
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Pharma Warehouses
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Seed &amp; Agri Storage
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE / CTA */}
      <section className="mt-12 border-t border-[#dde7ff] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                How Nodes &amp; Gateways Work with CoolGuard
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Enviro wireless nodes periodically send measurements to a Nexus
                gateway using a low-power wireless protocol. The Nexus gateway
                then forwards this data securely to the CoolGuard cloud, where
                you can monitor, analyze, and receive alerts.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Supports mixed networks of temperature-only and Temp+RH nodes
                    in the same site.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Configurable transmit interval and alarm thresholds to balance
                    battery life and responsiveness.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Full integration with CoolGuard reports, dashboards, and
                    mobile app alerts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#d7e3ff] bg-[#f5f7ff] p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Typical Wireless Layout
              </h3>
              <ol className="space-y-2 text-xs text-slate-700 mb-4">
                <li>1. Enviro wireless nodes placed inside each room / freezer.</li>
                <li>2. Nodes send data to Nexus Lite / Pro gateway.</li>
                <li>3. Gateway forwards data to CoolGuard cloud.</li>
                <li>4. Users view dashboards and receive alerts in real time.</li>
              </ol>
              <div className="rounded-2xl bg-white border border-dashed border-[#cfe0ff] p-4 text-xs text-slate-500">
                Placeholder: Insert simple site layout diagram here
                (Nodes → Nexus Gateway → Cloud → User).
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Need help sizing your Nodes &amp; Gateways?
              </h3>
              <p className="text-xs md:text-sm text-[#e0ebff]">
                Share your site layout and number of rooms, and our team will
                recommend the right mix of Nexus gateways and Enviro nodes.
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
