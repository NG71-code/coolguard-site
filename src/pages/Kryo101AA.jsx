// src/pages/Kryo101AA.jsx
import React from "react";
import ProductDetailLayout from "../components/ProductDetailLayout";

export default function Kryo101AA() {
  const product = {
    name: "2-Channel Cloud Temperature Logger",
    code: "Kryo-101-AA",
    family: "Kryo-100 Series",
    tagline:
      "Dual-sensor cloud-connected monitoring for cold rooms, pharma storage, and food logistics.",
    heroImage: "/images/products/kryo-hero.png",
    deviceImage: "/images/products/kryo-device.png",

    badges: ["Dual Sensor", "Cloud Connected", "Industrial Grade", "IP55"],

    intro:
      "Kryo-101-AA is a dual-channel IoT temperature logger designed for cold rooms, pharmaceutical storage facilities, and food supply chains. It supports two independent temperature or temperature-plus-humidity sensors and transmits readings securely to CoolGuard Cloud over GSM-GPRS. With configurable alert thresholds, automatic data buffering, and full audit-ready history, Kryo-101-AA ensures uninterrupted compliance and operational visibility.",

    // WHERE IT IS USED
    whereUsed: [
      "Cold rooms storing dairy, meat, fruits and vegetables",
      "Pharma-grade cold rooms and vaccine storage chambers",
      "Food and dairy distribution warehouses and buffer zones",
      "Pre-cooling and blast-freezing areas in processing plants",
    ],

    // HOW IT WORKS
    howItWorks: [
      "Connect up to two sensors to monitor room temperature, product temperature, or inlet/outlet airflow as required.",
      "Kryo-101-AA continuously records readings and stores them safely in local memory.",
      "At configured intervals, data is transmitted securely to CoolGuard Cloud over GSM-GPRS.",
      "CoolGuard Cloud visualizes the data through live dashboards, trend graphs, and downloadable reports.",
      "Alert rules trigger notifications when temperatures move outside defined limits, helping you intervene before spoilage or non-compliance.",
    ],

    // FEATURES
    features: [
      "Dual sensor inputs for room, product, inlet/outlet airflow, or redundancy monitoring",
      "Secure GSM-GPRS data connectivity with local buffer storage during outages",
      "Configurable logging and reporting intervals (1–60 minutes)",
      "Supports temperature-only or temperature-plus-humidity installations",
      "Industrial IP55-rated enclosure for harsh cold-chain environments",
    ],

    // BENEFITS
    benefits: [
      "Reliable, always-connected visibility into critical temperature environments",
      "Supports audit-ready compliance for WHO, GDP, HACCP and food safety programs",
      "Reduces product loss, compliance risk, and manual temperature logging effort",
      "Scales easily across rooms, facilities and regions via CoolGuard Cloud",
    ],

    // APPLICATIONS
    applications: [
      "Pharmaceutical cold rooms and warehouses",
      "Food and dairy cold-storage facilities",
      "Agricultural pre-cooling and pack-house operations",
      "Distribution centres and cross-docking cold zones",
    ],

    // TECH HIGHLIGHTS
    highlights: [
      { label: "Input Capacity", value: "2 independent channels (Temp / RH)" },
      {
        label: "Connectivity",
        value: "GSM-GPRS (LTE-ready variants possible)",
      },
      {
        label: "Data Backup",
        value: "Local storage with automatic cloud sync",
      },
      {
        label: "Ingress Protection",
        value: "IP55 industrial-grade housing",
      },
      {
        label: "Logging Interval",
        value: "Configurable 1–60 minutes",
      },
    ],

    // ADD-ONS & ACCESSORIES
    addons: [
      {
        group: "Local Display & HMI",
        items: [
          "Wall-mounted digital temperature display for walk-in users",
          "Basic local keypad / HMI for alarm acknowledge and muting",
        ],
      },
      {
        group: "Audio–Visual Alerts",
        items: [
          "Hooter / buzzer for local high / low temperature alarms",
          "Flashing beacon light for critical temperature excursions",
        ],
      },
      {
        group: "Door & Event Monitoring",
        items: [
          "Door open / close sensor for cold room doors",
          "Configurable door-open time delay before alarm triggers",
        ],
      },
 
    ],

    // DOWNLOADS
    downloads: [
      {
        label: "Kryo-101-AA Datasheet (PDF)",
        href: "/docs/kryo-101-aa-datasheet.pdf",
      },
    ],
  };

  return <ProductDetailLayout product={product} />;
}
