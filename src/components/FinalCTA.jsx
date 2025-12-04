// src/components/FinalCTA.jsx
import React from "react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-[#007BFF] via-sky-500 to-cyan-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="rounded-3xl bg-white/5 border border-white/20 px-6 py-8 md:px-10 md:py-10 shadow-lg backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr] md:items-center">
            {/* Copy */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan-100 uppercase">
                Next step
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                Ready to modernize your cold chain monitoring?
              </h2>
              <p className="mt-3 text-sm md:text-base text-cyan-50/90 max-w-2xl">
                Discuss your sites, assets, and compliance requirements with our team.
                We can help you scope a phased rollout or a focused pilot deployment
                across selected cold rooms, freezers, or warehouses.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <a
                href="/contact?type=consultation"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-[#007BFF] shadow-sm hover:bg-slate-50 transition"
              >
                Book a consultation
              </a>
              <a
                href="/contact?type=pilot"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Request a pilot deployment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
