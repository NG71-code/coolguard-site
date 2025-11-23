// src/pages/ControllersCG100.jsx
import React from "react";

export default function ControllersCG100() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10 flex flex-col lg:flex-row gap-10 items-start">
            {/* Text Block */}
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
                CG-100 Series Controllers
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Intelligent Controllers for Cold Rooms & Freezers
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                The CG-100 series is a family of smart controllers designed for
                single and dual compressor systems in positive and negative
                temperature applications. Seamlessly integrated with the
                CoolGuard cloud platform, they provide precise control,
                monitoring, and protection for your cold rooms, freezers, and
                process chambers.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  Single & Dual Compressor Models
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  Positive & Negative Temperature
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-3 py-1 text-xs font-medium text-[#003b8f]">
                  Modbus / RS485 Ready
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#models"
                  className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0044aa] transition-colors"
                >
                  View CG-100 Models
                </a>
                <a
                  href="#integration"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  Cloud & Integration Details
                </a>
              </div>
            </div>

            {/* Image Block */}
            <div className="w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/3] rounded-3xl bg-[#e6f0ff] border border-[#cfe0ff] flex items-center justify-center overflow-hidden">
                {/* Replace this placeholder with actual controller image */}
                <img
                  src="/images/products/cg-100-series.png"
                  alt="CG-100 Series Controller"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">
                *Representative CG-100 series controller image. Replace with
                final product render.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODELS GRID */}
      <section id="models" className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                CG-100 Series Models
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Choose the right controller based on compressor configuration
                and temperature range.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* CG-100-S+ */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  CG-100-S+ — Single+
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Positive
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Single compressor controller for positive temperature cold rooms
                (chillers, cool rooms, process storage).
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">+2°C to +25°C</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Inputs</dt>
                  <dd className="font-medium">Temp, Door, Defrost</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Outputs</dt>
                  <dd className="font-medium">Compressor, Fan, Defrost</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Cold Rooms
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Walk-in Chillers
                </span>
              </div>
            </article>

            {/* CG-100-S− */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  CG-100-S− — Single−
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#fee2e2] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#b91c1c]">
                  Negative
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Single compressor controller for low-temperature freezers and
                deep freezers operating at sub-zero conditions.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">0°C to −40°C</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Inputs</dt>
                  <dd className="font-medium">Temp, Door, Defrost</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Outputs</dt>
                  <dd className="font-medium">
                    Compressor, Fan, Defrost, Alarm
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Deep Freezers
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Ice Cream Storage
                </span>
              </div>
            </article>

            {/* CG-100-D+ */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  CG-100-D+ — Dual+
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#e6f0ff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#003b8f]">
                  Dual Positive
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Dual compressor controller for redundancy and load sharing in
                large positive temperature cold rooms and processing areas.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Compressor Mode</dt>
                  <dd className="font-medium">Lead-Lag / Duty Share</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">0°C to +20°C</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Alarms</dt>
                  <dd className="font-medium">
                    Temp, Door, High/Low, Power fail (via Cloud)
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Large Cold Rooms
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Pharma / Food
                </span>
              </div>
            </article>

            {/* CG-100-D− */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  CG-100-D− — Dual−
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#fee2e2] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#b91c1c]">
                  Dual Negative
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Dual compressor controller for negative temperature
                applications needing higher reliability and backup.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Typical Range</dt>
                  <dd className="font-medium">−5°C to −40°C</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Compressor Logic</dt>
                  <dd className="font-medium">
                    Staggered start, overload protection
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Use Cases</dt>
                  <dd className="font-medium">
                    Frozen store, blast freezer
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Frozen Chambers
                </span>
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Cold Chain Logistics
                </span>
              </div>
            </article>

            {/* Saffron Controller */}
            <article
              id="saffron-controller"
              className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Saffron Environment Controller
                </h3>
                <span className="inline-flex items-center rounded-full bg-[#ecfeff] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0e7490]">
                  Specialised
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Specialised controller for saffron and high-value crops with
                fine control over temperature, humidity, and lighting cycles.
              </p>
              <dl className="space-y-1 text-xs text-slate-700 mb-4">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Control</dt>
                  <dd className="font-medium">Temp, RH, Light cycles</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Application</dt>
                  <dd className="font-medium">Saffron grow rooms</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Cloud</dt>
                  <dd className="font-medium">Full CoolGuard integration</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f3f6ff] px-2 py-1 text-[10px] font-medium text-[#003b8f]">
                  Agri & Horticulture
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INTEGRATION SECTION */}
      <section
        id="integration"
        className="mt-12 border-t border-[#dde7ff] bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Built to Work Seamlessly with CoolGuard Cloud
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Every CG-100 controller is designed to connect with CoolGuard
                using Modbus / RS485 via BridgePoint or Nexus gateways. All
                critical parameters, alarms, and events are pushed to the cloud
                in real time.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Real-time visibility of temperature, compressor status, and
                    door events on web and mobile apps.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Configurable setpoints, differentials, and alarm thresholds
                    via engineering menu.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Automatic data logging for compliance reports and audits.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Supports integration with temperature mapping and
                    calibration services offered under CoolGuard.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#d7e3ff] bg-[#f5f7ff] p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Typical System Architecture
              </h3>
              <ol className="space-y-2 text-xs text-slate-700 mb-4">
                <li>
                  1. CG-100 controller installed in cold room panel with sensor
                  and output wiring.
                </li>
                <li>
                  2. RS485 (Modbus) connected to BridgePoint / Nexus gateway.
                </li>
                <li>
                  3. Gateway pushes data to CoolGuard cloud over 4G / Ethernet.
                </li>
                <li>
                  4. User monitors and configures from CoolGuard web and mobile
                  apps.
                </li>
              </ol>
              <div className="rounded-2xl bg-white border border-dashed border-[#cfe0ff] p-4 text-xs text-slate-500">
                Placeholder: Insert simple block diagram image here
                (Controller → Gateway → Cloud → User).
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Need help choosing the right CG-100 controller?
              </h3>
              <p className="text-xs md:text-sm text-[#e0ebff]">
                Share your cold room / freezer specifications, and our team will
                recommend the ideal controller and connectivity architecture.
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
