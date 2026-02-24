import { PDFDocument, rgb } from "pdf-lib";
import { fetchFontBytes } from "../../shared/utils/fontLoader";
import { getCarouselThemeCSS } from "../themes/carousel";

/**
 * Generate a PDF carousel from slide HTML.
 *
 * Strategy:
 * 1. Render each slide in a hidden DOM container
 * 2. Convert each to a canvas via html2canvas-like approach (using native canvas)
 * 3. Embed each canvas as page images in pdf-lib PDFDocument
 * 4. Download the resulting PDF
 *
 * Since we can't use html2canvas (no dep), we use a foreignObject → SVG → Canvas trick.
 */

/**
 * @param {Object} options
 * @param {Array<{ html: string }>} options.slides
 * @param {Object|null} options.fontObj — Google Font object
 * @param {string} options.themeName
 * @param {{ width: number, height: number }} options.slideSize
 */
export async function generatePDF({ slides, fontObj, themeName, slideSize }) {
  const { width, height } = slideSize;

  // Create PDF document
  const pdfDoc = await PDFDocument.create();

  // Get theme CSS
  const themeCSS = getCarouselThemeCSS(themeName);

  // Font CSS link for the SVG foreignObject
  const fontCSS = fontObj
    ? `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontObj.family)}&display=swap');`
    : "";

  const fontFamilyStyle = fontObj
    ? `font-family: '${fontObj.family}', sans-serif;`
    : "";

  // Process each slide
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const imageData = await renderSlideToImage(
      slide.html,
      width,
      height,
      themeCSS,
      fontCSS,
      fontFamilyStyle
    );

    if (imageData) {
      // Embed PNG into PDF
      const pngImage = await pdfDoc.embedPng(imageData);
      const page = pdfDoc.addPage([width, height]);
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width,
        height,
      });
    } else {
      // Fallback: blank page with error text
      const page = pdfDoc.addPage([width, height]);
      page.drawText(`Slide ${i + 1} — Render failed`, {
        x: 50,
        y: height - 100,
        size: 24,
        color: rgb(0.5, 0.5, 0.5),
      });
    }
  }

  // If we have the custom font, try to embed it for metadata
  if (fontObj) {
    try {
      const fontBytes = await fetchFontBytes(fontObj);
      if (fontBytes) {
        await pdfDoc.embedFont(fontBytes, { subset: true });
      }
    } catch (e) {
      // Font embedding is optional — continue without it
      console.warn("Could not embed font into PDF:", e);
    }
  }

  // Serialize and download
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "versa-carousel.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Render a single slide's HTML to a PNG data ArrayBuffer
 * using the foreignObject → SVG → Canvas technique.
 */
async function renderSlideToImage(
  html,
  width,
  height,
  themeCSS,
  fontCSS,
  fontFamilyStyle
) {
  return new Promise((resolve) => {
    // Build an SVG with foreignObject containing the slide HTML
    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" 
               style="width:${width}px;height:${height}px;overflow:hidden;${fontFamilyStyle}">
            <style>
              ${fontCSS}
              ${themeCSS}
              * { margin: 0; padding: 0; box-sizing: border-box; }
            </style>
            <div class="versa-slide" style="width:${width}px;height:${height}px;overflow:hidden;">
              ${escapeForSVG(html)}
            </div>
          </div>
        </foreignObject>
      </svg>
    `;

    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      // Draw white background first (fallback)
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // Draw the SVG
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            blob.arrayBuffer().then(resolve);
          } else {
            resolve(null);
          }
        },
        "image/png",
        1.0
      );

      URL.revokeObjectURL(svgUrl);
    };

    img.onerror = () => {
      console.error("Failed to render slide to image");
      URL.revokeObjectURL(svgUrl);
      resolve(null);
    };

    img.src = svgUrl;
  });
}

/**
 * Escape HTML content so it's safe inside an SVG foreignObject.
 * Mainly handles namespace issues.
 */
function escapeForSVG(html) {
  // Replace any bare & with &amp; (that aren't already entities)
  return html.replace(/&(?!amp;|lt;|gt;|quot;|#\d+;|#x[\da-fA-F]+;)/g, "&amp;");
}

export default generatePDF;
