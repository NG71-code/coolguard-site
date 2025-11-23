// src/components/ProductDetailLayout.jsx
import React from "react";

export default function ProductDetailLayout({ product }) {
  const {
    name,
    code,
    family,
    tagline,
    heroImage,
    intro,
    features = [],
    benefits = [],
    applications = [],
    highlights = [],
    downloads = [],
    badges = [],
    deviceImage,
  } = product || {};

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-16">
      {/* HERO */}
      <section className="relative border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
            {/* Wide hero image */}
            <div className="relative aspect-[16/6] w-full overflow-hidden">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  (Product image placeholder)
                </div>
              )}
            </div>

            {/* Bottom info bar */}
            <div className="absolute inset-x-0 bottom-0">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white/90 backdrop-blur px-4 sm:px-6 lg:px-8 py-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {family && (
                      <span className="inline-flex items-center rounded-full bg-[#e6f0ff] text-[#003b8f] border border-[#cfe0ff] px-3 py-1 text-xs">
                        {family}
                      </span>
                    )}

                    {code && (
                      <span className="inline-flex items-center rounded-full bg-[#0055cc] text-white px-3 py-1 text-xs">
                        {code}
                      </span>
                    )}

                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center rounded-full border border-[#9ec1ff] text-[#003b8f] px-3 py-1 text-xs"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
                    {name}
                  </h1>
                  {tagline && (
                    <p className="text-sm text-gray-600">{tagline}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={`/contact?product=${encodeURIComponent(
                      name || code || ""
                    )}`}
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm bg-[#0055cc] text-white hover:bg-[#004bb3]"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="/cloud-loggers"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm border border-[#9ec1ff] text-[#003b8f] hover:bg-[#e6f0ff]"
                  >
                    Back to Cloud Loggers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      {intro && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-base leading-relaxed text-gray-800">{intro}</p>
        </section>
      )}

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Features / Benefits / Applications */}
          <div className="lg:col-span-8 space-y-8">
            {features.length > 0 && (
              <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
                <div className="px-6 pt-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Key Features
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 rounded-xl border border-gray-200 p-3 text-sm text-gray-800"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {benefits.length > 0 && (
              <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
                <div className="px-6 pt-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Benefits
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 rounded-xl p-3 bg-[#f2f7ff] text-sm text-gray-800"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {applications.length > 0 && (
              <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
                <div className="px-6 pt-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Applications
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {applications.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 rounded-xl border border-gray-200 p-3 text-sm text-gray-800"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Device image + Highlights + Downloads */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-6 space-y-4">
              {/* Device + highlights */}
              <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
                <div className="px-6 pt-6">
                  <div className="flex justify-center mb-4">
                    {deviceImage ? (
                      <img
                        src={deviceImage}
                        alt={`${name} device`}
                        className="w-32 h-auto rounded-xl shadow-sm border border-gray-200 bg-white p-2"
                      />
                    ) : (
                      <div className="w-32 h-32 flex items-center justify-center text-xs text-gray-400 border border-dashed border-gray-300 rounded-xl">
                        Device image
                      </div>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Highlights
                  </h2>
                </div>
                <div className="px-6 pb-6">
                  <dl className="divide-y divide-gray-100">
                    {highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-start justify-between py-3"
                      >
                        <dt className="text-xs uppercase tracking-wide text-gray-500 mr-4">
                          {h.label}
                        </dt>
                        <dd className="text-sm font-medium text-right text-gray-900">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Downloads */}
              {downloads && downloads.length > 0 && (
                <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
                  <div className="px-6 pt-6">
                    <h2 className="text-sm font-semibold text-slate-900">
                      Resources
                    </h2>
                  </div>
                  <div className="px-6 pb-6 space-y-2">
                    {downloads.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        className="block text-sm text-[#0055cc] hover:underline"
                      >
                        {d.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
