import { useState } from "react";
import coolguardLogo from "/coolguard-logo.png"; // ensure this file exists in /public

export default function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown key

  const TOP_LINKS = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  const SECONDARY_MENUS = [
    {
      key: "cloud",
      label: "Cloud Loggers",
      icon: CloudIcon,
      href: "/cloud-loggers",
      children: [
        { key: "kryo-100", label: "Kryo-100 Series", isGroup: true },
        {
          key: "kryo-101-aa",
          label: "Kryo-101-AA",
          href: "/cloud-loggers#kryo-101-aa",
        },
        {
          key: "kryo-101-bb",
          label: "Kryo-101-BB",
          href: "/cloud-loggers#kryo-101-bb",
        },
        {
          key: "kryo-101-cc",
          label: "Kryo-101-CC",
          href: "/cloud-loggers#kryo-101-cc",
        },

        { key: "frigo-100", label: "Frigo-100 Series", isGroup: true },
        {
          key: "frigo-101-aa",
          label: "Frigo-101-AA",
          href: "/products/frigo-101-aa", // product page
        },
        {
          key: "frigo-101-bb",
          label: "Frigo-101-BB",
          href: "/cloud-loggers#frigo-101-bb",
        },
      ],
    },
    {
      key: "connectors",
      label: "Cloud Connectors",
      icon: ConnectorIcon,
      href: "/cloud-connectors",
      children: [
        {
          key: "bp-zone",
          label: "Bridge Point Cloud Connect – Zone Edition",
          href: "/cloud-connectors#zone",
        },
        {
          key: "bp-facility",
          label: "Bridge Point Cloud Connect – Facility Edition",
          href: "/cloud-connectors#facility",
        },
        {
          key: "bp-enterprise",
          label: "Bridge Point Cloud Connect – Enterprise Edition",
          href: "/cloud-connectors#enterprise",
        },
      ],
    },
    {
      key: "nodes",
      label: "Nodes & Gateways",
      icon: NodeGatewayIcon,
      href: "/nodes-gateways",
      children: [
        {
          key: "kryo-101-dd",
          label: "Kryo-101-DD",
          href: "/nodes-gateways#kryo-101-dd",
        },
        {
          key: "kryo-101-nd",
          label: "Kryo-101-ND",
          href: "/nodes-gateways#kryo-101-nd",
        },
      ],
    },
    {
      key: "controllers",
      label: "Controllers",
      icon: ControllerIcon,
      href: "/controllers",
      children: [
        { key: "cg-100-series", label: "CG-100 Series", isGroup: true },
        {
          key: "cg-100-s-plus",
          label: "CG-100 – Single + Controller",
          href: "/controllers#cg-100-single-plus",
        },
        {
          key: "cg-100-s-minus",
          label: "CG-100 – Single − Controller",
          href: "/controllers#cg-100-single-minus",
        },
        {
          key: "cg-100-d-plus",
          label: "CG-100 – Dual + Controller",
          href: "/controllers#cg-100-dual-plus",
        },
        {
          key: "cg-100-d-minus",
          label: "CG-100 – Dual − Controller",
          href: "/controllers#cg-100-dual-minus",
        },
        {
          key: "saffron",
          label: "Saffron Controller",
          href: "/controllers#saffron",
        },
        {
          key: "custom",
          label: "Custom Controllers",
          href: "/controllers#custom",
        },
      ],
    },
    {
      key: "sensors",
      label: "Sensors",
      icon: SensorIcon,
      href: "/sensors",
      children: [
        {
          key: "temp-sensor",
          label: "Temperature Sensors",
          href: "/sensors#temperature",
        },
        {
          key: "rh-sensor",
          label: "Humidity Sensors",
          href: "/sensors#humidity",
        },
        {
          key: "temp-rh",
          label: "Integrated Temperature & Humidity",
          href: "/sensors#temp-rh",
        },
        { key: "display", label: "Displays", href: "/sensors#display" },
        { key: "hooters", label: "Hooters", href: "/sensors#hooters" },
        { key: "door", label: "Door Sensors", href: "/sensors#door" },
        { key: "nh3", label: "Ammonia (NH₃) Sensors", href: "/sensors#nh3" },
        { key: "co2", label: "CO₂ Sensors", href: "/sensors#co2" },
        { key: "lux", label: "Lux Sensors", href: "/sensors#lux" },
      ],
    },
    {
      key: "services",
      label: "Services",
      icon: ServiceIcon,
      href: "#services",
      children: [
        { key: "mapping", label: "Mapping Services", href: "#mapping-services" },
        {
          key: "calibration",
          label: "Calibration Services",
          href: "#calibration-services",
        },
      ],
    },
    {
      key: "platform",
      label: "Cloud Platform",
      icon: PlatformIcon,
      href: "#cloud-platform",
    },
  ];

  const handleNav = (item) => {
    if (onNavigate) onNavigate(item);
    if (!item?.href) return;

    if (item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.href.startsWith("/")) {
      window.location.href = item.href;
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DESKTOP */}
        <div className="hidden md:flex items-stretch h-24">
          {/* Logo */}
          <div className="flex items-center pr-8">
            <img
              src={coolguardLogo}
              alt="CoolGuard"
              className="h-16 sm:h-20 md:h-20 w-auto"
              draggable="false"
            />
          </div>

          {/* Right side */}
          <div className="flex-1 flex flex-col">
            {/* Top row: About / Contact */}
            <div className="flex items-center justify-end h-10 border-b border-gray-100">
              <nav className="flex items-center gap-8">
                {TOP_LINKS.map((link) => (
                  <button
                    key={link.label}
                    className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#007BFF]"
                    onClick={() => handleNav(link)}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom row: main menu */}
            <div className="flex items-center justify-end h-14">
              <nav className="flex items-center gap-4">
                {SECONDARY_MENUS.map((m) => (
                  <div
                    key={m.key}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(m.key)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      className="group inline-flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 hover:bg-blue-50/40"
                      onClick={() => handleNav(m)}
                    >
                      <m.icon className="h-5 w-5 text-gray-600 group-hover:text-[#007BFF]" />
                      <span className="text-sm font-medium text-gray-800 group-hover:text-[#007BFF]">
                        {m.label}
                      </span>
                      {m.children && (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-gray-400 group-hover:text-[#007BFF]"
                        >
                          <path
                            d="M8 10l4 4 4-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Dropdown (single level) */}
                    {m.children && openMenu === m.key && (
                      <div className="absolute right-0 mt-2 w-64 rounded-xl border bg-white shadow-lg py-2 z-50">
                        {m.children.map((child) =>
                          child.isGroup ? (
                            <div
                              key={child.key}
                              className="px-4 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                            >
                              {child.label}
                            </div>
                          ) : (
                            <button
                              key={child.key}
                              onClick={() => handleNav(child)}
                              className="w-full text-left px-4 py-1.5 text-sm text-slate-700 hover:bg-blue-50"
                            >
                              {child.label}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* MOBILE BAR */}
        <div className="flex md:hidden h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={coolguardLogo}
              alt="CoolGuard"
              className="h-10 w-auto"
              draggable="false"
            />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3">
            {/* Top links */}
            <div className="flex flex-col gap-2 mb-3">
              {TOP_LINKS.map((link) => (
                <button
                  key={link.label}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 text-gray-800"
                  onClick={() => {
                    handleNav(link);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Menus + children */}
            <div className="flex flex-col gap-2">
              {SECONDARY_MENUS.map((m) => (
                <div key={m.key} className="border rounded-md px-3 py-2">
                  <button
                    className="w-full text-left flex items-center justify-between text-gray-900 font-medium"
                    onClick={() => handleNav(m)}
                  >
                    <span className="flex items-center gap-2">
                      <m.icon className="h-5 w-5 text-gray-600" />
                      {m.label}
                    </span>
                  </button>

                  {m.children && (
                    <div className="mt-2 space-y-1 pl-7">
                      {m.children.map((child) =>
                        child.isGroup ? (
                          <div
                            key={child.key}
                            className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mt-1"
                          >
                            {child.label}
                          </div>
                        ) : (
                          <button
                            key={child.key}
                            className="block w-full text-left text-sm text-gray-700 py-0.5"
                            onClick={() => {
                              handleNav(child);
                              setMobileOpen(false);
                            }}
                          >
                            {child.label}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* --- Icons --- */
function CloudIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M7 18h9a4 4 0 0 0 0-8h-1A6 6 0 1 0 7 18Z" strokeWidth="2" />
    </svg>
  );
}

function ConnectorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="9" width="6" height="6" rx="1" strokeWidth="2" />
      <rect x="15" y="9" width="6" height="6" rx="1" strokeWidth="2" />
      <path d="M9 12h6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NodeGatewayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <circle cx="6" cy="12" r="2" strokeWidth="2" />
      <circle cx="12" cy="6" r="2" strokeWidth="2" />
      <circle cx="18" cy="12" r="2" strokeWidth="2" />
      <path d="M8 12h4M12 8v4M14 12h4" strokeWidth="2" />
    </svg>
  );
}

function ControllerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <rect x="4" y="7" width="16" height="10" rx="2" strokeWidth="2" />
      <path d="M9 10v4M12 9v6M15 11v2" strokeWidth="2" />
    </svg>
  );
}

function SensorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M12 6v12M8 10v4M16 9v6" strokeWidth="2" />
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
    </svg>
  );
}

function ServiceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <path d="M7 7h10v10H7z" strokeWidth="2" />
      <path d="M7 12h10M12 7v10" strokeWidth="2" />
    </svg>
  );
}

function PlatformIcon(props) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" {...props}>
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M8 12h8M12 8v8" strokeWidth="2" />
    </svg>
  );
}
