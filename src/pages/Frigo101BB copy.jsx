import React from "react";
export default function Frigo101BB() {
  const product = {
    name: "Frigo-101-BB",
    code: "FR-101-BB",
    family: "Frigo-100 Series",
    tagline: "IoT-based Indoor Location Tracker for Branded Coolers",
    heroImage: "/images/products/frigo-hero4.png", // update path when you add the image
    intro:
      "Frigo-101-BB is an IoT-based indoor location and temperature tracking device designed for branded coolers deployed in shops, malls, and high-traffic outlets. Using GSM triangulation and proprietary algorithms, it pinpoints cooler locations even where GPS does not work, while optional temperature monitoring ensures that every cooler is operating at the right conditions. By automating cooler tracking and compliance, Frigo-101-BB removes manual audits, prevents asset loss, and gives you full visibility of your cooler network across regions.",

    // Key Features (from PDF + sales-friendly wording)
    features: [
      "IoT-based indoor location tracking using GSM triangulation and proprietary algorithms",
      "Works reliably in indoor environments where GPS signals are weak or unavailable",
      "Optional temperature monitoring from –40°C to +60°C with high-sensitivity NTC sensor",
      "Configurable data logging interval from 1 to 60 minutes",
      "On-device memory for up to 5000 logs when GSM network is unavailable",
      "Real-time motion, vibration, and orientation change detection",
      "Over-the-air (OTA) firmware updates for remote feature upgrades and fixes",
      "Industrial-grade ABS enclosure (approx. 40 × 78 × 55 mm)",
      "External 12 V DC power input with low power consumption design",
      "Built-in 3.7 V, 450 mAh backup battery for power interruptions",
    ],

    // Benefits (from “Benefits / Monitor / Save time & cost” sections)
    benefits: [
      "Eliminates the need for expensive third-party agencies to perform annual cooler inventory audits",
      "Provides accurate, up-to-date location data for every branded cooler in the field",
      "Improves operational efficiency by automating location and temperature tracking",
      "Ensures proper cooling conditions and helps prevent product spoilage",
      "Delivers reliable inventory and quality records for internal audits and brand reporting",
      "Enhances security by detecting unauthorized relocation, tilting, or movement of coolers",
      "Gives sales and operations teams real-time visibility and control over the cooler network",
    ],

    // Suggested applications
    applications: [
      "Branded FMCG and beverage coolers at retail outlets",
      "Ice cream and frozen dessert freezers placed at kirana shops and supermarkets",
      "Promotional coolers and display chillers in malls and multiplexes",
      "QSR and café coolers deployed across franchise locations",
      "Cooler networks managed by distributors and channel partners",
    ],

    // Sidebar spec-style highlights
    highlights: [
      { label: "Model", value: "Frigo-101-BB" },
      { label: "Location Method", value: "Cellular-based GSM triangulation" },
      { label: "Communication", value: "GSM / GPRS (850/900/1800/1900 MHz)" },
      { label: "Logging Interval", value: "Configurable 1–60 minutes" },
      { label: "Memory", value: "Up to 5000 logs (offline buffer)" },
      { label: "Temperature Range", value: "–40°C to +60°C (optional sensor)" },
      { label: "Sensor Type", value: "NTC, epoxy encapsulated with Teflon cable" },
      { label: "Power Supply", value: "12 V DC, 1 A + 3.7 V, 450 mAh battery" },
      { label: "Enclosure", value: "ABS plastic, approx. 40 × 78 × 55 mm" },
    ],

    downloads: [
      {
        label: "Download Frigo-101-BB Datasheet (PDF)",
        href: "/docs/frigo-101-bb-datasheet.pdf", // point this to your actual uploaded PDF path
      },
    ],
  };

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-16">
      {/* HERO */}
      <section className="relative border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
            <div className="relative aspect-[16/6] w-full overflow-hidden">
              {product.heroImage ? (
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  (Product image placeholder)
                </div>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white/90 backdrop-blur px-4 sm:px-6 lg:px-8 py-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#e6f0ff] text-[#003b8f] border border-[#cfe0ff] px-3 py-1 text-xs">
                      {product.family}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#0055cc] text-white px-3 py-1 text-xs">
                      {product.code}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#9ec1ff] text-[#003b8f] px-3 py-1 text-xs">
                      GSM Indoor Tracking
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#9ec1ff] text-[#003b8f] px-3 py-1 text-xs">
                      Optional Temperature
                    </span>
                  </div>
                  <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
                    {product.name}
                  </h1>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="/contact?product=Frigo-101-BB"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm bg-[#0055cc] text-white hover:bg-[#004bb3]"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="/products/frigo-100/compare"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm border border-[#9ec1ff] text-[#003b8f] hover:bg-[#e6f0ff]"
                  >
                    Compare Models
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-base leading-relaxed text-gray-800">{product.intro}</p>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: features / benefits / applications */}
          <div className="lg:col-span-8 space-y-8">
            {/* Features */}
            <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
              <div className="px-6 pt-6">
                <h2 className="text-lg font-semibold text-slate-900">Key Features</h2>
              </div>
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((f) => (
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

            {/* Benefits */}
            <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
              <div className="px-6 pt-6">
                <h2 className="text-lg font-semibold text-slate-900">Benefits</h2>
              </div>
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((b) => (
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

            {/* Applications */}
            <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
              <div className="px-6 pt-6">
                <h2 className="text-lg font-semibold text-slate-900">Applications</h2>
              </div>
              <div className="px-6 pb-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {product.applications.map((a) => (
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
          </div>

          {/* RIGHT: highlights + resources */}
          {/* RIGHT: device + highlights */}
<aside className="lg:col-span-4">
  <div className="lg:sticky lg:top-6 space-y-4">
    {/* Device + Highlights in one card */}
    <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
      {/* Device image */}
      <div className="px-6 pt-6 flex items-center justify-center">
        <div className="w-full max-w-xs">
          <img
            src="/images/products/frigo-101-aa-device.png"
            alt="Frigo-101-BB device"
            className="w-full h-auto object-contain drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>

      {/* Highlights title */}
      <div className="px-6 pt-4">
        <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
      </div>

      {/* Highlights list */}
      <div className="px-6 pb-6">
        <dl className="divide-y divide-gray-100">
          {product.highlights.map((h) => (
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

    {/* Resources card */}
    {product.downloads && product.downloads.length > 0 && (
      <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
        <div className="px-6 pt-6">
          <h2 className="text-sm font-semibold text-slate-900">
            Resources
          </h2>
        </div>
        <div className="px-6 pb-6 space-y-2">
          {product.downloads.map((d) => (
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
