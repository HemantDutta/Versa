// Versa Parser v2 — Full Markdown to HTML conversion
// Supports: headers, bold, italic, strikethrough, links, images, 
// ordered/unordered/nested lists, task lists, code blocks, inline code,
// blockquotes, tables, horizontal rules, footnotes, line breaks, 
// escape characters, and carousel mode (slide splitting on ---)

import { themes } from "./themes";

// ── Inline processing ──────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (/^\s*javascript\s*:/i.test(trimmed)) return "";
  if (/^\s*data\s*:/i.test(trimmed) && !/^\s*data:image\//i.test(trimmed)) return "";
  if (/^\s*vbscript\s*:/i.test(trimmed)) return "";
  return trimmed;
}

function processInline(text, theme) {
  // Restore escaped characters at the end
  const escapeMap = [];
  // Handle backslash escapes: \* \_ \` \~ \[ \] \( \) \# \> \! \| \- \+ \\
  text = text.replace(/\\([\\`*_{}[\]()#+\-.!|~>])/g, (_, ch) => {
    const placeholder = `%%ESC${escapeMap.length}%%`;
    escapeMap.push(escapeHtml(ch));
    return placeholder;
  });

  // Images (before links) — ![alt](url)
  if (theme === "Cyber Purple") {
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
      const safe = sanitizeUrl(url);
      return safe ? `<div class="img-wrapper"><img src="${safe}" alt="${escapeHtml(alt)}"/></div>` : '';
    });
  } else {
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
      const safe = sanitizeUrl(url);
      return safe ? `<img src="${safe}" alt="${escapeHtml(alt)}"/>` : '';
    });
  }

  // Links — [text](url) — sanitize javascript: URIs
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safe = sanitizeUrl(url);
    return safe ? `<a href="${safe}" rel="noreferrer" target="_blank">${label}</a>` : label;
  });

  // Footnote references — [^id]
  text = text.replace(/\[\^([^\]]+)\]/g, '<sup class="footnote-ref"><a href="#fn-$1" id="fnref-$1">$1</a></sup>');

  // Inline code — `code` (before bold/italic to prevent conflicts)
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold + Italic — ***text*** or ___text___
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  text = text.replace(/___(.*?)___/g, '<strong><em>$1</em></strong>');

  // Bold — **text** or __text__
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // Italic — *text* or _text_
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  text = text.replace(/\b_(.*?)_\b/g, '<em>$1</em>');

  // Strikethrough — ~~text~~
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');

  // Line break — two trailing spaces or backslash at end of line
  text = text.replace(/ {2,}\n/g, '<br/>');
  text = text.replace(/\\\n/g, '<br/>');

  // Restore escaped characters
  escapeMap.forEach((ch, i) => {
    text = text.replace(`%%ESC${i}%%`, ch);
  });

  return text;
}

// ── Block processing ────────────────────────────────────────────────

function parseTable(block, theme) {
  const lines = block.trim().split("\n");
  if (lines.length < 2) return null;

  // Check that the second line is a separator row
  const separatorRegex = /^\|?[\s-:|]+\|[\s-:|]*\|?$/;
  if (!separatorRegex.test(lines[1])) return null;

  const parseCells = (row) =>
    row.split("|").map((c) => c.trim()).filter((_, i, arr) => {
      // Remove leading/trailing empty cells from split
      if (i === 0 && arr[0] === "") return false;
      if (i === arr.length - 1 && arr[arr.length - 1] === "") return false;
      return true;
    });

  // Parse alignment from separator row
  const separatorCells = parseCells(lines[1]);
  const alignments = separatorCells.map((cell) => {
    const left = cell.startsWith(":");
    const right = cell.endsWith(":");
    if (left && right) return "center";
    if (right) return "right";
    if (left) return "left";
    return "";
  });

  const headerCells = parseCells(lines[0]);
  let html = "<table><thead><tr>";
  headerCells.forEach((cell, i) => {
    const align = alignments[i] ? ` style="text-align:${alignments[i]}"` : "";
    html += `<th${align}>${processInline(cell, theme)}</th>`;
  });
  html += "</tr></thead><tbody>";

  for (let r = 2; r < lines.length; r++) {
    if (!lines[r].trim()) continue;
    const cells = parseCells(lines[r]);
    html += "<tr>";
    cells.forEach((cell, i) => {
      const align = alignments[i] ? ` style="text-align:${alignments[i]}"` : "";
      html += `<td${align}>${processInline(cell, theme)}</td>`;
    });
    html += "</tr>";
  }
  html += "</tbody></table>";
  return html;
}

function parseList(lines, theme) {
  // Supports ordered, unordered, and task lists with nesting
  const result = [];
  let i = 0;

  function getIndent(line) {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  }

  function getListItem(line) {
    // Task list: - [x] or - [ ]
    const taskMatch = line.match(/^(\s*)(?:[-*+]|\d+\.)\s+\[([ xX])\]\s+(.*)/);
    if (taskMatch) {
      return {
        indent: taskMatch[1].length,
        type: "task",
        checked: taskMatch[2].toLowerCase() === "x",
        content: taskMatch[3],
      };
    }
    // Unordered: - item, * item, + item
    const ulMatch = line.match(/^(\s*)[-*+]\s+(.*)/);
    if (ulMatch) {
      return { indent: ulMatch[1].length, type: "ul", content: ulMatch[2] };
    }
    // Ordered: 1. item
    const olMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
    if (olMatch) {
      return { indent: olMatch[1].length, type: "ol", content: olMatch[2] };
    }
    return null;
  }

  function buildList(startIndex, baseIndent) {
    const items = [];
    let idx = startIndex;
    let listType = null;

    while (idx < lines.length) {
      const item = getListItem(lines[idx]);
      if (!item) break;
      if (item.indent < baseIndent) break;

      if (item.indent === baseIndent) {
        if (!listType) listType = item.type === "ol" ? "ol" : "ul";

        let content;
        if (item.type === "task") {
          const checked = item.checked ? ' checked disabled' : ' disabled';
          content = `<li class="task-item"><input type="checkbox"${checked}/> ${processInline(item.content, theme)}`;
        } else {
          content = `<li>${processInline(item.content, theme)}`;
        }

        idx++;

        // Check for nested list
        if (idx < lines.length) {
          const next = getListItem(lines[idx]);
          if (next && next.indent > baseIndent) {
            const nested = buildList(idx, next.indent);
            content += nested.html;
            idx = nested.endIndex;
          }
        }

        content += "</li>";
        items.push(content);
      } else {
        break;
      }
    }

    const tag = listType || "ul";
    return {
      html: `<${tag}>${items.join("")}</${tag}>`,
      endIndex: idx,
    };
  }

  const built = buildList(0, getIndent(lines[0]));
  return built.html;
}

function parseBlockquote(block, theme) {
  // Handle nested blockquotes (>> etc.)
  const lines = block.split("\n");
  let html = "";
  let depth = 0;

  lines.forEach((line) => {
    const match = line.match(/^(>+)\s?(.*)/);
    if (match) {
      const newDepth = match[1].length;
      const content = match[2];

      while (depth < newDepth) {
        html += '<blockquote class="blockquote">';
        depth++;
      }
      while (depth > newDepth) {
        html += "</blockquote>";
        depth--;
      }

      html += `<p>${processInline(content, theme)}</p>`;
    }
  });

  while (depth > 0) {
    html += "</blockquote>";
    depth--;
  }

  return html;
}

function parseCodeBlock(content, theme) {
  // Extract optional language from first line
  const lines = content.split("\n");
  let language = "";
  let code = content;

  if (lines[0] && /^[a-zA-Z0-9_+-]+$/.test(lines[0].trim())) {
    language = lines[0].trim();
    code = lines.slice(1).join("\n");
  }

  const escaped = escapeHtml(code.trim());
  const langAttr = language ? ` class="language-${language}"` : "";

  if (theme === "Prism") {
    return `<div class="pre-wrapper"><pre><code${langAttr}>${escaped}</code></pre></div>`;
  }
  return `<pre><code${langAttr}>${escaped}</code></pre>`;
}

function parseFootnoteDefinition(line) {
  const match = line.match(/^\[\^([^\]]+)\]:\s+(.*)/);
  if (match) {
    return { id: match[1], content: match[2] };
  }
  return null;
}

// ── Main parser ─────────────────────────────────────────────────────

export const versaParser = (file, theme, options = {}) => {
  const { carousel = false } = options;
  let markFile = file || "";

  // In carousel mode, split on --- and parse each slide
  if (carousel) {
    const slideMarker = /^---+\s*$/gm;
    const slideSections = markFile.split(slideMarker);
    return slideSections.map((section) => parseSection(section.trim(), theme));
  }

  return wrapInSection(parseSection(markFile, theme), theme);
};

function wrapInSection(html, theme) {
  return `<section id="styledHtml" style="padding: 1.25rem"><style>${themes[theme] || ""}</style>${html}</section>`;
}

function parseSection(markFile, theme) {
  if (!markFile) return "";

  // Step 1: Extract fenced code blocks first (protect from further parsing)
  const codeBlocks = [];
  const codeBlockRegex = /^(`{3,}|~{3,})(.*)\n([\s\S]*?)^\1\s*$/gm;
  let processed = markFile.replace(codeBlockRegex, (match, fence, lang, code) => {
    const placeholder = `%%CODEBLOCK${codeBlocks.length}%%`;
    const fullContent = lang.trim() ? lang.trim() + "\n" + code : code;
    codeBlocks.push(parseCodeBlock(fullContent, theme));
    return placeholder;
  });

  // Step 2: Split into blocks by blank lines
  const blocks = processed.split(/\n\s*\n/);
  const footnotes = [];
  const htmlBlocks = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Code block placeholder
    if (/^%%CODEBLOCK\d+%%$/.test(trimmed)) {
      const idx = parseInt(trimmed.match(/\d+/)[0]);
      htmlBlocks.push(codeBlocks[idx]);
      continue;
    }

    // Horizontal rule: ---, ***, ___  (at least 3 chars, only that char and optional spaces)
    if (/^([-*_])\s*\1\s*\1[\s\1]*$/.test(trimmed)) {
      htmlBlocks.push("<hr/>");
      continue;
    }

    // Footnote definitions
    const fnDef = parseFootnoteDefinition(trimmed);
    if (fnDef) {
      footnotes.push(fnDef);
      continue;
    }

    // Table (starts with |)
    if (trimmed.startsWith("|") || (trimmed.split("\n").length >= 2 && /^\|?.*\|.*\|?$/.test(trimmed.split("\n")[0]) && /^\|?[\s-:|]+\|/.test(trimmed.split("\n")[1]))) {
      const table = parseTable(trimmed, theme);
      if (table) {
        htmlBlocks.push(table);
        continue;
      }
    }

    // Blockquote (lines starting with >)
    if (/^>/.test(trimmed)) {
      htmlBlocks.push(parseBlockquote(trimmed, theme));
      continue;
    }

    // List (ordered, unordered, or task)
    const lines = trimmed.split("\n");
    const firstLine = lines[0];
    if (/^\s*[-*+]\s+/.test(firstLine) || /^\s*\d+\.\s+/.test(firstLine)) {
      htmlBlocks.push(parseList(lines, theme));
      continue;
    }

    // Heading
    if (/^#{1,6}\s+/.test(trimmed)) {
      const headingLines = trimmed.split("\n");
      const headingHtml = headingLines.map((line) => {
        const hMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (hMatch) {
          const level = hMatch[1].length;
          const content = processInline(hMatch[2], theme);
          const id = hMatch[2].toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
          return `<h${level} id="${id}">${content}</h${level}>`;
        }
        return `<p>${processInline(line, theme)}</p>`;
      }).join("");
      htmlBlocks.push(headingHtml);
      continue;
    }

    // Default: paragraph
    const paraContent = processInline(trimmed.replace(/\n/g, " "), theme);
    htmlBlocks.push(`<p>${paraContent}</p>`);
  }

  // Append footnotes section if any
  if (footnotes.length > 0) {
    let fnHtml = '<section class="footnotes"><hr/><ol>';
    footnotes.forEach((fn) => {
      fnHtml += `<li id="fn-${fn.id}"><p>${processInline(fn.content, theme)} <a href="#fnref-${fn.id}" class="footnote-backref">↩</a></p></li>`;
    });
    fnHtml += "</ol></section>";
    htmlBlocks.push(fnHtml);
  }

  return htmlBlocks.join("");
}

export default versaParser;