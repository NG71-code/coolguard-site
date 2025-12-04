import React from "react";

const SENSOR_GROUPS = [
  {
    group: "Cold Room Probes",
    usage: "Walk-in chillers, freezers, and blast rooms",
    img: "/images/products/probe-standard.png",    // <--- ADD IMAGE
    items: [
      "Food-grade stainless steel probe – standard length",
      "Extended length probe for blast & deep freezers",
      "High-accuracy probe for mapping & validation",
    ],
  },
  {
    group: "Ambient & Process Sensors",
    usage: "Processing rooms, packing areas, corridors",
    img: "/images/products/th-sensor.png",     // <--- ADD IMAGE
    items: [
      "Ambient temperature & humidity sensor",
      "Wall-mount cleanroom T-H sensor",
      "Compact sensor for panels and MCC rooms",
    ],
  },
  {
    group: "Door & Event Sensors",
    usage: "Door open / close, compressor / defrost status",
    img: "/images/products/door-contact.png",  // <--- ADD IMAGE
    items: [
      "Magnetic door contact sensor",
      "Dry-contact input for compressor / defrost",
      "Auxiliary event input for alarms",
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
              Enterprise-grade temperature &amp; humidity sensing for the cold chain
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
              CoolGuard sensors are designed for pharma, food, and cold chain
              applications where audit trails, accuracy, and long-term stability
              are non-negotiable. Each sensor is engineered to work seamlessly
              with Kryo loggers, Enviro Wireless Nodes, and Bridge Point gateways.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HeroBadge title="Accuracy" text="Typical ±0.3°C temperature accuracy with traceable calibration options." />
              <HeroBadge title="Reliability" text="Rugged, food-grade construction for freezers down to −40°C." />
              <HeroBadge title="Integration" text="Pre-terminated and ready to plug into Kryo / Frigo / Bridge Point." />
            </div>
          </div>
        </div>
      </section>

      {/* SENSOR GROUPS */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Sensor families for every cold-chain application
            </h2>
            <p className="text-[11px] text-slate-500">
              Detailed part numbers &amp; options are available in the sensor catalogue.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SENSOR_GROUPS.map((group) => (
              <article
                key={group.group}
                className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-5 flex flex-col"
              >
                  {/* ADD IMAGE HERE */}
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
                </ul>

                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] text-slate-500">
                  Works with: Kryo-100 Series, Frigo-100 Series, Enviro Wireless Nodes.
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE ARCHITECTURE DIAGRAM */}
      <SensorsArchitectureStrip />

      {/* CTA */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0f172a] text-white px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-300 mb-2">
                Engineering &amp; QA teams
              </p>
              <h2 className="text-xl md:text-2xl font-semibold">
                Need a sensor selection guide for your site?
              </h2>
              <p className="mt-1.5 text-sm text-slate-200 max-w-xl">
                Share your cold rooms, freezers, and ambient areas, and we’ll
                propose a complete sensor + node + gateway architecture for your
                facility.
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
      </section>
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
      items: ["Temperature probes", "T-H sensors", "Door contacts"],
      caption: "Installed at the exact product or room location.",
    },
    {
      title: "Nodes & Loggers",
      items: ["Kryo / Frigo loggers", "Enviro Wireless Nodes"],
      caption: "Aggregate and validate sensor inputs.",
    },
    {
      title: "Gateways",
      items: ["Bridge Point Cloud Connect"],
      caption: "Secure uplink to CoolGuard Cloud.",
    },
    {
      title: "CoolGuard Cloud",
      items: ["Dashboards", "Alarms", "Reports"],
      caption: "Enterprise-level monitoring and compliance.",
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
