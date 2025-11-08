// src/App.jsx
import { lazy, Suspense } from "react";

// IMPORTANT: include the .jsx extension so the dynamic import resolves
const Home = lazy(() => import("./pages/Home.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <Home />
    </Suspense>
  );
}
