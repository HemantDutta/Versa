import { useState, useRef, useEffect, memo } from "react";
import useCarouselStore from "../store/useCarouselStore";

const PRESETS = [
  { width: 1080, height: 1080, label: "Square (1:1)", aspect: "1 / 1" },
  { width: 1080, height: 1350, label: "Portrait (4:5)", aspect: "4 / 5" },
  { width: 1920, height: 1080, label: "Landscape (16:9)", aspect: "16 / 9" },
];

/**
 * SizeSelector — Dropdown for choosing slide dimensions.
 * Shows a mini aspect-ratio preview box next to each label.
 */
export const SizeSelector = () => {
  const slideSize = useCarouselStore((s) => s.slideSize);
  const setSlideSize = useCarouselStore((s) => s.setSlideSize);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const currentLabel = slideSize.label || "Square (1:1)";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors ${
          open ? "bg-gray-700" : ""
        }`}
        title="Slide aspect ratio"
      >
        <i className="fa-solid fa-expand text-xs text-versa-one" />
        <span className="hidden sm:inline truncate max-w-[100px]">{currentLabel}</span>
        <i className="fa-solid fa-chevron-down text-[8px] text-gray-400" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
          {PRESETS.map((preset) => {
            const isActive =
              slideSize.width === preset.width && slideSize.height === preset.height;
            return (
              <button
                key={preset.label}
                onClick={() => {
                  setSlideSize(preset);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 flex items-center gap-3 transition-colors ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {/* Mini aspect-ratio preview */}
                <div
                  className="flex-shrink-0 border border-gray-600 rounded-[3px]"
                  style={{
                    width: 28,
                    aspectRatio: preset.aspect,
                    maxHeight: 28,
                    background: isActive
                      ? "rgba(248,117,170,0.25)"
                      : "rgba(255,255,255,0.05)",
                    borderColor: isActive ? "#F875AA" : undefined,
                  }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{preset.label}</span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    {preset.width} × {preset.height}
                  </span>
                </div>
                {isActive && (
                  <i className="fa-solid fa-check text-versa-one text-xs ml-auto" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(SizeSelector);
