export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
            {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            Talk to Sales
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}
