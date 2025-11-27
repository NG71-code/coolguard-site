// src/pages/Sensors.jsx
import React from "react";

const SENSOR_GROUPS = [
  {
    id: "temperature",
    name: "Temperature Sensors",
    description:
      "Precision NTC / RTD probes for monitoring product and air temperature in cold rooms, freezers and chillers. Available in food-grade and industrial variants.",
    minSpecs: [
      "Type: NTC / RTD",
      "Range: –40°C to +80°C (typical)",
      "Accuracy: ±0.5°C or better",
      "Cable: PVC / PTFE, 2–5 m (extendable)",
      "Mounting: Wall, immersion, or hanger probe",
    ],
    compatible: [
      "Kryo-101-AA (2-channel cloud logger)",
      "Kryo-101-BB (16-channel cloud logger)",
      "Frigo-101-AA / Frigo-101-BB",
      "CG-100 Series Controllers",
    ],
    image: "/images/sensors/temp-sensor.png",
  },
  {
    id: "humidity",
    name: "Humidity Sensors",
    description:
      "Capacitive RH sensors designed for high-moisture environments such as ripening rooms, vegetable cold stores and pharmaceutical warehouses.",
    minSpecs: [
      "Range: 0–100% RH",
      "Accuracy: ±3% RH (20–80% RH)",
      "Output: 4–20 mA / 0–10 V / Modbus",
      "Operating Temp: –20°C to +60°C",
      "Housing: IP54 or better",
    ],
    compatible: [
      "Kryo-101-AA (RH channel)",
      "Kryo-101-BB (multi-point RH mapping)",
      "CG-100 Series Controllers (with RH input)",
    ],
    image: "/images/sensors/humidity-sensor.png",
  },
  {
    id: "temp-rh",
    name: "Integrated Temperature & Humidity Sensors",
    description:
      "Combined temperature and humidity transmitters for accurate monitoring of both parameters at a single mounting point.",
    minSpecs: [
      "Temp Range: –20°C to +60°C",
      "RH Range: 0–100% RH",
      "Temp Accuracy: ±0.5°C",
      "RH Accuracy: ±3% RH",
      "Output: Modbus / 4–20 mA (dual channel)",
    ],
    compatible: [
      "Kryo-101-AA / Kryo-101-BB",
      "BridgePoint CloudConnect via CG-100 controller",
      "CG-100 Series Controllers",
    ],
    image: "/images/sensors/temp-rh-sensor.png",
  },
  {
    id: "display",
    name: "Displays",
    description:
      "Local LED / LCD displays for showing room temperature, humidity and alarm status near the cold room door or control panel.",
    minSpecs: [
      "Display Type: 7-seg LED / LCD",
      "Parameters: Temperature / RH / Alarm",
      "Viewing Distance: 5–20 m",
      "Communication: RS-485 / 4–20 mA",
    ],
    compatible: [
      "Kryo-101-AA / Kryo-101-BB (via controller)",
      "CG-100 Series Controllers",
    ],
    image: "/images/sensors/display-unit.png",
  },
  {
    id: "hooters",
    name: "Hooters",
    description:
      "Audible and visual hooters for local alerting of high temperature, door open and power failure conditions.",
    minSpecs: [
      "Type: Audio buzzer with optional flashing beacon",
      "Supply: 24 V DC / 230 V AC (model dependent)",
      "Sound Level: 90–110 dB @ 1 m",
      "Mounting: Panel / wall mount",
    ],
    compatible: [
      "Kryo-101-AA / Kryo-101-BB (through controller relay)",
      "CG-100 Series Controllers",
      "BridgePoint CloudConnect alarm output (where available)",
    ],
    image: "/images/sensors/hooter.png",
  },
  {
    id: "door",
    name: "Door Sensors",
    description:
      "Magnetic door sensors to monitor cold room door open/close status and generate alarms for prolonged door opening.",
    minSpecs: [
      "Type: Magnetic reed switch",
      "Contact: NO / NC",
      "Cable Length: 2–5 m",
      "Mounting: Surface or flush mount",
    ],
    compatible: [
      "CG-100 Series Controllers (digital input)",
      "Kryo-101-BB (through controller input)",
      "BridgePoint CloudConnect (via controller)",
    ],
    image: "/images/sensors/door-sensor.png",
  },
  {
    id: "nh3",
    name: "Ammonia (NH₃) Sensors",
    description:
      "Gas sensors for early detection of ammonia leaks in industrial refrigeration plants to enhance safety and compliance.",
    minSpecs: [
      "Measurement Gas: NH₃",
      "Typical Range: 0–1000 ppm (model dependent)",
      "Output: 4–20 mA / Modbus",
      "Operating Temp: –20°C to +50°C",
    ],
    compatible: [
      "Kryo-101-BB (analog / Modbus input)",
      "BridgePoint CloudConnect via CG-100 or dedicated gas panel",
    ],
    image: "/images/sensors/nh3-sensor.png",
  },
  {
    id: "co2",
    name: "CO₂ Sensors",
    description:
      "CO₂ sensors for controlled atmosphere rooms, ripening chambers and occupied cold storage spaces.",
    minSpecs: [
      "Measurement Gas: CO₂",
      "Range: 0–5000 ppm (other ranges available)",
      "Output: 4–20 mA / Modbus / 0–10 V",
      "Accuracy: ±50 ppm + 3% of reading",
    ],
    compatible: [
      "Kryo-101-BB",
      "BridgePoint CloudConnect (via controller / gas panel)",
    ],
    image: "/images/sensors/co2-sensor.png",
  },
  {
    id: "lux",
    name: "Lux Sensors",
    description:
      "Light level sensors for monitoring lux levels inside storage areas, corridors or processing zones.",
    minSpecs: [
      "Range: 0–10,000 lux (typical)",
      "Output: 4–20 mA / 0–10 V / Modbus",
      "Operating Temp: –10°C to +50°C",
    ],
    compatible: [
      "Kryo-101-BB (analog / Modbus input)",
      "BridgePoint CloudConnect via CG-100 or IO modules",
    ],
    image: "/images/sensors/lux-sensor.png",
  },
];

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0055CC]/80">
    {children}
  </p>
);

