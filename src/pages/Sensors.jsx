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

export default function SensorsPage() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-16">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Sensors &amp; Field Devices
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
              CoolGuard compatible sensors for temperature, humidity, gas, door and
              environment monitoring. All sensors are selected and calibrated to work
              reliably with Kryo, Frigo, CG-100 controllers and BridgePoint
              CloudConnect gateways.
            </p>
          </div>
        </div>
      </section>

      {/* SENSOR SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {SENSOR_GROUPS.map((sensor) => (
          <article
            key={sensor.id}
            id={sensor.id}
            className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left: Text */}
              <div className="md:col-span-2 space-y-4">
                <header>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                    {sensor.name}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-gray-700">
                    {sensor.description}
                  </p>
                </header>

                {/* Minimum specs */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-1">
                    Minimum Typical Specifications
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {sensor.minSpecs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Compatible products */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-1">
                    Compatible CoolGuard Products
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {sensor.compatible.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex items-center justify-center">
                {sensor.image ? (
                  <div className="w-full max-w-xs">
                    <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white flex items-center justify-center overflow-hidden shadow-sm">
                      <img
                        src={sensor.image}
                        alt={sensor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500 text-center">
                      Representative image. Actual model may vary.
                    </p>
                  </div>
                ) : (
                  <div className="w-full max-w-xs">
                    <div className="aspect-[4/3] rounded-2xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                      <span className="text-xs text-gray-400">
                        Sensor image placeholder
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
