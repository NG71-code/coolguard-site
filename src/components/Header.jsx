import { useEffect, useRef, useState, forwardRef } from "react";
import { Cloud, Cpu, Network, Thermometer, Wrench, Download, Info, Phone } from "lucide-react";

const Logo = () => (
  <svg viewBox="0 0 120 28" className="h-8 w-auto" aria-hidden>
    <rect x="2" y="6" width="16" height="16" rx="4" />
    <text x="26" y="19" fontSize="12" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif">CoolGuard</text>
  </svg>
);

const ICONS = {
  "Cloud Loggers": Cloud,
  "Nodes and Gateways": Network,
  "Controllers": Cpu,
  "Sensors": Thermometer,
  "Services": Wrench,
  "Downloads": Download,
  "About Us": Info,
  "Contact Us": Phone,
};

export default function Header({
  LOGO_SRC = null,
  LOGO_DARK_SRC = null,
  version = "v1.3.2",
  versionHref = "/changelog",
  disableLinks = true,
  forceDesktop = true,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Cloud Loggers", href: "/cloud-loggers" },
    { label: "Nodes and Gateways", href: "/nodes-gateways" },
    { label: "Controllers", href: "/controllers" },
    { label: "Sensors", href: "/sensors" },
    { label: "Services", href: "/services" },
    { label: "Downloads", href: "/downloads" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur dark:bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="-m-2 p-2 lg:hidden" aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href={disableLinks ? "#" : "/"} onClick={(e) => disableLinks && e.preventDefault()} className="flex items-center gap-2" aria-label="CoolGuard home">
              {LOGO_SRC ? (
                <picture>
                  {LOGO_DARK_SRC && <source srcSet={LOGO_DARK_SRC} media="(prefers-color-scheme: dark)" />}
                  <img src={LOGO_SRC} alt="CoolGuard" className="h-8 w-auto" />
                </picture>
              ) : (
                <Logo />
              )}
            </a>
            <a
              href={disableLinks ? "#" : versionHref}
              onClick={(e) => disableLinks && e.preventDefault()}
              className="ml-2 inline-flex items-center rounded-full border border-zinc-300/70 bg-white/70 px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur hover:bg-white dark:border-zinc-700/60 dark:bg-zinc-800/60 dark:text-zinc-200"
            >
              {version}
            </a>
          </div>

          <nav className={forceDesktop ? "flex items-center gap-2" : "hidden lg:flex lg:items-center lg:gap-2"}>
            {NAV_LINKS.map((link) => {
              const Icon = ICONS[link.label];
              return (
                <a
                  key={link.label}
                  href={disableLinks ? "#" : link.href}
                  onClick={(e) => disableLinks && e.preventDefault()}
                  className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-200 dark:hover:text-white px-3 py-2"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}