import axios from "axios";

/**
 * Fetch the full list of fonts from the Google Fonts API.
 * Returns an array of font objects: { family, files, ... }
 */
export async function fetchGoogleFonts() {
  const apiKey = import.meta.env.VITE_FONT_API;
  if (!apiKey) {
    console.warn("VITE_FONT_API not set — font loading disabled");
    return [];
  }
  try {
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
    );
    return res.data.items || [];
  } catch (err) {
    console.error("Failed to fetch Google Fonts:", err);
    return [];
  }
}

/**
 * Create a @font-face rule and inject it into the document head.
 * @param {object} fontObj — Google Fonts API font object with .family and .files
 */
const loadedFonts = new Set();

export function loadFontFace(fontObj) {
  if (!fontObj?.family || !fontObj?.files?.regular) return;
  if (loadedFonts.has(fontObj.family)) return;
  loadedFonts.add(fontObj.family);

  const fontUrl = fontObj.files.regular;
  const fontFaceRule = `@font-face {
    font-family: '${fontObj.family}';
    src: url('${fontUrl}') format('truetype');
    font-style: normal;
    font-weight: normal;
  }`;

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(fontFaceRule));
  document.head.appendChild(style);
}

/**
 * Fetch the raw font bytes (for embedding into PDF).
 * @param {object} fontObj — Google Fonts API font object
 * @returns {Promise<ArrayBuffer>}
 */
export async function fetchFontBytes(fontObj) {
  if (!fontObj?.files?.regular) return null;
  try {
    const res = await axios.get(fontObj.files.regular, {
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    console.error("Failed to fetch font bytes:", err);
    return null;
  }
}
