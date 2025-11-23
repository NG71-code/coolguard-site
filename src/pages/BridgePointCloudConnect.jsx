// src/pages/BridgePointCloudConnect.jsx
import React from "react";

export default function BridgePointCloudConnect() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="relative border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              BridgePoint CloudConnect — BCC-100 Series
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-3xl">
              The BCC-100 Series is a modular IoT gateway system that interfaces with
              cold room controllers using RS-485/Modbus and sends real-time data to
              the CoolGuard Cloud for monitoring, reporting, analytics, and alerts.
            </p>
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Models Offered</h2>
        <p className="text-gray-600 mt-2">
          Three scalable gateway editions to match facility sizes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="text-xl font-medium text-[#003b8f]">BCC-101-4</h3>
            <p className="text-sm text-gray-500 mb-2">Zone Edition</p>
            <p className="text-gray-700">
              Compact gateway supporting up to 4 controllers. Ideal for single-zone
              setups and pilot implementations.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="text-xl font-medium text-[#003b8f]">BCC-101-8</h3>
            <p className="text-sm text-gray-500 mb-2">Facility Edition</p>
            <p className="text-gray-700">
              Mid-tier gateway supporting up to 8 controllers. Ideal for
              multi-chamber cold room facilities.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="text-xl font-medium text-[#003b8f]">BCC-101-16</h3>
            <p className="text-sm text-gray-500 mb-2">Enterprise Edition</p>
            <p className="text-gray-700">
              Enterprise-grade gateway supporting up to 16 controllers for
              high-density cold chain sites.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">
          Architecture Overview
        </h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">
              Controller Interface
            </h3>
            <p className="text-gray-700">
              Supports Modbus RTU / RS-485 communication with industry standard cold
              room controllers.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Data Gateway</h3>
            <p className="text-gray-700">
              Reads data at configured intervals and securely transmits to cloud
              using GSM connectivity.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#cfe0ff] p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-2">Cloud Platform</h3>
            <p className="text-gray-700">
              Dashboards, graphs, alerts, reports, mobile access, and analytics via
              the CoolGuard Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Key Features</h2>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Plug-and-play RS-485 integration with compatible controllers.
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Scalable models – 4, 8, and 16 controller channels.
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Adjustable data intervals (default 10 minutes, optional 1 minute).
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Remote temperature setpoint control (subject to controller compatibility).
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Email and SMS alerts for temperature excursions and alarms.
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Optional API access for SAP / ERP integrations.
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Can interface with energy meters for combined temperature and energy data.
          </li>
          <li className="rounded-xl bg-white p-4 border border-gray-200 text-gray-800">
            Mobile-friendly dashboard with push notifications.
          </li>
        </ul>
      </section>

      {/* NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl bg-[#eef5ff] border border-[#cfe0ff] p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Data Compatibility Notice
          </h2>
          <p className="text-gray-700">
            BridgePoint CloudConnect captures only the data points that are
            supported and available on the connected controller. Custom or
            proprietary registers will not be processed unless implemented through
            a dedicated integration.
          </p>
        </div>
      </section>
    </main>
  );
}
