import DOMPurify from "dompurify";

/**
 * Allowed tags / attributes for carousel HTML.
 * We allow standard content tags produced by versaParser but strip scripts,
 * event-handler attributes, forms, iframes, etc.
 */
const PURIFY_CONFIG = {
  // Only tags the parser can produce + standard content tags
  ALLOWED_TAGS: [
    // text
    "p", "span", "br", "hr",
    // headings
    "h1", "h2", "h3", "h4", "h5", "h6",
    // inline formatting
    "strong", "b", "em", "i", "u", "del", "s", "mark", "sub", "sup", "code",
    // links & media
    "a", "img",
    // lists
    "ul", "ol", "li",
    // tables
    "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption",
    // blocks
    "blockquote", "pre", "div", "section",
    // footnotes / misc
    "input", // task-list checkboxes
  ],
  ALLOWED_ATTR: [
    "id", "class", "style",
    "href", "target", "rel",
    "src", "alt", "width", "height",
    "type", "checked", "disabled",
    "colspan", "rowspan",
  ],
  // Block dangerous URI schemes — data: is allowed only for img[src] via hook below
  ALLOWED_URI_REGEXP:
    /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  FORCE_BODY: true,
};

// Allow data: URIs only on <img src>, not on <a href> or other attributes
DOMPurify.addHook("uponSanitizeAttribute", (node, data) => {
  if (
    node.tagName === "IMG" &&
    data.attrName === "src" &&
    /^data:image\//i.test(data.attrValue)
  ) {
    data.forceKeepAttr = true;
  }
});

/**
 * Sanitize HTML produced by the Markdown parser.
 * Strips scripts, event handlers, dangerous attributes, and non-allowlisted tags.
 *
 * @param {string} html — raw HTML string from versaParser / paginator
 * @returns {string} — sanitised HTML safe for dangerouslySetInnerHTML
 */
export function sanitizeHTML(html) {
  if (!html) return "";
  return DOMPurify.sanitize(html, PURIFY_CONFIG);
}

export default sanitizeHTML;
