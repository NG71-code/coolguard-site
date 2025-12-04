// src/pages/AboutUs.jsx
import React from "react";
import CustomerLogoStrip from "@/components/CustomerLogoStrip.jsx";

export default function AboutUs() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-12">

      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm px-6 py-7 md:px-8 md:py-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-2">
              About CoolGuard
            </p>

            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">
              Innovating Cold Chain Intelligence
            </h1>

            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-3xl">
              CoolGuard is a cloud-connected temperature monitoring and automation
              platform trusted by industries that depend on precision — food,
              pharma, research, storage and logistics. Our mission is simple:
              ensure product safety and operational reliability through intelligent
              IoT connected infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-1">
                Who We Are
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                Built on two decades of embedded & IoT experience
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                CoolGuard is built by Lateral EmSoft Pvt Ltd — a company with more
                than two decades of experience in embedded systems, industrial IoT,
                and cloud-based automation solutions.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                We design, develop and deploy complete solutions — hardware, firmware,
                wireless communication, gateways, cloud dashboards, and mobile applications.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#d7e3ff] bg-white shadow-sm">
              <img
                src="/images/products/about_hero.png"
                alt="CoolGuard Operations"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

  {/* QUALITY & COMPLIANCE SECTION */}
<section className="mt-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-1">
      Quality & Compliance
    </p>

    <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
      Certifications that strengthen our commitment to accuracy & reliability
    </h2>

    <div className="flex flex-wrap gap-3">

      {/* ISO 9001 Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
        <img
          src="/certifications/iso.jpg"
          alt="ISO 9001:2015"
          className="h-5 w-auto"
        />
        <span className="text-xs font-medium text-emerald-900">
          ISO 9001:2015 – Quality Management System
        </span>
      </div>

      {/* 21 CFR Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5">
        <img
          src="/certifications/21cfr.jpg"
          alt="21 CFR Part 11"
          className="h-5 w-auto"
        />
        <span className="text-xs font-medium text-indigo-900">
          21 CFR Part 11 – Compliant Workflows
        </span>
      </div>

    </div>

    <p className="mt-3 text-[12px] text-slate-600 leading-relaxed max-w-3xl">
      CoolGuard follows validated processes aligned with ISO 9001 quality
      management standards. The platform also provides features to support
      21 CFR Part 11 compliant operations — including audit trails, secure
      electronic records, and controlled user access.
    </p>

  </div>
</section>

      {/* CUSTOMER LOGO STRIP */}
      <CustomerLogoStrip compact />

      {/* WHAT WE DO */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-1">
            What We Do
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            End-to-end cold chain monitoring & automation
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-5 py-5">
              <h3 className="text-base font-semibold text-slate-900 mb-2">IoT Devices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Purpose-built industrial temperature loggers, controllers, sensors,
                and wireless nodes designed for reliability across harsh environments.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-5 py-5">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Cloud Platform & Analytics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time monitoring, visualization, alerting, compliance reporting,
                and automation — accessible anywhere via web or mobile.
              </p>
            </article>

            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-5 py-5">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                End-to-End Deployment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineering support, field commissioning, calibration, mapping services,
                and long-term maintenance for reliable operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-1">
            Our Values
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-5">
            Principles that guide every deployment
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-white border border-[#d7e3ff] p-5 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Reliability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every reading matters — accuracy and uptime define trust.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-[#d7e3ff] p-5 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Innovation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We continuously evolve our technology to set industry benchmarks.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-[#d7e3ff] p-5 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated service, calibration, mapping, and onboarding assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
