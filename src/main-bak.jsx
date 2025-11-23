// src/main.jsx
/* eslint-disable no-console */
console.log("[BOOT] main.jsx loaded"); // should appear on live site

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Global error hooks (help surface silent crashes in production)
if (typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    console.error("[GLOBAL ERROR]", e.error || e.message || e);
  });
  window.addEventListener("unhandledrejection", (e) => {
    console.error("[UNHANDLED REJECTION]", e.reason || e);
  });
}

// Mount
const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("❌ #root not found in index.html");
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
