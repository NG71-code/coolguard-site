// src/pages/Kryo101AA.jsx
import React from "react";
import ProductDetailLayout from "../components/ProductDetailLayout";

export default function Kryo101AA() {
  const product = {
    name: "Kryo-101-AA",
    code: "KR-101-AA",
    family: "Kryo-100 Series",
    tagline: "2-Channel Cloud Logger for Temperature & Humidity in Cold Rooms",
    heroImage: "/images/products/kryo-hero.png",
    deviceImage: "/images/products/kryo-device.jpg",
    badges: ["2-Channel", "GSM-GPRS", "IP55"],
    intro:
      "Kryo-101-AA is a 2-channel cloud logger engineered for precise temperature and humidity monitoring in cold storages, medical facilities, and logistics hubs. It collects data from up to two high-accuracy sensors and transmits it securely to the CoolGuard Cloud over GSM-GPRS, giving you real-time visibility, alarms, and traceable history.",
    features: [
      "Supports up to 2 input channels for temperature and humidity monitoring",
      "GSM-GPRS communication for remote connectivity",
      "Configurable data logging interval from 1 to 60 minutes",
      "Onboard memory for data backup during connectivity disruptions",
    ],
    benefits: [
      "Real-time visibility into critical cold storage temperature and humidity",
      "Improved compliance and quality assurance with traceable data",
    ],
    applications: [
      "Food and agri cold storages",
      "Pharmaceutical cold rooms",
      "Refrigerated warehouses",
    ],
    highlights: [
      { label: "Channel Capacity", value: "2 channels (temp / RH)" },
      { label: "Communication", value: "GSM-GPRS" },
      { label: "Logging Interval", value: "1–60 minutes" },
      { label: "Housing", value: "IP55" },
    ],
    downloads: [
      {
        label: "Download Kryo-101-AA Datasheet (PDF)",
        href: "/docs/kryo-101-aa-datasheet.pdf",
      },
    ],
  };

  return <ProductDetailLayout product={product} />;
}
