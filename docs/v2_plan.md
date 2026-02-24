## Plan: Versa v2 — LinkedIn PDF Carousel Generator

**TL;DR:** Migrate from CRA to Vite, upgrade all dependencies, enhance the custom `versaParser` with full Markdown support, and build a new carousel editor as the main app experience. The carousel editor lets users write/paste/upload Markdown, auto-paginates content into 1080×1080 slides (with size selection later), apply themes & fonts, navigate slides via minimal page counter, and download as PDF via `pdf-lib` — all client-side. Legacy pages move to `/v1/*`. State managed with Zustand. No TypeScript, no backend.

---

### Steps

**Phase 1: Migrate CRA → Vite & Update Dependencies**

1. **Scaffold Vite config** — Create vite.config.js with React plugin (`@vitejs/plugin-react`). Move public/index.html to index.html at client root (Vite convention). Update the `<script>` entry point to `src/index.js`.

2. **Update package.json** — Remove `react-scripts`. Add `vite`, `@vitejs/plugin-react`. Update scripts to `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`. Update all deps to latest stable:
   - `react` & `react-dom` → `^19.x` (or `^18.3` if 19 is too bleeding-edge — React 19 is stable as of Dec 2024)
   - `react-router-dom` → `^7.x`
   - `axios` → `^1.7+`
   - `gsap` → `^3.12+`
   - `tailwindcss` → `^4.x` (Tailwind v4 uses CSS-based config, or stay v3 if v4 migration is too disruptive)
   - Add new deps: `pdf-lib`, `zustand`, `@fontsource-variable/*` (optional, for self-hosted fonts)

3. **Fix env variables** — Vite uses `import.meta.env.VITE_*` instead of `process.env.REACT_APP_*`. Rename `REACT_APP_FONT_API` → `VITE_FONT_API` in `.env` and update the reference in the fonts fetch code.

4. **Update Tailwind setup** — Adjust tailwind.config.js content paths for Vite. Keep existing custom colors (`versa.*`) and breakpoints.

5. **Verify build** — Ensure the existing app still runs on Vite with no regressions before proceeding.

---

**Phase 2: Upgrade the Versa Parser**

