// src/pages/BCC100.jsx
import React from "react";
import ProductDetailLayout from "../components/ProductDetailLayout";

export default function BCC100() {
  const product = {
    name: "Supervisory Control Gateway",
    code: "BCC-100",
    family: "BridgePoint CloudConnect Series",
    tagline:
      "Cloud-enabled control and monitoring gateway for cold rooms and energy systems.",

    heroImage: "/images/products/bridgepoint-hero.png",
    deviceImage: "/images/products/bridgepoint-device.png",

    badges: [
      "RS-485 Modbus (Read/Write)",
      "Cloud Supervisory Control",
      "Multi-Controller",
      "Energy Monitoring",
    ],

    intro:
      "BridgePoint CloudConnect BCC-100 is a cloud-enabled supervisory control gateway for industrial cold rooms and energy systems. It connects to RS-485 Modbus-based cold room controllers and energy meters, securely reading live parameters and, for supported controllers, also writing key settings such as temperature setpoints and operating parameters. BCC-100 transforms a standard cold room installation into a remotely monitored and controlled system with centralized dashboards, alarms, analytics and energy insights, all powered by the CoolGuard Cloud platform.",

    // WHERE IT IS USED
    whereUsed: [
      "Cold storages using RS-485-based controllers that require centralized monitoring and remote setpoint control",
      "Pharma and vaccine cold rooms needing audit-ready data and supervisory control from a central control room",
      "Multi-chamber cold storage facilities managed by OEMs or service partners across multiple sites",
      "Cold rooms where both refrigeration performance and energy consumption need to be monitored together",
    ],

    // HOW IT WORKS
    howItWorks: [
      "BCC-100 connects to compatible cold room controllers and Modbus energy meters over RS-485, without changing existing sensors or power wiring.",
      "It continuously reads key refrigeration and energy parameters—such as temperatures, alarms, running status, defrost cycles and kWh—and buffers this data safely in local memory.",
      "At configurable intervals, the gateway securely pushes buffered data to the CoolGuard Cloud platform over GSM / 4G for centralized monitoring across plants and sites.",
      "For supported controller models, authorized users can remotely adjust temperature setpoints and selected parameters from the CoolGuard interface, reducing the need for physical visits.",
      "CoolGuard Cloud provides dashboards, trends, reports and SMS / email alerts, helping maintenance teams take faster decisions on alarms, excursions and energy deviations.",
    ],

    // FEATURES
    features: [
      "Two-way RS-485 Modbus RTU connectivity for compatible cold room controllers (read and write, model-dependent)",
      "Support for Modbus-based energy meters to combine refrigeration and energy analytics on one dashboard",
      "Secure GSM / 4G cloud uplink with configurable data and control intervals (typically 1–60 minutes)",
      "Local data buffering to handle temporary network outages without losing historical records",
      "Centralized, multi-site dashboards on CoolGuard Cloud for OEMs, facility owners and service providers",
      "Configurable SMS / email alerts for temperature excursions, controller alarms and critical system events",
      "Optional remote temperature setpoint and parameter control for supported controllers through role-based access",
      "API access (optional) for integration with OEM portals, ERP, SAP or third-party analytics platforms",
    ],

    // BENEFITS
    benefits: [
      "Converts standard cold room controllers into fully cloud-enabled, remotely controlled refrigeration systems",
      "Reduces manual intervention and site visits by enabling trusted remote setpoint and parameter changes",
      "Improves compliance readiness with structured historical data for WHO, GDP, HACCP and food safety audits",
      "Lowers spoilage and downtime risk through proactive alerts and remote interventions on alarms and excursions",
      "Provides unified visibility of both refrigeration performance and energy usage, enabling optimization initiatives",
      "Ideal for OEMs and service partners who want to offer connected cold room solutions under their own brand",
    ],

    // APPLICATIONS
    applications: [
      "Food and pharma cold rooms requiring centralized control and monitoring",
      "Refrigerated warehouses and multi-chamber storage facilities",
      "Processing plants with blast freezers, pre-coolers and buffer rooms",
      "Multi-site cold-chain operations managed by OEMs, integrators or facility management companies",
      "Remote or unmanned cold rooms where physical access is limited or costly",
    ],

    // TECH HIGHLIGHTS – labels aligned to ProductDetailLayout TECH_ICONS
    highlights: [
      {
        label: "Input Capacity",
        value: "Multi-controller / meter RS-485 bus (read / write capable)",
      },
      {
        label: "Connectivity",
        value: "GSM / 4G LTE cloud uplink",
      },
      {
        label: "Logging Interval",
        value: "Configurable 1–60 minutes",
      },
      {
        label: "Memory",
        value: "Local buffer for offline data retention",
      },
      {
        label: "Power Input",
        value: "12 V DC (typical)",
      },
      {
        label: "Relay & Local Display",
        value: "Optional alarm relay and HMI / local indication (variant-dependent)",
      },
    ],

    // ADD-ONS & ACCESSORIES
    addons: [
      {
        group: "Energy Monitoring Expansion",
        items: [
          "Modbus-compatible three-phase energy meters for kWh, kW, PF and demand monitoring",
          "Additional RS-485 port options to segregate controller and energy meter networks if required",
        ],
      },
      {
        group: "Connectivity & Antennas",
        items: [
          "High-gain external GSM / 4G antenna kits for low-signal or indoor plant rooms",
          "Extended antenna cables and mounting accessories for rooftop or outdoor installation",
        ],
      },
      {
        group: "Control & Alarming",
        items: [
          "Potential-free relay output for common site alarm hooters or beacon lights",
          "Local alarm indication and acknowledge options for plant operators at panel level",
        ],
      },
      {
        group: "Cloud & Integration Add-ons",
        items: [
          "API access for ERP / SAP / OEM portals (licensed add-on)",
          "Multi-tenant OEM view for controller partners to monitor their installed base",
        ],
      },
    ],

    // DOWNLOADS
    downloads: [
      {
        label: "BridgePoint BCC-100 Datasheet (PDF)",
        href: "/docs/bridgepoint-bcc-100-datasheet.pdf",
      },
    ],
  };

  return <ProductDetailLayout product={product} />;
}
