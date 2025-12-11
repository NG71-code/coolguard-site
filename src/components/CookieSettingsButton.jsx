import { useState } from "react";
import CookieConsentManager from "./CookieConsentManager";

export default function CookieSettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[99998] rounded-full bg-slate-900 text-white border border-slate-700 px-4 py-2 text-xs hover:bg-slate-800"
      >
        Cookie Settings
      </button>

      {open && <CookieConsentManager />}
    </>
  );
}
