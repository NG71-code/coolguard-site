// src/pages/products/Frigo101BB.jsx
import React from "react";
import RequestDemoButton from "../components/RequestDemoButton.jsx";
import {
  Thermometer,
  Smartphone,
  Cloud,
  Bell,
  BarChart3,
  ShieldCheck,
  Download,
  PlayCircle,
  MapPin,
} from "lucide-react";

export default function Frigo101BB() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-10">
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff]">
        {/* soft glow blobs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 items-center">
            {/* Left: text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#0055cc] mb-3">
                Frigo-100 Series · Universal Cloud Loggers
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
                Frigo-101-BB
                <span className="block text-xl md:text-2xl font-normal text-slate-700 mt-1.5">
                  Location-Aware Cloud Logger for Display &amp; Visi Coolers
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mb-5">
                Frigo-101-BB is a location-first IoT device for cooler fleets.
                It tells you exactly where your branded coolers are deployed,
                alerts you when units move from their assigned outlet, and
                gives you a single cloud view of all assets. Optional
                temperature channels can be enabled where product temperature
                monitoring is also required.
              </p>

              {/* Key badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100">
                  <MapPin className="w-3.5 h-3.5" />
                  Cooler Location Tracking
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
                  <Cloud className="w-3.5 h-3.5" />
                  Cloud Inventory View
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-amber-100">
                  <Bell className="w-3.5 h-3.5" />
                  Movement Alerts
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                  <Thermometer className="w-3.5 h-3.5" />
                  Optional Temperature Add-on
                </span>
              </div>

              {/* Bullets */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex gap-3">
                  <div className="mt-1">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Know where every cooler is
                    </p>
                    <p className="text-xs text-slate-600">
                      Outlet, city and geo-tag visibility for each cooler, so
                      sales and supply chain teams no longer rely on periodic
                      third-party asset surveys.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1">
                    <BarChart3 className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Stop unapproved relocations
                    </p>
                    <p className="text-xs text-slate-600">
                      Get alerts when a cooler moves away from its designated
                      outlet or city, helping prevent theft, misuse and
                      unplanned redeployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                {/* 🔵 This opens the Floating CTA with product info */}
                <RequestDemoButton
                  productCode="Frigo-101-BB"
                  productName="Frigo-101-BB Location Cloud Logger"
                  // optional: custom source tag
                  // source="product-page-frigo-101-bb"
                />

                {/* Secondary CTA – goes to contact page */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2.5 text-xs md:text-sm font-medium text-white border border-slate-800/60 hover:bg-slate-900 transition-colors"
                >
                  <PlayCircle className="w-4 h-4" />
                  Request a fleet pilot
                </a>

                {/* Datasheet link */}
                <a
                  href="/docs/Frigo-101-BB datasheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Datasheet
                </a>

                <p className="w-full text-[11px] md:text-xs text-slate-500 mt-1">
                  Ideal for: FMCG &amp; beverage cooler fleets, ice-cream
                  visi-coolers, retail display coolers and franchise networks.
                </p>
              </div>
            </div>

            {/* Right: device image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-100 via-white to-indigo-50 blur-xl opacity-80" />
              <div className="relative rounded-[28px] bg-white border border-slate-200 shadow-xl shadow-sky-100 px-7 py-8 flex flex-col items-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 border border-sky-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-medium text-sky-800">
                    Online · Location &amp; status synced to CoolGuard Cloud
                  </span>
                </div>
                <img
                  src="/images/products/frigolocatorbg2.png"
                  alt="Frigo-101-BB Location Cloud Logger"
                  className="w-420px h-420px object-contain mb-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY USE CASES / FEATURES */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Frigo-101-BB · Key capabilities
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Built for cooler fleet visibility &amp; asset protection
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Replace manual cooler census exercises and third-party surveys
                with a live, system-driven view of where every asset is placed,
                who is using it, and when it moves.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard
              icon={MapPin}
              title="Outlet-level asset mapping"
              description="Each cooler is tagged to a specific outlet, customer code and location, giving sales and distribution teams an up-to-date deployment map."
              pill="Location first"
            />
            <FeatureCard
              icon={Bell}
              title="Movement &amp; tamper alerts"
              description="Receive alerts when a cooler is moved beyond its allowed radius or disconnected, so field teams can act before assets disappear."
              pill="Exception-based"
            />
            <FeatureCard
              icon={Cloud}
              title="Single cloud inventory"
              description="View all coolers on a single cloud dashboard with filters by region, distributor, city and outlet type—instead of working from spreadsheets."
              pill="Centralized view"
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile access for field teams"
              description="Sales and service teams can look up cooler details, last known location and status directly from the CoolGuard mobile app."
              pill="On-the-go"
            />
            <FeatureCard
              icon={BarChart3}
              title="Cost &amp; utilization insights"
              description="Identify non-performing or idle coolers, improve placement decisions and reduce spend on outsourced asset verification exercises."
              pill="Fleet analytics"
            />
            <FeatureCard
              icon={Thermometer}
              title="Optional temperature monitoring"
              description="Add temperature probes where required to verify product storage conditions alongside location and utilization data."
              pill="Add-on feature"
            />
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="border-b bg-[#f6f8fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Technical specification
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Frigo-101-BB – at a glance
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Use this section as the reference for proposals, datasheets and
                qualification documents. Update individual values as the final
                hardware spec is frozen.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            {/* Column 1 */}
            <div className="space-y-2.5">
              <SpecItem label="Model" value="Frigo-101-BB – Cooler Location Cloud Logger" />
              <SpecItem
                label="Primary function"
                value="Outlet / location tracking of coolers"
              />
              <SpecItem
                label="Add-on sensing"
                value="Optional temperature channels (single / dual probe)*"
              />
              <SpecItem
                label="Location source"
                value="Cell-tower based positioning / GPS (as per configuration)"
              />
              <SpecItem
                label="Logging interval"
                value="Configurable; typical 5–30 minutes for location &amp; status"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-2.5">
              <SpecItem
                label="Connectivity"
                value="Cellular (GSM/4G); other options as per project"
              />
              <SpecItem
                label="Cloud platform"
                value="CoolGuard IoT – asset inventory, maps &amp; dashboards"
              />
              <SpecItem
                label="Alerts"
                value="SMS / Email / In-app for relocation, offline status &amp; excursions"
              />
              <SpecItem
                label="Local memory"
                value="Buffer for several days of readings during network outages"
              />
              <SpecItem
                label="Power supply"
                value="External adaptor; battery options as per deployment*"
              />
            </div>

            {/* Column 3 */}
            <div className="space-y-2.5">
              <SpecItem
                label="Enclosure"
                value="Compact wall-mount / cooler-mount enclosure for indoor use"
              />
              <SpecItem
                label="Ingress protection"
                value="Suitable for mounting near coolers (non wash-down areas)"
              />
              <SpecItem
                label="Operating environment"
                value="+0°C to +50°C, non-condensing"
              />
              <SpecItem
                label="Ideal applications"
                value="Beverage &amp; FMCG cooler fleets, ice-cream visi coolers, retail display coolers, long-term cooler rentals"
              />
              <SpecItem
                label="Business outcome"
                value="Lower asset survey costs, reduced cooler loss and better utilization"
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-3">
            *Exact sensing, connectivity and power options will be finalized in
            the approved project specification and BOM.
          </p>
        </div>
      </section>

      {/* DOWNLOADS & DOCUMENTS */}
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-1.5">
                Documentation &amp; downloads
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                Everything your sales, SCM &amp; QA teams need
              </h2>
              <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
                Link these tiles to your final PDFs so commercial, logistics and
                quality teams have a single reference set for cooler fleet
                digitization.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <DownloadCard
              title="Frigo-101-BB – Location Solution Overview"
              description="Business case, benefits vs. manual third-party surveys, and deployment models for cooler fleets."
              href="#"
            />
            <DownloadCard
              title="Installation &amp; Activation Guide"
              description="Step-by-step guide for mounting on coolers, power connection and tagging each unit to an outlet."
              href="#"
            />
            <DownloadCard
              title="CoolGuard Asset Dashboard – User Guide"
              description="How to search coolers, view maps, configure movement alerts and export inventory reports."
              href="#"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small helper components ---------- */

function FeatureCard({ icon: Icon, title, description, pill }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2.5">
        <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
          <Icon className="w-4.5 h-4.5 text-[#0055cc]" />
        </div>
        {pill && (
          <span className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-full px-2 py-0.5">
            {pill}
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-slate-900 mb-1">
        {title}
      </h3>
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
