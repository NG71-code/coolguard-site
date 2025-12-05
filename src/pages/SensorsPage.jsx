import React from "react";

const SENSOR_GROUPS = [
  {
    group: "Temperature Probes",
    usage: "Cold rooms, walk-in chillers, freezer rooms, blast rooms",
    img: "/images/products/sensor-temp-probe.png",
    items: [
      "Food-grade stainless-steel temperature probe (standard length)",
      "Extended-length probe for deep freezer & blast freezer applications",
      "High-accuracy probe for mapping, validation & stability studies",
    ],
  },

  {
    group: "Humidity & Ambient Sensors",
    usage: "Processing rooms, cleanrooms, corridors & warehouse areas",
    img: "/images/products/sensor-th.png",
    items: [
      "Combined temperature-humidity (T-H) sensor – wall mount",
      "Cleanroom-grade RH sensor with ±2% accuracy",
      "Compact T-H sensor for MCC rooms & control panels",
    ],
  },

  {
    group: "Door & Event Sensors",
    usage: "Door open/close monitoring & equipment status logging",
    img: "/images/products/door-sensor.png",
    items: [
      "Magnetic door contact for cold rooms & freezer doors",
      "Dry-contact input for compressor / defrost / fan status",
      "Auxiliary event input for panel alarms & external triggers",
    ],
  },

  {
    group: "Gas Sensors (CO₂ / NH₃)",
    usage: "Industrial cold rooms, potato storage, ripening chambers",
    img: "/images/products/gas-sensor.png",
    items: [
      "CO₂ sensor for confined storage ventilation monitoring",
      "NH₃ leak-detection sensor for industrial refrigeration plants",
      "Integrated alert pathways through BridgePoint gateway",
    ],
  },

  {
    group: "Display & Local Alarms",
    usage: "On-site indication, audible alerts & QA verification",
    img: "/images/products/display-hooter.png",
    items: [
      "Digital display module for showing live temperature",
      "High-dB hooter for local deviation alerts",
      "Mute/reset button module for operator acknowledgement",
    ],
  },
];

