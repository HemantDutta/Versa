import { useState, useCallback, memo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { getCarouselThemeCSS } from "../themes/carousel";
import { useToast } from "./Toast";

/**
 * ExportPanel — Download buttons for PDF and HTML export.
 */
export const ExportPanel = () => {
  const slides = useCarouselStore((s) => s.slides);
  const selectedFont = useCarouselStore((s) => s.selectedFont);
  const selectedTheme = useCarouselStore((s) => s.selectedTheme);
  const slideSize = useCarouselStore((s) => s.slideSize);
  const markdown = useCarouselStore((s) => s.markdown);
  const [exporting, setExporting] = useState(false);
  const [pngExporting, setPngExporting] = useState(false);
  const toast = useToast();

  const isExporting = exporting || pngExporting;

  const handleExportPDF = useCallback(async () => {
    if (slides.length === 0) return;
    setExporting(true);
    try {
      // Dynamic import to keep initial bundle lean
      const { generatePDF } = await import("../utils/pdfGenerator");
      await generatePDF({
        slides,
        fontObj: selectedFont,
        themeName: selectedTheme,
        slideSize,
      });
      toast(`PDF exported — ${slides.length} slide${slides.length !== 1 ? "s" : ""}`, "success");
    } catch (err) {
      console.error("PDF export failed:", err);
      toast("PDF export failed. Check the console for details.", "error");
    } finally {
      setExporting(false);
    }
  }, [slides, selectedFont, selectedTheme, slideSize, toast]);

  const handleExportPNG = useCallback(async () => {
    if (slides.length === 0) return;
    setPngExporting(true);
    try {
      const { generatePNGs } = await import("../utils/pngExporter");
      const count = await generatePNGs({
        slides,
        fontObj: selectedFont,
        themeName: selectedTheme,
        slideSize,
      });
      toast(`${count} PNG image${count !== 1 ? "s" : ""} downloaded`, "success");
    } catch (err) {
      console.error("PNG export failed:", err);
      toast("PNG export failed. Check the console for details.", "error");
    } finally {
      setPngExporting(false);
    }
  }, [slides, selectedFont, selectedTheme, slideSize, toast]);

  const handleExportHTML = useCallback(() => {
    if (!markdown.trim()) return;

    // Build a self-contained HTML file with full theme CSS
    const fontLink = selectedFont
      ? `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(
          selectedFont.family
        )}&display=swap" />`
      : "";

    const themeCSS = getCarouselThemeCSS(selectedTheme);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Versa Carousel Export</title>
  ${fontLink}
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #111; display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 40px 20px; }
    .slide {
      width: ${slideSize.width}px;
      height: ${slideSize.height}px;
      overflow: hidden;
      ${selectedFont ? `font-family: '${selectedFont.family}', sans-serif;` : ""}
    }
    ${themeCSS}
  </style>
</head>
<body>
  ${slides.map((s, i) => {
      if (s.isCover) return `<div class="slide" id="slide-${i + 1}" style="padding:0">${s.html}</div>`;
      return `<div class="slide versa-slide" id="slide-${i + 1}">${s.html}</div>`;
    }).join("\n  ")}
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "versa-carousel.html";
    a.click();
    URL.revokeObjectURL(url);
    toast("HTML file downloaded", "success");
  }, [markdown, slides, selectedFont, slideSize, toast]);

  const handleExportMarkdown = useCallback(() => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "versa-carousel.md";
    a.click();
    URL.revokeObjectURL(url);
    toast("Markdown file downloaded", "success");
  }, [markdown, toast]);

  const btnBase =
    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors";

  return (
    <div className={`export-panel flex items-center gap-2 ${isExporting ? "pointer-events-none" : ""}`}>
      {/* PDF Download */}
      <button
        onClick={handleExportPDF}
        disabled={isExporting || slides.length === 0}
        className={`${btnBase} bg-versa-one text-black hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {exporting ? (
          <>
            <i className="fa-solid fa-spinner fa-spin text-xs" />
            <span className="hidden sm:inline">Generating…</span>
            <span className="sm:hidden">…</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-file-pdf text-xs" />
            PDF
          </>
        )}
      </button>

      {/* PNG Download */}
      <button
        onClick={handleExportPNG}
        disabled={isExporting || slides.length === 0}
        className={`${btnBase} bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {pngExporting ? (
          <>
            <i className="fa-solid fa-spinner fa-spin text-xs" />
            <span className="hidden sm:inline">Exporting…</span>
            <span className="sm:hidden">…</span>
          </>
        ) : (
          <>
            <i className="fa-solid fa-image text-xs" />
            PNG
          </>
        )}
      </button>

      {/* HTML Download */}
      <button
        onClick={handleExportHTML}
        disabled={isExporting || slides.length === 0}
        className={`${btnBase} bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <i className="fa-solid fa-code text-xs" />
        HTML
      </button>

      {/* Markdown Download */}
      <button
        onClick={handleExportMarkdown}
        disabled={isExporting || !markdown.trim()}
        className={`${btnBase} bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <i className="fa-solid fa-file-lines text-xs" />
        .md
      </button>
    </div>
  );
};

export default memo(ExportPanel);
