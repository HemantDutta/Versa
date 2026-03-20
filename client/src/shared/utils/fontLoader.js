/**
 * fontLoader — Centralised Google Fonts API fetching + @font-face injection.
 *
 * • fetchGoogleFonts() caches the result — only one API call per session.
 * • loadFontFace() injects @font-face rules into a single shared <style>.
 * • No external dependencies (uses native fetch).
 */

// ── Module-level cache ─────────────────────────────────────────────

let cachedFonts = null;   // Promise<Font[]> — set on first call
let fontStyleEl = null;   // single <style> for all @font-face rules
const loadedFonts = new Set();

// ── Public API ─────────────────────────────────────────────────────

/**
 * Fetch the full list of fonts from the Google Fonts API.
 * Subsequent calls return the same cached promise (no duplicate requests).
 * @returns {Promise<Array<{ family: string, files: Record<string,string> }>>}
 */
export function fetchGoogleFonts() {
  if (cachedFonts) return cachedFonts;

  const apiKey = import.meta.env.VITE_FONT_API;
  if (!apiKey) {
    console.warn("VITE_FONT_API not set — font loading disabled");
    cachedFonts = Promise.resolve([]);
    return cachedFonts;
  }

  cachedFonts = fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Google Fonts API ${res.status}`);
      return res.json();
    })
    .then((data) => data.items || [])
    .catch((err) => {
      console.error("Failed to fetch Google Fonts:", err);
      cachedFonts = null; // allow retry on next call
      return [];
    });

  return cachedFonts;
}

/**
 * Inject a @font-face rule for a font into a single shared <style> element.
 * No-ops if the font was already loaded.
 * @param {{ family: string, files: { regular?: string } }} fontObj
 */
export function loadFontFace(fontObj) {
  if (!fontObj?.family || !fontObj?.files?.regular) return;
  if (loadedFonts.has(fontObj.family)) return;
  loadedFonts.add(fontObj.family);

  // Lazily create one shared <style> element
  if (!fontStyleEl) {
    fontStyleEl = document.createElement("style");
    fontStyleEl.setAttribute("data-versa-fonts", "");
    document.head.appendChild(fontStyleEl);
  }

  fontStyleEl.textContent += `
@font-face {
  font-family: '${fontObj.family}';
  src: url('${fontObj.files.regular}') format('truetype');
  font-style: normal;
  font-weight: normal;
}
`;
}
