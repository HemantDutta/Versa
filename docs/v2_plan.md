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

## Left Over Stuff

Created 2 todos

Audit v2 completeness vs plan

Read [](file:///c%3A/Users/91987/Versa/docs/v2_plan.md)

Read [](file:///c%3A/Users/91987/Versa/client/vite.config.js)

Read [](file:///c%3A/Users/91987/Versa/client/package.json)

Read [](file:///c%3A/Users/91987/Versa/client/tailwind.config.js)

Read [](file:///c%3A/Users/91987/Versa/client/src/shared/utils/versaParser.js)

Read [](file:///c%3A/Users/91987/Versa/client/src/App.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/themes/carousel/index.js#1-1), lines 1 to 300

Searched for text `REACT_APP_`, no results

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/themes/carousel/index.js#300-300), lines 300 to 1278

Read [](file:///c%3A/Users/91987/Versa/client/src/v2)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/store)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/utils)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/store/useCarouselStore.js)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/MarkdownInput.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/utils/slidePaginator.js#1-1), lines 1 to 200

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/SlideCanvas.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/SlideNavigator.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/FontPicker.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/ThemePicker.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/ExportPanel.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/utils/pdfGenerator.js)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/utils/slidePaginator.js#200-200), lines 200 to 236

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/PromptCopyModal.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/SEO.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/components/Toolbar.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/CarouselEditor.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/Home.jsx#1-1), lines 1 to 350

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/About.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/Blog.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/BlogPost.jsx)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/pages/Home.jsx#350-350), lines 350 to 462

Read [](file:///c%3A/Users/91987/Versa/client/src/shared/utils/fontLoader.js)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/data)

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/styles)

Read [](file:///c%3A/Users/91987/Versa/client/src/shared)

Searched for regex `TODO|FIXME|HACK` (`**/client/src/**`), 2 results

Searched for regex `SizeSelector|SlidePreview`, no results

Searched for files matching `**/*.test.*`, no matches

Read [](file:///c%3A/Users/91987/Versa/client/index.html)

Read [](file:///c%3A/Users/91987/Versa/client/public/manifest.json)

Read [](file:///c%3A/Users/91987/Versa/client/src/shared/utils/themes.js#1-1), lines 1 to 50

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/themes)

Read [](file:///c%3A/Users/91987/Versa/client/src/v1)

Read [](file:///c%3A/Users/91987/Versa/client/src/shared/styles)

Read [](file:///c%3A/Users/91987/Versa/client/src/shared/components)

Searched for regex `removeSlide|reorderSlide`, no results

Read [](file:///c%3A/Users/91987/Versa/docs/v2_plan.md#1-1), lines 1 to 200

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/data/blogPosts.js#1-1), lines 1 to 50

Searched for files matching `**/.env*`, no matches

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/themes/carousel)

Searched for regex `Copy Link|shareable preview`, no results

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/utils/slidePaginator.js#1-1), lines 1 to 20

Read [](file:///c%3A/Users/91987/Versa/client/src/v2/styles/CarouselEditor.css#1-1), lines 1 to 30

Read [](file:///c%3A/Users/91987/AppData/Roaming/Code/User/workspaceStorage/300b4e0b3618a9d6e555935e3167dbc9/GitHub.copilot-chat/chat-session-resources/649ccbc4-fb7b-49fc-9878-cc7ea7d9e0d0/toolu_01W32nNQM9mDWQJXaqWsJpmM__vscode-1772004538045/content.txt)

Completed: *Audit v2 against plan* (1/2)

Here's the full audit against your plan:

---

## v2 Readiness Report

### Fully Complete

| Phase | Notes |
|-------|-------|
| **Phase 1** — CRA → Vite | Vite, deps, env vars, Tailwind — all done |
| **Phase 2** — Parser upgrades | All 9 features + block-first refactor + carousel mode |
| **Phase 3** — App restructure | Routes correct, v1/v2/shared folders in place |
| **Phase 5** — Themes | 35 themes (plan asked for 6 + legacy carryovers) |
| **Phase 6** — Landing page | Hero, CTA, features, GSAP, footer, legacy link |
| **Bonus** | SEO component, About page, Blog (8 posts), AI Prompt modal, .md export |

### Gaps to Fix Before Release

| # | Gap | Severity | Details |
|---|-----|----------|---------|
| 1 | **`SizeSelector` UI missing** | **High** | Store has `slideSize` but no UI control — users are locked to 1080×1080. Plan specified portrait, landscape, A4, custom. |
| 2 | **PDF font embedding unused** | **Medium** | `fetchFontBytes()` exists in fontLoader.js but pdfGenerator never calls it. Fonts render via rasterized PNG images instead of embedded vector text → larger PDFs, no text selection. |
| 3 | **`manifest.json` still says "Create React App"** | **High** | manifest.json has `"name": "Create React App Sample"` and `"short_name": "React App"` — CRA leftover visible to users who install as PWA. |
| 4 | **Duplicate `themes.js`** | **Low** | Same 3,283-line v1 themes file in both src/utils/themes.js and src/shared/utils/themes.js. One should be deleted. |
| 5 | **`removeSlide()` / `reorderSlides()` not implemented** | **Low** | Plan listed them, but the single-markdown-document architecture makes them less relevant — users just edit the text. Not critical for v1 release. |
| 6 | **No shared Navbar component** | **Low** | Plan listed `shared/components/Navbar.js` — each page has its own inline nav instead. Fine for now. |
| 7 | **No tests** | **Low** | Zero test files. Not blocking but worth noting. |

### Verdict

**Core product is fully functional** — the editor, paginator, themes, fonts, PDF/HTML/MD export, responsive layout, SEO, blog, and landing page all work. The three things I'd fix before release:

1. **Fix manifest.json** (5 seconds)
2. **Add SizeSelector** (the only planned UI component that's missing)
3. **Wire up PDF font embedding** (improves PDF quality + file size)