6. **Extend versaParser.js** with the following missing Markdown features (all via regex, keeping the custom approach):
   - **Ordered lists** (`1. item`) with nesting support
   - **Nested unordered lists** (indented `-` items)
   - **Task lists / checkboxes** (`- [x]` / `- [ ]`)
   - **Horizontal rules** (`---`, `***`, `___`)
   - **Footnotes** (`[^1]` syntax)
   - **Heading IDs / anchors**
   - **Escape characters** (backslash escapes)
   - **Line breaks** (double-space or `\` at end of line)
   - **Slide separator** (`---` as page-break marker for carousel mode)

7. **Fix parsing order issues** — The current parser applies regex in a flat `.replace()` chain which causes bold inside headers or links inside bold to break. Refactor to process blocks first (code blocks, tables, blockquotes) → then inline elements (bold, italic, links, images, code, strikethrough) in the correct precedence order.

8. **Add a "carousel mode" flag** — When called with `{ carousel: true }`, the parser splits content on `---` separators and returns an array of HTML strings (one per slide) instead of a single HTML string. This powers the multi-page view.

---

**Phase 3: Restructure App & Move Legacy**

9. **Update App.js** routing:
   ```
   /           → New Home (landing page for v2)
   /create     → Carousel Editor (the new core product)
   /v1         → Legacy Home (current Home.js inside MainLayout)
   /v1/editor  → Legacy Editor (current Editor.js)
   ```

10. **Create new folder structure** under `src/`:
    ```
    src/
    ├── v1/                    ← Move all legacy code here
    │   ├── pages/
    │   │   ├── Home.js
    │   │   └── Editor.js
    │   ├── components/        ← Legacy components
    │   ├── styles/            ← Legacy styles
    │   └── layouts/
    ├── v2/                    ← New version
    │   ├── pages/
    │   │   ├── Home.js
    │   │   └── CarouselEditor.js
    │   ├── components/
    │   │   ├── SlideCanvas.js
    │   │   ├── SlideNavigator.js
    │   │   ├── MarkdownInput.js
    │   │   ├── Toolbar.js
    │   │   ├── FontPicker.js
    │   │   ├── ThemePicker.js
    │   │   ├── SizeSelector.js
    │   │   ├── ExportPanel.js
    │   │   └── SlidePreview.js
    │   ├── store/
    │   │   └── useCarouselStore.js
    │   ├── utils/
    │   │   ├── pdfGenerator.js
    │   │   └── slidePaginator.js
    │   ├── themes/
    │   │   ├── index.js
    │   │   └── carousel/       ← LinkedIn-style themes
    │   └── styles/
    ├── shared/                ← Shared between v1 and v2
    │   ├── utils/
    │   │   ├── versaParser.js
    │   │   └── fontLoader.js
    │   └── components/
    │       ├── Select.js
    │       └── Navbar.js
    ```

---

**Phase 4: Build the Carousel Editor**

11. **Create `useCarouselStore.js`** (Zustand store) managing:
    - `slides[]` — array of `{ id, markdownContent, htmlContent }`
    - `activeSlideIndex` — currently viewed slide
    - `selectedFont` — global font for all slides
    - `selectedTheme` — global carousel theme
    - `slideSize` — `{ width: 1080, height: 1080 }` (square default)
    - `fonts[]` — fetched Google Fonts list
    - Actions: `addSlide()`, `removeSlide()`, `updateSlideContent(index, markdown)`, `setActiveSlide(index)`, `setFont()`, `setTheme()`, `reorderSlides()`, `loadFromLocalStorage()`, `saveToLocalStorage()`

12. **Build `MarkdownInput.js`** — The editor panel:
    - Textarea for the **entire document** Markdown (not per-slide). Users write naturally.
    - Can use `---` to manually force slide breaks, but auto-pagination handles the rest.
    - Toolbar above (reuse/extend toolbar concept from v1) for bold, italic, headers, lists, images, links, code, tables, horizontal rule.
    - Real-time word/character count.
    - File upload (`.md`, `.txt`) via drag-and-drop or button.
    - Paste support.
    - Keyboard shortcuts: `Ctrl+S` save, `Ctrl+B` bold, `Ctrl+I` italic.

13. **Build `slidePaginator.js`** — The core pagination engine:
    - Takes the full Markdown string → parses to HTML via `versaParser` → splits into slides.
    - **Content fitting algorithm**: Renders HTML into a hidden measuring container sized to slideSize. Uses `scrollHeight > clientHeight` to detect overflow. When overflow detected, moves content block-by-block (paragraphs, headers, lists, code blocks) to the next slide.
    - Respects `---` as explicit slide breaks.
    - Never cuts mid-paragraph or mid-list — always breaks at block boundaries.
    - Returns `slides[]` array with HTML content per slide.
    - Recalculates on every content change (debounced ~300ms for performance).

14. **Build `SlideCanvas.js`** — The slide preview renderer:
    - Renders the active slide's HTML inside a scaled container.
    - Container has the exact aspect ratio of the slide (1:1 for square).
    - Uses CSS `transform: scale()` to fit the 1080px canvas into the available viewport space.
    - Applies the selected theme's CSS and font.
    - Shows visual boundary of the slide so users see exactly what fits.

15. **Build `SlideNavigator.js`** — Minimal page counter:
    - Shows "Slide 2 / 7" with left/right arrows.
    - "+" button to add a blank slide (inserts `---` separator in the Markdown).
    - Clicking arrows updates `activeSlideIndex` in the store.

16. **Build `FontPicker.js`** & **`ThemePicker.js`**:
    - Reuse the Google Fonts API fetch logic from v1 (extract into `shared/utils/fontLoader.js`).
    - `FontPicker` renders a searchable dropdown of 1600+ fonts with preview text.
    - `ThemePicker` shows theme cards with small previews. Start with existing 22 themes adapted for carousel format + new LinkedIn-specific themes.

17. **Build `ExportPanel.js`** — Download controls:
    - **"Download PDF"** button → calls `pdfGenerator.js`.
    - **"Download HTML"** button → wraps all slides in a styled HTML document.
    - Future: "Copy Link" for shareable preview.

18. **Build `pdfGenerator.js`** — PDF generation with `pdf-lib`:
    - Creates a `PDFDocument` with one page per slide.
    - Page size matches `slideSize` in points (1080px ≈ 810pt at 72 DPI, or use custom dimensions).
    - For each slide: render the themed HTML into an off-screen `<canvas>` (using a helper or manual DOM-to-canvas), then embed as a PNG image in the PDF page via `pdfDoc.embedPng()`.
    - Alternatively: use `pdf-lib`'s text/drawing primitives directly for simpler themes (better quality, smaller file size) and fall back to canvas-based rendering for complex themes.
    - Embed the selected Google Font into the PDF using `pdfDoc.embedFont()` with the font's TTF/OTF file (fetched from Google Fonts API URL).
    - Save and trigger download as `versa-carousel.pdf`.

19. **Build `CarouselEditor.js`** — The main page layout:
    - Two-panel layout (like the current editor but adapted):
      - **Left panel**: `MarkdownInput` with `Toolbar` above it.
      - **Right panel**: `SlideCanvas` with `SlideNavigator` below it.
    - Top bar: `FontPicker`, `ThemePicker`, `ExportPanel`, title/logo, link to legacy editor.
    - Auto-save to localStorage every 60 seconds (same pattern as v1).
    - Responsive: on mobile, panels stack vertically with a toggle between edit/preview (same concept as v1).

---

**Phase 5: LinkedIn-Style Carousel Themes**

20. **Design new carousel-specific themes** in `v2/themes/carousel/`:
    - Themes should be optimized for slide format (large text, high contrast, clean layouts).
    - Initial set (adapt from common LinkedIn carousel styles):
      - **Clean White** — white bg, dark text, accent color for headings
      - **Dark Minimal** — dark bg, white text, minimal styling
      - **Brand Blue** — LinkedIn blue accents, professional feel
      - **Gradient Pop** — gradient backgrounds with white text
      - **Soft Pastel** — muted pastel backgrounds
      - **Bold Statement** — large text, centered, high impact
    - Each theme is still a CSS string scoped to `.slide-canvas`, following the existing pattern.
    - Carry over compatible themes from the existing 22 (e.g., Classic, Classic Dark, Honor, Creamy).

---

**Phase 6: New Landing Page**

21. **Build Home.js** — Updated landing page:
    - Hero section highlighting the LinkedIn PDF Carousel use case.
    - "Start Creating" CTA → links to `/create`.
    - Feature highlights: fonts, themes, auto-pagination, PDF export.
    - Link to legacy editor at `/v1/editor` for users who want the old experience.
    - Reuse GSAP animations and Tailwind styling from v1 home page.

---

### Verification

- **Build check**: `npm run dev` starts without errors after Vite migration.
- **Legacy routes**: `/v1` and `/v1/editor` render the old Home and Editor exactly as before.
- **Parser tests**: Create test cases for all new Markdown features (ordered lists, nested lists, checkboxes, footnotes, horizontal rules, escape chars). Verify output HTML matches expected.
- **Pagination test**: Write a long Markdown document (2000+ words). Verify it splits into multiple slides without cutting mid-paragraph. Verify `---` forces a page break.
- **PDF output**: Generate a 5-slide carousel PDF. Open in a PDF viewer. Verify each page is 1080×1080, fonts render correctly, theme styles apply, no overlap or clipping.
- **Font loading**: Select a Google Font, verify it applies to slide preview and is embedded in the downloaded PDF.
- **Auto-save**: Write content, close browser, reopen → content is restored from localStorage.
- **File upload**: Upload a `.md` file → content populates the editor and auto-paginates.
- **Responsive**: Test on mobile viewport — editor/preview toggle works, slide canvas scales properly.

---

### Decisions

- **pdf-lib** chosen over jsPDF/html2canvas (more control over page dimensions and font embedding) and @react-pdf/renderer (would require rewriting themes from CSS to React-PDF's style system).
- **Enhance custom parser** over adopting `marked`/`markdown-it` — keeps zero-dependency design, full control over carousel-mode splitting.
- **Vite** over staying on CRA — CRA is deprecated, Vite is faster and actively maintained.
- **Zustand** over Context/useState — the carousel editor has complex interconnected state (slides, fonts, themes, pagination) that would be unwieldy with 20+ useState hooks.
- **New version takes `/`**, legacy moves to `/v1/*` — positions the carousel generator as the main product.
- **Minimal slide navigation** (page counter + arrows) — keeps the UI clean; can evolve to thumbnail strip later.
- **Square 1080×1080 default** — most common LinkedIn carousel format. Size selection (portrait, landscape, A4, custom) planned for a future iteration.
- **Stay with JavaScript** — less migration overhead, consistent with existing codebase.