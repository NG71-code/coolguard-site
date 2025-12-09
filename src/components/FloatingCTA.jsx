// src/components/FloatingCTA.jsx
import React, { useEffect, useState } from "react";

export default function FloatingCTA({ forceOpen = false }) {
  const [dismissed, setDismissed] = useState(false);
  const [showByScroll, setShowByScroll] = useState(false);
  const [openFromButton, setOpenFromButton] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [prefill, setPrefill] = useState(null);

  // Decide where to post:
  // - On localhost: hit the live PHP on coolguard.tech
  // - On production: use relative path (/api/contact.php)
  const API_BASE =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "https://coolguard.tech"
      : "";

  /* ---------------- Scroll trigger (30%) ---------------- */
  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const viewportHeight = window.innerHeight || doc.clientHeight || 0;
      const fullHeight = doc.scrollHeight || 0;
      const maxScrollable = Math.max(fullHeight - viewportHeight, 1);
      const ratio = scrollTop / maxScrollable;

      if (ratio >= 0.3 && !submitted) {
        setShowByScroll(true);
        if (!openFromButton) setDismissed(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openFromButton, submitted]);

  /* ---------------- Listen to RequestDemoButton ---------------- */
  useEffect(() => {
    const handler = (event) => {
      const detail = event?.detail || null;
      console.log("FloatingCTA: open-floating-cta received", detail);

      setPrefill(detail);
      setDismissed(false);
      setSubmitted(false);
      setErrorMsg("");
      setName("");
      setEmail("");
      setPhone("");
      setOpenFromButton(true);
    };

    window.addEventListener("open-floating-cta", handler);
    return () => window.removeEventListener("open-floating-cta", handler);
  }, []);

  /* ---------------- Optional forceOpen prop ---------------- */
  useEffect(() => {
    if (forceOpen) {
      setDismissed(false);
      setSubmitted(false);
      setErrorMsg("");
      setOpenFromButton(true);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setDismissed(true);
    setOpenFromButton(false);
  };

  /* ---------------- Auto-hide after success ---------------- */
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      setDismissed(true);
      setOpenFromButton(false);
    }, 6000);
    return () => clearTimeout(t);
  }, [submitted]);

  /* ---------------- Submit handler (JSON POST) ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FloatingCTA: submit clicked");

    if (!name || !email || !phone) return;

    try {
      setSubmitting(true);
      setErrorMsg("");

      const source =
        prefill?.source ||
        (prefill?.productCode
          ? `demo-${prefill.productCode.toLowerCase().replace(/\s+/g, "-")}`
          : "floating_cta");

      const payload = {
        name,
        email,
        phone,
        source,
        product_code: prefill?.productCode || "",
        product_name: prefill?.productName || "",
      };

      console.log(
        "FloatingCTA: posting JSON to",
        `${API_BASE}/api/contact.php`,
        payload
      );

      const res = await fetch(`${API_BASE}/api/contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      console.log("FloatingCTA: server response", res.status, text);

      let data = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        // text is not valid JSON, leave data = null
      }

      if (res.ok && data && data.success) {
        // ✅ Success from PHP
        setSubmitted(true);
        setErrorMsg("");
      } else {
        // ❌ Some error / validation failure from PHP
        const msgFromServer =
          (data && data.message) ||
          (text && text.trim()) ||
          `HTTP ${res.status} error`;

        setErrorMsg(`Server responded: ${msgFromServer}`);
      }
    } catch (err) {
      console.error("FloatingCTA: submit failed", err);
      setErrorMsg("Network error while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- Visibility ---------------- */
  const shouldShow =
    !dismissed && (openFromButton || showByScroll || forceOpen);

  if (!shouldShow) return null;

  return (
    <div
      id="floating-cta"
      className="fixed bottom-4 left-0 right-0 z-[9999] flex justify-center px-3"
    >
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-slate-700 px-4 py-3 md:px-6 md:py-4 flex items-start gap-3 md:gap-4">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300">
            COOLGUARD · COLD CHAIN MONITORING
          </p>

          {prefill?.productName || prefill?.productCode ? (
            <p className="text-[11px] md:text-xs font-medium text-sky-100 mt-1 mb-1">
              You’re requesting a demo for{" "}
              <span className="font-semibold">
                {prefill.productName || prefill.productCode}
              </span>
              .
            </p>
          ) : null}

          {submitted ? (
            <p className="text-xs md:text-sm font-medium text-emerald-200 mt-1">
              ✅ Thank you — we’ve received your details. Our team will contact
              you shortly.
            </p>
          ) : (
            <>
              <p className="text-xs md:text-sm font-medium text-sky-50 mt-1 mb-2">
                Share your details and we’ll reach out with a consultation or
                pilot option for your cold rooms, freezers, or warehouses.
              </p>

              {errorMsg && (
                <p className="text-[11px] text-rose-300 mb-1">{errorMsg}</p>
              )}

              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-2"
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

        <button
          type="button"
          onClick={handleClose}
          className="mt-1 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs flex-shrink-0"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
