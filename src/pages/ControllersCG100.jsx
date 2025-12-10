// // src/pages/ControllersCG100.jsx
import React from "react";

export default function ControllersCG100() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* SIMPLE COMING SOON PAGE */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[#e6f2ff] via-white to-[#f3f7ff]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm px-8 py-10 md:px-12 md:py-14 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0055cc] mb-3">
              CG-100 Series Controllers
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Detailed CG-100 controller page coming soon
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-8">
              We’re preparing a full breakdown of CG-100 Single and Dual
              compressor controllers, including model-wise specs, wiring
              diagrams, and cloud integration details. This page will be live
              shortly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/#products"
                className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0044aa] transition-colors"
              >
                Back to Products
              </a>
              {/* <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-5 py-2.5 text-sm font-medium text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
              >
                Talk to CoolGuard Team
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
