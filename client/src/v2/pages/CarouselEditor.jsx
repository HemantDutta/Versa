import { useEffect, useCallback, useRef, useState } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { paginateSlides } from "../utils/slidePaginator";
import { fetchGoogleFonts } from "../../shared/utils/fontLoader";
import MarkdownInput from "../components/MarkdownInput";
import SlideCanvas from "../components/SlideCanvas";
import SlideNavigator from "../components/SlideNavigator";
import Toolbar from "../components/Toolbar";
import FontPicker from "../components/FontPicker";
import ThemePicker from "../components/ThemePicker";
import ExportPanel from "../components/ExportPanel";
import SEO from "../components/SEO";
import "../styles/CarouselEditor.css";

/**
 * CarouselEditor — Main v2 page.
 * Two-panel layout: left = editor, right = slide preview.
 */
const CarouselEditor = () => {
  const {
    markdown,
    slides,
    setSlides,
    selectedFont,
    selectedTheme,
    slideSize,
    saveStatus,
    save,
    fonts,
    setFonts,
    getWordCount,
    getCharCount,
  } = useCarouselStore();

  const [previewWidth, setPreviewWidth] = useState(540);
  const [previewHeight, setPreviewHeight] = useState(540);
  const previewRef = useRef(null);
  const paginateTimeout = useRef(null);

  // Measure preview panel size for canvas scaling
  useEffect(() => {
    if (!previewRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPreviewWidth(entry.contentRect.width);
        setPreviewHeight(entry.contentRect.height);
      }
    });
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch fonts on mount
  useEffect(() => {
    if (fonts.length > 0) return;
    fetchGoogleFonts().then((list) => setFonts(list));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-paginate slides when markdown, theme, font, or size changes
  const repaginate = useCallback(() => {
    const fontFamily = selectedFont?.family || null;
    const newSlides = paginateSlides(markdown, selectedTheme, slideSize, fontFamily);
    setSlides(newSlides);
  }, [markdown, selectedTheme, selectedFont, slideSize, setSlides]);

  useEffect(() => {
    // Debounce pagination by 300ms
    clearTimeout(paginateTimeout.current);
    paginateTimeout.current = setTimeout(repaginate, 300);
    return () => clearTimeout(paginateTimeout.current);
  }, [repaginate]);

  // Keyboard shortcut: Ctrl+S
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        save();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [save]);

  return (
    <div className="carousel-editor">
      <SEO
        title="Create Carousel"
        description="Build a LinkedIn carousel from Markdown. Pick a theme, choose a font, export as PDF — all in your browser."
        path="/create"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Versa — Carousel Editor",
          url: "https://versacarousel.vercel.app/create",
          applicationCategory: "DesignApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />

      {/* Top Bar */}
      <header className="carousel-header">
        <div className="carousel-header-left">
          <a href="/" className="carousel-logo">
            <span className="text-versa-one font-bold text-xl">V</span>
            <span className="font-semibold text-white text-lg">ersa</span>
          </a>
          <span className="text-gray-500 text-xs hidden sm:inline">v2</span>
        </div>

        <div className="carousel-header-center">
          <FontPicker />
          <ThemePicker />
        </div>

        <div className="carousel-header-right">
          <ExportPanel />
          <span
            className={`save-indicator text-xs ${
              saveStatus === "saved"
                ? "text-green-400"
                : saveStatus === "saving"
                ? "text-yellow-400"
                : "text-gray-500"
            }`}
          >
            {saveStatus === "saved" && "Saved"}
            {saveStatus === "saving" && "Saving..."}
            {saveStatus === "unsaved" && "Unsaved"}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="carousel-body">
        {/* Left Panel — Editor */}
        <div className="carousel-editor-panel">
          <Toolbar />
          <MarkdownInput />
          <div className="editor-footer">
            <span className="text-gray-500 text-xs">
              {getWordCount()} words · {getCharCount()} chars · {slides.length} slide{slides.length !== 1 ? "s" : ""}
            </span>
            <span className="text-gray-600 text-xs hidden sm:inline">
              Use <kbd className="bg-gray-800 px-1 rounded text-[10px]">---</kbd> for slide breaks
            </span>
          </div>
        </div>

        {/* Right Panel — Preview */}
        <div className="carousel-preview-panel" ref={previewRef}>
          <SlideCanvas containerWidth={previewWidth} containerHeight={previewHeight} />
          <SlideNavigator />
        </div>
      </div>
    </div>
  );
};

export default CarouselEditor;
