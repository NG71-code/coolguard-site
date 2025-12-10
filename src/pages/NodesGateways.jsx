// src/pages/NodesGateways.jsx
import React from "react";
import Section from "../components/Section.jsx";
import NodesArchitectureSection from "../nodes/NodesArchitectureSection.jsx";
import RequestDemoButton from "../components/RequestDemoButton.jsx"; // 👈 NEW

import {
  RadioTower,
  Wifi,
  Network,
  Gauge,
  Activity,
  Shield,
  Cloud,
  Download,
  Box,
  Server,
} from "lucide-react";

export default function NodesGateways() {
  const gateways = [
    {
      name: "Nexus Lite",
      code: "NX-LITE-100",
      tagline: "Compact LoRaWAN Gateway for single facilities",
      icon: RadioTower,
      specs: [
        "Uplink: 4G / LAN backhaul to CoolGuard Cloud",
        "Supports ~30–40 Enviro wireless nodes per site (typical)",
        "Single LoRa RF channel optimised for cold room layouts",
        "DIN-rail / wall-mountable industrial enclosure",
        "Onboard data buffering during network outages",
      ],
      installNotes: [
        "Provide stable 230V AC with MCB & UPS where possible",
        "Mount in service corridor or panel room with good RF coverage",
        "Use proper RF antenna placement – avoid metal obstructions",
      ],
      datasheet: "/docs/nexus-lite.pdf",
    },
    {
      name: "Nexus Pro",
      code: "NX-PRO-200",
      tagline: "High-density gateway for large cold stores & campuses",
      icon: Server,
      specs: [
        "Multi-channel LoRa RF for higher node density",
        "Supports 100+ Enviro wireless nodes across multiple zones",
        "Dual uplink: Ethernet + 4G with automatic failover",
        "Industrial metal enclosure, DIN-rail friendly",
        "Local diagnostics & heartbeat monitoring",
      ],
      installNotes: [
        "Place in central control room or corridor for RF line-of-sight",
        "Use wired LAN as primary, 4G as backup where available",
        "Label gateway and SIM details clearly for service reference",
      ],
      datasheet: "/docs/nexus-pro.pdf",
    },
  ];

  const nodes = [
    {
      name: "Enviro Wireless Node – Temp",
      code: "EN-T-101",
      tagline: "Battery-powered wireless temperature node",
      icon: Box,
      range: "–40°C to +60°C (sensor dependent)",
      specs: [
        "Single temperature input (RTD / thermistor – model specific)",
        "Wireless link to Nexus gateways over LoRa",
        "Multi-year battery life (usage dependent)",
        "IP-rated enclosure suitable for cold rooms & walk-ins",
        "LED status indication for join / transmit / low battery",
      ],
      placementTips: [
        "Mount probe near critical product zone, not near doors",
        "Avoid routing sensor cable alongside power cables",
        "Ensure node is within RF coverage of the gateway",
      ],
      datasheet: "/docs/enviro-temp-node.pdf",
    },
    {
      name: "Enviro Wireless Node – Temp + RH",
      code: "EN-TRH-201",
      tagline: "Temperature & humidity monitoring for critical chambers",
      icon: Activity,
      range: "–20°C to +60°C, 0–100% RH",
      specs: [
        "Integrated temperature + humidity sensing",
        "Wireless LoRa link to Nexus gateway",
        "Offset / calibration adjustments via CoolGuard Cloud",
        "Ideal for pharma, food processing & warehouses",
        "UV-resistant enclosure for long-term reliability",
      ],
      placementTips: [
        "Mount at breathing level, away from evaporator air blast",
        "Do not mount directly on external wall surfaces",
        "Survey RF signal during commissioning to confirm link quality",
      ],
      datasheet: "/docs/enviro-trh-node.pdf",
    },
  ];

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-4">
      {/* HERO */}
      <Section
        className="border-b bg-gradient-to-b from-[#e6f0ff] to-white"
        showCta={false}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              CoolGuard Hardware Layer
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Nodes &amp; Gateways for Every Cold Chain Layout
            </h1>
            <p className="text-slate-600 text-sm md:text-base mb-6">
              Nexus gateways and Enviro wireless nodes form the backbone of the
              CoolGuard platform. From single walk-in chillers to multi-chamber
              cold stores, they bring every sensor onto the cloud with reliable
              wireless connectivity.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-slate-700 mb-4">
              <li className="flex gap-2">
                <RadioTower className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>LoRa-based wireless coverage inside complex cold rooms.</span>
              </li>
              <li className="flex gap-2">
                <Network className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>Scales from a single room to multi-site deployments.</span>
              </li>
              <li className="flex gap-2">
                <Cloud className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>
                  Seamless integration with CoolGuard Cloud for alerts and reports.
                </span>
              </li>
            </ul>

            {/* 👇 New Request Demo button, same CTA system as product pages */}
            <div className="mt-2">
              <RequestDemoButton
                productCode="NODES-GATEWAYS"
                productName="Nodes & Gateways"
              >
                Request Demo
              </RequestDemoButton>
            </div>
          </div>

          {/* Right visual / placeholder image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-sky-200/60 via-indigo-200/40 to-blue-100/60 blur-3xl opacity-80" />
            <div className="relative rounded-3xl border border-[#d5e4ff] bg-white shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <RadioTower className="w-6 h-6 text-[#0055cc]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Example Topology
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Enviro Nodes → Nexus Gateway → CoolGuard Cloud
                  </p>
                </div>
              </div>

              {/* Replace this with your real image: /images/architecture/nodes-gateways.png */}
              <div className="rounded-2xl overflow-hidden border border-[#cfe0ff] bg-white shadow-sm aspect-[4/3]">
                <img
                  src="/images/products/nodesbg.png" // 👈 your final image here
                  alt="Nodes and Gateways Topology Background"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Use this diagram in presentations to explain how sensors, nodes
                and gateways talk to the CoolGuard Cloud.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* GATEWAYS */}
      <Section showCta={false}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              Gateways
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Nexus Gateways – Edge Connectivity to the Cloud
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Choose between compact Nexus Lite and high-capacity Nexus Pro
              depending on the size and complexity of your cold storage facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {gateways.map((gw) => {
              const Icon = gw.icon;
              return (
                <div
                  key={gw.code}
                  className="group rounded-3xl border border-[#d5e4ff] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-6 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 border border-[#cfe0ff]">
                        <Icon className="w-5 h-5 text-[#0055cc]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          LoRaWAN Gateway
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {gw.name}
                        </h3>
                        <p className="text-xs text-slate-500">{gw.code}</p>
                      </div>
                    </div>
                    {gw.datasheet && (
                      <a
                        href={"/docs/smart wireless Nodes and gateway datasheet.pdf"}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-medium text-[#0055cc] hover:underline"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Datasheet
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-4">{gw.tagline}</p>

                  <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 mb-4">
                    {gw.specs.map((s, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Gauge className="w-4 h-4 mt-0.5 text-[#0055cc]" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto rounded-2xl bg-[#f4f7ff] border border-dashed border-[#cfe0ff] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-[#0055cc]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                        Installation Notes
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {gw.installNotes.map((n, idx) => (
                        <li key={idx}>• {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* NODES */}
      <Section
        className="bg-[#f7f9ff] border-t border-[#d5e4ff]/70"
        showCta={false}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              Wireless Nodes
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Enviro Wireless Nodes – Inside Every Cold Room
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Battery-powered Enviro nodes are installed closer to your products,
              sending temperature and humidity data to the nearest Nexus gateway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.code}
                  className="group rounded-3xl border border-[#d5e4ff] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-6 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-100 border border-[#cfe0ff]">
                        <Icon className="w-5 h-5 text-[#0055cc]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Enviro Node
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {node.name}
                        </h3>
                        <p className="text-xs text-slate-500">{node.code}</p>
                      </div>
                    </div>
                    {node.datasheet && (
                      <a
                        href={node.datasheet}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-medium text-[#0055cc] hover:underline"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Datasheet
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-2">{node.tagline}</p>
                  <p className="text-xs font-medium text-slate-500 mb-4">
                    Measurement range: {node.range}
                  </p>

                  <ul className="space-y-2 text-sm text-slate-700 mb-4">
                    {node.specs.map((s, idx) => (
                      <li key={idx} className="flex gap-2">
                        <Activity className="w-4 h-4 mt-0.5 text-[#0055cc]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto rounded-2xl bg-[#f4f7ff] border border-dashed border-[#cfe0ff] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi className="w-4 h-4 text-[#0055cc]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                        Placement &amp; Wiring Tips
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {node.placementTips.map((n, idx) => (
                        <li key={idx}>• {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ARCHITECTURE SECTION – use your existing component */}
      <Section
        className="border-t border-[#d5e4ff]/70 !pb-2 md:!pb-4"
        showCta={false}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              Topology
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              How Nodes &amp; Gateways Fit into the CoolGuard Architecture
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Enviro wireless nodes sit inside rooms and send data to the nearest
              Nexus gateway, which in turn pushes all measurements to the
              CoolGuard Cloud for alarms, reports and audit trails.
            </p>
          </div>

          <NodesArchitectureSection />
        </div>
      </Section>
    </main>
  );
}
