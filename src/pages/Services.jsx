// src/pages/MappingCalibrationValidation.jsx
import React from "react";
import {
  Map,
  Ruler,
  Thermometer,
  Activity,
  ClipboardCheck,
  FileCheck,
  ShieldCheck,
  Building2,
  Package,
  Truck,
  Clock,
  PhoneCall,
} from "lucide-react";
import RequestDemoButton from "../components/RequestDemoButton.jsx"; // 👈 NEW

export default function MappingCalibrationValidation() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#e6f0ff] via-white to-[#f3f7ff]">
        {/* soft glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] gap-10 items-center">
            {/* Left copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
                CoolGuard Services
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
                Mapping, Calibration &amp; Validation
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mb-4">
                Engineering-grade commissioning for compliant cold chain
                monitoring. We scientifically map your cold rooms, calibrate
                every sensor with reference instruments, and validate the entire
                monitoring system to meet pharma, food and audit standards.
              </p>

              <div className="space-y-3 text-sm md:text-base text-slate-800 mb-6">
                <div className="flex gap-2">
                  <Map className="w-4 h-4 mt-1 text-[#0055cc]" />
                  <p>
                    <span className="font-semibold">Mapping:</span> Cold room
                    layout study, airflow analysis &amp; sensor placement design.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Thermometer className="w-4 h-4 mt-1 text-[#0ea5e9]" />
                  <p>
                    <span className="font-semibold">Calibration:</span> On-site
                    sensor accuracy adjustment using certified reference devices.
                  </p>
                </div>
                <div className="flex gap-2">
                  <ClipboardCheck className="w-4 h-4 mt-1 text-emerald-600" />
                  <p>
                    <span className="font-semibold">Validation:</span> End-to-end
                    system verification with audit-ready compliance reports.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Floating CTA trigger – book site assessment */}
                <RequestDemoButton
                  productCode="MAPPING-CALIBRATION"
                  productName="Mapping, Calibration & Validation"
                >
                  Book a site assessment
                </RequestDemoButton>
                <p className="text-[11px] md:text-xs text-slate-500">
                  Ideal for pharma cold rooms, vaccine stores, food cold storage
                  and distribution centres.
                </p>
              </div>
            </div>

            {/* Right hero visual */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-100 via-white to-indigo-50 blur-xl opacity-80" />
              <div className="relative rounded-[28px] bg-white border border-slate-200 shadow-xl shadow-sky-100 overflow-hidden">
                <img
                  src="/images/products/serviceshero.png"
                  alt="Mapping, calibration and validation inside a cold room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Where this fits in the lifecycle */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Project lifecycle
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                From layout study to audit-ready system
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Mapping, calibration and validation are carried out as structured
                phases so that your monitoring system is reliable from day one
                and defensible during audits.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Phase 1 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center">
                  <Map className="w-4 h-4 text-[#0055cc]" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Phase 1
                </p>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Site Survey &amp; Mapping
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Room layout measurement &amp; airflow understanding</li>
                <li>• Identification of critical product and load zones</li>
                <li>• Proposed sensor locations &amp; wiring / wireless plan</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Ruler className="w-4 h-4 text-emerald-600" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Phase 2
                </p>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                On-site Calibration
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Pre-check of each probe / sensor channel</li>
                <li>• Comparison with certified reference instrument</li>
                <li>• Offset entry &amp; documentation of results</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <ClipboardCheck className="w-4 h-4 text-indigo-600" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Phase 3
                </p>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                System Validation
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Trial runs with alarms, reports &amp; dashboards</li>
                <li>• Door-opening &amp; failure scenario checks</li>
                <li>• Final validation summary &amp; sign-off</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: What we do on site */}
      <section className="border-b bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                On-site activities
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                What our engineers actually do during a visit
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                This is not a quick visual inspection. Each visit follows a
                documented procedure to ensure repeatability and traceability of
                the results.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-sm">
            {/* Mapping card */}
            <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-9 w-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
                  <Map className="w-4 h-4 text-[#0055cc]" />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Mapping
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Capture room dimensions, racks, evaporators &amp; doors</li>
                <li>• Identify critical product locations &amp; hot / cold spots</li>
                <li>• Mark proposed probe / sensor mounting points</li>
                <li>• Decide wired vs wireless routing with customer team</li>
              </ul>
            </div>

            {/* Calibration card */}
            <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-9 w-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <Thermometer className="w-4 h-4 text-emerald-600" />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Calibration
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Stabilise reference instrument at target points</li>
                <li>• Compare each sensor reading vs reference</li>
                <li>• Enter offsets / corrections into CoolGuard platform</li>
                <li>• Record before/after values for audit trail</li>
              </ul>
            </div>

            {/* Validation card */}
            <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-9 w-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-indigo-600" />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Validation
                </h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Simulate alarms (high, low, door open, power fail)</li>
                <li>• Confirm SMS / email / app alerts and escalation</li>
                <li>• Verify report generation &amp; data retention</li>
                <li>• Final sign-off with customer QA / engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Deliverables */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Documentation
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                What you receive after the visit
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                All work is documented in simple, audit-friendly formats that
                your QA and engineering teams can store as part of their
                validation file.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-sm">
            <DeliverableCard
              icon={FileCheck}
              title="Room &amp; sensor mapping sheet"
              points={[
                "Cold room layout sketch / plan with sensor IDs",
                "List of all sensors with physical locations &; node mapping",
              ]}
            />
            <DeliverableCard
              icon={ClipboardCheck}
              title="Calibration log"
              points={[
                "Before / after readings for each channel",
                "Reference device details &; date of calibration",
              ]}
            />
            <DeliverableCard
              icon={ShieldCheck}
              title="Validation summary"
              points={[
                "Tests performed and results (PASS / observations)",
                "List of alarms verified and sample screenshots",
              ]}
            />
            <DeliverableCard
              icon={Clock}
              title="Configuration snapshot"
              points={[
                "Configured limits, intervals and alert rules",
                "User / role matrix and access controls (if in scope)",
              ]}
            />
            <DeliverableCard
              icon={Activity}
              title="Trend &amp; stability graphs"
              points={[
                "Sample temperature / humidity trends during validation",
                "Notes on stability, excursions or abnormal behaviour",
              ]}
            />
            <DeliverableCard
              icon={Package}
              title="Open points &amp; recommendations"
              points={[
                "Any pending actions for customer site team",
                "Suggestions for improved placement or control",
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION: Industries & applications */}
      <section className="border-b bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Applications
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Where Mapping, Calibration &amp; Validation add value
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-sm">
            <UseCaseCard
              icon={Building2}
              title="Pharma cold rooms &amp; stability chambers"
              description="For QA teams implementing GDP / GMP-compliant monitoring in bulk drug stores, stability rooms and sample storage."
            />
            <UseCaseCard
              icon={Package}
              title="Food &amp; dairy cold storage"
              description="Chilled and frozen warehouses where product quality and shelf-life depend on consistent temperature control."
            />
            <UseCaseCard
              icon={Truck}
              title="Distribution hubs &amp; warehouses"
              description="Consolidation centres, 3PL hubs and regional warehouses that require documented monitoring for customer audits."
            />
          </div>
        </div>
      </section>

      {/* SECTION: FAQ / short answers – commented out */}
      {/*
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
              Quick answers
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-2">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-5 text-sm text-slate-700">
            <FaqItem
              question="How often should sensors be recalibrated?"
              answer="Most pharma and food customers follow a 12–24 month calibration cycle, depending on their internal QA policy and risk assessment. We can align our visit plan to your existing schedule."
            />
            <FaqItem
              question="Do you use NABL-traceable reference instruments?"
              answer="Yes. Our reference devices are calibrated at accredited laboratories and come with calibration certificates which can be shared as part of the documentation set."
            />
            <FaqItem
              question="Can you work with existing sensors / controllers from other vendors?"
              answer="In many projects we integrate with existing sensors, controllers or energy meters. During mapping we review what can be reused and what needs to be added for full coverage."
            />
          </div>
        </div>
      </section>
      */}

      {/* FINAL CTA */}
      {/* <section className="bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#0b1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/40 px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-300 mb-2">
                Ready to get started?
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                Schedule a Mapping, Calibration &amp; Validation visit
              </h2>
              <p className="text-xs md:text-sm text-slate-300 max-w-xl">
                Share your site details and current monitoring setup and we&apos;ll
                propose a visit plan, documentation set and budget estimate.
              </p>
            </div>
            <a
              href="/contact?type=mapping-calibration"
              className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg hover:bg-sky-300 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Talk to our engineering team
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}

/* ---------- Small helper components ---------- */

function DeliverableCard({ icon: Icon, title, points }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="h-9 w-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#0055cc]" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="text-xs text-slate-600 space-y-1.5">
        {points.map((p, idx) => (
          <li key={idx}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseCard({ icon: Icon, title, description }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="h-9 w-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#0055cc]" />
        </span>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f9fafb] px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-sm font-semibold text-slate-900 mb-1.5">{question}</p>
      <p className="text-xs md:text-sm text-slate-700">{answer}</p>
    </div>
  );
}