export default function SensorsPage() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#E6F0FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10">
            <SectionLabel>Sensors &amp; Field Devices</SectionLabel>

            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              CoolGuard Compatible Sensors &amp; Accessories
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-700 max-w-3xl">
              A curated portfolio of temperature, humidity, gas and auxiliary
              sensors that are qualified to work with Kryo cloud loggers, Frigo
              controllers, CG-100 series and BridgePoint CloudConnect. Designed
              for cold rooms, freezers, warehouses and industrial refrigeration
              plants where reliability and compliance matter.
            </p>

            {/* Category quick links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SENSOR_GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center rounded-full bg-[#E6F0FF] px-3 py-1 text-[11px] font-medium text-[#003b8f] hover:bg-[#d7e7ff] transition"
                >
                  {group.name}
                </a>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              Note: Final make / model is selected based on project specification,
              regulatory requirements and site conditions.
            </p>
          </div>
        </div>
      </section>

      {/* SENSOR GROUPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8 md:space-y-10">
        {SENSOR_GROUPS.map((sensor) => (
          <article
            key={sensor.id}
            id={sensor.id}
            className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm px-5 py-7 md:px-8 md:py-9"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
              {/* LEFT: TEXT BLOCKS */}
              <div className="space-y-5">
                <header className="space-y-2">
                  <SectionLabel>Sensor Category</SectionLabel>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                    {sensor.name}
                  </h2>
                  <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                    {sensor.description}
                  </p>
                </header>

                {/* Typical Specs */}
                <div className="rounded-2xl bg-[#F5F7FF] border border-[#d7e3ff] px-4 py-4">
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0055CC]/80 mb-2">
                    Typical Specification Envelope
                  </h3>
                  <ul className="space-y-1.5 text-xs md:text-sm text-slate-700">
                    {sensor.minSpecs.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0055CC]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compatible products */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2">
                    Works Seamlessly With
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sensor.compatible.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full bg-[#F3F6FF] px-3 py-1 text-[11px] font-medium text-[#003b8f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: IMAGE / VISUAL */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#c9ddff] to-[#f3f6ff] blur-2xl opacity-70" />
                <div className="relative rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex items-center justify-center overflow-hidden">
                  {sensor.image ? (
                    <img
                      src={sensor.image}
                      alt={sensor.name}
                      className="w-full max-w-xs object-contain"
                    />
                  ) : (
                    <div className="w-full max-w-xs aspect-[4/3] rounded-2xl border border-dashed border-[#cfe0ff] bg-[#F8FAFF] flex items-center justify-center">
                      <span className="text-xs text-slate-400">
                        Sensor image placeholder
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-[11px] text-slate-500 text-center">
                  Representative image. Actual sensor model may vary by project.
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="mt-10 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0055CC] via-[#2472ff] to-[#4b8dff] px-6 py-8 md:px-10 md:py-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
                Sensor Selection &amp; Calibration
              </p>
              <h2 className="text-lg md:text-2xl font-semibold">
                Need help choosing the right sensors for your cold chain?
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Share your equipment list, temperature ranges and compliance
                requirements. Our team will recommend suitable sensor
                combinations, mounting options and calibration plans that fit
                your CoolGuard deployment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#0055CC] text-sm font-semibold shadow-sm hover:bg-slate-100 transition"
              >
                Talk to Our Team
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/70 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Share Site Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
