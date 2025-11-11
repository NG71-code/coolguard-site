// src/App.jsx
import React, { lazy, Suspense } from "react";

// If you don't have the '@' alias configured in vite.config.js,
// change this to:  import Header from "./components/Header.jsx";
import Header from "@/components/Header";

// IMPORTANT: keep the .jsx extension so Vite resolves correctly
const Home = lazy(() => import("./pages/Home.jsx"));

export default function App() {
  return (
    <>
      <Header
        LOGO_SRC="/coolguard-logo.svg"
        LOGO_DARK_SRC="/coolguard-logo-dark.svg"
        version="v1.3.2"
        versionHref="/changelog"
        disableLinks={false}
        forceDesktop={false}
      />
      {/* Any lazy component MUST be wrapped in Suspense */}
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Home />
      </Suspense>
    </>
  );
}
