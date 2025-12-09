// src/components/RequestDemoButton.jsx
import React from "react";
import { PlayCircle } from "lucide-react";

export default function RequestDemoButton({
  productCode,
  productName,
  source,
  size = "md",
  className = "",
  label = "Request a Demo",
}) {
  const handleClick = () => {
    const detail = {
      productCode: productCode || null,
      productName: productName || null,
      source:
        source ||
        (productCode
          ? `demo-${productCode.toLowerCase().replace(/\s+/g, "-")}`
          : "floating_cta_button"),
    };

    console.log("RequestDemoButton: dispatch open-floating-cta", detail);

    window.dispatchEvent(
      new CustomEvent("open-floating-cta", { detail })
    );
  };

  const base =
    "inline-flex items-center gap-2 rounded-full bg-sky-500 text-white font-medium shadow-[0_10px_35px_rgba(56,189,248,0.55)] hover:bg-sky-400 transition-colors";
  const sizeClass = size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${sizeClass} ${className}`}
    >
      <PlayCircle size={18} className="text-sky-50" />
      {label}
    </button>
  );
}
