// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import FloatingCTA from "@/components/FloatingCTA.jsx";

// Pages
import Home from "./pages/Home.jsx";
import CloudLoggersPage from "./pages/CloudLoggersPage.jsx";
import Frigo101AA from "./pages/Frigo101AA.jsx";
import Frigo101BB from "./pages/Frigo101BB.jsx";
import Kryo101AA from "./pages/Kryo101AA.jsx";
import Kryo101BB from "./pages/Kryo101BB.jsx";
import BridgePointCloudConnect from "./pages/BridgePointCloudConnect.jsx";
import ServicesPage from "./pages/Services.jsx";
import ControllersCG100 from "./pages/ControllersCG100.jsx";
import NodesGateways from "./pages/NodesGateways.jsx";
import CloudPlatform from "./pages/CloudPlatform.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import BCC100 from "./pages/BCC100.jsx";
import SensorsPage from "./pages/SensorsPage.jsx";

function AppInner() {
  const location = useLocation();
  console.log("PATH:", location.pathname);

  return (
    <>
      {/* Header stays at the top */}
      <Header />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Group Pages */}
        <Route path="/cloud-loggers" element={<CloudLoggersPage />} />
        <Route path="/sensors" element={<SensorsPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Frigo Products */}
        <Route path="/products/frigo-101-aa" element={<Frigo101AA />} />
        <Route path="/products/frigo-101-bb" element={<Frigo101BB />} />

        {/* Kryo Products */}
        <Route path="/products/kryo-101-aa" element={<Kryo101AA />} />
        <Route path="/products/kryo-101-bb" element={<Kryo101BB />} />

        {/* BridgePoint */}
        <Route
          path="/products/bridgepoint-cloudconnect"
          element={<BridgePointCloudConnect />}
        />

        {/* Controllers, Nodes, Cloud Platform */}
        <Route path="/controllers/cg-100-series" element={<ControllersCG100 />} />
        <Route path="/nodes-gateways" element={<NodesGateways />} />
        <Route path="/cloud-platform" element={<CloudPlatform />} />

        {/* About & Contact */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Other Devices */}
        <Route path="/products/bcc-100" element={<BCC100 />} />

        {/* Default */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Floating CTA on all pages */}
      <FloatingCTA />

      {/* Footer on all pages */}
      <Footer />
    </>
  );
}

export default function App() {
  return <AppInner />;
}
