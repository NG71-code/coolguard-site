import React from "react";

export default function NodesArchitectureSection() {
  return (
    <section
      id="nodes-architecture"
      className="w-full bg-[#F4F7FB] pt-10 pb-8 border-t border-[#d7e3ff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#0055cc] mb-2">
            Nodes &amp; Gateways
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            CoolGuard end-to-end architecture
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            A field-proven architecture that connects sensors in cold rooms to the
            CoolGuard Cloud using Enviro Wireless Nodes, MultiSense loggers, and
            Bridge Point gateways—designed like an enterprise OT/IT network.
          </p>
        </div>

        {/* Diagram container */}
        <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 md:p-7 overflow-x-auto">
          <div className="min-w-[980px]">
            {/* ZONE LABELS */}
            <div className="grid grid-cols-3 gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Field / OT Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Site Network</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>CoolGuard Cloud VPC</span>
              </div>
            </div>

            {/* MAIN GRID (3 ZONES) */}
            <div className="grid grid-cols-3 gap-4">
              {/* FIELD ZONE */}
              <ZoneCard
                color="emerald"
                title="Cold Rooms, Freezers & Process Areas"
                subtitle="Sensors wired or wireless to Enviro and Kryo/Frigo devices."
              >
                <div className="grid grid-cols-2 gap-3">
                  <IconNode
                    label="Temp Probes"
                    desc="Pt100 / NTC probes in cold rooms, freezers, blast rooms."
                    badge="Analog / RTD"
                  />
                  <IconNode
                    label="T-H Sensors"
                    desc="Ambient T-H for process rooms, staging and corridors."
                    badge="4–20 mA / Modbus"
                  />
                  <IconNode
                    label="Door Contacts"
                    desc="Magnetic door sensors for access & KPI tracking."
                    badge="Digital"
                  />
                  <IconNode
                    label="Event Inputs"
                    desc="Compressor, defrost, alarm dry-contact inputs."
                    badge="Digital"
                  />
                </div>

                {/* Link to nodes */}
                <FieldToSiteArrow label="Enviro Wireless Nodes & MultiSense Loggers" />
              </ZoneCard>

              {/* SITE / NODES & GATEWAYS ZONE */}
              <ZoneCard
                color="amber"
                title="Nodes, Loggers & Bridge Point"
                subtitle="Edge devices aggregate, buffer and secure data to the cloud."
              >
                <div className="space-y-3">
                  <InlineCluster
                    title="Enviro Wireless Nodes"
                    desc="Battery-powered nodes for ambient T-H and event inputs."
                    tag="Kryo-101-ND"
                  />
                  <InlineCluster
                    title="MultiSense Cloud Logger"
                    desc="8-channel panel logger for cold rooms & process areas."
                    tag="Kryo-101-DD"
                  />
                  <InlineCluster
                    title="Bridge Point Cloud Connect"
                    desc="Zone / Facility / Enterprise gateway with buffering & VPN."
                    tag="Bridge Point"
                  />

                  <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
                    <div className="rounded-2xl bg-[#fff7eb] border border-[#fcd9a3] p-3">
                      <p className="font-semibold text-[11px] text-amber-800 mb-1">
                        OT side
                      </p>
                      <ul className="space-y-0.5 list-disc list-inside">
                        <li>RS-485 / Modbus, analog &amp; digital inputs</li>
                        <li>Local alarms &amp; display</li>
                        <li>Store-and-forward buffering</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#e6f3ff] border border-[#c5ddff] p-3">
                      <p className="font-semibold text-[11px] text-sky-900 mb-1">
                        IT side
                      </p>
                      <ul className="space-y-0.5 list-disc list-inside">
                        <li>LAN / 4G / Wi-Fi uplink</li>
                        <li>TLS / VPN tunnel to CoolGuard</li>
                        <li>Remote configuration &amp; firmware</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Link to cloud */}
                <SiteToCloudArrow label="MQTT / HTTPS over secure tunnel" />
              </ZoneCard>

              {/* CLOUD ZONE */}
              <ZoneCard
                color="sky"
                title="CoolGuard Cloud Platform"
                subtitle="Multi-tenant, multi-site monitoring for enterprise QA & Ops."
              >
                <div className="grid grid-cols-2 gap-3">
                  <CloudTile
                    title="Ingest & Time-series Store"
                    bullet1="High-frequency data from all sites"
                    bullet2="Store-and-forward aware pipelines"
                  />
                  <CloudTile
                    title="Dashboards & Alerts"
                    bullet1="Site / region / enterprise views"
                    bullet2="24×7 alarms via email / SMS / WhatsApp"
                  />
                  <CloudTile
                    title="Compliance & Reports"
                    bullet1="Audit trails, mapping & validation"
                    bullet2="Export to PDF / Excel for QA teams"
                  />
                  <CloudTile
                    title="APIs & Integration"
                    bullet1="ERP / LIMS / QMS integration"
                    bullet2="Partner / white-label options"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-dashed border-sky-300 bg-[#f3f8ff] p-3 text-[11px] text-slate-700">
                  <p className="font-semibold text-sky-900 mb-1">
                    Typical deployment
                  </p>
                  <p>
                    Multiple plants, cold stores and warehouses connected to a
                    single CoolGuard tenant with role-based access for QA,
                    engineering and management.
                  </p>
                </div>
              </ZoneCard>
            </div>
          </div>
        </div>

        {/* Key bullets under the diagram */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <BottomPoint
            title="Segregated OT / IT zones"
            text="Architecture clearly separates field devices, site network and cloud VPC—aligned with modern OT/IT and cybersecurity practices."
          />
          <BottomPoint
            title="Store-and-forward reliability"
            text="Nodes and Bridge Point gateways buffer locally so QA teams do not lose critical audit data even during network downtime."
          />
          <BottomPoint
            title="Ready for multi-site scaling"
            text="The same pattern repeats for 1 or 100+ sites, with centralized monitoring, reports and integrations in CoolGuard Cloud."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper components ---------- */

function ZoneCard({ color, title, subtitle, children }) {
  const borderColors = {
    emerald: "border-emerald-200",
    amber: "border-amber-200",
    sky: "border-sky-200",
  };
  const dotColors = {
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    sky: "bg-sky-400",
  };

  return (
    <div
      className={`relative rounded-3xl border ${borderColors[color]} bg-slate-50/60 p-4 md:p-5`}
    >
      <div className="flex items-start gap-2 mb-3">
        <span className={`mt-1 w-2.5 h-2.5 rounded-full ${dotColors[color]}`} />
        <div>
          <h3 className="text-sm md:text-base font-semibold text-slate-900">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-[11px] md:text-xs text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function IconNode({ label, desc, badge }) {
  return (
    <div className="rounded-2xl bg-white border border-emerald-100 p-3 shadow-[0_8px_20px_rgba(16,185,129,0.08)]">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <p className="text-xs font-semibold text-slate-900">{label}</p>
        <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
          {badge}
        </span>
      </div>
      <p className="text-[11px] text-slate-600 leading-snug">{desc}</p>
    </div>
  );
}

function InlineCluster({ title, desc, tag }) {
  return (
    <div className="rounded-2xl bg-white border border-amber-200 p-3 shadow-[0_8px_20px_rgba(245,158,11,0.08)]">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <p className="text-xs font-semibold text-slate-900">{title}</p>
        <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-medium text-amber-800">
          {tag}
        </span>
      </div>
      <p className="text-[11px] text-slate-600 leading-snug">{desc}</p>
    </div>
  );
}

function CloudTile({ title, bullet1, bullet2 }) {
  return (
    <div className="rounded-2xl bg-white border border-sky-200 p-3 shadow-[0_8px_20px_rgba(56,189,248,0.10)]">
      <p className="text-xs font-semibold text-slate-900 mb-1.5">{title}</p>
      <ul className="text-[11px] text-slate-600 space-y-0.5 list-disc list-inside">
        <li>{bullet1}</li>
        <li>{bullet2}</li>
      </ul>
    </div>
  );
}

function FieldToSiteArrow({ label }) {
  return (
    <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-600">
      <div className="flex-1 h-px bg-gradient-to-r from-emerald-400 to-amber-400" />
      <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 shadow-sm">
        <span className="mr-1.5 text-xs">⟶</span>
        <span className="font-medium">{label}</span>
      </div>
    </div>
  );
}

function SiteToCloudArrow({ label }) {
  return (
    <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-600">
      <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 shadow-sm">
        <span className="font-medium">{label}</span>
        <span className="ml-1.5 text-xs">⟶</span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-amber-400 to-sky-400" />
    </div>
  );
}

function BottomPoint({ title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-[#cfe0ff] p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}
