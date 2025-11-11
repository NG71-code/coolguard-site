import { lazy, Suspense } from 'react';
import Header from "@/components/Header";

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
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}