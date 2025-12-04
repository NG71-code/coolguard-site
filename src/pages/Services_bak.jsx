// src/pages/Services.jsx
import React from "react";
export default function ServicesPage() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
              CoolGuard Services
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Mapping &amp; Calibration Services
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
              Ensure your cold rooms, freezers, and logistics assets are not only
              monitored in real-time, but also mapped, calibrated, and documented
              to meet audit and compliance requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-[#e6f0ff] text-[#003b8f] border border-[#cfe0ff] px-3 py-1 text-xs">
                WHO / GMP / GDP support
              </span>
              <span className="inline-flex items-center rounded-full bg-white text-[#003b8f] border border-[#cfe0ff] px-3 py-1 text-xs">
                NABL-traceable calibration
              </span>
              <span className="inline-flex items-center rounded-full bg-white text-[#003b8f] border border-[#cfe0ff] px-3 py-1 text-xs">
                CoolGuard Cloud reporting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mapping summary */}
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-9 w-9 rounded-full bg-[#e6f0ff] flex items-center justify-center border border-[#cfe0ff]">
                <MappingIcon className="h-5 w-5 text-[#0055cc]" />
              </span>
              <h2 className="text-xl font-semibold text-slate-900">
                Temperature Mapping Services
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              End-to-end temperature mapping for cold rooms, freezers, reefers,
              and warehouses using CoolGuard wired or wireless loggers.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>• Mapping layout planning and probe placement</li>
              <li>• Tests under empty / partially loaded / fully loaded conditions</li>
              <li>• Door opening, power failure and stress tests</li>
              <li>• Structured PDF report with graphs, statistics and observations</li>
            </ul>
          </div>

          {/* Calibration summary */}
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-9 w-9 rounded-full bg-[#e6f0ff] flex items-center justify-center border border-[#cfe0ff]">
                <CalibrationIcon className="h-5 w-5 text-[#0055cc]" />
              </span>
              <h2 className="text-xl font-semibold text-slate-900">
                Calibration Services
              </h2>
            </div>
            <p className="text-sm text-gray-700">
              NABL-traceable calibration of CoolGuard devices and sensors using
              reference masters and documented procedures.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>• On-site or lab-based calibration options</li>
              <li>• Reference masters with valid NABL certificates</li>
              <li>• As-found / As-left readings with traceability</li>
              <li>• Certificates stored and retrievable via CoolGuard platform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAPPING SECTION */}
      <section
        id="mapping-services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
      >
        <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <MappingIcon className="h-6 w-6 text-[#0055cc]" />
                <span>Temperature Mapping Services</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-700">
                Mapping helps you understand how temperature behaves across the
                entire storage space—not just at a single sensor point. This is key
                for qualification, validation and periodic re-qualification.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Typical Assets Covered
                  </h3>
                  <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Walk-in cold rooms and freezers</li>
                    <li>• Deep freezers and reach-in cabinets</li>
                    <li>• Pharma and food storage areas</li>
                    <li>• Reefer vehicles and pre-cooling rooms</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    What We Deliver
                  </h3>
                  <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• Mapping plan and logger layout</li>
                    <li>• Data captured on CoolGuard platform</li>
                    <li>• Excursion analysis and max/min/avg statistics</li>
                    <li>• Deviations, observations and recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mapping process */}
            <div className="md:w-72">
              <div className="rounded-2xl bg-[#f3f6ff] border border-[#cfe0ff] p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Typical Mapping Workflow
                </h3>
                <ol className="mt-3 space-y-2 text-xs md:text-sm text-gray-800 list-decimal list-inside">
                  <li>Site survey and mapping plan finalization</li>
                  <li>Logger deployment &amp; test configuration</li>
                  <li>Trial runs &amp; stress / door open tests</li>
                  <li>Data analysis on CoolGuard Cloud</li>
                  <li>Issue of formal mapping report</li>
                </ol>
              </div>
              <p className="mt-3 text-[11px] text-gray-500">
                Mapping can be aligned to customer SOPs and applicable guidelines
                (e.g., WHO TRS, GDP / GMP practices).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALIBRATION SECTION */}
      <section
        id="calibration-services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
      >
        <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <CalibrationIcon className="h-6 w-6 text-[#0055cc]" />
                <span>Calibration Services</span>
              </h2>
              <p className="text-sm md:text-base text-gray-700">
                Regular calibration ensures that what you see on the screen is what
                is actually happening inside the chamber. All calibrations are
                carried out using reference instruments with valid NABL certificates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Scope of Calibration
                  </h3>
                  <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• CoolGuard loggers (Kryo / Frigo series)</li>
                    <li>• Panel sensors and RTDs connected to CG-100 controllers</li>
                    <li>• Ambient and product probes for mapping kits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Documentation
                  </h3>
                  <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• As-found / As-left readings</li>
                    <li>• Reference master details and certificate numbers</li>
                    <li>• Calibration date and next due date</li>
                    <li>• Digital copies stored in CoolGuard Cloud (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Calibration highlight card */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#f3f6ff] border border-[#cfe0ff] p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Reference Masters
                </h3>
                <p className="mt-2 text-xs md:text-sm text-gray-700">
                  Benchtop chambers and multifunction calibrators with NABL
                  calibration at defined points (e.g., −20°C, +4°C, +25°C, +40°C).
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Recommended Frequencies
                </h3>
                <ul className="mt-2 text-xs md:text-sm text-gray-700 space-y-1">
                  <li>• Annual calibration for most sites</li>
                  <li>• Higher frequency for critical pharma applications</li>
                  <li>• Alignment with customer QMS / SOPs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUTSOURCE VS INTERNAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:max-w-md">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-2">
                Why CoolGuard
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Outsource to CoolGuard vs. Internal Effort
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-700">
                Internal teams understand your processes. CoolGuard brings the
                specialised tools, experience and reporting format that auditors
                expect. Many customers use a hybrid model for best results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {/* Outsource card */}
              <div className="rounded-2xl border border-[#cfe0ff] bg-[#f4f8ff] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-[#cfe0ff]">
                    <span className="text-xs font-semibold text-[#0055cc]">CG</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Outsource to CoolGuard
                  </h3>
                </div>
                <ul className="text-xs md:text-sm text-gray-800 space-y-1.5">
                  <li>• Standardized SOPs for mapping & calibration</li>
                  <li>• Experienced engineers with domain expertise</li>
                  <li>• Compliance-ready reports & documentation</li>
                  <li>• Includes mapping kits, reference masters and tools</li>
                  <li>• Predictable fixed-cost or annual service plans</li>
                </ul>
              </div>

              {/* Internal effort card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                    <span className="text-xs font-semibold text-gray-600">INT</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Internal Team Only
                  </h3>
                </div>
                <ul className="text-xs md:text-sm text-gray-800 space-y-1.5">
                  <li>• Uses existing manpower</li>
                  <li>• Requires separate purchase of tools & references</li>
                  <li>• Time spent creating layouts and report templates</li>
                  <li>• Learning curve for audit documentation expectations</li>
                  <li>• Higher risk of gaps in traceability</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-gray-500">
            Many clients choose a hybrid model: internal team handles routine checks,
            while CoolGuard supports annual mapping, calibration and audit preparation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="rounded-3xl bg-[#003b8f] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Plan your next mapping or calibration cycle with CoolGuard.
            </h2>
            <p className="mt-2 text-sm md:text-base text-blue-100 max-w-2xl">
              Share your asset list and compliance requirements. We’ll propose a plan
              that fits your operations and audit needs.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact?topic=mapping-calibration"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium bg-white text-[#003b8f] hover:bg-blue-50"
            >
              Request a Service Plan
            </a>
            <a
              href="mailto:support@coolguard.cloud"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium border border-blue-100 text-blue-50 hover:bg-blue-800/60"
            >
              Email Service Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Local Icons --- */

function MappingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M4 5l6-2 4 2 6-2v14l-6 2-4-2-6 2V5z" strokeWidth="1.6" />
      <path d="M12 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" strokeWidth="1.6" />
      <path
        d="M12 11.5c1.8-1.4 3-2.7 3-4a3 3 0 1 0-6 0c0 1.3 1.2 2.6 3 4z"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CalibrationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M5 16a7 7 0 0 1 14 0" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="16" x2="15" y2="11" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="15" x2="7" y2="13.5" strokeWidth="1.2" />
      <line x1="12" y1="14" x2="12" y2="12.3" strokeWidth="1.2" />
      <line x1="16" y1="15" x2="17" y2="13.5" strokeWidth="1.2" />
    </svg>
  );
}
