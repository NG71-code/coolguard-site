// src/pages/Kryo101BB.jsx
import React from "react";
import ProductDetailLayout from "../components/ProductDetailLayout";

// Keep product outside the component to avoid any weird parsing issues
const product = {
  name: "Kryo-101-BB",
  code: "KR-101-BB",
  family: "Kryo-100 Series",
  tagline: "16-Channel Cloud Logger for Large Cold Rooms & Multi-Point Monitoring",

  heroImage: "/images/products/kryo-hero2.png",      // put your hero banner here
  deviceImage: "/images/products/kryo-101-bb-device.png",  // transparent device render
  badges: ["16-Channel", "GSM-GPRS", "Temperature + RH"],

  intro:
    "Kryo-101-BB is a high-precision 16-channel cloud logger engineered for large cold rooms, multi-compartment storage areas, and environments requiring extensive temperature and humidity monitoring. It supports up to 16 simultaneous NTC temperature or capacitive humidity sensors and transmits the collected data to the CoolGuard Cloud via GSM-GPRS. Designed for industrial environments, Kryo-101-BB ensures real-time visibility, compliance tracking, and seamless integration with hooters and local displays for on-site alerts.",

  features: [
    "Supports up to 16 input channels for temperature and humidity monitoring",
    "GSM-GPRS communication (850/900/1800/1900 MHz)",
    "Configurable data logging interval from 1 to 60 minutes",
    "Inbuilt memory to prevent data loss during network downtime",
    "ABS housing with industrial-grade durability",
    "Power-efficient 12V DC, 1A operation",
    "Over-the-Air (OTA) firmware updates",
    "Supports hooter integration for audible alerts",
    "Compatible with LED/TFT local displays",
    "Designed for high-usage industrial cold storage environments",
  ],

  benefits: [
    "Real-time monitoring across large or split cold storage facilities",
    "Simultaneous visibility into 16 different temperature/humidity points",
    "Improved quality assurance and audit readiness",
    "Prevents product spoilage through early deviation alerts",
    "Seamless cloud integration ensures remote access and analytics",
    "Reliable operation even in high-moisture, industrial environments",
  ],

  applications: [
    "Large food & agriculture cold storages",
    "Multi-chamber deep freezer rooms",
    "Pharmaceutical warehouses",
    "Refrigerated distribution centers",
    "Logistics hubs with multiple monitoring points",
    "Environmental monitoring for moisture-heavy storage areas",
  ],

  highlights: [
    { label: "Channels", value: "16 temperature/humidity inputs" },
    { label: "Communication", value: "GSM-GPRS (850/900/1800/1900 MHz)" },
    { label: "Logging Interval", value: "1–60 minutes (configurable)" },
    { label: "Memory", value: "Inbuilt buffer for offline logging" },
    { label: "Power", value: "12V DC, 1A" },
    { label: "Housing", value: "ABS plastic" },
    { label: "Dimensions", value: "40 × 78 × 55 mm" },
    { label: "Firmware Update", value: "OTA supported" },
    { label: "Hooter Output", value: "Supported (for alerts)" },
    { label: "Display", value: "LED / TFT compatible" },
    { label: "Temp Sensor Range", value: "–40°C to +60°C (±1°C)" },
    { label: "Humidity Range", value: "0–100% RH (±2–3%)" },
  ],

  downloads: [
    {
      label: "Download Kryo-101-BB Datasheet (PDF)",
      href: "/docs/kryo-101-bb-datasheet.pdf",
    },
  ],
};

// 👇 THIS is the default export Vite is complaining about
export default function Kryo101BB() {
  return <ProductDetailLayout product={product} />;
}
