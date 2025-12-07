// src/components/FloatingCTA.jsx
import React, { useEffect, useState } from "react";

export default function FloatingCTA({ forceOpen = false }) {
  const [dismissed, setDismissed] = useState(false);
  const [showByScroll, setShowByScroll] = useState(false);

  // Simple form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Show only after user has scrolled 30% of the page
  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const fullHeight = doc.scrollHeight || 0;

      const maxScrollable = Math.max(fullHeight - viewportHeight, 1);
      const ratio = scrollTop / maxScrollable;

      const shouldShow = ratio >= 0.3;

      setShowByScroll(shouldShow);

      // If user scrolls again past threshold, allow CTA to reappear
      if (shouldShow) {
        setDismissed(false);
      }
    }

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔵 When forceOpen becomes true (from "Contact Us" click),
  // make sure the CTA is visible even if scroll threshold not met
  useEffect(() => {
    if (forceOpen) {
      setDismissed(false);
      setShowByScroll(true);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setDismissed(true); // hide it for now

    // RESET FORM STATE so it can appear fresh again
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("source", "floating_cta");

      const res = await fetch("/api/contact.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.text();

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Server error:", data);
      }
    } catch (err) {
      console.error("Floating CTA submit failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  // 🔵 Visibility logic:
  // - Always respect "dismissed" (if user closes, hide)
  // - Skip scroll check when forceOpen=true
  if (dismissed) return null;
  if (!showByScroll && !forceOpen) return null;

  return (
    <div
      id="floating-cta"  // 🔵 anchor we scroll to
      className="fixed inset-x-0 bottom-4 md:bottom-6 z-40 flex justify-center px-3 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-4xl w-full rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-slate-700/70 px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4">
        {/* Left text */}
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
            COOLGUARD · COLD CHAIN MONITORING
          </p>

          {submitted ? (
            <p className="text-xs md:text-sm font-medium text-emerald-200 mt-1">
              Thank you — we’ve received your details. Our team will contact you.
            </p>
          ) : (
            <>
              <p className="text-xs md:text-sm font-medium text-sky-50 mt-1 mb-2">
                Share your details and we’ll reach out with a consultation or pilot
                option for your cold rooms, freezers, or warehouses.
              </p>

              {/* Form inline, keeps overall size similar */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-2 md:gap-2"
              >
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full md:w-40 rounded-lg border border-slate-600 bg-slate-900/40 px-2 py-1.5 text-[11px] md:text-xs text-sky-50 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-44 rounded-lg border border-slate-600 bg-slate-900/40 px-2 py-1.5 text-[11px] md:text-xs text-sky-50 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full md:w-32 rounded-lg border border-slate-600 bg-slate-900/40 px-2 py-1.5 text-[11px] md:text-xs text-sky-50 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="md:w-24 inline-flex items-center justify-center rounded-lg bg-white px-3 py-1.5 text-[11px] md:text-xs font-medium text-slate-900 hover:bg-slate-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs flex-shrink-0"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
