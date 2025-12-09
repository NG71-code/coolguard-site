import React from "react";
import {
  CheckCircle2,
  Shield,
  BellRing,
  Wifi,
  Database,
  BatteryCharging,
  Thermometer,
  Cloud,
  Package2,
  ArrowRight,
} from "lucide-react";

// -------- small helper --------
const cx = (...cn) => cn.filter(Boolean).join(" ");

// -------- tiny UI shims --------
export function Card({ className, children }) {
  return (
    <div className={cx("rounded-2xl border bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cx("px-6 pt-6", className)}>{children}</div>;
}

export function CardTitle({ className, children }) {
  return <h3 className={cx("text-lg font-semibold", className)}>{children}</h3>;
}

export function CardContent({ className, children }) {
  return <div className={cx("px-6 pb-6", className)}>{children}</div>;
}

export function Badge({ className, children, variant = "default" }) {
  const base = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs";
  const styles =
    variant === "secondary"
      ? "bg-gray-100 text-gray-800 border border-gray-200"
      : variant === "outline"
      ? "border border-gray-300 text-gray-700"
      : "bg-gray-900 text-white";

  return <span className={cx(base, styles, className)}>{children}</span>;
}

export function Button({ className, children, asChild, variant = "default" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm transition-colors";
  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-900 hover:bg-gray-50"
      : "bg-gray-900 text-white hover:bg-gray-800";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cx(children.props.className, base, styles, className),
    });
  }

  return <button className={cx(base, styles, className)}>{children}</button>;
}

// -------- normalisation helpers --------
const toStr = (v, fb = "") => (v == null ? fb : String(v));
const toArr = (v) =>
  Array.isArray(v) ? v.filter(Boolean).map((x) => String(x)) : [];
const toPairs = (v) =>
  Array.isArray(v)
    ? v
        .filter(Boolean)
        .map((x) => ({
          label: toStr(x && x.label),
          value: toStr(x && x.value),
        }))
    : [];

// -------- default product data (Frigo-101-AA) --------
const DEFAULT_PRODUCT = {
  name: "Frigo-101-AA",
  code: "FR-101-AA",
  family: "Frigo-100 Series",
  tagline: "Wireless Temperature Logger for Freezers & Coolers",
  heroImage: "/images/products/frigo-101-aa.png",
  intro:
    "Frigo-101-AA is a compact, wireless IoT temperature logger for freezers and coolers. It records temperature continuously and syncs to the CoolGuard Cloud to keep your operations compliant and audit-ready.",
  features: [
    "Temperature range –40°C to +60°C",
    "Wi-Fi / LoRa connectivity",
    "NABL-traceable calibration",
    "IP65 enclosure",
    "Local memory for offline logging",
    "Real-time alerts via SMS/Email/App",
    "Long battery life (up to 3 years)",
  ],
  benefits: [
    "Ensure WHO/GMP temperature compliance",
    "Prevent spoilage with instant excursion alerts",
    "Eliminate manual logbooks and reduce errors",
    "Faster audits with ready-to-download reports",
    "Seamless integration with CoolGuard Cloud",
  ],
  applications: [
    "Pharma cold rooms & vaccine freezers",
    "Food & beverage chillers",
    "Blast freezers & walk-in freezers",
    "Reefer trucks & dispatch areas",
  ],
  highlights: [
    { label: "Model", value: "Frigo-101-AA" },
    { label: "Sensor", value: "NTC Thermistor" },
    { label: "Range", value: "–40°C to +60°C" },
    { label: "Connectivity", value: "Wi-Fi / LoRa" },
    { label: "Battery", value: "Up to 3 years" },
    { label: "Ingress", value: "IP65" },
    { label: "Cloud", value: "CoolGuard Cloud" },
  ],
  downloads: [
    {
      label: "Download Datasheet (PDF)",
      href: "/docs/frigo-101-aa-datasheet.pdf",
    },
  ],
  cta: [
    { label: "Request a Quote", href: "/contact?product=Frigo-101-AA" },
    { label: "Compare Models", href: "/products/frigo-100/compare" },
  ],
  badges: ["IP65", "NABL Calibrated"],
};

function normalizeProduct(input) {
  const src = input || DEFAULT_PRODUCT;
  return {
    name: toStr(src.name, "Unnamed Product"),
    code: src.code ? toStr(src.code) : undefined,
    tagline: src.tagline ? toStr(src.tagline) : undefined,
    heroImage: src.heroImage ? toStr(src.heroImage) : undefined,
    intro: toStr(
      src.intro,
      "This product page will show the introduction once details are provided."
    ),
    features: toArr(src.features),
    benefits: toArr(src.benefits),
    applications: toArr(src.applications),
    highlights: toPairs(src.highlights),
    downloads: Array.isArray(src.downloads)
      ? src.downloads
          .filter(Boolean)
          .map((d) => ({ label: toStr(d.label), href: toStr(d.href) }))
      : [],
    cta: Array.isArray(src.cta)
      ? src.cta
          .filter(Boolean)
          .map((c) => ({ label: toStr(c.label), href: toStr(c.href) }))
      : [],
    family: src.family ? toStr(src.family) : undefined,
    badges: toArr(src.badges),
  };
}

// -------- icons for features --------
const iconMap = {
  "real-time alerts": <BellRing className="h-4 w-4" />,
  ip65: <Shield className="h-4 w-4" />,
  "wi-fi / lora": <Wifi className="h-4 w-4" />,
  cloud: <Cloud className="h-4 w-4" />,
  "long battery": <BatteryCharging className="h-4 w-4" />,
  "local memory": <Database className="h-4 w-4" />,
  temperature: <Thermometer className="h-4 w-4" />,
  default: <CheckCircle2 className="h-4 w-4" />,
};

function FeatureRow({ text }) {
  const s = toStr(text);
  const lower = s.toLowerCase();
  const key =
    Object.keys(iconMap).find(
      (k) => k !== "default" && lower.includes(k.toLowerCase())
    ) || "default";
  const Icon = iconMap[key];

  return (
    <li className="flex items-center gap-2 rounded-xl border p-3">
      <span className="text-muted-foreground">{Icon}</span>
      <span className="text-sm">{s}</span>
    </li>
  );
}

// -------- theme helper --------
function getTheme(name) {
  switch (name) {
    case "venil":
      return {
        heroBand: "from-orange-50 to-white",
        cta: "bg-orange-600 hover:bg-orange-700 text-white",
        ctaOutline: "border-orange-300 text-orange-800 hover:bg-orange-50",
        badgeDefault: "bg-orange-600 text-white",
        badgeSecondary: "bg-orange-50 text-orange-800 border border-orange-200",
        badgeOutline: "border border-orange-300 text-orange-700",
        cardAccent: "border-orange-200",
        chipBg: "bg-orange-50",
        sectionBand: "bg-orange-50/50",
      };
    case "ocean":
      return {
        heroBand: "from-sky-50 to-white",
        cta: "bg-sky-700 hover:bg-sky-800 text-white",
        ctaOutline: "border-sky-300 text-sky-900 hover:bg-sky-50",
        badgeDefault: "bg-sky-700 text-white",
        badgeSecondary: "bg-sky-50 text-sky-900 border border-sky-200",
        badgeOutline: "border border-sky-300 text-sky-800",
        cardAccent: "border-sky-200",
        chipBg: "bg-sky-50",
        sectionBand: "bg-sky-50/50",
      };
    case "graphite":
      return {
        heroBand: "from-gray-50 to-white",
        cta: "bg-gray-900 hover:bg-gray-800 text-white",
        ctaOutline: "border-gray-300 text-gray-900 hover:bg-gray-50",
        badgeDefault: "bg-gray-900 text-white",
        badgeSecondary: "bg-gray-100 text-gray-800 border border-gray-200",
        badgeOutline: "border border-gray-300 text-gray-700",
        cardAccent: "border-gray-200",
        chipBg: "bg-gray-50",
        sectionBand: "bg-gray-50/50",
      };
    case "coolguardBlue":
    default:
      return {
        heroBand: "from-[#e6f0ff] to-white",
        cta: "bg-[#0055cc] hover:bg-[#004bb3] text-white",
        ctaOutline: "border-[#9ec1ff] text-[#003b8f] hover:bg-[#e6f0ff]",
        badgeDefault: "bg-[#0055cc] text-white",
        badgeSecondary: "bg-[#e6f0ff] text-[#003b8f] border border-[#cfe0ff]",
        badgeOutline: "border border-[#9ec1ff] text-[#003b8f]",
        cardAccent: "border-[#cfe0ff]",
        chipBg: "bg-[#f2f7ff]",
        sectionBand: "bg-[#f2f7ff]",
      };
  }
}

// -------- main component --------
export default function ProductInternalPageAlt({ product, theme = "coolguardBlue" }) {
  let p;
  try {
    p = normalizeProduct(product);
  } catch (e) {
    p = normalizeProduct(DEFAULT_PRODUCT);
  }

  const hasFeatures = p.features.length > 0;
  const hasBenefits = p.benefits.length > 0;
  const hasApplications = p.applications.length > 0;
  const hasHighlights = p.highlights.length > 0;
  const hasResources =
    (p.downloads?.length || 0) + (p.cta?.length || 0) > 0;

  const t = getTheme(theme);

  return (
    <div className="w-full">
      {/* HERO Banner */}
      <section className={`relative border-b bg-gradient-to-b ${t.heroBand}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div
            className={cx(
              "relative overflow-hidden rounded-2xl bg-white",
              t.cardAccent
            )}
          >
            <div className="relative aspect-[16/6] w-full">
              {p.heroImage ? (
                <img
                  src={p.heroImage}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Package2 className="h-16 w-16" />
                </div>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 backdrop-blur px-4 sm:px-6 lg:px-8 py-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {p.family && (
                      <span
                        className={cx(
                          "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs",
                          t.badgeSecondary
                        )}
                      >
                        {p.family}
                      </span>
                    )}
                    {p.code && (
                      <span
                        className={cx(
                          "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs",
                          t.badgeDefault
                        )}
                      >
                        {p.code}
                      </span>
                    )}
                    {p.badges?.map((b, i) => (
                      <span
                        key={i}
                        className={cx(
                          "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs",
                          t.badgeOutline
                        )}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight line-clamp-2">
                    {p.name}
                  </h1>
                  {p.tagline && (
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {p.tagline}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.cta?.map((c, i) => (
                    <Button key={i} asChild className={cx("rounded-2xl", t.cta)}>
                      <a href={c.href}>
                        {c.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-base leading-relaxed">{p.intro}</p>
      </section>

      {/* Body: Left content + Right sticky highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {hasFeatures && (
              <Card className={cx("rounded-2xl", t.cardAccent)}>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.features.map((f, i) => (
                      <FeatureRow key={i} text={f} />
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {hasBenefits && (
              <Card className={cx("rounded-2xl", t.cardAccent)}>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.benefits.map((b, i) => (
                      <li
                        key={i}
                        className={cx(
                          "flex items-start gap-2 rounded-xl p-3",
                          t.chipBg
                        )}
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {hasApplications && (
              <Card className={cx("rounded-2xl", t.cardAccent)}>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {p.applications.map((a, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 rounded-xl border p-3"
                      >
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {hasHighlights && (
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-6 space-y-4">
                <Card className={cx("rounded-2xl", t.cardAccent)}>
                  <CardHeader>
                    <CardTitle>Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="divide-y">
                      {p.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between py-3"
                        >
                          <dt className="text-xs uppercase tracking-wide text-muted-foreground mr-4">
                            {h.label}
                          </dt>
                          <dd className="text-sm font-medium text-right">
                            {h.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Resources Bar */}
      {hasResources && (
        <section className={cx("border-t backdrop-blur", t.sectionBand)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {p.downloads?.map((d, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    asChild
                    className={cx("rounded-2xl", t.ctaOutline)}
                  >
                    <a href={d.href}>{d.label}</a>
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.cta?.map((c, i) => (
                  <Button
                    key={`cta-${i}`}
                    asChild
                    className={cx("rounded-2xl", t.cta)}
                  >
                    <a href={c.href}>{c.label}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
