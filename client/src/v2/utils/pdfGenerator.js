import { PDFDocument } from "pdf-lib";
import { toCanvas } from "html-to-image";
import { getCarouselThemeCSS } from "../themes/carousel";

/**
 * Generate a PDF carousel from slide HTML.
 *
 * Strategy:
 * 1. Render each slide in a real DOM container (offscreen)
 * 2. Use html-to-image to capture each slide as a canvas
 * 3. Embed each canvas as a PNG page in a pdf-lib PDFDocument
 * 4. Download the resulting PDF
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

  const fontFamilyStyle = fontObj
    ? `font-family: '${fontObj.family}', sans-serif;`
    : "";

  // Create an offscreen container for rendering
  const renderContainer = document.createElement("div");
  renderContainer.style.cssText = `
    position: fixed;
    top: -99999px;
    left: -99999px;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    pointer-events: none;
    z-index: -9999;
  `;
  document.body.appendChild(renderContainer);

  // Base styles for slide rendering
  const baseCSS = `
    .versa-slide * { box-sizing: border-box; }
    .versa-slide del, .versa-slide s {
      text-decoration: line-through !important;
      text-decoration-thickness: 2px;
    }
    .versa-slide ul, .versa-slide ol { list-style: none !important; padding-left: 8px !important; margin: 0 0 16px 0; }
    .versa-slide li { margin-bottom: 8px; position: relative; padding-left: 28px; }
    .versa-slide ul > li::before { content: "•"; position: absolute; left: 0; font-weight: bold; font-size: 1.2em; line-height: 1.4; }
    .versa-slide ol > li::before { display: none !important; content: none !important; }
    .versa-slide .pdf-ol-number { position: absolute; left: 0; font-weight: 600; }
    .versa-slide li.task-item::before { display: none; }
    .versa-slide li.task-item { padding-left: 0; }
    .versa-slide li.task-item input[type="checkbox"] { width: 18px; height: 18px; vertical-align: middle; margin-right: 8px; position: relative; top: -1px; }
    .versa-slide blockquote { display: flex; flex-direction: column; justify-content: center; min-height: 60px; }
    .versa-slide blockquote p { margin: 0 !important; }
  `;

  // Inject base + theme styles
  const styleEl = document.createElement("style");
  styleEl.textContent = baseCSS + "\n" + themeCSS;
  renderContainer.appendChild(styleEl);

  try {
    // Process each slide
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];

      // Create slide element
      const slideEl = document.createElement("div");
      slideEl.className = "versa-slide";
      slideEl.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        box-sizing: border-box;
        ${fontFamilyStyle}
      `;
      slideEl.innerHTML = slide.html;

      // Clear previous slide and add new one
      const prevSlide = renderContainer.querySelector(".versa-slide");
      if (prevSlide) prevSlide.remove();
      renderContainer.appendChild(slideEl);

      // Inject ordered-list numbers as real DOM nodes (CSS counters
      // don't survive html-to-image's SVG serialization).
      injectOlNumbers(slideEl);

      // Let fonts and layout fully settle before rasterization.
      await waitForCaptureStability();

      // Capture with html-to-image (uses SVG foreignObject — browser's
      // own CSS engine handles layout, so baseline/vertical-align is correct)
      const canvas = await toCanvas(slideEl, {
        width: width * 2,
        height: height * 2,
        pixelRatio: 1,           // we already doubled dimensions
        cacheBust: true,
        includeQueryParams: true,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
        },
      });

      // Convert canvas to PNG ArrayBuffer
      const pngDataUrl = canvas.toDataURL("image/png");
      const pngBytes = dataUrlToArrayBuffer(pngDataUrl);

      // Embed into PDF
      const pngImage = await pdfDoc.embedPng(pngBytes);
      const page = pdfDoc.addPage([width, height]);
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width,
        height,
      });
    }
  } finally {
    // Clean up
    document.body.removeChild(renderContainer);
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
 * Convert a data URL to an ArrayBuffer.
 */
function dataUrlToArrayBuffer(dataUrl) {
  const base64 = dataUrl.split(",")[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function injectOlNumbers(slideEl) {
  slideEl.querySelectorAll("ol").forEach((ol) => {
    const items = ol.querySelectorAll(":scope > li");
    items.forEach((li, idx) => {
      const num = document.createElement("span");
      num.className = "pdf-ol-number";
      num.textContent = `${idx + 1}.`;
      li.prepend(num);
    });
  });
}

async function waitForCaptureStability() {
  if (typeof document !== "undefined" && document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Ignore font API failures and continue with frame settling.
    }
  }

  await new Promise((resolve) => requestAnimationFrame(resolve));
  await new Promise((resolve) => requestAnimationFrame(resolve));
}

export default generatePDF;
