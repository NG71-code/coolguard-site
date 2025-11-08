import { useState } from "react";

export default function Header({ LOGO_SRC = "/coolguard-logo.png", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // Simple navigate helper
  const handleNav = (item) => {
    if (onNavigate) onNavigate(item);
    // If you use anchors/IDs on the same page, you can scroll here instead
    // document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
  };

  // --- MENU DATA ----------------------------------------------------------
  // Each menu gets a compact list with a small icon/thumbnail.
  const MENUS = {
    Controllers: {
      items: [
        {
          title: "CG-100-S+ — Single+",
          desc: "Single compressor controller (+) for positive temps",
          icon: ControllerIcon,
        },
        {
          title: "CG-100-S− — Single−",
          desc: "Single compressor controller (−) for negative temps",
          icon: ControllerIcon,
        },
        {
          title: "CG-100-D+ — Dual+",
          desc: "Dual compressor controller (+) for positive temps",
          icon: ControllerIcon,
        },
        {
          title: "CG-100-D− — Dual−",
          desc: "Dual compressor controller (−) for negative temps",
          icon: ControllerIcon,
        },
      ],
      onBrowse: () => handleNav({ section: "controllers", label: "Controllers" }),
    },

    "Nodes & Gateways": {
      items: [
        { title: "Nexus Pro Gateway", desc: "Smart wireless multi-mode gateway", icon: GatewayIcon },
        { title: "Nexus Lite Gateway", desc: "Simple wireless gateway", icon: GatewayIcon },
        { title: "Enviro Wireless Node", desc: "Temperature & humidity node", icon: NodeIcon },
      ],
      onBrowse: () => handleNav({ section: "nodes", label: "Nodes & Gateways" }),
    },

    "Cloud Loggers": {
      items: [
        { title: "EnviroGuard (2-Ch)", desc: "2-channel cloud temperature logger", icon: LoggerIcon },
        { title: "Multisense (8-Ch)", desc: "8-channel multi-probe cloud logger", icon: LoggerIcon },
      ],
      onBrowse: () => handleNav({ section: "cloud-loggers", label: "Cloud Loggers" }),
    },

    Sensors: {
      items: [
        { title: "Temperature Probe", desc: "Food-grade, narrow-tip, various lengths", icon: SensorIcon },
        { title: "RH Sensor", desc: "Industrial humidity & temperature", icon: SensorIcon },
        { title: "Door Sensor", desc: "Reed/magnetic door open detector", icon: SensorIcon },
      ],
      onBrowse: () => handleNav({ section: "sensors", label: "Sensors" }),
    },
  };

  const TOP_LINKS = [
    "Controllers",
    "Nodes & Gateways",
    "Cloud Loggers",
    "Sensors",
    "Services",
    "Downloads",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="CoolGuard" className="h-8 w-auto" />
          <span className="font-semibold tracking-wide">CoolGuard</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {TOP_LINKS.map((label) => {
            const hasMenu = !!MENUS[label];
            if (!hasMenu) {
              return (
                <button
                  key={label}
                  onClick={() => handleNav({ section: label.toLowerCase().replace(/\s+/g, "-"), label })}
                  className="px-2 py-1 rounded hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                >
                  {label}
                </button>
              );
            }

            // Dropdown trigger + panel
            const menu = MENUS[label];
            return (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setOpenMenu(label)}
                onMouseLeave={() => setOpenMenu((v) => (v === label ? null : v))}
              >
                <button
                  onFocus={() => setOpenMenu(label)}
                  onBlur={(e) => {
                    // close on blur if focus leaves menu area
                    if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
                      setOpenMenu(null);
                    }
                  }}
                  className="px-2 py-1 rounded hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                  aria-haspopup="true"
                  aria-expanded={openMenu === label}
                >
                  {label}
                </button>

                {/* Dropdown Panel – compact width */}
                {openMenu === label && (
                  <div
                    className="
                      absolute left-0 mt-3 z-50
                      w-auto inline-block max-w-[42rem]
                      rounded-2xl border bg-white/95 shadow-xl ring-1 ring-black/5 backdrop-blur
                      p-5
                    "
                  >
                    <p className="px-1 text-[11px] font-semibold tracking-wider text-slate-500">
                      {label.toUpperCase()}
                    </p>

                    <div className="mt-3 flex flex-col gap-3">
                      {menu.items.map((it, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNav({ section: label.toLowerCase().replace(/\s+/g, "-"), model: it.title })}
                          className="group flex items-start gap-3 rounded-lg px-2 py-2 hover:bg-slate-50 text-left"
                        >
                          <div className="mt-0.5 h-8 w-8 shrink-0 rounded-md border grid place-content-center text-slate-500 group-hover:text-blue-600">
                            <it.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium leading-tight">{it.title}</div>
                            {it.desc && (
                              <div className="text-[13px] text-slate-500 leading-snug">
                                {it.desc}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={menu.onBrowse}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Browse all
                        <svg viewBox="0 0 20 20" className="h-4 w-4"><path fill="currentColor" d="M7.5 3.5l6 6-6 6-1.06-1.06L10.38 10 6.44 4.56 7.5 3.5z"/></svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-slate-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 grid gap-1">
            {TOP_LINKS.map((label) => (
              <button
                key={label}
                onClick={() => {
                  setMenuOpen(false);
                  handleNav({ section: label.toLowerCase().replace(/\s+/g, "-"), label });
                }}
                className="w-full text-left py-2 text-sm hover:text-blue-600"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------- Tiny inline icons (replace with real thumbs anytime) ----------------- */
function ControllerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" fill="currentColor" />
      <circle cx="9" cy="12" r="2" fill="#fff" />
      <circle cx="15" cy="12" r="2" fill="#fff" />
    </svg>
  );
}
function GatewayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="#fff" />
    </svg>
  );
}
function NodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function LoggerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor" />
      <path d="M8 13l2 2 5-5" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
  );
}
function SensorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 3h10v6a5 5 0 11-10 0V3z" fill="currentColor" />
      <rect x="9" y="3" width="6" height="2" fill="#fff" />
    </svg>
  );
}
