// src/components/CustomerLogoStrip.jsx
import React from "react";
import "./logo-strip.css"; // animation + hover CSS

const LOGOS = [
  // ------- India -------
  { src: "/logos/itc.png", label: "ITC", region: "India" },
  { src: "/logos/glenmark.png", label: "Glenmark", region: "India" },
  { src: "/logos/tci.png", label: "TCI Cold Chain", region: "India" },
  { src: "/logos/safal.png", label: "Safal", region: "India" },

  // ------- Middle East -------
  { src: "/logos/oman-dairy.png", label: "Oman Dairy", region: "Middle East" },
  {
    src: "/logos/muscat-coldstore.png",
    label: "Muscat Cold Store",
    region: "Middle East",
  },

  // ------- Africa -------
  { src: "/logos/kenya-fresh.png", label: "Kenya Fresh", region: "Africa" },
  { src: "/logos/ghana-agri.png", label: "Ghana Agri", region: "Africa" },

  // add more as needed...
];

const REGION_BADGE_STYLES = {
  India:
    "bg-orange-50 text-orange-700 border border-orange-100",
  "Middle East":
    "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Africa:
    "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100",
  default:
    "bg-slate-50 text-slate-700 border border-slate-200",
};

export default function CustomerLogoStrip({ speed = "normal" }) {
  // duplicate list for infinite scroll effect
  const doubled = [...LOGOS, ...LOGOS];

  const speedClass =
    speed === "fast"
      ? "logo-track--fast"
      : speed === "slow"
      ? "logo-track--slow"
      : "logo-track--normal";

  return (
    <section className="bg-[#F4F7FB] py-8">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-[11px] md:text-[13px] font-semibold tracking-[0.25em] text-center text-[#4A7CFF] mb-6">
          TRUSTED BY LEADING FOOD, PHARMA &amp; COLD CHAIN OPERATORS
        </h2>

        {/* group => used for pause-on-hover in CSS */}
        <div className="logo-strip group overflow-hidden relative">
          <div className={`logo-track flex gap-10 ${speedClass}`}>
            {doubled.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center min-w-[140px]"
              >
                {/* Region badge */}
                <span
                  className={
                    "text-[10px] px-2 py-0.5 rounded-full font-semibold mb-2 " +
                    (REGION_BADGE_STYLES[item.region] ||
                      REGION_BADGE_STYLES.default)
                  }
                >
                  {item.region || "Customer"}
                </span>

                {/* Logo */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-12 md:h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FB] to-transparent" />
        </div>
      </div>
    </section>
  );
}
