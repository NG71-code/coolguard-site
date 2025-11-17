// src/App.jsx
import React from "react";

import Header from "@/components/Header";
import Home from "./pages/Home.jsx";
import CloudLoggersPage from "./pages/CloudLoggersPage.jsx";
import Frigo101AA from "./pages/Frigo101AA.jsx";

export default function App() {
  const path = window.location.pathname || "/";

  let PageComponent = Home;

  if (path === "/cloud-loggers") {
    PageComponent = CloudLoggersPage;
  } else if (path === "/products/frigo-101-aa") {
    PageComponent = Frigo101AA;
  }

  return (
    <>
      <Header />
      <PageComponent />
    </>
  );
}
