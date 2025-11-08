import { LOGO_SRC } from "../data/catalog";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <img src={LOGO_SRC} alt="CoolGuard logo" className="h-10 w-auto mb-4" />
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Sensors to Cloud. Zero disruption. Maximum intelligence.
          </h1>
          <p className="mt-3 max-w-xl text-slate-600">
            Showcase of CoolGuard product families and models for cold-chain, pharma compliance, and energy-aware operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Explore Products</a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">Download Brochure</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-slate-200 to-white blur-2xl"></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="text-sm font-medium text-slate-700">Platform Snapshot</div>
              <div className="mt-3 grid grid-cols-4 items-center gap-3 text-center text-xs text-slate-600">
                <div className="rounded-lg bg-slate-50 p-3">Nodes</div>
                <div>→</div>
                <div className="rounded-lg bg-slate-50 p-3">Gateways</div>
                <div>→ Cloud → Alerts / Analytics</div>
              </div>
              <div className="mt-3 text-[11px] text-slate-500">Monitor +60°C to −40°C across rooms, freezers, vehicles, and plants.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
