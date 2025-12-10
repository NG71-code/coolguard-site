// src/components/Footer.jsx
import { LOGO_SRC } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* TOP GRID */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <img src={LOGO_SRC} alt="CoolGuard logo" className="h-10 w-auto mb-3" />
          <h3 className="text-white font-semibold tracking-wide">CoolGuard</h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            An enterprise-grade cold-chain IoT monitoring and compliance platform
            by <span className="text-white">Lateral emSoft Pvt Ltd</span>.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Est. 2006 • 19+ Years of Industrial Technology Leadership
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Products
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products/kryo-101-aa" className="hover:text-[#007BFF]">Cloud Loggers</a></li>
            <li><a href="/products/bridgepoint-cloudconnect" className="hover:text-[#007BFF]">Cloud Connectors</a></li>
            <li><a href="/nodes-gateways" className="hover:text-[#007BFF]">Nodes & Gateways</a></li>
            <li><a href="/controllers/cg-100-series" className="hover:text-[#007BFF]">Controllers</a></li>
            <li><a href="/services" className="hover:text-[#007BFF]">Services</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/showcase/74492399/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#007BFF]"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-slate-500">
              Support: support@coolguard.cloud
            </li>
            <li className="text-slate-500">
              Sales: sales@coolguard.cloud
            </li>
          </ul>
        </div>

        {/* COMPLIANCE */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
            Compliance
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            WHO GDP / GMP aligned monitoring.  
            21 CFR Part 11 friendly audit trails.  
            NABL calibration via partner labs.  
            RoHS compliant hardware (where applicable).
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} Lateral emSoft Pvt Ltd. All rights reserved.
        </div>

        {/* POLICY LINKS */}
        <div className="flex gap-4">
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007BFF]"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007BFF]"
          >
            Cookie Policy
          </a>
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007BFF]"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
