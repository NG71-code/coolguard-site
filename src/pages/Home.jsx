// src/pages/Home.jsx
import { useMemo, useState } from "react";
import { CATALOG, LOGO_SRC } from "../data/catalog.js";
import { SERVICES } from "../data/services.js";

/* ---------------- Icons (inline SVG) ---------------- */
function IconControllers(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className || "h-4 w-4"}>
      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconNodes(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className || "h-4 w-4"}>
      <path d="M6 6h4v4H6zM14 14h4v4h-4zM14 6h4v4h-4zM6 14h4v4H6z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 8h4M8 10v4M14 10v4M10 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function IconLoggers(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className || "h-4 w-4"}>
      <path d="M4 8c4 6 12 6 16 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="5" y="10" width="14" height="8" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="14" r="2" fill="currentColor"/>
    </svg>
  );
}
function IconSensors(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className || "h-4 w-4"}>
      <path d="M12 3v6M12 15v6M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}
function IconChevron(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className || "h-4 w-4"}>
      <path d="M8 10l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/* ---------------- Thumbnail helper ---------------- */
function hashToGrad(key) {
  // deterministic gradient palette based on string
  const palettes = [
    ["from-sky-200","to-sky-400","text-sky-800"],
    ["from-emerald-200","to-emerald-400","text-emerald-800"],
    ["from-indigo-200","to-indigo-400","text-indigo-800"],
    ["from-amber-200","to-amber-400","text-amber-800"],
    ["from-fuchsia-200","to-fuchsia-400","text-fuchsia-800"],
    ["from-rose-200","to-rose-400","text-rose-800"],
    ["from-cyan-200","to-cyan-400","text-cyan-800"],
  ];
  let h = 0; for (let i=0;i<key.length;i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}
function Thumb({ code, label }) {
  const [from,to,text] = hashToGrad(String(code || label || "CG"));
  const initials = (code || label || "CG").slice(0,4).toUpperCase();
  return (
    <div className={`h-14 w-14 shrink-0 rounded-xl bg-gradient-to-br ${from} ${to} flex items-center justify-center border border-white/60 shadow-sm`}>
      <span className={`text-xs font-bold ${text}`}>{initials}</span>
    </div>
  );
}

/* ---------------- Main Page ---------------- */
export default function Home() {
  // state
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // simple links
  const NAV = [
    { label: "Services", href: "#services" },
    { label: "Downloads", href: "#downloads" },
    { label: "Contact", href: "#contact" },
  ];

  // requested menus
  const MENU = [
    { key: "controllers", label: "Controllers", icon: IconControllers },
    { key: "nodes", label: "Nodes & Gateways", icon: IconNodes },
    { key: "loggers", label: "Cloud Loggers", icon: IconLoggers },
    { key: "sensors", label: "Sensors", icon: IconSensors },
  ];

  function handleNav(item) {
    if (item.category) setActiveCategory(item.category);
    if (item.href) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }

  // group assignment (can be overridden per product via p.menuGroup)
  function getMenuGroup(p) {
    if (p?.menuGroup) return p.menuGroup;
    const hay = `${p?.category || ""} ${p?.name || ""} ${p?.code || ""}`.toLowerCase();
    if (hay.includes("gateway") || hay.includes("bridge") || hay.includes("node")) return "nodes";
    if (hay.includes("kryo") || hay.includes("frigo") || hay.includes("logger") || hay.includes("cloud")) return "loggers";
    if (hay.includes("sensor")) return "sensors";
    return "controllers";
  }

  // build dropdown sections: group -> category columns -> items
  const MENU_SECTIONS = useMemo(() => {
    const byGroup = {};
    MENU.forEach((m) => (byGroup[m.key] = new Map()));
    (CATALOG || []).forEach((p) => {
      const g = getMenuGroup(p);
      const cat = p?.category || "Products";
      if (!byGroup[g].get(cat)) byGroup[g].set(cat, []);
      byGroup[g].get(cat).push({
        label: p?.name || p?.model || p?.code,
        code: p?.code,
        category: cat,
      });
    });
    const out = {};
    Object.keys(byGroup).forEach((key) => {
      out[key] = Array.from(byGroup[key].entries()).map(([heading, items]) => ({
        heading,
        items: items.sort((a,b) =>
          String(a.code || a.label).localeCompare(String(b.code || b.label))
        ),
      }));
    });
    return out;
  }, []);

  function goToProduct(it) {
    setActiveCategory(it.category || "All");
    setQuery(it.code || it.label || "");
    const el = document.querySelector("#controllers");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenMenu(null);
    setMenuOpen(false);
  }

  // grid data
  const categories = useMemo(() => {
    const set = new Set();
    (CATALOG || []).forEach((p) => p?.category && set.add(p.category));
    return ["All", ...Array.from(set).sort()];
  }, []);
  const filtered = useMemo(() => {
    let items = Array.isArray(CATALOG) ? CATALOG : [];
    if (activeCategory !== "All") items = items.filter((p) => (p?.category || "") === activeCategory);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(
        (p) =>
          String(p?.code || "").toLowerCase().includes(q) ||
          String(p?.name || "").toLowerCase().includes(q) ||
          String(p?.description || "").toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO_SRC || "/coolguard-logo.png"} alt="CoolGuard" className="h-8 w-auto" />
            <span className="font-semibold tracking-wide">CoolGuard</span>
          </a>

          {/* Desktop nav with four mega-menus */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {MENU.map((m) => {
              const Ico = m.icon;
              return (
                <div
                  key={m.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(m.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="flex items-center gap-1.5 hover:text-blue-600">
                    <Ico className="h-4 w-4" />
                    {m.label}
                    <IconChevron className="h-4 w-4 text-slate-400" />
                  </button>

                  {openMenu === m.key && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[920px] rounded-2xl border bg-white shadow-xl p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(MENU_SECTIONS[m.key] || []).map((sec) => (
                          <div key={`${m.key}-${sec.heading}`}>
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              {sec.heading}
                            </div>
                            <ul className="mt-2 space-y-2">
                              {sec.items.slice(0, 6).map((it) => (
                                <li key={`${sec.heading}-${it.code || it.label}`}>
                                  <button
                                    onClick={() => goToProduct(it)}
                                    className="group w-full text-left flex items-center gap-3 rounded-xl border border-slate-200/70 p-2 hover:border-blue-200 hover:bg-blue-50/40"
                                    title={it.label}
                                  >
                                    <Thumb code={it.code} label={it.label} />
                                    <div className="min-w-0">
                                      <div className="truncate text-sm font-medium group-hover:text-blue-700">
                                        {it.label}
                                      </div>
                                      <div className="truncate text-[11px] text-slate-500">
                                        {it.code || "—"}
                                      </div>
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 text-right">
                        <button
                          onClick={() => handleNav({ href: "#controllers" })}
                          className="text-sm text-slate-600 hover:text-blue-600"
                        >
                          Browse all →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* simple links */}
            {NAV.map((item) => (
              <button key={item.label} onClick={() => handleNav(item)} className="hover:text-blue-600">
                {item.label}
              </button>
            ))}
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

        {/* Mobile menu with four collapsibles and thumbnails */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 grid gap-1">
              {MENU.map((m) => {
                const Ico = m.icon;
                return (
                  <details className="group" key={`m-${m.key}`}>
                    <summary className="flex items-center justify-between py-2 text-sm cursor-pointer">
                      <span className="flex items-center gap-2">
                        <Ico className="h-4 w-4" />
                        {m.label}
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="pl-2 pb-2">
                      {(MENU_SECTIONS[m.key] || []).map((sec) => (
                        <div key={`${m.key}-${sec.heading}`} className="mt-2">
                          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            {sec.heading}
                          </div>
                          <ul className="mt-1 space-y-2">
                            {sec.items.slice(0, 8).map((it) => (
                              <li key={`${sec.heading}-${it.code || it.label}`}>
                                <button
                                  onClick={() => goToProduct(it)}
                                  className="w-full text-left flex items-center gap-3 rounded-xl border p-2 hover:bg-slate-50"
                                >
                                  <Thumb code={it.code} label={it.label} />
                                  <div className="min-w-0">
                                    <div className="truncate text-sm font-medium">{it.label}</div>
                                    <div className="truncate text-[11px] text-slate-500">{it.code || "—"}</div>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <button
                        onClick={() => handleNav({ href: "#controllers" })}
                        className="mt-2 text-xs text-slate-600 hover:text-blue-600"
                      >
                        Browse all →
                      </button>
                    </div>
                  </details>
                );
              })}

              {NAV.map((item) => (
                <button key={item.label} onClick={() => handleNav(item)} className="w-full text-left py-2 text-sm hover:text-blue-600">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Sensors to Cloud — <span className="text-blue-600">CoolGuard</span>
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                Modern monitoring & control for cold-chain and environment management. Explore our controllers, gateways and cloud tools.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#controllers" className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2.5 text-white font-medium hover:bg-blue-700 shadow">
                  View Controllers
                </a>
                <a href="#services" className="inline-flex items-center rounded-xl px-4 py-2.5 border font-medium hover:bg-slate-50">
                  Services
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm">
                <img src={LOGO_SRC || "/coolguard-logo.png"} alt="CoolGuard Logo" className="mx-auto h-20 w-auto" />
                <p className="mt-4 text-center text-sm text-slate-600">
                  Reliable hardware + cloud platform for temperature, humidity, and facility control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controllers grid */}
      <section id="controllers" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Controllers & Gateways</h2>
              <p className="mt-1 text-slate-600">Browse by category or search by model / description.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-64 md:w-80 rounded-xl border px-3 py-2.5 pl-10 text-sm outline-none focus:border-blue-500"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-full border text-sm ${
                  activeCategory === c ? "bg-blue-600 text-white border-blue-600" : "hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <article key={p?.id || p?.code} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Thumb code={p?.code} label={p?.name} />
                    <div>
                      <h3 className="font-semibold text-lg">{p?.name || p?.model || "Unnamed Product"}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {p?.code}
                        {p?.category ? ` • ${p.category}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p?.description || "—"}</p>
                <dl className="mt-4 space-y-1.5 text-xs">
                  {p?.connectivity ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">Connectivity</dt>
                      <dd className="font-medium">{p.connectivity}</dd>
                    </div>
                  ) : null}
                  {p?.channels ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">Channels</dt>
                      <dd className="font-medium">{p.channels}</dd>
                    </div>
                  ) : null}
                  {p?.hsn ? (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-slate-500">HSN</dt>
                      <dd className="font-medium">{p.hsn}</dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 text-center text-slate-500">No products match your filters.</p>
          )}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 md:py-16 bg-slate-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
          <p className="mt-1 text-slate-600">Calibration, mapping, validation and more.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(SERVICES || []).map((s) => (
              <article key={s?.id || s?.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-lg">{s?.title || "Service"}</h3>
                <p className="mt-2 text-sm text-slate-600">{s?.description || "—"}</p>
                {s?.bullets?.length ? (
                  <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-12 md:py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Downloads</h2>
          <p className="mt-1 text-slate-600">Datasheets, manuals, certificates and quick-start guides.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">CG-100 Series – Datasheet (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Controllers overview, specs and wiring.</div>
            </a>
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">Kryo-100 / 101 – User Manual (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Logger & gateway installation and setup.</div>
            </a>
            <a className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition" href="#" download>
              <div className="font-semibold">Bridgepoint CloudConnect – Guide (PDF)</div>
              <div className="text-sm text-slate-600 mt-1">Integration steps and Modbus mapping.</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC || "/coolguard-logo.png"} alt="CoolGuard" className="h-7 w-auto" />
              <div className="text-sm text-slate-600">
                <div className="font-medium">CoolGuard</div>
                <div>Sensors to Cloud</div>
              </div>
            </div>
            <div className="text-sm text-slate-600">
              <div>Need help? <a className="text-blue-600 hover:underline" href="mailto:support@coolguard.cloud">support@coolguard.cloud</a></div>
              <div className="mt-1">© {new Date().getFullYear()} CoolGuard</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
