// src/components/ProductDetailLayout.jsx
import React from "react";

export default function ProductDetailLayout({ product }) {
  const {
    name,
    code,
    family,
    tagline,
    heroImage,
    deviceImage,
    badges = [],
    intro,
    whereUsed = [],
    howItWorks = [],
    features = [],
    benefits = [],
    applications = [],
    highlights = [],
    downloads = [],
    addons = [], // <- add-ons like display, hooter, door sensors, etc.
  } = product || {};

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              {family && (
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
                  {family}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
                {name}
              </h1>
              {code && (
                <p className="text-sm text-slate-500 mb-4">{code}</p>
              )}
              {tagline && (
                <p className="text-base md:text-lg text-slate-700 mb-6">
                  {tagline}
                </p>
              )}

              {/* Badges */}
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full bg-[#E6F0FF] text-[#0047AB] px-3 py-1 text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Hero CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0055CC] text-white text-sm font-semibold shadow-sm hover:bg-[#0041a3] transition"
                >
                  Request a Demo
                </a>
                <a
                  href="#downloads"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white/60 bg-white"
                >
                  Download Datasheet
                </a>
              </div>
            </div>

            {/* Device image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c9ddff] to-[#f3f6ff] rounded-3xl blur-2xl opacity-70" />
              <div className="relative rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-6 flex items-center justify-center">
                {deviceImage ? (
                  <img
                    src={deviceImage}
                    alt={name}
                    className="w-full max-w-md mx-auto object-contain"
                  />
                ) : heroImage ? (
                  <img
                    src={heroImage}
                    alt={name}
                    className="w-full max-w-md mx-auto object-contain"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Overview */}
        {intro && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Overview
            </h2>
            <p className="text-slate-700 leading-relaxed max-w-3xl">
              {intro}
            </p>
          </section>
        )}

        {/* Where Used */}
        {whereUsed.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Where {code || name} is Used
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl">
              {code || name} is built for demanding cold-chain environments
              where continuous visibility and compliance are critical.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whereUsed.map((item, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-white border border-slate-200 shadow-sm p-4 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-2xl bg-[#E6F0FF] flex items-center justify-center text-sm font-semibold text-[#0055CC]">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-semibold text-slate-900 truncate">
                      {item}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How it works */}
        {howItWorks.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              How {code || name} Works
            </h2>
            <p className="text-slate-600 mb-6 max-w-3xl">
              From sensors in the cold room to dashboards in the cloud, the
              device fits neatly into your existing infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {howItWorks.map((step, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-white border border-slate-200 shadow-sm p-5 flex gap-4 hover:shadow-md hover:-translate-y-0.5 transition"
                >
                  <div className="flex-shrink-0">
                    <div className="h-9 w-9 rounded-full bg-[#0055CC] text-white flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Capabilities: Features + Benefits + Applications + Tech + Downloads */}
        <section className="mt-4 rounded-3xl bg-[#EAF0FF] px-5 py-7 md:px-8 md:py-9">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0055CC]/70">
                Product Capabilities
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                What you get with {code || name}
              </h2>
            </div>
            <span className="hidden md:inline-flex rounded-full bg-white/80 border border-white px-3 py-1 text-xs text-slate-600">
              Dual-channel · Cloud-native · Compliance-ready
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 lg:gap-8">
            {/* LEFT COLUMN: stacked cards */}
            <div className="space-y-6">
              {/* Key Features */}
              {features.length > 0 && (
                <div className="rounded-2xl bg-white shadow-sm border border-slate-200/80 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                    <span className="h-7 w-7 rounded-xl bg-[#0055CC]/10 flex items-center justify-center text-[#0055CC] text-xs">
                      ⚙️
                    </span>
                    Key Features
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Business Benefits */}
              {benefits.length > 0 && (
                <div className="rounded-2xl bg-white shadow-sm border border-slate-200/80 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                    <span className="h-7 w-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">
                      📈
                    </span>
                    Business Benefits
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Typical Applications */}
              {applications.length > 0 && (
                <div className="rounded-2xl bg-white shadow-sm border border-slate-200/80 p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                    <span className="h-7 w-7 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 text-xs">
                      🎯
                    </span>
                    Typical Applications
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {applications.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Technical Highlights + Downloads */}
            <div className="space-y-6 flex flex-col h-full">
              {/* Technical Highlights */}
              {highlights.length > 0 && (
                <div className="rounded-2xl bg-gradient-to-br from-[#EAF2FF] via-[#F7FAFF] to-white shadow-md border border-[#cfdfff] p-6 flex-1 backdrop-blur-sm">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4 pb-2 border-b border-[#dbe6ff]">
                    <span className="h-7 w-7 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#0055CC] text-xs shadow-sm">
                      🔧
                    </span>
                    Technical Highlights
                  </h3>

                  <dl className="space-y-3 text-sm">
                    {highlights.map((h, idx) => (
                      <div
                        key={h.label}
                        className={`flex items-center justify-between py-2 px-3 rounded-lg transition ${
                          idx % 2 === 0 ? "bg-[#f5f9ff]" : "bg-white/80"
                        }`}
                      >
                        <dt className="flex items-center gap-2 text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                          {h.label}
                        </dt>
                        <dd className="text-right font-medium text-slate-900 max-w-[180px]">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Downloads */}
              {downloads.length > 0 && (
                <div
                  id="downloads"
                  className="rounded-2xl bg-white shadow-sm border border-slate-200/80 p-5"
                >
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2.5">
                    <span className="h-7 w-7 rounded-xl bg-[#0055CC]/10 flex items-center justify-center text-[#0055CC] text-xs">
                      ⬇️
                    </span>
                    Downloads
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {downloads.map((d) => (
                      <a
                        key={d.href}
                        href={d.href}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0055CC] text-white text-xs md:text-sm font-medium shadow-sm hover:bg-[#0041a3] transition"
                      >
                        <span>PDF</span>
                        <span>{d.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Add-ons & Accessories */}
        {addons.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
              Compatible Add-ons & Accessories
            </h2>
            <p className="text-slate-600 mb-5 max-w-3xl">
              Extend {code || name} with local displays, hooters and door
              monitoring to match the needs of each cold room or panel.
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((group) => (
                <div
                  key={group.group}
                  className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-xl bg-[#E6F0FF] flex items-center justify-center text-xs text-[#0055CC]">
                      +
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {group.group}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="pt-4 md:pt-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#0055CC] via-[#2472ff] to-[#4b8dff] px-6 py-8 md:px-10 md:py-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
                Next Steps
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Ready to deploy {code || name} in your facility?
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Talk to our team to plan sensor placement, installation and alert
                strategy for your cold rooms, pharma storage, or warehouses using
                this device and the CoolGuard Cloud platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#0055CC] text-sm font-semibold shadow-sm hover:bg-slate-100 transition"
              >
                Talk to Our Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/70 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
