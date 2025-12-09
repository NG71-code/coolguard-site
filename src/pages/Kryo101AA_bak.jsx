// src/pages/Kryo101AA.jsx
import React from "react";
import ProductDetailLayout from "../components/ProductDetailLayout";

export default function Kryo101AA() {
  const product = {
    name: "Kryo-101-AA",
    code: "KR-101-AA",
    family: "Kryo-100 Series",
    tagline: "2-Channel Cloud Logger for Temperature & Humidity in Cold Rooms",
    heroImage: "/images/products/kryo-101-aa-hero.png",      // wide cold-room / cloud visual
    deviceImage: "/images/products/kryo-101-aa-device.png",  // device render (add later)
    badges: ["2-Channel", "GSM-GPRS", "IP55"],

    intro:
      "Kryo-101-AA is a 2-channel cloud logger engineered for precise temperature and humidity monitoring in cold storages, medical facilities, and logistics hubs. It collects data from up to two high-accuracy sensors and transmits it securely to the CoolGuard Cloud over GSM-GPRS, giving you real-time visibility, alarms, and traceable history. Inbuilt memory ensures no data loss during network interruptions, while industrial-grade components and IP55 housing make it robust enough for demanding cold room environments.",

    // KEY FEATURES – drawn from the spec sheet
    features: [
      "Supports up to 2 input channels for temperature and humidity monitoring",
      "GSM-GPRS communication (850 / 900 / 1800 / 1900 MHz) for remote connectivity",
      "Configurable data logging interval from 1 to 60 minutes",
      "Onboard memory for data backup during connectivity disruptions",
      "IP55 housing with compact 40 × 78 × 55 mm enclosure",
      "Firmware updates over-the-air (OTA) for easy maintenance",
      "External 12V DC, 1 Amp power input with low power consumption design",
      "Integrated relay support up to 1 Amp for control of compressor / hooter*",
      "LED / TFT display compatibility for local data viewing*",
    ],

    // BENEFITS – interpreted from use-cases & overview
    benefits: [
      "Real-time visibility into critical cold storage temperature and humidity",
      "Improved compliance and quality assurance with traceable historical data",
      "Reduced risk of product loss through early alerts and continuous monitoring",
      "Industrial-grade design suited for commercial cold rooms and warehouses",
      "Seamless cloud integration via CoolGuard platform for centralized monitoring",
    ],

    // APPLICATIONS – based on the document’s described environments
    applications: [
      "Food and agri cold storages for fruits, vegetables, and frozen products",
      "Pharmaceutical and medical cold rooms and storage areas",
      "Refrigerated warehouses and distribution centers",
      "Temperature- and humidity-sensitive logistics and cross-docking points",
      "Environmental monitoring in high-moisture storage areas",
    ],

    // HIGHLIGHTS – compact spec summary from the sheet
    highlights: [
      { label: "Channel Capacity", value: "2 channels (temperature / humidity)" },
      { label: "Communication", value: "GSM-GPRS (850 / 900 / 1800 / 1900 MHz)" },
      { label: "Logging Interval", value: "Configurable 1–60 minutes" },
      { label: "Housing", value: "IP55, 40 × 78 × 55 mm" },
      { label: "Power Supply", value: "12V DC, 1 A" },
      { label: "Relay Output", value: "Integrated relay up to 1 A" },
      { label: "Cloud", value: "CoolGuard Cloud" },
    ],

    downloads: [
      {
        label: "Download Kryo-101-AA Datasheet (PDF)",
        href: "/docs/kryo-101-aa-datasheet.pdf", // place your PDF here
      },
    ],
  };

  return <ProductDetailLayout product={product} />;
}
