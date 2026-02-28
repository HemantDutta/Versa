import { useState, useMemo, useEffect, useRef, useCallback, memo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { loadFontFace } from "../../shared/utils/fontLoader";

/**
 * FontPicker — Searchable dropdown listing all Google Fonts.
 * Fonts are loaded into global store on first mount — shared across the app.
 */
export const FontPicker = () => {
  const fonts = useCarouselStore((s) => s.fonts);
  const fontsLoading = useCarouselStore((s) => s.fontsLoading);
  const loadFonts = useCarouselStore((s) => s.loadFonts);
  const selectedFont = useCarouselStore((s) => s.selectedFont);
  const setSelectedFont = useCarouselStore((s) => s.setSelectedFont);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Trigger centralised font load on mount (no-ops if already loaded)
  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Filtered font list (cap at 100 for performance)
  const filtered = useMemo(() => {
    if (!search.trim()) return fonts.slice(0, 100);
    const q = search.toLowerCase();
    return fonts.filter((f) => f.family.toLowerCase().includes(q)).slice(0, 100);
  }, [fonts, search]);

  const handleSelect = useCallback(
    (font) => {
      loadFontFace(font);
      setSelectedFont(font);
      setOpen(false);
      setSearch("");
    },
    [setSelectedFont]
  );

  const displayName = selectedFont?.family || "Default Font";

  return (
    <div className="font-picker relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors max-w-[200px]"
      >
        <i className="fa-solid fa-font text-xs text-gray-400" />
        <span className="truncate">{displayName}</span>
        <i
          className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-gray-700">
            <input
              type="text"
              placeholder="Search fonts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm px-3 py-1.5 bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:border-versa-one"
              autoFocus
            />
          </div>

          {/* Font list */}
          <div className="max-h-60 overflow-y-auto versa-scrollbar">
            {fontsLoading && (
              <div className="p-4 text-center text-gray-400 text-sm">
                Loading fonts...
              </div>
            )}
            {!fontsLoading && filtered.length === 0 && (
              <div className="p-4 text-center text-gray-400 text-sm">
                No fonts found
              </div>
            )}
            {filtered.map((font) => (
              <button
                key={font.family}
                onClick={() => handleSelect(font)}
                onMouseEnter={() => loadFontFace(font)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-800 transition-colors ${
                  selectedFont?.family === font.family
                    ? "bg-gray-800 text-versa-one"
                    : "text-white"
                }`}
                style={{ fontFamily: `'${font.family}', sans-serif` }}
              >
                {font.family}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FontPicker);
