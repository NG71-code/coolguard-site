// src/pages/ContactUs.jsx
import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const raw = await res.text();
      console.log("API status:", res.status);
      console.log("API raw response:", raw);

      let data;
      try {
        data = JSON.parse(raw);
      } catch (err) {
        throw new Error("Non-JSON response from API: " + raw);
      }

      if (data.success) {
        setStatus("ok");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          enquiryType: "",
          message: "",
        });
      } else {
        console.error("API error:", data.message);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="w-full bg-[#F4F7FB] min-h-screen pb-20">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-[#e6f0ff] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl bg-white border border-[#cfe0ff] shadow-sm p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0055cc] mb-3">
              Contact CoolGuard
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Let’s Talk About Your Monitoring Needs
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
              Whether you operate a single cold room or multiple facilities across
              locations, our team can help you choose the right combination of devices,
              gateways, and cloud features for your application.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + CONTACT INFO */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
          {/* FORM */}
          <div className="rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-1">
              Send Us a Message
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Share a few details and we’ll get back to you with a tailored response.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                    placeholder="Organisation name"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Enquiry Type
                </label>
                <select
                  name="enquiryType"
                  value={form.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                >
                  <option value="">Select an option</option>
                  <option>Consultation / Pilot</option>
                  <option>Existing customer support</option>
                  <option>Calibration / mapping services</option>
                  <option>Distributor / partner enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#d7e3ff] bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0055cc]/60"
                  placeholder="Briefly describe your requirement, number of sites, type of assets, etc."
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-[#0055cc] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0044aa] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Submit Enquiry"}
                </button>

                <div className="flex flex-col gap-1">
                  <p className="text-[11px] text-slate-500">
                    We typically respond within 1–2 business days.
                  </p>
                  {status === "ok" && (
                    <p className="text-[11px] text-emerald-600">
                      ✅ Thank you. We’ve received your enquiry.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-[11px] text-red-600">
                      ⚠️ Something went wrong. Please try again or email us at
                      sales@coolguard.cloud.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* CONTACT INFO / CARDS */}
          <div className="space-y-5">
            <div className="rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-6">
              <h2 className="text-sm font-semibold text-slate-900 mb-3">
                Contact Details
              </h2>
              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Email
                  </div>
                  <div>sales@coolguard.cloud</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Phone / WhatsApp
                  </div>
                  <div>+91-7738544228</div>
                </div>
                <div>
                </div>
              </div>
            </div>
 {/* LOCATIONS / ADDRESSES */}
      <section className="mt-12 border-t border-slate-200 pt-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#007BFF]/80">
            Locations
          </p>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
            Offices & Facilities
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">
            Reach out to our head office, manufacturing facility or branch office
            depending on the nature of your enquiry — commercial, technical or service.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Head Office */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#007BFF]">
                  Head Office
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Lateral EmSoft Pvt Ltd – CoolGuard Division
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                306, The Great Eastern Galleria,<br />
                Sector 4, Nerul,<br />
                Navi Mumbai – 400706,<br />
                Maharashtra, India.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Primary contact for commercial enquiries, accounts and overall coordination.
              </p>
            </div>

            {/* Factory Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                  Factory
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Manufacturing & Integration Facility
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                B-101/B Punit Industrial Premises Co-op Society Ltd,<br />
                Thane Belapur Road, Turbhe,<br />
                Navi Mumbai – 400705,<br />
                Maharashtra, India.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                For logistics, dispatches, hardware integration and factory visits.
              </p>
            </div>

            {/* Branch / Regional Office */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">
                  Branch Office
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Regional Service / Branch Office
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                608, Clifftion Corporate,<br />
                AB Road, Near Stay Sai Square,<br />
                Vijay Nagar, Indore – 452010,<br />
                Madhya Pradesh, India.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Frontline support for local installations, service and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* MAP CARD */}
            <div className="rounded-3xl bg-white border border-dashed border-[#d7e3ff] p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Location Map
              </h3>
              <p className="text-[11px] text-slate-600 mb-2">
                Head Office – Great Eastern Galleria, Nerul, Navi Mumbai.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.444806386961!2d73.00950577992711!3d19.04417113613881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3e71c753107%3A0x718e56cae69c6caa!2sGreat%20Eastern%20Galleria%2C%20Karmvir%20Bhau%20Rao%20Patil%20Marg%2C%20Vinu%20Veena%20CHS%2C%20Sector%204%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1764394871853!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}
