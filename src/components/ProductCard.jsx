import Pill from "./Pill";

export default function ProductCard({ item, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex h-full w-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
    >
      <div>
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950">{item.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.tags?.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
        <div className="rounded-lg bg-slate-50 p-2">
          <div className="font-semibold text-slate-700">2G Code</div>
          <div className="truncate" title={item.code2G || "—"}>{item.code2G || "—"}</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <div className="font-semibold text-slate-700">4G Code</div>
          <div className="truncate" title={item.code4G || "—"}>{item.code4G || "—"}</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-2">
          <div className="font-semibold text-slate-700">HSN</div>
          <div className="truncate" title={item.hsn || "—"}>{item.hsn || "—"}</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-slate-200" />
    </button>
  );
}
