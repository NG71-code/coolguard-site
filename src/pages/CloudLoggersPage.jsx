// src/pages/CloudLoggersPage.jsx

export default function CloudLoggersPage() {
  return (
    <main className="bg-[#F4F7FB] min-h-screen pb-20">
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-medium text-gray-500 mb-2">
            <span className="text-[#007BFF]">Home</span> / Cloud Loggers
          </p>

          <h1 className="text-3xl font-semibold text-slate-900">
            Cloud Loggers – Kryo & Frigo Series
          </h1>

          <p className="mt-3 text-sm text-gray-600 max-w-2xl">
            Temperature monitoring devices for cold rooms, deep freezers and
            coolers. Fully integrated with the CoolGuard Cloud.
          </p>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-5 sm:grid-cols-2">
        <SeriesCard
          title="Kryo-100 Series"
          badge="Cold Rooms / Chambers"
          features={[
            "Wired or Wireless (LoRa)",
            "Ideal for cold rooms & chambers",
            "Supports multi-probe & door sensor",
          ]}
        />

        <SeriesCard
          title="Frigo-100 Series"
          badge="Freezers / Coolers"
          features={[
            "Compact form factor",
            "Dual probe options",
            "Perfect for retail & ice-cream chains",
          ]}
        />
      </section>

      {/* --------------------------------------------- */}
      {/* KRYO SERIES */}
      {/* --------------------------------------------- */}
      <section
        id="kryo-100"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10"
      >
        <h2 className="text-xl font-semibold text-slate-900">
          Kryo-100 Series – Cold Room Loggers
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mt-2 mb-6">
          Industrial-grade temperature loggers designed for walk-in cold rooms,
          pharma storage and food processing units.
        </p>

        <div className="space-y-6">
          <ProductBox
            id="kryo-101-aa"
            title="Kryo-101-AA"
            tag="Wired Cold Room Logger"
            bullets={[
              "Supports 1–4 wired RTD/temperature sensors",
              "Real-time cloud sync & alerting",
              "Door sensor input for compliance records",
              "Local hooter output for audio alerts",
            ]}
          />

          <ProductBox
            id="kryo-101-bb"
            title="Kryo-101-BB"
            tag="LoRa Wireless Node"
            bullets={[
              "Wireless node for LoRa Gateway systems",
              "Battery/external powered based on design",
              "Best for facilities with multiple chambers",
              "Eliminates cabling challenges",
            ]}
          />

          <ProductBox
            id="kryo-101-cc"
            title="Kryo-101-CC"
            tag="Advanced Cold Room Logger"
            bullets={[
              "Multiple sensor support with humidity option",
              "WHO-compliant mapping capability",
              "High accuracy PT-100 sensors",
              "Best for pharma warehouses",
            ]}
          />
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* FRIGO SERIES */}
      {/* --------------------------------------------- */}
      <section
        id="frigo-100"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14"
      >
        <h2 className="text-xl font-semibold text-slate-900">
          Frigo-100 Series – Freezer & Cooler Loggers
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mt-2 mb-6">
          Compact loggers for deep freezers, chest freezers, visicoolers and
          small cold units.
        </p>

        <div className="space-y-6">
          <ProductBox
            id="frigo-101-aa"
            title="Frigo-101-AA"
            tag="Freezer Logger"
            bullets={[
              "Single probe for product-level monitoring",
              "High/low alert notifications",
              "Ideal for retail freezers",
            ]}
          />

          <ProductBox
            id="frigo-101-bb"
            title="Frigo-101-BB"
            tag="Dual Probe Freezer Logger"
            bullets={[
              "Air probe + simulated load probe",
              "Differentiates door-opening disturbances",
              "Great for compliance audits",
            ]}
          />
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------ */
/* SMALL REUSABLE COMPONENTS */
/* ------------------------------------------------------ */

function SeriesCard({ title, badge, features }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <span className="text-[11px] px-2 py-1 rounded-full bg-blue-50 text-[#007BFF] border border-blue-200">
          {badge}
        </span>
      </div>

      <ul className="mt-3 text-sm text-gray-600 space-y-1.5">
        {features.map((f) => (
          <li key={f} className="flex gap-2 items-start">
            <span className="mt-1 h-1.5 w-1.5 bg-[#007BFF] rounded-full"></span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductBox({ id, title, tag, bullets }) {
  return (
    <article
      id={id}
      className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">
          {tag}
        </span>
      </div>

      <ul className="mt-4 text-sm text-gray-700 space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 items-start">
            <span className="mt-1 h-1.5 w-1.5 bg-[#007BFF] rounded-full"></span>
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
