import React from "react";
import Section from "../components/Section.jsx";


import {
  Thermometer,
  Droplets,
  DoorOpen,
  Zap,
  Activity,
  Download,
  Shield,
} from "lucide-react";

export default function Sensors() {
    console.log("✅ SENSORS PAGE LOADED");
  const sensors = [
    {
      name: "Temperature Sensor",
      code: "CG-TS-101",
      tagline: "High-accuracy temperature sensing for cold rooms & freezers",
      icon: Thermometer,
      range: "–40°C to +80°C",
      specs: [
        "Industrial-grade RTD / thermistor based sensing",
        "Fast response time for excursions",
        "Compatible with Frigo & Kryo series loggers",
        "Long-term drift stability for audits",
        "Food & pharma compliant construction",
      ],
      applications: [
        "Deep freezers & blast freezers",
        "Walk-in cold rooms",
        "Vaccine storage & pharma chillers",
      ],
      datasheet: "/docs/temperature-sensor.pdf",
    },
    {
      name: "Humidity Sensor",
      code: "CG-RH-201",
      tagline: "Relative humidity monitoring for sensitive storage",
      icon: Droplets,
      range: "0–100% RH",
      specs: [
        "Digital capacitive humidity sensing",
        "Temperature-compensated output",
        "Ideal for pharma & food warehouses",
        "Stable calibration over long periods",
        "Compatible with Enviro & Kryo nodes",
      ],
      applications: [
        "Pharma storage",
        "Dry goods warehouses",
        "Ripening chambers",
      ],
      datasheet: "/docs/humidity-sensor.pdf",
    },
    {
      name: "Door Status Sensor",
      code: "CG-DS-301",
      tagline: "Door open/close detection for cold rooms",
      icon: DoorOpen,
      range: "Open / Close (digital)",
      specs: [
        "Magnetic reed switch based sensing",
        "Detects prolonged door openings",
        "Helps identify cooling losses",
        "Improves audit & SOP compliance",
        "Low-power dry contact input",
      ],
      applications: [
        "Cold room doors",
        "Freezer doors",
        "Pharma storage chambers",
      ],
      datasheet: "/docs/door-sensor.pdf",
    },
    {
      name: "Energy / Power Sensor",
      code: "CG-PS-401",
      tagline: "Electrical energy monitoring via CT interface",
      icon: Zap,
      range: "As per CT rating",
      specs: [
        "Interfaces with CTs and energy meters",
        "Real-time kWh, voltage & current tracking",
        "Identifies power anomalies & overloads",
        "Supports BridgePoint energy monitoring",
        "Used for machine-level analytics",
      ],
      applications: [
        "Compressors",
        "Cold storage panels",
        "Process equipment",
      ],
      datasheet: "/docs/energy-sensor.pdf",
    },
  ];

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <Section
        className="border-b bg-gradient-to-b from-[#e6f0ff] to-white"
        showCta={false}
        paddingClass="pt-4 pb-10 sm:pt-6 sm:pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              CoolGuard Sensing Layer
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Industrial Sensors for Real-Time Cold Chain Intelligence
            </h1>
            <p className="text-slate-600 text-sm md:text-base mb-6">
              CoolGuard sensors capture critical environmental and electrical
              parameters directly from your storage and process equipment —
              transforming raw measurements into actionable cloud insights.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-slate-700">
              <li className="flex gap-2">
                <Thermometer className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>High-precision sensing for audits & compliance.</span>
              </li>
              <li className="flex gap-2">
                <Droplets className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>Humidity & environmental control.</span>
              </li>
              <li className="flex gap-2">
                <Zap className="w-5 h-5 mt-0.5 text-[#0055cc]" />
                <span>Electrical energy & power quality monitoring.</span>
              </li>
            </ul>
          </div>

          {/* Right visual placeholder */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-sky-200/60 via-indigo-200/40 to-blue-100/60 blur-3xl opacity-80" />
            <div className="relative rounded-3xl border border-[#d5e4ff] bg-white shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#0055cc]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Sensor Deployment
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Sensors → Data Logger → Gateway → CoolGuard Cloud
                  </p>
                </div>
              </div>

             <div className="rounded-2xl overflow-hidden border border-[#cfe0ff] bg-white shadow-sm aspect-[4/3]">
  <img
    src="/images/products/sensors.png"   // 👈 your final image here
    alt="Sensors → Data Logger → Gateway → CoolGuard Cloud"
    className="w-full h-full object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </Section>

      {/* SENSORS GRID */}
      <Section showCta={false}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              Sensor Portfolio
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              CoolGuard Industrial Sensor Range
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Modular sensor portfolio covering temperature, humidity, door
              status and electrical energy — fully integrated with CoolGuard
              Cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {sensors.map((sensor) => {
              const Icon = sensor.icon;
              return (
                <div
                  key={sensor.code}
                  className="group rounded-3xl border border-[#d5e4ff] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-6 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-sky-100 border border-[#cfe0ff]">
                        <Icon className="w-5 h-5 text-[#0055cc]" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          CoolGuard Sensor
                        </p>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {sensor.name}
                        </h3>
                        <p className="text-xs text-slate-500">{sensor.code}</p>
                      </div>
                    </div>
                    {sensor.datasheet && (
                    <a
  href="/docs/temp-humi sensor datasheet.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs md:text-sm font-medium text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
>
  <Download className="w-4 h-4" />
  Download BCC-100 Datasheet (PDF)
</a>

                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-2">
                    {sensor.tagline}
                  </p>
                  <p className="text-xs font-medium text-slate-500 mb-4">
                    Measurement range: {sensor.range}
                  </p>

                  <ul className="space-y-2 text-sm text-slate-700 mb-4">
                    {sensor.specs.map((s, idx) => (
                      <li key={idx} className="flex gap-2">
                        <Activity className="w-4 h-4 mt-0.5 text-[#0055cc]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto rounded-2xl bg-[#f4f7ff] border border-dashed border-[#cfe0ff] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-[#0055cc]" />
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                        Typical Applications
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {sensor.applications.map((a, idx) => (
                        <li key={idx}>• {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </main>
  );
}
