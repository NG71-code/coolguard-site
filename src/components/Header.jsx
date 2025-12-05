// src/components/Header.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import coolguardLogo from "/coolguard-logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);   // for MOBILE submenus
  const [hoverMenu, setHoverMenu] = useState(null); // for DESKTOP hover dropdowns
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHoverMenu(null);
      setOpenMenu(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TOP_LINKS = [
    {
      label: "Customer Login",
      href: "https://app.coolguard.cloud",
      external: true,
      button: true,
    },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
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
          label: "2 Channel Cloud Logger",
          href: "/products/kryo-101-aa",
        },
        {
          key: "kryo-101-bb",
          label: "8 Channel Cloud Logger",
          href: "/products/kryo-101-bb",
        },
        {
          key: "kryo-101-cc",
          label: "Kryo-101-CC",
          href: "/cloud-loggers#kryo-101-cc",
        },

        { key: "frigo-100", label: "Frigo-100 Series", isGroup: true },
        {
          key: "frigo-101-aa",
          label: "Smart Freezer & Cooler Cloud Logger",
          href: "/products/frigo-101-aa",
        },
        {
          key: "frigo-101-bb",
          label: "Cloud-Connected Cooler Locator",
          href: "/products/frigo-101-bb",
        },
      ],
    },
    {
      key: "connectors",
      label: "Cloud Connectors",
      icon: ConnectorIcon,
      href: "/products/bridgepoint-cloudconnect",
    },
    {
      key: "nodes",
      label: "Nodes & Gateways",
      icon: NodeGatewayIcon,
      href: "/nodes-gateways",
    },
    {
      key: "controllers",
      label: "Controllers",
      icon: ControllerIcon,
      // Coming soon page (no dropdown)
      href: "/controllers/cg-100-series",
    },
    {
      key: "sensors",
      label: "Sensors",
      icon: SensorIcon,
      // Simple page (no dropdown)
      href: "/sensors",
    },
    {
      key: "services",
      label: "Services",
      icon: ServiceIcon,
      // Simple page (no dropdown)
      href: "/services",
    },
    {
      key: "platform",
      label: "Cloud Platform",
      icon: PlatformIcon,
      href: "/cloud-platform",
    },
  ];

  const handleNav = (item) => {
    if (!item?.href) return;

    // External links
    if (item.external && item.href.startsWith("http")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    // In-page scroll
    if (item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Internal routes
    if (item.href.startsWith("/")) {
      navigate(item.href);
      setMobileOpen(false);
      setOpenMenu(null);
      setHoverMenu(null);
    }
  };

  return (
    <header className="w-full sticky top-0 z-[9999] bg-white/95 backdrop-blur border-b border-gray-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DESKTOP */}
        <div className="hidden md:flex items-stretch h-24">
          {/* Logo */}
          <div
            className="flex items-center pr-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
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
                {SECONDARY_MENUS.map((m) => {
                  const hasChildren = !!m.children && m.children.length > 0;
                  const isOpen = hasChildren && hoverMenu === m.key;
                  return (
                    <div
                      key={m.key}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasChildren) setHoverMenu(m.key);
                      }}
                      onMouseLeave={() => {
                        if (hasChildren) setHoverMenu(null);
                      }}
                    >
                      {/* Main button */}
                      <button
                        className={`
                          inline-flex items-center gap-2 px-2 py-1 rounded-md transition-colors duration-200
                          ${isOpen ? "bg-blue-50/70" : "hover:bg-blue-50/40"}
                        `}
                        onClick={() => handleNav(m)} // click goes to main page
                      >
                        <m.icon className="h-5 w-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-800">
                          {m.label}
                        </span>
                        {hasChildren && (
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-4 w-4 text-gray-400 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
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

                      {/* Dropdown (hover-controlled, only for Cloud Loggers) */}
                      {hasChildren && isOpen && (
                        <div
                          className="
                            absolute right-0 top-full w-64 rounded-xl border bg-white shadow-xl py-2 z-[10000]
                          "
                        >
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
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* MOBILE BAR */}
        <div className="flex md:hidden h-16 items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
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
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white z-[9999]">
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
              {SECONDARY_MENUS.map((m) => {
                const hasChildren = !!m.children && m.children.length > 0;
                return (
                  <div key={m.key} className="border rounded-md px-3 py-2">
                    <button
                      className="w-full flex items-center justify-between text-gray-900 font-medium"
                      onClick={() => {
                        if (!hasChildren) {
                          handleNav(m);
                          setMobileOpen(false);
                        } else {
                          setOpenMenu((prev) =>
                            prev === m.key ? null : m.key
                          );
                        }
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <m.icon className="h-5 w-5 text-gray-600" />
                        {m.label}
                      </span>
                      {hasChildren && (
                        <span className="text-xs text-gray-500">
                          {openMenu === m.key ? "Hide" : "Menu"}
                        </span>
                      )}
                    </button>

                    {hasChildren && openMenu === m.key && (
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
                );
              })}
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
