// src/data/services.js

/**
 * SERVICES is consumed by Home.jsx
 * Each item can have: { id, title, description, bullets?: string[] }
 */

export const SERVICES = [
  {
    id: "calibration",
    title: "Calibration Services",
    description:
      "On-site and lab calibration for temperature, humidity, controllers and data loggers. Traceable reports with due-date stickers and reminders.",
    bullets: [
      "NABL/ISO traceable master references",
      "Multi-point calibration (1/2/3-point or as per URS)",
      "On-site or pickup & return options",
      "Stickers with next due date + digital certificate",
      "Schedule planning for multi-site facilities",
    ],
  },
  {
    id: "thermal-mapping",
    title: "Thermal Mapping & Qualification",
    description:
      "End-to-end thermal mapping studies for rooms, freezers, cold boxes, vehicles and warehouses—empty & loaded conditions.",
    bullets: [
      "URS/protocol preparation with acceptance criteria",
      "Sensor placement plan (9/15/27 points or per standard)",
      "Door open, power failure & recovery tests",
      "Graphical reports (min/max/mean/ΔT) with hotspots",
      "Recommendations & final qualification summary",
    ],
  },
  {
    id: "validation",
    title: "Validation (IQ/OQ/PQ)",
    description:
      "Qualification services for controllers and monitoring systems—documentation and execution per quality procedures.",
    bullets: [
      "URS & risk assessment support",
      "FAT/SAT documentation (where applicable)",
      "IQ, OQ and PQ protocol execution & reports",
      "21 CFR Part 11-ready workflows (where applicable)",
      "SOPs and training records handover",
    ],
  },
  {
    id: "installation",
    title: "Installation & Commissioning",
    description:
      "Turnkey installation of controllers, sensors, gateways and cloud onboarding with operator training.",
    bullets: [
      "Wiring & sensor placement as per mapping outcomes",
      "Controller tuning & alarm set-points",
      "Connectivity setup (GSM / Wi-Fi / LAN / LoRa)",
      "Cloud user onboarding and role-based access",
      "Operator training & handover checklist",
    ],
  },
  {
    id: "amc",
    title: "AMC & Preventive Maintenance",
    description:
      "Planned maintenance and calibration scheduling to keep systems compliant and reliable.",
    bullets: [
      "Periodic health checks & sensor verification",
      "Firmware updates and configuration backups",
      "Proactive calibration due-date tracking",
      "Spare management & replacement planning",
      "24×7 alert monitoring options",
    ],
  },
  {
    id: "cloud-analytics",
    title: "Cloud Dashboards & Analytics",
    description:
      "Multi-site dashboards, KPI reports and alert routing to keep your operations audit-ready.",
    bullets: [
      "Site/room dashboards with live & historical trends",
      "Email/SMS alerts with escalation routing",
      "Automated compliance reports & audit trail",
      "User roles, access logs and data retention policies",
      "API access for BI/ERP (on request)",
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Retrofits (Bridgepoint)",
    description:
      "Bring existing controllers to the cloud using Bridgepoint CloudConnect gateways (4/8/16 controllers).",
    bullets: [
      "Modbus/BACnet interfacing and test plans",
      "Harness design & commissioning",
      "Data mapping and tag standardisation",
      "Cut-over with minimal downtime",
      "Documentation & training",
    ],
  },
  {
    id: "audit-support",
    title: "Audit Support & Documentation",
    description:
      "SOP templates, calibration/mapping binders and CAPA support to streamline audits.",
    bullets: [
      "Calibration & mapping records consolidation",
      "SOP/Work-instruction templates",
      "Deviation/CAPA handling support",
      "Validation binder preparation",
      "Pre-audit readiness checks",
    ],
  },
];
