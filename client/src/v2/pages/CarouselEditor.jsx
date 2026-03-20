import { useEffect, useCallback, useRef, useState, useMemo } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { paginateSlides } from "../utils/slidePaginator";
import MarkdownInput from "../components/MarkdownInput";
import SlideCanvas from "../components/SlideCanvas";
import SlideNavigator from "../components/SlideNavigator";
import Toolbar from "../components/Toolbar";
import FontPicker from "../components/FontPicker";
import ThemePicker from "../components/ThemePicker";
import ExportPanel from "../components/ExportPanel";
import SizeSelector from "../components/SizeSelector";
import PromptCopyModal from "../components/PromptCopyModal";
import TemplateGallery from "../components/TemplateGallery";
import ShortcutsPanel from "../components/ShortcutsPanel";
import CoverImagePicker from "../components/CoverImagePicker";
import SEO from "../components/SEO";
import "../styles/CarouselEditor.css";

const MOBILE_BREAKPOINT = 768;

/**
 * CarouselEditor — Main v2 page.
 * Two-panel layout: left = editor, right = slide preview.
 * On mobile: single panel with edit/view toggle + hamburger dropdown.
 */
const CarouselEditor = () => {
  const markdown = useCarouselStore((s) => s.markdown);
  const slides = useCarouselStore((s) => s.slides);
  const setSlides = useCarouselStore((s) => s.setSlides);
  const selectedFont = useCarouselStore((s) => s.selectedFont);
  const selectedTheme = useCarouselStore((s) => s.selectedTheme);
  const slideSize = useCarouselStore((s) => s.slideSize);
  const coverImage = useCarouselStore((s) => s.coverImage);
  const saveStatus = useCarouselStore((s) => s.saveStatus);
  const save = useCarouselStore((s) => s.save);

  const wordCount = useMemo(() => {
    const text = markdown.replace(/[#*_~`>|\-\[\]()!]/g, "").trim();
    return text ? text.split(/\s+/).length : 0;
  }, [markdown]);
  const charCount = useMemo(() => markdown.length, [markdown]);

  const [previewWidth, setPreviewWidth] = useState(540);
  const [previewHeight, setPreviewHeight] = useState(540);
  const [promptOpen, setPromptOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("edit"); // "edit" | "preview"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previewRef = useRef(null);
  const mobileMenuRef = useRef(null);
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

  // Re-paginate slides when markdown, theme, font, size, or cover changes
  const repaginate = useCallback(() => {
    const fontFamily = selectedFont?.family || null;
    const newSlides = paginateSlides(markdown, selectedTheme, slideSize, fontFamily);
    if (coverImage) {
      // Validate data URL format to prevent XSS from tampered localStorage
      const isValidDataUrl = /^data:image\/[a-z+]+;base64,[A-Za-z0-9+/=]+$/.test(coverImage);
      if (isValidDataUrl) {
        newSlides.unshift({
          html: `<img src="${coverImage}" style="width:100%;height:100%;object-fit:cover;display:block" />`,
          isCover: true,
          coverDataUrl: coverImage,
        });
      }
    }
    setSlides(newSlides);
  }, [markdown, selectedTheme, selectedFont, slideSize, setSlides, coverImage]);

  useEffect(() => {
    clearTimeout(paginateTimeout.current);
    paginateTimeout.current = setTimeout(repaginate, 300);
    return () => clearTimeout(paginateTimeout.current);
  }, [repaginate]);

  // Keyboard shortcut: "?" toggles shortcuts panel
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        const tag = document.activeElement?.tagName;
        if (tag !== "TEXTAREA" && tag !== "INPUT") {
          e.preventDefault();
          setShortcutsOpen((o) => !o);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close mobile menu & reset panels on resize above breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMobileMenuOpen(false);
        setActivePanel("edit");
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onClick = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest(".hamburger-btn")
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [mobileMenuOpen]);

  const togglePanel = () => {
    setActivePanel((p) => (p === "edit" ? "preview" : "edit"));
  };

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

        {/* Desktop-only center section */}
        <div className="carousel-header-center">
          <FontPicker />
          <ThemePicker />
          <SizeSelector />
          <button
            onClick={() => setTemplatesOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors"
            title="Start with a template"
          >
            <i className="fa-solid fa-layer-group text-xs text-versa-one" />
            <span className="hidden sm:inline truncate">Templates</span>
          </button>
          <button
            onClick={() => setPromptOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white hover:bg-gray-700 transition-colors"
            title="Get an AI-ready prompt for carousel content"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-xs text-versa-one" />
            <span className="hidden sm:inline truncate">AI Prompt</span>
          </button>
        </div>

        <div className="carousel-header-right">
          {/* Desktop export + save */}
          <div className="desktop-export">
            <ExportPanel />
          </div>
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

          {/* Mobile-only: Edit/View toggle + hamburger */}
          <div className="mobile-controls">
            <button
              className="panel-toggle-btn"
              onClick={togglePanel}
              title={activePanel === "edit" ? "Switch to Preview" : "Switch to Editor"}
            >
              {activePanel === "edit" ? (
                <><i className="fa-solid fa-eye text-xs" /> Preview</>
              ) : (
                <><i className="fa-solid fa-pen text-xs" /> Edit</>
              )}
            </button>

            <button
              className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu — inside header for absolute positioning */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}
          ref={mobileMenuRef}
        >
          <div className="mobile-menu-section">
            <span className="mobile-menu-label">Font</span>
            <FontPicker />
          </div>
          <div className="mobile-menu-section">
            <span className="mobile-menu-label">Theme</span>
            <ThemePicker />
          </div>
          <div className="mobile-menu-section">
            <span className="mobile-menu-label">Size</span>
            <SizeSelector />
          </div>
          <div className="mobile-menu-section">
            <span className="mobile-menu-label">Tools</span>
            <Toolbar />
          </div>
          <div className="mobile-menu-section mobile-menu-actions">
            <button
              onClick={() => {
                setTemplatesOpen(true);
                setMobileMenuOpen(false);
              }}
              className="mobile-action-btn"
            >
              <i className="fa-solid fa-layer-group text-versa-one" />
              Templates
            </button>
            <button
              onClick={() => {
                setPromptOpen(true);
                setMobileMenuOpen(false);
              }}
              className="mobile-action-btn"
            >
              <i className="fa-solid fa-wand-magic-sparkles text-versa-one" />
              AI Prompt
            </button>
          </div>
          <div className="mobile-menu-section mobile-menu-actions">
            <ExportPanel />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="carousel-body">
        {/* Left Panel — Editor */}
        <div
          className={`carousel-editor-panel ${
            activePanel === "edit" ? "panel-active" : "panel-hidden"
          }`}
        >
          <div className="desktop-toolbar">
            <Toolbar />
          </div>
          <MarkdownInput />
          <div className="editor-footer">
            <span className="text-gray-500 text-xs">
              {wordCount} words · {charCount} chars · {slides.length} slide{slides.length !== 1 ? "s" : ""}
            </span>
            <span className="text-gray-600 text-xs hidden sm:inline">
              Use <kbd className="bg-gray-800 px-1 rounded text-[10px]">---</kbd> for slide breaks
            </span>
          </div>
        </div>

        {/* Right Panel — Preview */}
        <div
          className={`carousel-preview-panel ${
            activePanel === "preview" ? "panel-active" : "panel-hidden"
          }`}
          ref={previewRef}
        >
          <SlideCanvas containerWidth={previewWidth} containerHeight={previewHeight} />
          <SlideNavigator />
          <CoverImagePicker />
        </div>
      </div>

      {/* Prompt Copy Modal */}
      <PromptCopyModal open={promptOpen} onClose={() => setPromptOpen(false)} />

      {/* Template Gallery */}
      {templatesOpen && <TemplateGallery onClose={() => setTemplatesOpen(false)} />}

      {/* Shortcuts Panel */}
      <ShortcutsPanel open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </div>
  );
};

export default CarouselEditor;
