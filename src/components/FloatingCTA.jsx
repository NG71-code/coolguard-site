// src/components/FloatingCTA.jsx
import React, { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [dismissed, setDismissed] = useState(false);
  const [showByScroll, setShowByScroll] = useState(false);

  // Show only after user has scrolled 30% of the page
  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const fullHeight = doc.scrollHeight || 0;

      const maxScrollable = Math.max(fullHeight - viewportHeight, 1);
      const ratio = scrollTop / maxScrollable;

      setShowByScroll(ratio >= 0.3); // 30%
    }

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setDismissed(true);   // only for this visit
  };

  // If user closed it OR hasn't scrolled enough, don't render
  if (dismissed || !showByScroll) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 md:bottom-6 z-40 flex justify-center px-3 pointer-events-none">
      <div className="pointer-events-auto max-w-4xl w-full rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-slate-700/70 px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4">
        {/* Text */}
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
            COOLGUARD · COLD CHAIN MONITORING
          </p>
          <p className="text-xs md:text-sm font-medium text-sky-50">
            Talk to us about a consultation or pilot deployment for your cold rooms,
            freezers, or warehouses.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="/contact?type=consultation"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-100 transition"
          >
            Consultation
          </a>
          <a
            href="/contact?type=pilot"
            className="inline-flex items-center justify-center rounded-lg border border-sky-300/80 px-3 py-1.5 text-xs font-medium text-sky-100 hover:bg-sky-700/40 transition"
          >
            Pilot
          </a>

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
