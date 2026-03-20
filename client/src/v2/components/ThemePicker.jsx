import { useState, useRef, memo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { CAROUSEL_THEMES } from "../themes/carousel";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

/**
 * ThemePicker — Grid of theme cards with live preview colors.
 */
export const ThemePicker = () => {
  const selectedTheme = useCarouselStore((s) => s.selectedTheme);
  const setSelectedTheme = useCarouselStore((s) => s.setSelectedTheme);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useOnClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="theme-picker relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <i className="fa-solid fa-palette text-xs text-gray-400" />
        <span className="truncate max-w-[120px]">{selectedTheme}</span>
        <i
          className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 p-3">
          <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">
            Choose a Theme
          </p>
          <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto versa-scrollbar" role="listbox">
            {CAROUSEL_THEMES.map((theme) => (
              <button
                key={theme.name}
                role="option"
                aria-selected={selectedTheme === theme.name}
                onClick={() => {
                  setSelectedTheme(theme.name);
                  setOpen(false);
                }}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border transition-all ${
                  selectedTheme === theme.name
                    ? "border-versa-one bg-gray-800"
                    : "border-gray-700 hover:border-gray-500 bg-gray-800/50"
                }`}
              >
                {/* Color preview swatch */}
                <div
                  className="w-full h-10 rounded"
                  style={{
                    background: theme.preview.bg,
                    border: `1px solid ${theme.preview.border || "transparent"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.preview.text,
                      fontSize: "10px",
                      fontWeight: 700,
                    }}
                  >
                    Aa Bb
                  </span>
                </div>
                <span className="text-xs text-gray-300 truncate w-full text-center">
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ThemePicker);
