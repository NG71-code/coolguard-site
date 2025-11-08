export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-slate-700/90 border-slate-300 bg-white/70">
      {children}
    </span>
  );
}
