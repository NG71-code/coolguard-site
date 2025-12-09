// src/components/CustomerLogoStrip.jsx
import React, { useState } from "react";

const LOGO_GROUPS = {
  india: {
    label: "Indian Customers",
    logos: [
      { src: "/logos/itc.png", label: "ITC" },
      { src: "/logos/glenmark.png", label: "Glenmark" },
      { src: "/logos/tci.png", label: "TCI Cold Chain" },
      { src: "/logos/jwl.png", label: "JWL Cold Store" },
      { src: "/logos/Swiggy.png", label: "Swiggy" },
      { src: "/logos/Sneha.png", label: "Sneha Farms" },

      // add more India logos here
    ],
  },
  middleEast: {
    label: "Middle East Customers",
    logos: [
      { src: "/logos/Gulfprocessing.png", label: "Gulf Processing" },
      { src: "/logos/omanfisheries.png", label: "Oman Fisheries" },
      { src: "/logos/qatarmeat.png", label: "Qatar Meat" },
      { src: "/logos/khalidscientific.png", label: "Khalid Scientific" },
      // add more Middle East logos here
    ],
  },
  africa: {
    label: "African Customers",
    logos: [
      { src: "/logos/Haano", label: "Haano" },
      { src: "/logos/ghana-agri.png", label: "Ghana Agri" },
      // add more Africa logos here
    ],
  },
};

export default function CustomerLogoStrip() {
  const [activeRegion, setActiveRegion] = useState("india");
  const currentGroup = LOGO_GROUPS[activeRegion];

  return (
    <section className="bg-[#F4F7FB] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h2 className="text-[11px] md:text-[13px] font-semibold tracking-[0.25em] text-center text-[#4A7CFF] mb-3">
          TRUSTED BY LEADING FOOD, PHARMA &amp; COLD CHAIN OPERATORS
        </h2>

        {/* Region selector */}
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {Object.entries(LOGO_GROUPS).map(([key, group]) => {
            const isActive = key === activeRegion;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveRegion(key)}
                className={
                  "px-3 py-1.5 rounded-full text-xs font-medium border transition " +
                  (isActive
                    ? "bg-[#0055cc] text-white border-[#0055cc]"
                    : "bg-white text-slate-700 border-[#d0ddff] hover:bg-[#eef3ff]")
                }
              >
                {group.label}
              </button>
            );
          })}
        </div>

        {/* Subheading for current region */}
        <p className="text-center text-xs text-slate-600 mb-4">
          Showing: <span className="font-semibold">{currentGroup.label}</span>
        </p>

        {/* Horizontal scrollable logo band */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {currentGroup.logos.map((logo) => (
              <div
                key={logo.label}
                className="flex flex-col items-center justify-center h-24 w-40 md:h-28 md:w-48 rounded-2xl bg-white border border-[#e0e7ff] shadow-sm flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="max-h-12 md:max-h-16 w-auto object-contain opacity-90 hover:opacity-100 transition"
                />
                <p className="mt-1 text-[11px] text-slate-600 font-medium text-center">
                  {logo.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
