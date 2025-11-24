// src/pages/AboutUs.jsx
import React from "react";

export default function AboutUs() {
  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
              About CoolGuard
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-5">
              Innovating Cold Chain Intelligence
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
              CoolGuard is a cloud-connected temperature monitoring and automation platform 
              trusted by industries that depend on precision — food, pharma, research, storage 
              and logistics. Our mission is simple: ensure product safety and operational
              reliability through intelligent IoT connected infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Who We Are
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                CoolGuard is built by Lateral EmSoft Pvt Ltd — a company with more than 
                a decade of experience in embedded systems, industrial IoT, and cloud-based 
                automation solutions.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We design, develop and deploy complete solutions — hardware, firmware, 
                wireless communication, gateways, cloud dashboards, and mobile applications.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#d7e3ff] bg-white shadow">
              <img
                src="/images/about/about-hero.jpg"
                alt="CoolGuard Operations"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 text-center mb-8">
            What We Do
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-6 py-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">IoT Devices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Purpose-built industrial temperature loggers, controllers, sensors, and wireless nodes 
                designed for reliability across harsh environments.
              </p>
            </article>
            
            {/* Card 2 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-6 py-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Cloud Platform & Analytics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time monitoring, visualization, alerting, compliance reporting, and automation 
                — accessible anywhere via web or mobile.
              </p>
            </article>
            
            {/* Card 3 */}
            <article className="rounded-2xl bg-white border border-[#d7e3ff] shadow-sm px-6 py-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                End-to-End Deployment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineering support, field commissioning, calibration, mapping services, and long-term
                maintenance for reliable operations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Our Journey
          </h2>

          <div className="border-l border-[#cfe0ff] pl-6 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-[#0055cc]">2015</h3>
              <p className="text-sm text-slate-700">Started building embedded monitoring systems.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0055cc]">2019</h3>
              <p className="text-sm text-slate-700">Deployed wired temperature logging systems across industries.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0055cc]">2022</h3>
              <p className="text-sm text-slate-700">Launched CoolGuard Cloud with mobile app support.</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#0055cc]">2024+</h3>
              <p className="text-sm text-slate-700">
                Transitioning into AI-driven predictive alerts, digital audit automation,
                and advanced compliance modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Our Values
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white border border-[#d7e3ff] p-6 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Reliability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every reading matters — accuracy and uptime define trust.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-[#d7e3ff] p-6 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Innovation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We continuously evolve our technology to set industry benchmarks.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-[#d7e3ff] p-6 text-center">
              <h4 className="text-sm font-semibold text-slate-900 mb-2">Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated service, calibration, mapping, and onboarding assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-3xl bg-gradient-to-r from-[#003b8f] to-[#0055cc] text-white p-10 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to Partner With Us?</h3>
            <p className="text-sm text-[#e0ebff] max-w-2xl mx-auto mb-6">
              Whether you manage one cold room or thousands across multiple locations —
              CoolGuard is built to scale with you.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#003b8f] shadow hover:bg-[#f3f6ff]"
            >
              Contact CoolGuard Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
