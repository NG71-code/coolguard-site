// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "@/components/Header";

import Home from "./pages/Home.jsx";
import CloudLoggersPage from "./pages/CloudLoggersPage.jsx";
import Frigo101AA from "./pages/Frigo101AA.jsx";
import Frigo101BB from "./pages/Frigo101BB.jsx";
import Kryo101AA from "./pages/Kryo101AA.jsx";
import Kryo101BB from "./pages/Kryo101BB.jsx";
import BridgePointCloudConnect from "./pages/BridgePointCloudConnect.jsx";
import SensorsPage from "./pages/Sensors.jsx";
import ServicesPage from "./pages/Services.jsx";
import ControllersCG100 from "./pages/ControllersCG100.jsx";
import NodesGateways from "./pages/NodesGateways.jsx";
import CloudPlatform from "./pages/CloudPlatform";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import BCC100 from "./pages/BCC100.jsx";



function AppInner() {
  const location = useLocation();

  // Optional: keep this for a while while testing
  console.log("PATH:", location.pathname);

  return (
    <>
      <Header />

      {/* Optional debug bar - remove later if you want */}
      {/* <div className="bg-black text-green-400 text-xs px-3 py-1">
        PATH DEBUG: {location.pathname}
      </div> */}

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Group pages */}
        <Route path="/cloud-loggers" element={<CloudLoggersPage />} />
        <Route path="/sensors" element={<SensorsPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* Frigo product pages */}
        <Route path="/products/frigo-101-aa" element={<Frigo101AA />} />
        <Route path="/products/frigo-101-bb" element={<Frigo101BB />} />

        {/* Kryo product pages */}
        <Route path="/products/kryo-101-aa" element={<Kryo101AA />} />
        <Route path="/products/kryo-101-bb" element={<Kryo101BB />} />

        {/* BridgePoint */}
        <Route
          path="/products/bridgepoint-cloudconnect"
          element={<BridgePointCloudConnect />}
        />
<Route path="/controllers/cg-100-series" element={<ControllersCG100 />} />
<Route path="/nodes-gateways" element={<NodesGateways />} />
<Route path="/cloud-platform" element={<CloudPlatform />} />
<Route path="/about-us" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/products/bcc-100" element={<BCC100 />} />


        {/* Fallback → Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return <AppInner />;
}
