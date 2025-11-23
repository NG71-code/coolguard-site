import React from "react";
export default function Frigo101AA() {
  const product = {
    name: "Frigo-101-AA",
    code: "FR-101-AA",
    family: "Frigo-100 Series",
    tagline: "Cloud  Temperature Logger for Freezers & Coolers",
    heroImage: "/images/products/frigo-hero2.png", // put an image here later if you want
    intro:
      "Frigo-101-AA is your smartest safeguard for every freezer and cooler. Engineered for reliability, it continuously tracks temperature with precision and instantly pushes the data to the CoolGuard Cloud — ensuring your products are always protected. With automatic alerts, secure cloud backups, and offline data logging, Frigo-101-AA eliminates manual checks, prevents losses, and keeps you fully compliant at all times.Frigo-101-AA is a compact, wireless IoT temperature logger for freezers and coolers. It records temperature continuously and syncs to the CoolGuard Cloud to keep your operations compliant and audit-ready.",
    features: [
      "Temperature range –40°C to +60°C",
      "Wi-Fi / LoRa connectivity",
      "NABL-traceable calibration",
      "IP65 enclosure",
      "Local memory for offline logging",
      "Real-time alerts via SMS / Email / App",
      "Long battery life (up to 3 years)",
    ],
    benefits: [
      "Ensure WHO / GMP temperature compliance",
      "Prevent spoilage with instant excursion alerts",
      "Eliminate manual logbooks and reduce errors",
      "Faster audits with ready-to-download reports",
      "Seamless integration with CoolGuard Cloud",
    ],
    applications: [
      "Pharma cold rooms & vaccine freezers",
      "Food & beverage chillers",
      "Blast freezers & walk-in freezers",
      "Reefer trucks & dispatch areas",
    ],
    highlights: [
      { label: "Model", value: "Frigo-101-AA" },
      { label: "Sensor", value: "NTC Thermistor" },
      { label: "Range", value: "–40°C to +60°C" },
      { label: "Connectivity", value: "Wi-Fi / LoRa" },
      { label: "Battery", value: "Up to 3 years" },
      { label: "Ingress", value: "IP65" },
      { label: "Cloud", value: "CoolGuard Cloud" },
    ],
    downloads: [
      {
        label: "Download Datasheet (PDF)",
        href: "/docs/frigo-101-aa-datasheet.pdf",
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
                      4G
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[#9ec1ff] text-[#003b8f] px-3 py-1 text-xs">
                      NABL Calibrated
                    </span>
                  </div>
                  <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
                    {product.name}
                  </h1>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="/contact?product=Frigo-101-AA"
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

          {/* RIGHT: highlights */}
          
         {/* RIGHT: highlights + device image */}
<aside className="lg:col-span-4">
  <div className="lg:sticky lg:top-6 space-y-4">
    {/* One single card: device image + highlights */}
    <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
      <div className="px-6 pt-6">
        {/* Device image at top of card */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/products/frigo-101-aa-device.png"
            alt="Frigo-101-AA device"
            className="w-32 h-auto rounded-xl shadow-sm border border-gray-200 bg-white p-2"
          />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
      </div>
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

    {/* Downloads */}
    {product.downloads && product.downloads.length > 0 && (
      <div className="rounded-2xl bg-white border border-[#cfe0ff] shadow-sm">
        <div className="px-6 pt-6">
          <h2 className="text-sm font-semibold text-slate-900">Resources</h2>
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
