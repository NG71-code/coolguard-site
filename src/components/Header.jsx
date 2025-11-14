import { useState } from "react";
import coolguardLogo from "/coolguard-logo.png"; // ensure it's in /public

export default function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const TOP_LINKS = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  // Order: Cloud Loggers, Nodes & Gateways, Controllers, Sensors, Services, Cloud Platform
  const SECONDARY_MENUS = [
    { key: "cloud", label: "Cloud Loggers", icon: CloudIcon, href: "#cloud-loggers" },
    { key: "nodes", label: "Nodes & Gateways", icon: NodeGatewayIcon, href: "#nodes-gateways" },
    { key: "controllers", label: "Controllers", icon: ControllerIcon, href: "#controllers" },
    { key: "sensors", label: "Sensors", icon: SensorIcon, href: "#sensors" },
    { key: "services", label: "Services", icon: ServiceIcon, href: "#services" },
    { key: "platform", label: "Cloud Platform", icon: PlatformIcon, href: "#cloud-platform" },
  ];

  const handleNav = (item) => {
    if (onNavigate) onNavigate(item);
    if (item?.href) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --------- Top Row --------- */}
        <div className="flex justify-end items-center h-12 border-b border-gray-100 relative">
          {/* Logo (left, vertically centered between rows) */}
          {/* Tweak the "top-[62%]" value to 60–66% if you want tiny nudges up/down */}
          <div className="absolute left-0 top-[95%] -translate-y-1/2">
            <img
              src={coolguardLogo}
              alt="CoolGuard"
              className="h-[88px] w-auto sm:h-[96px] md:h-[112px]"
              draggable="false"
            />
          </div>

          {/* About / Contact (brand blue hover) */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-gray-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {/* --------- Bottom Row --------- */}
        <div className="flex justify-end items-center h-12 border-t border-gray-100">
          <nav className="hidden md:flex items-center gap-6">
            {SECONDARY_MENUS.map((m) => (
              <button
                key={m.key}
                className="group inline-flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200 hover:bg-blue-50/40"
                onClick={() => handleNav({ href: m.href, label: m.label })}
              >
                <m.icon className="h-5 w-5 text-gray-600 group-hover:text-[#007BFF]" />
                <span className="text-sm font-medium text-gray-800 group-hover:text-[#007BFF]">
                  {m.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* --------- Mobile Drawer --------- */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECONDARY_MENUS.map((m) => (
                <button
                  key={m.key}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-800"
                  onClick={() => {
                    handleNav({ href: m.href, label: m.label });
                    setMobileOpen(false);
                  }}
                >
                  <m.icon className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium">{m.label}</span>
                </button>
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