export default function SensorsPage() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
              CoolGuard Sensors
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Enterprise-grade sensors &amp; accessories for the cold chain
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
              CoolGuard provides a complete family of temperature, humidity, gas,
              door, and equipment-status sensors engineered for pharma, food,
              agriculture, and cold storage operations. All sensors are designed
              to work seamlessly with Kryo loggers, Frigo devices, Enviro Wireless
              Nodes, and BridgePoint gateways.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HeroBadge
                title="Accuracy & Stability"
                text="High-precision sensing with traceable calibration options for audits & compliance."
              />
              <HeroBadge
                title="Industrial Reliability"
                text="Rugged construction tested for freezer, chiller & harsh-environment use."
              />
              <HeroBadge
                title="Plug-and-Play Integration"
                text="All sensors are pre-terminated & compatible with Kryo / Frigo / BridgePoint."
              />
            </div>
          </div>
        </div>
      </section>

      {/* SENSOR GROUPS */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Complete sensor ecosystem for every cold-chain application
            </h2>
            <p className="text-[11px] text-slate-500">
              Full part numbers &amp; options available in the sensor catalogue.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SENSOR_GROUPS.map((group) => (
              <article
                key={group.group}
                className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-5 flex flex-col"
              >
                <img
                  src={group.img}
                  alt={group.group}
                  className="w-24 h-24 object-contain mx-auto mb-4"
                />
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-1">
                  {group.group}
                </p>
                <h3 className="text-sm font-semibold text-slate-900">
                  {group.usage}
                </h3>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-600 flex-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0055cc]/70" />
                      <span>{item}</span>
                    </li>
                  ))}

                  {/* Extra NTC / RTD detail specifically for Temperature Probes */}
                  {group.group === "Temperature Probes" && (
                    <li className="flex gap-2 mt-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                      <span className="text-[12px] text-slate-700">
                        Available in NTC (10k / 50k) and RTD (PT100 / PT1000)
                        variants, selected based on accuracy, range and
                        qualification requirements.
                      </span>
                    </li>
                  )}
                </ul>

                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] text-slate-500">
                  Works with: Kryo-100 Series · Frigo-100 Series · Enviro Wireless
                  Nodes · BridgePoint CloudConnect
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPERATURE SENSOR TECHNOLOGY – NTC vs RTD */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-3">
            Temperature sensor technology – NTC &amp; RTD options
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-3xl mb-4">
            CoolGuard supports both NTC thermistors and RTD elements to match
            different accuracy and compliance needs. Engineering and QA teams can
            choose the appropriate sensing element at the project design stage.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="rounded-2xl border border-[#d4e2ff] bg-white p-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0055cc] mb-1">
                NTC Thermistor Probes
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>Available in 10kΩ / 50kΩ variants.</li>
                <li>
                  Ideal for refrigeration applications – cold rooms, freezers,
                  blast rooms &amp; food storage.
                </li>
                <li>Fast response and cost-effective for large deployments.</li>
                <li>Recommended where typical accuracy bands are sufficient.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#d4e2ff] bg-white p-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0055cc] mb-1">
                RTD Probes (PT100 / PT1000)
              </p>
              <ul className="space-y-1.5 text-slate-700">
                <li>PT100 / PT1000 elements for high stability and linearity.</li>
                <li>
                  Preferred for pharma, cleanrooms, stability chambers and
                  critical QA applications.
                </li>
                <li>
                  Better long-term drift characteristics and calibration behaviour.
                </li>
                <li>
                  Suitable where validation protocols demand higher accuracy and
                  traceability.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Final sensor selection (NTC vs RTD) is done per project based on
            application, qualification requirements, and the connected logger /
            controller model.
          </p>
        </div>
      </section>

      <SensorsArchitectureStrip />

      {/* CTA */}
      {/* <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0f172a] text-white px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-300 mb-2">
                Engineering &amp; QA teams
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Need help selecting sensors for your facility?
              </h2>
              <p className="mt-1.5 text-sm text-slate-200 max-w-xl">
                Share your cold rooms, freezer rooms, process areas &amp;
                equipment layout — we’ll prepare a complete sensor + wiring +
                gateway design aligned with compliance requirements.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300 transition"
            >
              Book a design consultation
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}

function HeroBadge({ title, text }) {
  return (
    <div className="rounded-2xl border border-[#d4e2ff] bg-[#f6f8ff] px-4 py-3">
      <h3 className="text-xs font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function SensorsArchitectureStrip() {
  const blocks = [
    {
      title: "Field Sensors",
      items: [
        "Temperature probes (NTC / RTD)",
        "Humidity sensors",
        "Door sensors",
        "Gas sensors (CO₂ / NH₃)",
        "Local hooter & display modules",
      ],
      caption: "Installed at the precise room, product or equipment location.",
    },
    {
      title: "Nodes & Loggers",
      items: ["Kryo loggers", "Frigo loggers", "Enviro Wireless Nodes"],
      caption: "Collect, validate & buffer sensor readings.",
    },
    {
      title: "Gateways",
      items: ["BridgePoint CloudConnect"],
      caption: "Edge connectivity for secure cloud uplink.",
    },
    {
      title: "CoolGuard Cloud",
      items: ["Dashboards", "Alerts & HoD notifications", "Audit-grade reports"],
      caption: "Centralized compliance & monitoring platform.",
    },
  ];

  return (
    <section className="mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-slate-900 mb-3">
          How sensors fit into the CoolGuard architecture
        </h2>
        <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-5 overflow-x-auto">
          <div className="flex gap-4 min-w-[800px]">
            {blocks.map((block, idx) => (
              <div
                key={block.title}
                className="relative flex-1 rounded-2xl bg-[#f5f7ff] border border-[#d5e3ff] p-4"
              >
                {idx < blocks.length - 1 && (
                  <div className="hidden md:block absolute right-[-14px] top-1/2 -translate-y-1/2">
                    <div className="w-7 h-7 rounded-full bg-[#0055cc]/6 border border-[#cfe0ff] flex items-center justify-center text-[11px] font-semibold text-[#0055cc]">
                      →
                    </div>
                  </div>
                )}
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0055cc] mb-1">
                  {block.title}
                </p>
                <ul className="text-xs text-slate-700 space-y-1">
                  {block.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0055cc]/70" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[11px] text-slate-500">{block.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
