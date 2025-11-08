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
            <li><a href="#kryo" className="hover:text-slate-900">Kryo-100 Series</a></li>
            <li><a href="#frigo" className="hover:text-slate-900">Frigo-100 Series</a></li>
            <li><a href="#controllers" className="hover:text-slate-900">CG-100 Controllers</a></li>
            <li><a href="#bridge" className="hover:text-slate-900">Bridge Point Series</a></li>
            <li><a href="#services" className="hover:text-slate-900">Services</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900">LinkedIn</a></li>
            <li><a href="#" className="hover:text-slate-900">YouTube</a></li>
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
