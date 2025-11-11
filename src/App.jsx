// src/App.jsx
import React from "react";

// If you don’t have the '@' alias, change to: "./components/Header.jsx"
import Header from "@/components/Header";
// Direct (eager) import instead of React.lazy
import Home from "./pages/Home.jsx";

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
      <Home />
    </>
  );
}
