// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-center rounded-3xl bg-white border border-[#cfe0ff] shadow-sm px-6 sm:px-10 py-8">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
                🧊 CoolGuard — Intelligence for the Cold Chain
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Precision, accountability, and uninterrupted visibility for your cold storage.
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                Cold storage environments demand precision, accountability, and continuous oversight.
                CoolGuard ensures compliance, reduces operational risk, and protects product integrity
                through continuous monitoring and automated control — across every facility, asset, and region.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Whether you manage five cold rooms or five hundred, CoolGuard brings all
                temperature-controlled infrastructure into one secure, unified monitoring platform.
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0044aa] transition-colors"
                >
                  Request a Product Demonstration
                </button>
                <button
                  onClick={() => navigate("/cloud-platform")}
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe0ff] bg-white px-6 py-2.5 text-sm font-semibold text-[#003b8f] hover:bg-[#f3f6ff] transition-colors"
                >
                  Explore the Cloud Platform
                </button>
              </div>

              <div className="flex flex-wrap gap-3 text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f0ff] px-3 py-1 font-medium text-[#003b8f]">
                  Multi-site visibility
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f0ff] px-3 py-1 font-medium text-[#003b8f]">
                  Enterprise-grade monitoring
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f0ff] px-3 py-1 font-medium text-[#003b8f]">
                  Web & mobile access
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full max-w-md mx-auto lg:max-w-lg">
              <div className="aspect-[16/11] rounded-3xl bg-[#0f172a] border border-[#1d2840] overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.45)]">
                <img
                  src="/images/home/hero-dashboard.png"
                  alt="CoolGuard enterprise dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-[10px] text-slate-500 text-center">
                Illustration: Replace with an actual CoolGuard dashboard screenshot showing multi-site visibility and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / QUICK STATS STRIP */}
      <section className="mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#003b8f] text-[#e0ebff] px-6 py-4 grid gap-4 sm:grid-cols-4 text-center">
            <div>
              <div className="text-lg font-semibold text-white">24x7</div>
              <div className="text-[11px]">Continuous monitoring & alerts</div>
            </div>
            <div className="border-t border-[#335caa] sm:border-t-0 sm:border-l sm:border-r border-[#335caa] py-2 sm:py-0">
              <div className="text-lg font-semibold text-white">Multi-Site</div>
              <div className="text-[11px]">Unified view across facilities</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Audit-Ready</div>
              <div className="text-[11px]">Secure, timestamped records</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Scalable</div>
              <div className="text-[11px]">From 5 to 500+ cold rooms</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT COOLGUARD DELIVERS */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                🎯 What CoolGuard Delivers
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Enterprise outcomes for operations, quality, and compliance teams.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Operational Continuity */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Operational Continuity
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Real-time alerts, historical insights, and automated escalation workflows
                ensure deviations are addressed before they become losses.
              </p>
            </article>

            {/* Product Integrity */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Product Integrity
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Consistent environmental control helps maintain safety, shelf life, and quality —
                especially for regulated and temperature-sensitive products.
              </p>
            </article>

            {/* Compliance & Audit Efficiency */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Compliance &amp; Audit Efficiency
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Reports are automatically generated, timestamped, and securely archived —
                aligned with industry best practices and regulatory frameworks.
              </p>
            </article>

            {/* Multi-Site Visibility */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Multi-Site Visibility
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Monitor all distributed sites centrally. Benchmark performance, track trends,
                and deploy resources based on real operational data.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                🧩 Technology Ecosystem
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                CoolGuard isn’t just a device — it’s a scalable platform built for industrial reliability.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {/* Cloud Loggers */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Cloud Loggers
              </h3>
              <p className="text-xs text-slate-600">
                Plug-and-play monitoring for temperature and humidity across cold rooms,
                freezers, and storage areas.
              </p>
            </article>

            {/* Gateways & Nodes */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Gateways &amp; Nodes
              </h3>
              <p className="text-xs text-slate-600">
                Secure wireless infrastructure enabling scalable site deployments and
                reliable data transfer to the cloud.
              </p>
            </article>

            {/* Controllers */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Controllers
              </h3>
              <p className="text-xs text-slate-600">
                Intelligent refrigeration automation for optimized performance and
                stable product conditions.
              </p>
            </article>

            {/* Sensors & Accessories */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Sensors &amp; Accessories
              </h3>
              <p className="text-xs text-slate-600">
                Precision sensing for temperature, humidity, gas (CO₂, NH₃), door, and
                equipment status — tailored to your application.
              </p>
            </article>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Everything integrates seamlessly — from hardware in the field to cloud reporting and mobile oversight.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            🏭 Who We Serve
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            CoolGuard enables compliance, consistency, and accountability across:
          </p>

          <div className="grid gap-3 md:grid-cols-2 text-sm text-slate-700">
            <div>• Pharmaceutical and Clinical Storage</div>
            <div>• Dairy, Ice-Cream, and Food Manufacturing</div>
            <div>• Meat, Seafood &amp; Protein Cold Chain</div>
            <div>• Fresh Produce and Packhouses</div>
            <div>• Distribution &amp; Logistics Networks</div>
            <div>• Warehousing and Multi-facility Operations</div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            📈 Business Impact
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Reduce Spoilage &amp; Product Loss
              </h3>
              <p className="text-xs text-slate-600">
                Proactive alerts and trend analytics prevent temperature drift and equipment failures
                before they impact stock.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Improve Workforce Efficiency
              </h3>
              <p className="text-xs text-slate-600">
                Replace paper logs and manual reporting with automated, digital visibility for operations
                and quality teams.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Strengthen Regulatory Readiness
              </h3>
              <p className="text-xs text-slate-600">
                A complete audit trail — accurate, centralized, and instantly accessible for inspections
                and certifications.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Enable Data-Driven Decision Making
              </h3>
              <p className="text-xs text-slate-600">
                Identify operational bottlenecks, maintenance patterns, and cost optimization opportunities
                using real data.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CUSTOMER INSIGHT */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-6 md:p-8">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">
              💬 Customer Insight
            </h2>
            <p className="text-sm text-slate-700 italic mb-2">
              “CoolGuard helped us standardize monitoring across our national storage footprint.
              Our teams no longer chase data — they act on it.”
            </p>
            <p className="text-xs text-slate-500">
              — Head of Supply Chain, Enterprise FMCG Client
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA / NEXT STEPS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-1">
                🚀 Start With Confidence
              </h2>
              <p className="text-xs md:text-sm text-[#e0ebff]">
                Whether your roadmap includes digital compliance, scale, modernization, or automation,
                CoolGuard provides the foundational monitoring layer needed to operate with precision — today
                and in the future.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#003b8f] shadow-sm hover:bg-[#f3f6ff] transition-colors"
              >
                Request a Product Demonstration
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center rounded-full border border-[#e0ebff] px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Evaluate a Pilot Deployment
              </button>
              <button
                onClick={() => navigate("/cloud-platform")}
                className="inline-flex items-center justify-center rounded-full border border-[#e0ebff] px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Download Technical Overview
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
