import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("coolguard_cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("coolguard_cookie_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-3xl rounded-xl border bg-white shadow-lg p-4 flex flex-col md:flex-row items-center gap-4">
      <p className="text-xs text-slate-700">
        We use cookies to enhance user experience, analyze traffic and support marketing.
        By continuing, you agree to our Cookie Policy.
      </p>
      <button
        onClick={accept}
        className="rounded-full bg-[#007BFF] px-4 py-1.5 text-xs font-semibold text-white"
      >
        Accept
      </button>
    </div>
  );
}
