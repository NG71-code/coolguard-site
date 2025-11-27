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
        // if your site is in a subfolder (e.g. /coolguard/), use "/coolguard/api/contact.php"
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
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
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
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
                  <option>New installation / project</option>
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
              <div className="space-y-2 text-sm text-slate-700">
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Email
                  </div>
                  <div>support@coolguard.cloud</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Phone / WhatsApp
                  </div>
                  <div>+91-XXXXXXXXXX</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">
                    Office Address
                  </div>
                  <div className="text-sm">
                    Lateral EmSoft Pvt Ltd <br />
                    (CoolGuard Division) <br />
                    {/* You can add full address here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#d7e3ff] shadow-sm p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Quick Contacts
              </h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <div className="font-semibold text-slate-900">
                    Sales &amp; New Projects
                  </div>
                  <div>For new installations, tenders, and project enquiries.</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Support &amp; Service
                  </div>
                  <div>Device issues, site visits, SIM &amp; data, and platform help.</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Calibration &amp; Mapping
                  </div>
                  <div>
                    Temperature mapping studies, calibration schedules, and
                    documentation.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-dashed border-[#d7e3ff] p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Location Map
              </h3>
              <p className="text-[11px] text-slate-600 mb-2">
                Embed a Google Maps iframe or static map image here showing your
                office / service locations.
              </p>
              <div className="h-40 rounded-2xl bg-[#e6f0ff]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
