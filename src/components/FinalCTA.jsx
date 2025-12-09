// src/components/FloatingCTA.jsx
import React, { useEffect, useState } from "react";

export default function FloatingCTA({ forceOpen = false }) {
  const [dismissed, setDismissed] = useState(false);
  const [showByScroll, setShowByScroll] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Scroll activation (30%)
  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const fullHeight = doc.scrollHeight || 0;

      const maxScrollable = Math.max(fullHeight - viewportHeight, 1);
      const ratio = scrollTop / maxScrollable;

      if (ratio >= 0.3) {
        setShowByScroll(true);
        setDismissed(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ External open trigger
  useEffect(() => {
    if (forceOpen) {
      setDismissed(false);
      setShowByScroll(true);
    }
  }, [forceOpen]);

  // ✅ Proper close
  const handleClose = () => {
    setDismissed(true);
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  // ✅ Submit handler (WITH SUCCESS STATE)
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

      if (res.ok) {
        setSubmitted(true);

        // ✅ AUTO-CLOSE AFTER 4 SECONDS
        setTimeout(() => {
          handleClose();
        }, 4000);
      }
    } catch (err) {
      console.error("CTA submit failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Visibility rules
  if (dismissed) return null;
  if (!showByScroll && !forceOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-3">
      <div className="max-w-4xl w-full rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-slate-700/70 px-5 py-4 flex items-center gap-4">

        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
            COOLGUARD · COLD CHAIN MONITORING
          </p>

          {submitted ? (
            <p className="text-sm font-medium text-emerald-300 mt-2">
              ✅ Thank you — our team will contact you shortly.
            </p>
          ) : (
            <>
              <p className="text-sm font-medium text-sky-50 mt-1 mb-2">
                Get a consultation or pilot for your cold rooms & freezers.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="md:w-40 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="md:w-44 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="md:w-32 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1.5 text-xs"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="md:w-28 rounded-lg bg-white text-slate-900 text-xs font-medium py-1.5"
                >
                  {submitting ? "Sending…" : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>

        <button
          onClick={handleClose}
          className="h-7 w-7 rounded-full hover:bg-slate-800 text-slate-300 text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
