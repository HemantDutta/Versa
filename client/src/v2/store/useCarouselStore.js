import { create } from "zustand";
import { fetchGoogleFonts, loadFontFace } from "../../shared/utils/fontLoader";

const DEFAULT_MARKDOWN = `# Welcome to Versa v2

Create stunning **PDF carousels** for LinkedIn and beyond.

Write your content in Markdown, choose a theme and font, then download as PDF.

---

## How It Works

1. Write or paste your Markdown content
2. Use \`---\` to create manual slide breaks
3. Content auto-paginates to fit each slide
4. Choose from **1600+ fonts** and multiple themes
5. Download as a polished PDF carousel

---

## Features

- **Auto-Pagination** — Content flows naturally across slides
- **1600+ Fonts** — Powered by Google Fonts
- **Beautiful Themes** — Designed for LinkedIn carousels
- **No Backend** — Everything runs in your browser
- ~~complicated setup~~ Just start typing!

---

> "The best way to predict the future is to create it."
> — Peter Drucker

Start creating your carousel now!
`;

const STORAGE_KEY = "versa_v2_carousel";

function loadFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.warn("Failed to load from localStorage:", e);
  }
  return null;
}

function saveToStorage(state) {
  try {
    const data = {
      markdown: state.markdown,
      selectedFont: state.selectedFont,
      selectedTheme: state.selectedTheme,
      slideSize: state.slideSize,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Failed to save to localStorage:", e);
  }
}

const stored = loadFromStorage();

const useCarouselStore = create((set, get) => ({
  // ── Content ───────────────────────────────────────────
  markdown: stored?.markdown || DEFAULT_MARKDOWN,
  slides: [], // Array of { html: string } — populated by paginator

  // ── Navigation ────────────────────────────────────────
  activeSlideIndex: 0,

  // ── Font ──────────────────────────────────────────────
  fonts: [],
  fontsLoading: false,
  selectedFont: stored?.selectedFont || null,

  // ── Theme ─────────────────────────────────────────────
  selectedTheme: stored?.selectedTheme || "Clean White",

  // ── Slide dimensions (px) ─────────────────────────────
  slideSize: stored?.slideSize || { width: 1080, height: 1080, label: "Square (1:1)" },

  // ── Save status ───────────────────────────────────────
  saveStatus: "saved", // "saved" | "unsaved" | "saving"
  lastSavedMarkdown: stored?.markdown || DEFAULT_MARKDOWN,

  // ── Actions ───────────────────────────────────────────

  setMarkdown: (markdown) => {
    set({ markdown, saveStatus: "unsaved" });
  },

  setSlides: (slides) => {
    const state = get();
    const clamped = Math.min(state.activeSlideIndex, Math.max(0, slides.length - 1));
    set({ slides, activeSlideIndex: clamped });
  },

  setActiveSlide: (index) => {
    const state = get();
    if (index >= 0 && index < state.slides.length) {
      set({ activeSlideIndex: index });
    }
  },

  nextSlide: () => {
    const state = get();
    if (state.activeSlideIndex < state.slides.length - 1) {
      set({ activeSlideIndex: state.activeSlideIndex + 1 });
    }
  },

  prevSlide: () => {
    const state = get();
    if (state.activeSlideIndex > 0) {
      set({ activeSlideIndex: state.activeSlideIndex - 1 });
    }
  },

  addSlideBreak: () => {
    set((state) => ({
      markdown: state.markdown + "\n\n---\n\n",
      saveStatus: "unsaved",
    }));
  },

  setFonts: (fonts) => set({ fonts }),

  /**
   * Load fonts from the Google Fonts API (cached — safe to call many times).
   * Also re-injects the @font-face for the currently selected font.
   */
  loadFonts: async () => {
    const state = get();
    if (state.fonts.length > 0) return; // already loaded
    set({ fontsLoading: true });
    const list = await fetchGoogleFonts();
    set({ fonts: list, fontsLoading: false });
    // Re-inject the selected font face (e.g. after a page reload)
    const sel = get().selectedFont;
    if (sel) loadFontFace(sel);
  },

  setSelectedFont: (font) => {
    set({ selectedFont: font, saveStatus: "unsaved" });
  },

  setSelectedTheme: (theme) => {
    set({ selectedTheme: theme, saveStatus: "unsaved" });
  },

  setSlideSize: (size) => {
    set({ slideSize: size, saveStatus: "unsaved" });
  },

  // ── Persistence ───────────────────────────────────────

  save: () => {
    const state = get();
    set({ saveStatus: "saving" });
    saveToStorage(state);
    setTimeout(() => {
      set({ saveStatus: "saved", lastSavedMarkdown: state.markdown });
    }, 300);
  },

  loadSaved: () => {
    const data = loadFromStorage();
    if (data) {
      set({
        markdown: data.markdown || DEFAULT_MARKDOWN,
        selectedFont: data.selectedFont || null,
        selectedTheme: data.selectedTheme || "Clean White",
        slideSize: data.slideSize || { width: 1080, height: 1080, label: "Square (1:1)" },
        saveStatus: "saved",
        lastSavedMarkdown: data.markdown || DEFAULT_MARKDOWN,
      });
    }
  },

  // ── Word/Char Count ───────────────────────────────────

  getWordCount: () => {
    const md = get().markdown;
    return md.trim().split(/\s+/).filter((w) => /\w+/.test(w)).length;
  },

  getCharCount: () => {
    return get().markdown.length;
  },
}));

export default useCarouselStore;
