// src/components/CustomerLogoStrip.jsx
import React from "react";
import "./logo-strip.css"; // animation + hover CSS

const LOGO_GROUPS = [
  {
    region: "India",
    label: "Indian Customers",
    logos: [
      { src: "/logos/itc.png", label: "ITC" },
      { src: "/logos/glenmark.png", label: "Glenmark" },
      { src: "/logos/tci.png", label: "TCI Cold Chain" },
      { src: "/logos/jwl.png", label: "JWL Cold Store" },
      { src: "/logos/Swiggy.png", label: "Swiggy" },
      { src: "/logos/Sneha.png", label: "Sneha Farms" },
      { src: "/logos/albino.jpeg", label: "Albino Lifesciences" },
      { src: "/logos/britannia.png", label: "Britannia Ltd" },
      { src: "/logos/cogent.png", label: "Cogent Foods" },
      { src: "/logos/dinshaws.png", label: "Dinshaws Icecream" },
      { src: "/logos/jubliant.png", label: "Jubliant Food Works" },
      { src: "/logos/suguna.jpeg", label: "Suguna Foods" },
      { src: "/logos/dharampal.png", label: "Dharampal Satyapal Ltd" },
    ],
  },

  {
    region: "Middle East",
    label: "Middle East Customers",
    logos: [
      { src: "/logos/Gulfprocessing.png", label: "Gulf Processing" },
      { src: "/logos/omanfisheries.png", label: "Oman Fisheries" },
      { src: "/logos/qatarmeat.png", label: "Qatar Meat" },
      { src: "/logos/khalidscientific.png", label: "Khalid Scientific" },
    ],
  },

  {
    region: "Africa",
    label: "African Customers",
    logos: [
      { src: "/logos/Haano.png", label: "Haano" },
      { src: "/logos/ghana-agri.png", label: "Ghana Agri" },
    ],
  },
];

// Build scroll items: region heading + its logos
const SCROLL_ITEMS = LOGO_GROUPS.flatMap((group) => [
  {
    type: "heading",
    region: group.region,
    label: group.label,
  },
  ...group.logos.map((lg) => ({
    type: "logo",
    region: group.region,
    src: lg.src,
    label: lg.label,
  })),
]);

const REGION_BADGE_STYLES = {
  India: "bg-orange-50 text-orange-700 border border-orange-100",
  "Middle East": "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Africa: "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100",
  default: "bg-slate-50 text-slate-700 border border-slate-200",
};

export default function CustomerLogoStrip({ speed = "normal" }) {
  // duplicate list for infinite scroll effect
  const doubled = [...SCROLL_ITEMS, ...SCROLL_ITEMS];

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

        <div className="logo-strip group overflow-hidden relative">
          <div className={`logo-track flex items-stretch gap-10 ${speedClass}`}>
            {doubled.map((item, idx) => {
              if (item.type === "heading") {
                // Region heading card inside scroll
                return (
                  <div
                    key={`heading-${idx}`}
                    className="min-w-[190px] flex flex-col justify-center rounded-2xl border bg-white/90 border-[#d7e3ff] shadow-sm px-4 py-3 text-center"
                  >
                    <span
                      className={
                        "inline-flex items-center justify-center text-[10px] px-3 py-1 rounded-full font-semibold mb-2 " +
                        (REGION_BADGE_STYLES[item.region] ||
                          REGION_BADGE_STYLES.default)
                      }
                    >
                      {item.region}
                    </span>
                    <p className="text-[11px] font-medium text-slate-700">
                      {item.label}
                    </p>
                  </div>
                );
              }

              // Logo + company name card
              return (
                <div
                  key={`logo-${idx}`}
                  className="flex flex-col items-center text-center min-w-[140px]"
                >
                  <div className="flex items-center justify-center h-16 md:h-16 w-28 md:w-32 rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-2">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="max-h-10 md:max-h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>
                  {/* Company name below logo */}
                  <p className="mt-2 text-[11px] text-slate-600 font-medium max-w-[120px] truncate">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FB] to-transparent" />
        </div>
      </div>
    </section>
  );
}
