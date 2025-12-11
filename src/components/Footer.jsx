import { LOGO_SRC } from "../data/catalog";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-blue-600 bg-[#007BFF] text-white">
      {/* TOP GRID */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm mb-3">
            <img
              src={LOGO_SRC}
              alt="CoolGuard logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="text-sm font-semibold">CoolGuard</div>
          <p className="mt-2 text-xs text-blue-100">
            A Lateral emSoft brand for cold-chain IoT monitoring and analytics.
          </p>
        </div>

        {/* Products */}
        <div>
          <div className="text-sm font-semibold">Products</div>
          <ul className="mt-2 space-y-1 text-xs text-blue-100">
            <li><a href="/products/kryo-101-aa" className="hover:text-white">Cloud Loggers</a></li>
            <li><a href="/products/bridgepoint-cloudconnect" className="hover:text-white">Cloud Connectors</a></li>
            <li><a href="/nodes-gateways" className="hover:text-white">Nodes &amp; Gateways</a></li>
            <li><a href="/controllers/cg-100-series" className="hover:text-white">Controllers</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-xs text-blue-100">
            <li>
              <a
                href="https://www.linkedin.com/showcase/74492399/"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <div className="text-sm font-semibold">Compliance</div>
          <p className="mt-2 text-xs text-blue-100 leading-relaxed">
            WHO GDP/GMP-aligned reporting. RoHS hardware where applicable.
            NABL calibration support.
          </p>
        </div>
      </div>

      {/* COPYRIGHT + LINKS */}
      <div className="border-t border-blue-700 bg-[#007BFF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-blue-100">
          <span>
            © {new Date().getFullYear()} Lateral emSoft Pvt Ltd. All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
