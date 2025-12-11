import { useEffect, useState } from "react";

const DEFAULT_CONSENT = {
  essential: true,     // always true (cannot be disabled)
  analytics: false,
  marketing: false,
};

export default function CookieConsentManager() {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    const saved = localStorage.getItem("coolguard_cookie_prefs");
    if (!saved) {
      setVisible(true);
    } else {
      setPrefs(JSON.parse(saved));
    }
  }, []);

  const savePrefs = (newPrefs) => {
    localStorage.setItem("coolguard_cookie_prefs", JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    setVisible(false);
    applyIntegrations(newPrefs);
  };

  const acceptAll = () =>
    savePrefs({ essential: true, analytics: true, marketing: true });

  const rejectAll = () =>
    savePrefs({ essential: true, analytics: false, marketing: false });

  function applyIntegrations(consent) {
    // ✅ Google Analytics
    if (consent.analytics && window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }

    // ✅ Meta Pixel
    if (consent.marketing && window.fbq) {
      window.fbq("consent", "grant");
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[99999] rounded-2xl border border-slate-700 bg-slate-950 text-white shadow-2xl p-6">
      <h3 className="text-sm font-semibold mb-2">
        Privacy & Cookie Preferences
      </h3>

      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
        We use cookies to ensure security, improve performance and personalize
        marketing. Manage your preferences below.
      </p>

      {/* TOGGLES */}
      <div className="space-y-3 mb-5 text-xs">

        <label className="flex items-center justify-between">
          <span>Essential Cookies (Required)</span>
          <input type="checkbox" checked disabled />
        </label>

        <label className="flex items-center justify-between">
          <span>Analytics Cookies</span>
          <input
            type="checkbox"
            checked={prefs.analytics}
            onChange={(e) =>
              setPrefs({ ...prefs, analytics: e.target.checked })
            }
          />
        </label>

        <label className="flex items-center justify-between">
          <span>Marketing Cookies</span>
          <input
            type="checkbox"
            checked={prefs.marketing}
            onChange={(e) =>
              setPrefs({ ...prefs, marketing: e.target.checked })
            }
          />
        </label>

      </div>

      {/* ACTIONS */}
      <div className="flex gap-2 justify-end">
        <button
          onClick={rejectAll}
          className="px-4 py-2 text-xs rounded-lg border border-slate-600 hover:bg-slate-800"
        >
          Reject All
        </button>
        <button
          onClick={acceptAll}
          className="px-4 py-2 text-xs rounded-lg bg-[#007BFF] hover:opacity-90"
        >
          Accept All
        </button>
        <button
          onClick={() => savePrefs(prefs)}
          className="px-4 py-2 text-xs rounded-lg bg-emerald-500 text-slate-900 hover:opacity-90"
        >
          Save
        </button>
      </div>

      {/* POLICY LINKS */}
      <div className="mt-4 flex gap-4 text-[11px] text-slate-400">
        <a href="/privacy-policy" target="_blank">Privacy</a>
        <a href="/cookie-policy" target="_blank">Cookies</a>
        <a href="/terms" target="_blank">Terms</a>
      </div>
    </div>
  );
}
