// src/data/catalog.js

// Public logo (put the image at: /public/coolguard-logo.png)
export const LOGO_SRC = "/coolguard-logo.png";

/**
 * CATALOG shape used by Home.jsx
 * {
 *   id, code, name, description,
 *   category, family?, channels?, connectivity?, hsn?, badge?
 * }
 */
export const CATALOG = [
  // ------- CG-100 Series (Controllers) -------
  {
    id: "CG-100-SPlus",
    code: "CG-100-S+",
    name: "CG-100 Single+ Controller",
    description:
      "Single compressor controller for positive temperature rooms.",
    category: "Controllers",
    family: "CG-100",
    channels: "Single",
    image: "/images/products/controllers/cg-100-s-plus.png"
  },
  {
    id: "CG-100-SMinus",
    code: "CG-100-S–",
    name: "CG-100 Single– Controller",
    description:
      "Single compressor controller for negative temperature rooms.",
    category: "Controllers",
    family: "CG-100",
    channels: "Single",
  },
  {
    id: "CG-100-DPlus",
    code: "CG-100-D+",
    name: "CG-100 Dual+ Controller",
    description:
      "Dual compressor controller for positive temperature rooms.",
    category: "Controllers",
    family: "CG-100",
    channels: "Dual",
  },
  {
    id: "CG-100-DMinus",
    code: "CG-100-D–",
    name: "CG-100 Dual– Controller",
    description:
      "Dual compressor controller for negative temperature rooms.",
    category: "Controllers",
    family: "CG-100",
    channels: "Dual",
  },

  // ------- Kryo-100 / Kryo-101 Series -------
  {
    id: "KRYO-101-AA",
    code: "Kryo-101-AA",
    name: "EnviroGuard – 2-Channel Cloud Logger",
    description:
      "2-channel cloud-enabled temperature monitoring device.",
    category: "Kryo-100 Series",
    channels: "2",
    connectivity: "Cloud",
    hsn: "LSTR44V1",
  },
  {
    id: "KRYO-101-CC",
    code: "Kryo-101-CC",
    name: "Multisense – 8-Channel Cloud Logger",
    description:
      "8-channel multi-probe logger with cloud sync.",
    category: "Kryo-100 Series",
    channels: "8",
    connectivity: "Cloud",
    hsn: "KRYO101-CC-V.1",
  },
  {
    id: "KRYO-101-DD-Lite",
    code: "Kryo-101-DD - Lite",
    name: "Nexus Lite Gateway – Smart Wireless Gateway",
    description:
      "Smart wireless gateway for sensor data collection.",
    category: "Kryo-100 Series",
    connectivity: "Wireless",
    hsn: "LSTR41 V1.7",
  },
  {
    id: "KRYO-101-DD-Pro",
    code: "Kryo-101-DD - Pro",
    name: "Nexus Pro Gateway – Smart Wireless Multi-mode Gateway",
    description:
      "Advanced multi-protocol gateway (GSM / LAN / Wi-Fi / LoRa).",
    category: "Kryo-100 Series",
    connectivity: "GSM / LAN / Wi-Fi / LoRa",
    hsn: "KRYO101GW-V1",
  },
  {
    id: "KRYO-101-ND-T",
    code: "Kryo-101-ND-T",
    name: "Enviro Wireless Node – Temperature",
    description:
      "Wireless temperature sensor with long-range connectivity.",
    category: "Kryo-100 Series",
    connectivity: "LoRa / Proprietary",
    hsn: "LS_TH-WR_V3.3",
  },
  {
    id: "KRYO-101-ND",
    code: "Kryo-101-ND",
    name: "Enviro Wireless Node – Temp & Humidity",
    description:
      "Wireless temperature & humidity sensor with long-range connectivity.",
    category: "Kryo-100 Series",
    connectivity: "LoRa / Proprietary",
    hsn: "LS_TH-WR_V3.3",
  },

  // ------- Frigo-100 -------
  {
    id: "FRIGO-100",
    code: "CG-FRIGO-100",
    name: "Frigo-100 – Temperature Monitoring System",
    description:
      "IoT device for continuous monitoring of coolers and freezers.",
    category: "Frigo-100 Series",
  },
  {
    id: "FRIGO-101-AA",
    code: "Frigo-101-AA",
    name: "Frigo-101 – GSM/Bluetooth Logger",
    description:
      "Temperature monitoring IoT device with GSM and Bluetooth.",
    category: "Frigo-100 Series",
    connectivity: "GSM / Bluetooth",
  },

  // ------- Bridgepoint – CloudConnect -------
  {
    id: "BCC-4",
    code: "BCC-4",
    name: "Bridgepoint CloudConnect – Zone Edition",
    description:
      "Compact gateway for cloud integration of up to 4 controllers – perfect for single-zone or pilot setups.",
    category: "Gateways",
    channels: "Up to 4 controllers",
  },
  {
    id: "BCC-8",
    code: "BCC-8",
    name: "Bridgepoint CloudConnect – Facility Edition",
    description:
      "Mid-tier cloud interface supporting up to 8 controllers – ideal for growing multi-chamber facilities.",
    category: "Gateways",
    channels: "Up to 8 controllers",
  },
  {
    id: "BCC-16",
    code: "BCC-16",
    name: "Bridgepoint CloudConnect – Enterprise Edition",
    description:
      "Enterprise-grade gateway with capacity for up to 16 controllers – built for high-density cold-chain sites.",
    category: "Gateways",
    channels: "Up to 16 controllers",
  },
];
