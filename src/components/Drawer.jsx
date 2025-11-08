function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-medium">{value || "—"}</div>
    </div>
  );
}

export default function Drawer({ open, onClose, item }) {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
          <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>
        <div className="p-6">
          <p className="text-slate-700">{item.desc}</p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Info label="2G Product Code" value={item.code2G} />
            <Info label="4G Product Code" value={item.code4G} />
            <Info label="HSN Code" value={item.hsn} />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Request a Demo
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
