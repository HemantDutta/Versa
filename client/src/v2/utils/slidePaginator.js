import { versaParser } from "../../shared/utils/versaParser";
import { getCarouselThemeCSS } from "../themes/carousel";

/**
 * Slide Paginator — Takes markdown content and splits it into
 * slide-sized pages without cutting mid-block.
 *
 * Strategy:
 * 1. Use `---` as explicit slide breaks
 * 2. For each section, parse to HTML blocks
 * 3. Measure blocks in a hidden container sized to slideSize
 * 4. Accumulate blocks until overflow, then start a new slide
 */

// We need a hidden measuring container in the DOM
let measureContainer = null;

function getMeasureContainer(slideSize, theme, fontFamily) {
  if (!measureContainer) {
    measureContainer = document.createElement("div");
    measureContainer.id = "versa-measure-container";
    measureContainer.style.cssText = `
      position: fixed;
      top: -99999px;
      left: -99999px;
      visibility: hidden;
      pointer-events: none;
      overflow: hidden;
    `;
    document.body.appendChild(measureContainer);
  }

  measureContainer.style.width = slideSize.width + "px";
  measureContainer.style.height = slideSize.height + "px";
  if (fontFamily) {
    measureContainer.style.fontFamily = `'${fontFamily}', sans-serif`;
  }

  return measureContainer;
}

/**
 * Parse markdown into an array of slide HTML strings.
 * @param {string} markdown — Full document markdown
 * @param {string} theme — Theme name
 * @param {{ width: number, height: number }} slideSize
 * @param {string} fontFamily — Selected font family name
 * @returns {Array<{ html: string }>}
 */
export function paginateSlides(markdown, theme, slideSize, fontFamily) {
  if (!markdown || !markdown.trim()) {
    return [{ html: "<p></p>" }];
  }

  // Step 1: Split on explicit slide breaks (---)
  const slideMarker = /^---+\s*$/gm;
  const sections = markdown.split(slideMarker);

  const allSlides = [];

  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) {
      allSlides.push({ html: "<p></p>" });
      continue;
    }

    // Step 2: Split section into individual blocks (by double newline)
    const blocks = splitIntoBlocks(trimmed);

    // Step 3: Parse each block independently
    const parsedBlocks = blocks.map((block) => {
      // Use versaParser in non-carousel mode to parse just this block
      // We get the inner HTML without the wrapping section/style
      return parseSingleBlock(block, theme);
    });

    // Step 4: Fit blocks into slides by measuring
    const container = getMeasureContainer(slideSize, theme, fontFamily);
    const fittedSlides = fitBlocksToSlides(parsedBlocks, container, slideSize, theme);
    allSlides.push(...fittedSlides);
  }

  return allSlides.length > 0 ? allSlides : [{ html: "<p></p>" }];
}

/**
 * Split markdown text into block-level chunks.
 * Each block is a paragraph, heading, list, code block, table, blockquote, or hr.
 */
function splitIntoBlocks(text) {
  const blocks = [];
  const lines = text.split("\n");
  let current = [];
  let inCodeBlock = false;
  let codeFence = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track code blocks
    const fenceMatch = line.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      if (!inCodeBlock) {
        // Start code block — flush current
        if (current.length > 0) {
          blocks.push(current.join("\n"));
          current = [];
        }
        inCodeBlock = true;
        codeFence = fenceMatch[1];
        current.push(line);
        continue;
      } else if (line.trim().startsWith(codeFence)) {
        // End code block
        current.push(line);
        blocks.push(current.join("\n"));
        current = [];
        inCodeBlock = false;
        codeFence = "";
        continue;
      }
    }

    if (inCodeBlock) {
      current.push(line);
      continue;
    }

    // Blank line — flush current block
    if (line.trim() === "") {
      if (current.length > 0) {
        blocks.push(current.join("\n"));
        current = [];
      }
      continue;
    }

    current.push(line);
  }

  if (current.length > 0) {
    blocks.push(current.join("\n"));
  }

  return blocks;
}

/**
 * Parse a single markdown block to HTML using versaParser internals.
 */
function parseSingleBlock(block, theme) {
  // Use versaParser (it wraps in section, we'll extract inner content)
  const full = versaParser(block, theme);
  // Extract content between <section ...> and </section>
  const match = full.match(/<section[^>]*>(?:<style>[\s\S]*?<\/style>)?([\s\S]*)<\/section>/);
  return match ? match[1] : full;
}

/**
 * Fit parsed HTML blocks into slide-sized pages.
 * Uses DOM measurement to determine when a slide is full.
 */
function fitBlocksToSlides(htmlBlocks, container, slideSize, theme) {
  const slides = [];
  let currentBlocks = [];
  const padding = 60; // px padding inside each slide
  const availableHeight = slideSize.height - padding * 2;

  // Import theme CSS for measuring
  const themeCSS = getCarouselThemeCSS(theme);

  for (let i = 0; i < htmlBlocks.length; i++) {
    const block = htmlBlocks[i];

    // Test if adding this block overflows
    const testContent = [...currentBlocks, block].join("");
    container.innerHTML = `
      <div style="padding: ${padding}px; box-sizing: border-box; width: 100%; height: auto;">
        <style>${themeCSS}</style>
        ${testContent}
      </div>
    `;

    const contentHeight = container.firstElementChild.scrollHeight;

    if (contentHeight > slideSize.height && currentBlocks.length > 0) {
      // Current block overflows — save current slide and start new one
      slides.push({ html: currentBlocks.join("") });
      currentBlocks = [block];
    } else {
      currentBlocks.push(block);
    }
  }

  // Push remaining blocks
  if (currentBlocks.length > 0) {
    slides.push({ html: currentBlocks.join("") });
  }

  return slides;
}
