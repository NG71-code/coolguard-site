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
      href: "/controllers/cg-100-series",
    },
    {
      key: "sensors",
      label: "Sensors",
      icon: SensorIcon,
      href: "/sensors",
    },
    {
      key: "services",
      label: "Services",
      icon: ServiceIcon,
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

    if (item.external && item.href.startsWith("http")) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

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
                        onClick={() => {
                          // ❌ Disable click for Cloud Loggers (only dropdown)
                          if (!(hasChildren && m.key === "cloud")) {
                            handleNav(m);
                          }
                        }}
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

                      {/* Dropdown (hover-controlled) */}
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
        {/* ... no changes below this point ... */}
        {/* (rest of your file remains exactly the same) */}
      </div>

      {/* MOBILE DRAWER */}
      {/* existing mobile code unchanged */}
    </header>
  );
}
