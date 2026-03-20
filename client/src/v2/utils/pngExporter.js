import { toPng } from "html-to-image";
import { getCarouselThemeCSS } from "../themes/carousel";

/**
 * Export each slide as a high-resolution PNG image.
 *
 * For a single slide → direct download.
 * For multiple slides → downloads each one sequentially (named slide-1.png, slide-2.png…).
 *
 * @param {Object} options
 * @param {Array<{ html: string }>} options.slides
 * @param {Object|null} options.fontObj
 * @param {string} options.themeName
 * @param {{ width: number, height: number }} options.slideSize
 * @param {function} [options.onProgress] — (current, total) callback
 */
export async function generatePNGs({ slides, fontObj, themeName, slideSize, onProgress }) {
  const { width, height } = slideSize;
  const themeCSS = getCarouselThemeCSS(themeName);

  const fontFamilyStyle = fontObj
    ? `font-family: '${fontObj.family}', sans-serif;`
    : "";

  // Off-screen container
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

  const styleEl = document.createElement("style");
  styleEl.textContent = baseCSS + "\n" + themeCSS;
  renderContainer.appendChild(styleEl);

  const dataUrls = [];

  try {
    for (let i = 0; i < slides.length; i++) {
      onProgress?.(i + 1, slides.length);

      // Cover image slide — render directly via canvas
      if (slides[i].isCover && slides[i].coverDataUrl) {
        const coverCanvas = await renderCoverToCanvas(slides[i].coverDataUrl, width * 2, height * 2);
        dataUrls.push(coverCanvas.toDataURL("image/png"));
        continue;
      }

      const slideEl = document.createElement("div");
      slideEl.className = "versa-slide";
      slideEl.style.cssText = `
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        box-sizing: border-box;
        ${fontFamilyStyle}
      `;
      slideEl.innerHTML = slides[i].html;

      const prevSlide = renderContainer.querySelector(".versa-slide");
      if (prevSlide) prevSlide.remove();
      renderContainer.appendChild(slideEl);

      // Inject ordered-list numbers
      injectOlNumbers(slideEl);

      // Wait for fonts & layout
      await waitForCaptureStability();

      // Render at 2× for high-res output
      const dataUrl = await toPng(slideEl, {
        width: width * 2,
        height: height * 2,
        pixelRatio: 1,
        cacheBust: true,
        includeQueryParams: true,
        style: {
          transform: "scale(2)",
          transformOrigin: "top left",
        },
      });

      dataUrls.push(dataUrl);
    }
  } finally {
    document.body.removeChild(renderContainer);
  }

  // Download each PNG
  for (let i = 0; i < dataUrls.length; i++) {
    const a = document.createElement("a");
    a.href = dataUrls[i];
    a.download = slides.length === 1
      ? "versa-slide.png"
      : `versa-slide-${i + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Small delay between downloads so the browser doesn't block them
    if (i < dataUrls.length - 1) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  return dataUrls.length;
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
      // ignore
    }
  }
  await new Promise((r) => requestAnimationFrame(r));
  await new Promise((r) => requestAnimationFrame(r));
}

/**
 * Render a cover image data URL onto an off-screen canvas with "cover" fit.
 */
function renderCoverToCanvas(dataUrl, canvasWidth, canvasHeight) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d");
      const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const x = (canvasWidth - drawW) / 2;
      const y = (canvasHeight - drawH) / 2;
      ctx.drawImage(img, x, y, drawW, drawH);
      resolve(canvas);
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

export default generatePNGs;
