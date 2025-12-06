// src/pages/CloudPlatform.jsx
import React from "react";
import {
  LayoutDashboard,
  Map,
  LineChart,
  BellRing,
  Users,
  Wrench,
} from "lucide-react";

export default function CloudPlatform() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-10">
      {/* HERO (3D TABLET USING EXISTING PNG) */}
      <section
        className="relative overflow-hidden border-b bg-[#00132a]"
        style={{
          backgroundImage: "url('/images/products/cloud-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#003b8f]/60 via-[#001a3a]/90 to-[#000814]/95 backdrop-blur-[2px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center relative z-10">
            {/* LEFT TEXT */}
            <div className="flex-1">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-sky-300 mb-2.5">
                CoolGuard Cloud Platform
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3.5">
                One Unified Cloud for All Your{" "}
                <span className="text-sky-300">Cold Chain Assets</span>
              </h1>

              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 max-w-xl">
                The CoolGuard cloud platform brings all your cold rooms,
                freezers, controllers, and wireless nodes into a single
                interface. Monitor live temperatures, receive alerts, view
                history, and download compliance reports from anywhere.
              </p>

              <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 mb-5">
                {[
                  [
                    "Live Dashboards",
                    "Site-wise and asset-wise views updated in real time.",
                  ],
                  [
                    "Alerts & Notifications",
                    "SMS / Email / App push for excursions.",
                  ],
                  ["Compliance Reports", "21CFR & audit-friendly exports."],
                  [
                    "Multi-Site View",
                    "HO overview across plants, DCs, branches.",
                  ],
                  [
                    "Facility Layout & Sensor Mapping",
                    "Room-wise layout view with sensor positions, live values and door status.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <div className="text-xs text-slate-300">
                      <div className="font-semibold text-white">{title}</div>
                      <div>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#web-features"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_rgba(56,189,248,0.45)] hover:bg-sky-400 transition-colors"
                >
                  Explore Web Platform Features
                </a>
                <a
                  href="#mobile"
                  className="inline-flex items-center justify-center rounded-full border border-sky-400/60 bg-white/10 px-5 py-2.5 text-sm font-medium text-sky-200 hover:bg-white/20 transition-colors"
                >
                  See Mobile App Experience
                </a>
              </div>
            </div>

            {/* RIGHT – TABLET MOCKUP */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="pointer-events-none absolute -inset-10 rounded-[4rem] bg-sky-400/40 blur-[110px] opacity-65" />
              <div className="relative w-full max-w-xl lg:max-w-2xl">
                <img
                  src="/images/products/hero_float_mockup.png"
                  alt="CoolGuard Cloud Dashboard"
                  className="w-full h-auto shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
                />
                <p className="mt-2.5 text-[10px] text-slate-300 text-right pr-2">
                  *Sample CoolGuard dashboard view.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB FEATURES (WHITE) */}
      <section
        id="web-features"
        className="mt-8 bg-white py-10 border-y border-[#e6edff]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-500 mb-1.5">
            Web Platform
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Web Platform Features
          </h2>

          <p className="text-sm text-slate-600 mt-2 mb-6">
            Designed for operations, quality, and management teams to get a
            single, reliable view of the entire cold chain.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: LayoutDashboard,
                title: "Multi-Site, Multi-Asset Dashboard",
                desc: "View all locations and assets in one place.",
                bullets: ["Color-coded status", "Drill-down", "Filter by site"],
              },
              {
                icon: Map,
                title: "Facility Layout & Sensor Mapping",
                desc: "Interactive facility layout with sensors placed at actual locations.",
                bullets: [
                  "Room-wise map with live values",
                  "Door / IBT / tank status",
                  "Quick view of hot spots",
                ],
              },
              {
                icon: LineChart,
                title: "Historical Trends & Reports",
                desc: "Plot temperature, door status & alarms over time.",
                bullets: ["Custom ranges", "Batch views", "Scheduled reports*"],
              },
              {
                icon: BellRing,
                title: "Alert Center & Escalations",
                desc: "See, acknowledge and escalate alerts.",
                bullets: [
                  "Severity filters",
                  "Corrective actions",
                  "Supervisor escalation",
                ],
              },
              {
                icon: Users,
                title: "User Management & Access Control",
                desc: "Role-based access for different teams & sites.",
                bullets: ["Permissions", "Site-level access", "Audit logs*"],
              },
              {
                icon: Wrench,
                title: "Maintenance & Asset View*",
                desc: "Device health & status for your field teams.",
                bullets: ["Health overview", "Battery / signal", "Asset summary"],
              },
            ].map(({ icon: Icon, title, desc, bullets }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-b 
                     from-white to-[#f6f8ff] border border-[#d7e3ff] shadow-sm 
                     hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-sky-300 opacity-70" />
                <div className="p-5 pt-5 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                      {title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{desc}</p>
                  <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-1.5">
                        <span className="mt-[5px] h-1 w-1 rounded-full bg-sky-500 group-hover:bg-sky-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-3 text-[11px] text-slate-400">
            *Features marked with an asterisk are available in selected plans or
            as add-ons.
          </p>
        </div>
      </section>

      {/* SCREENSHOTS SECTION */}
      <section className="mt-0 bg-[#f7f9ff] py-10 border-b border-[#dce5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base md:text-lg font-semibold text-slate-900">
            Sample Screens from CoolGuard Cloud
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            A quick glimpse of how operations, quality and management teams see
            the CoolGuard data.
          </p>

          <div className="grid gap-5 md:grid-cols-4 mt-5">
            {[
              {
                file: "plantlayout.png",
                title: "Facility layout view",
                desc: "Room-wise layout with live sensor values, IBT tanks and door status.",
              },
              {
                file: "assetgraph.png",
                title: "Asset detail with graph",
                desc: "Live readings with history graph, set-points and alarm band.",
              },
              {
                file: "multisite.png",
                title: "Multi-site dashboard",
                desc: "At-a-glance status for all sites, cold rooms and freezers.",
              },
              {
                file: "eventdetails.png",
                title: "Alert / event details",
                desc: "Full audit trail of alerts, acknowledgements and actions taken.",
              },
            ].map(({ file, title, desc }) => (
              <div
                key={file}
                className="group rounded-3xl bg-gradient-to-b from-white to-[#f8faff]
                     border border-[#e1e7ff] shadow-sm hover:shadow-xl
                     hover:-translate-y-1 transition-all duration-300
                     cursor-pointer overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-3xl bg-slate-100">
                  <img
                    src={`/images/platform/${file}`}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="text-xs text-slate-500 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APP SECTION – tweaked for better balance */}
      <section
        id="mobile"
        className="bg-gradient-to-b from-white to-[#f3f7ff] mt-0 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* LEFT – TEXT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-500 mb-1.5">
                Mobile First Monitoring
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                CoolGuard Mobile App Features
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                Stay connected to your cold chain 24x7 – even when you’re away
                from the control room.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  "Live list of all assets with color-coded status.",
                  "Instant push notifications for excursions & power failures.",
                  "Simple trend graph to quickly verify temperature stability.",
                  "Acknowledge alerts & log corrective actions on the go.",
                  "Role-based access so each user sees only their sites.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT – MOBILE MOCKUP (larger & better aligned) */}
            <div className="relative flex justify-center lg:justify-end lg:pl-6">
              {/* Soft glow behind phone */}
              <div className="pointer-events-none absolute inset-0 translate-y-6 translate-x-4 rounded-full bg-sky-400/40 blur-3xl opacity-70" />

              <div
                className="relative w-[250px] sm:w-[270px] md:w-[310px] lg:w-[330px]
                     rounded-[3rem] bg-black/95 border border-slate-900
                     shadow-[0_26px_80px_rgba(15,23,42,0.8)] overflow-hidden"
              >
                {/* Top notch / speaker */}
                <div className="absolute inset-x-20 top-3 h-1.5 rounded-full bg-slate-700/90 z-10" />

                {/* Screen */}
                <div className="mt-5 mb-4 mx-3 rounded-[2.2rem] overflow-hidden bg-slate-950">
                  <img
                    src="/images/platform/coolguardapp.jpeg"
                    alt="CoolGuard Mobile – asset list with alerts"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pb-4 px-5">
                  <p className="text-[10px] text-slate-400 text-right">
                    *Sample CoolGuard mobile app screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="mt-0 bg-[#f2f6ff] border-t border-[#d7e3ff] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Secure, Scalable Cloud Architecture
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                CoolGuard is built on a modern, scalable cloud stack designed
                for reliability &amp; data integrity.
              </p>

              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Redundant data paths from controllers and gateways.",
                  "Secure APIs and encrypted communication.",
                  "Data retention aligned with compliance needs.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#d7e3ff] bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-2.5">
                Typical Data Flow
              </h3>

              <ol className="space-y-1.5 text-xs text-slate-700 mb-3.5">
                <li>1. Sensors &amp; controllers measure temperature.</li>
                <li>2. Data sent via BridgePoint / Nexus gateways.</li>
                <li>3. Cloud analyzes &amp; triggers alerts.</li>
                <li>4. Web &amp; mobile apps present data.</li>
              </ol>

              <div className="rounded-2xl bg-white border border-dashed border-[#cfe0ff] p-4 text-xs text-slate-500">
                Placeholder: Insert architecture diagram here.
              </div>

              <p className="text-[11px] text-slate-500 mt-3">
                For detailed integrations &amp; enterprise options, contact our
                support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
