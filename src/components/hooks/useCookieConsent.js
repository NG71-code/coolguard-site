export function useCookieConsent() {
  const raw = localStorage.getItem("coolguard_cookie_prefs");
  return raw ? JSON.parse(raw) : null;
}
