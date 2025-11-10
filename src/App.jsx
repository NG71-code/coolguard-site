import { lazy } from 'react';
// src/App.jsx
import Header from "@/components/Header"; // or "../components/Header" based on your setup

// IMPORTANT: include the .jsx extension so the dynamic import resolves
const Home = lazy(() => import("./pages/Home.jsx"));

export default function App() {
  return (
    <>
      <Header
        LOGO_SRC="/coolguard-logo.svg"
        LOGO_DARK_SRC="/coolguard-logo-dark.svg"
        version="v1.3.2"
        versionHref="/changelog"
        disableLinks={false}   // enable real navigation outside preview
        forceDesktop={false}   // keep responsive behavior in production
      />
      {/* rest of the app (Hero, sections, routes, etc.) */}
    </>
  );
}
