import { LOGO_SRC } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
        <div>
          <img src={LOGO_SRC} alt="CoolGuard logo" className="h-10 w-auto mb-2" />
          <div className="text-sm font-semibold text-slate-900">CoolGuard</div>
          <p className="mt-2 text-sm text-slate-600">
            A Lateral emSoft brand for cold-chain IoT monitoring and analytics.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Products</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a href="/products/kryo-101-aa" className="hover:text-slate-900">Cloud Loggers</a></li>
            <li><a href="/products/bridgepoint-cloudconnect" className="hover:text-slate-900">Cloud Connectors</a></li>
            <li><a href="/nodes-gateways" className="hover:text-slate-900">Nodes and Gateways</a></li>
            <li><a href="/controllers/cg-100-series" className="hover:text-slate-900">Controllers</a></li>
            <li><a href="/services" className="hover:text-slate-900">Services</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {/* <li><a href="#contact" className="hover:text-slate-900">Contact</a></li> */}
            <li><a href="https://www.linkedin.com/showcase/74492399/admin/dashboard/" className="hover:text-slate-900">LinkedIn</a></li>
            {/* <li><a href="#" className="hover:text-slate-900">YouTube</a></li> */}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Compliance</div>
          <p className="mt-2 text-sm text-slate-600">
            WHO GDP/GMP-aligned reporting. RoHS for hardware where applicable.
            NABL calibration support via partner labs.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lateral emSoft Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
