// src/pages/CloudPlatform.jsx
import React from "react";

export default function CloudPlatform() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10 flex flex-col lg:flex-row gap-10 items-start">
            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
                CoolGuard Cloud Platform
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                One Unified Cloud for All Your Cold Chain Assets
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                The CoolGuard cloud platform brings all your cold rooms, freezers,
                controllers, and wireless nodes into a single, easy-to-use
                interface. Monitor live temperatures, receive alerts, view history,
                and download compliance reports from anywhere.
              </p>

              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 mb-6">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">
                      Live Dashboards
                    </div>
                    <div>Site-wise and asset-wise views updated in real time.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">
                      Alerts & Notifications
                    </div>
                    <div>SMS / Email / App push for temperature excursions.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">
                      Compliance Reports
                    </div>
                    <div>21CFR & audit-friendly exports and summaries.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <div className="text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">
                      Multi-Site View
                    </div>
                    <div>Head-office overview across plants, DCs, and branches.</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#web-features"
                  className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0044aa] transition-colors"
                >
                  Explore Web Platform Features
                </a>
                <a
                  href="#mobile"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  See Mobile App Experience
                </a>
              </div>
            </div>

            {/* Main Screenshot */}
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <div className="aspect-[16/10] rounded-3xl bg-[#0f172a] border border-[#1d2840] overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.45)]">
                {/* Replace with real dashboard screenshot */}
                <img
                  src="/images/platform/dashboard-main.png"
                  alt="CoolGuard Cloud Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500 text-center">
                *Sample CoolGuard dashboard view. Replace with final screenshot
                from production system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEB PLATFORM FEATURES */}
      <section id="web-features" className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Web Platform Features
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Designed for operations, quality, and management teams to keep
                complete control over the cold chain.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Multi-Site, Multi-Asset Dashboard
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                View all locations, cold rooms, and freezers in one place. See
                live status, last update time, and quick health indicators.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Color-coded status for each asset</li>
                <li>• Drill-down to asset detail pages</li>
                <li>• Filter by site, region, asset type</li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Historical Trends & Reports
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Plot temperature, door status, and alarms over time. Export data
                in Excel / PDF for audits and investigations.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Custom date ranges & zoom</li>
                <li>• Asset and batch-based views</li>
                <li>• Automated scheduled reports*</li>
              </ul>
            </article>

            {/* Card 3 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Alert Center & Escalations
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Centralized alert listing with acknowledgement, comments, and
                escalation paths to ensure timely action.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Alert filters by site / severity</li>
                <li>• Acknowledge & add corrective actions</li>
                <li>• Escalation chains to supervisors</li>
              </ul>
            </article>

            {/* Card 4 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                User Management & Access Control
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Role-based access for operators, quality team, maintenance, and
                management with audit trails.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Role-based permissions</li>
                <li>• Site and asset-level access control</li>
                <li>• Login & configuration audit logs*</li>
              </ul>
            </article>

            {/* Card 5 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Mapping & Calibration Support
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Integrate temperature mapping studies and calibration records
                directly with asset history for better traceability.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Attach mapping reports to assets</li>
                <li>• Store calibration certificates</li>
                <li>• Reminder for re-calibration due</li>
              </ul>
            </article>

            {/* Card 6 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Maintenance & Asset View*
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Track device status, firmware, signal strength, and basic
                maintenance information in one place.
              </p>
              <ul className="text-[11px] text-slate-700 space-y-1 mt-auto">
                <li>• Device health overview</li>
                <li>• Battery / signal indicators (wireless)</li>
                <li>• Asset-wise event summary</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS STRIP */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">
            Sample Screens from CoolGuard Cloud
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl overflow-hidden border border-[#d7e3ff] bg-white">
              <img
                src="/images/platform/dashboard-sites.png"
                alt="Multi-site dashboard"
                className="w-full h-44 md:h-52 object-cover"
              />
              <div className="px-3 py-2">
                <p className="text-[11px] font-medium text-slate-800">
                  Multi-site overview
                </p>
                <p className="text-[10px] text-slate-500">
                  Head-office view of all locations and assets.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#d7e3ff] bg-white">
              <img
                src="/images/platform/asset-detail.png"
                alt="Asset detail screen"
                className="w-full h-44 md:h-52 object-cover"
              />
              <div className="px-3 py-2">
                <p className="text-[11px] font-medium text-slate-800">
                  Asset detail with graph
                </p>
                <p className="text-[10px] text-slate-500">
                  Live reading, history graph, and alarm summary.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#d7e3ff] bg-white">
              <img
                src="/images/platform/alerts-center.png"
                alt="Alert center screen"
                className="w-full h-44 md:h-52 object-cover"
              />
              <div className="px-3 py-2">
                <p className="text-[11px] font-medium text-slate-800">
                  Alert center
                </p>
                <p className="text-[10px] text-slate-500">
                  Consolidated list of open and closed alerts.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-[10px] text-slate-500">
            *Replace these placeholder images with actual screenshots exported
            from your live CoolGuard platform.
          </p>
        </div>
      </section>

      {/* MOBILE APP SECTION */}
      <section id="mobile" className="mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                CoolGuard Mobile App Features
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                The CoolGuard mobile app keeps operations and management teams
                connected to their cold chain 24x7. Quickly check current
                temperatures, acknowledge alerts, and review recent trends.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Live list of all assets with color-coded health status.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Instant push notifications for temperature excursions,
                    power failures*, and door left open.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Simple trend graph for last few hours / days to quickly
                    verify stability.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Acknowledge alerts and add short remarks for corrective
                    actions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Role-based access so each user sees only their assigned
                    sites.
                  </span>
                </li>
              </ul>
            </div>

            {/* Mobile Screenshot */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-52 sm:w-60">
                <div className="rounded-[2.5rem] border border-[#111827] bg-black shadow-[0_18px_60px_rgba(15,23,42,0.55)] overflow-hidden">
                  <div className="h-6 bg-black" />
                  <div className="h-[360px] bg-slate-950">
                    {/* Replace with mobile app screenshot */}
                    <img
                      src="/images/platform/mobile-home.png"
                      alt="CoolGuard Mobile App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-6 bg-black" />
                </div>
                <p className="mt-3 text-[10px] text-slate-500 text-center">
                  *Replace with your Android / iOS app screenshot showing asset
                  list or alerts screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE & CTA */}
      <section className="mt-14 border-t border-[#dde7ff] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Secure, Scalable Cloud Architecture
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                CoolGuard is built on a modern, scalable cloud stack with data
                reliability at the core. From edge devices to dashboards, every
                layer is designed for continuous operation and data integrity.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Redundant data paths from controllers and gateways to cloud
                    servers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Secure APIs and encrypted communication between devices and
                    platform.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055cc]" />
                  <span>
                    Data retention policies aligned with audit and compliance
                    needs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#d7e3ff] bg-[#f5f7ff] p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Typical Data Flow
              </h3>
              <ol className="space-y-2 text-xs text-slate-700 mb-4">
                <li>1. Sensors &amp; controllers measure temperature / status.</li>
                <li>2. Data is sent via BridgePoint / Nexus gateways.</li>
                <li>3. Cloud platform stores, analyzes, and triggers alerts.</li>
                <li>4. Web and mobile apps present data to users.</li>
              </ol>
              <div className="rounded-2xl bg-white border border-dashed border-[#cfe0ff] p-4 text-xs text-slate-500">
                Placeholder: Insert architecture diagram image here
                (Devices → Gateways → Cloud → Web &amp; Mobile Apps).
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Want a live demo of the CoolGuard platform?
              </h3>
              <p className="text-xs md:text-sm text-[#e0ebff]">
                Share your application and number of sites, and we will organise
                a walkthrough of the cloud and mobile app tailored to your use
                case.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#003b8f] shadow-sm hover:bg-[#f3f6ff] transition-colors"
            >
              Request a CoolGuard Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
