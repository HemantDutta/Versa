import useCarouselStore from "../store/useCarouselStore";
import { tools } from "../../shared/utils/tools";
import { useRef, useCallback, useState, memo } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

export const Toolbar = () => {
  const setMarkdown = useCarouselStore((s) => s.setMarkdown);
  const markdown = useCarouselStore((s) => s.markdown);
  const addSlideBreak = useCarouselStore((s) => s.addSlideBreak);
  const fileInputRef = useRef(null);

  const insertText = useCallback(
    (type) => {
      // We can't easily access the textarea cursor from here,
      // so we append to the end. For toolbar usage this is acceptable.
      const snippet = tools[type] || "";
      setMarkdown(markdown + snippet);
    },
    [markdown, setMarkdown]
  );

  const handleFileUpload = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const ext = file.name.slice(-3);
      if (ext === ".md" || file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            setMarkdown(markdown + "\n\n" + reader.result);
          }
        };
        reader.onerror = () => console.warn("Failed to read uploaded file");
        reader.readAsText(file);
      }
      // Reset so the same file can be uploaded again
      e.target.value = "";
    },
    [markdown, setMarkdown]
  );

  const btnClass =
    "cursor-pointer select-none p-2 w-[40px] h-[40px] grid place-items-center text-white font-bold text-sm hover:bg-gray-700 rounded active:bg-white active:text-black transition-colors";

  return (
    <div className="toolbar flex items-center gap-1 flex-wrap px-3 py-2 border-b border-gray-800">
      <button title="Upload Markdown File" onClick={() => fileInputRef.current?.click()} className={btnClass}>
        <i className="fa-solid fa-upload" />
      </button>
      <input ref={fileInputRef} type="file" accept=".md,.txt" className="hidden" onChange={handleFileUpload} />

      <div className="w-px h-6 bg-gray-700 mx-1" />

      <button title="Bold (Ctrl+B)" onClick={() => insertText("bold")} className={btnClass}>
        B
      </button>
      <button title="Italic (Ctrl+I)" onClick={() => insertText("italic")} className={`${btnClass} italic`}>
        I
      </button>
      <button title="Strikethrough" onClick={() => insertText("strike")} className={btnClass}>
        <del>S</del>
      </button>
      <button title="Highlight/Code" onClick={() => insertText("highlight")} className={btnClass}>
        {"<>"}
      </button>

      <div className="w-px h-6 bg-gray-700 mx-1" />

      <HeadingDropdown onSelect={(level) => setMarkdown(markdown + `\n\n${"#".repeat(level)} Heading\n`)} btnClass={btnClass} />
      <button title="Blockquote" onClick={() => insertText("block")} className={btnClass}>
        {">_"}
      </button>
      <button title="Unordered List" onClick={() => insertText("ul")} className={btnClass}>
        <i className="fa-solid fa-list-ul" />
      </button>
      <button title="Ordered List" onClick={() => setMarkdown(markdown + "\n\n1. Item 1\n2. Item 2\n3. Item 3\n")} className={btnClass}>
        <i className="fa-solid fa-list-ol" />
      </button>
      <button title="Code Block" onClick={() => insertText("code")} className={btnClass}>
        {"{ }"}
      </button>

      <div className="w-px h-6 bg-gray-700 mx-1" />

      <button title="Table" onClick={() => insertText("table")} className={btnClass}>
        <i className="fa-solid fa-table" />
      </button>
      <button title="Image" onClick={() => insertText("img")} className={btnClass}>
        <i className="fa-solid fa-image" />
      </button>
      <button title="Link" onClick={() => insertText("link")} className={btnClass}>
        <i className="fa-solid fa-link" />
      </button>

      <div className="w-px h-6 bg-gray-700 mx-1" />

      <button title="Add Slide Break (---)" onClick={addSlideBreak} className={`${btnClass} text-versa-one`}>
        <i className="fa-solid fa-scissors" />
      </button>
    </div>
  );
};

/** Heading dropdown sub-component */
const HeadingDropdown = ({ onSelect, btnClass }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false), open);

  const headings = [
    { level: 1, label: "Heading 1", size: "text-xl font-extrabold" },
    { level: 2, label: "Heading 2", size: "text-lg font-bold" },
    { level: 3, label: "Heading 3", size: "text-base font-bold" },
    { level: 4, label: "Heading 4", size: "text-sm font-semibold" },
    { level: 5, label: "Heading 5", size: "text-xs font-semibold" },
    { level: 6, label: "Heading 6", size: "text-xs font-medium" },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        title="Heading"
        onClick={() => setOpen(!open)}
        className={`${btnClass} ${open ? "bg-gray-700" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        H
        <i className="fa-solid fa-chevron-down text-[8px] ml-0.5 text-gray-400" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
          {headings.map((h) => (
            <button
              key={h.level}
              onClick={() => { onSelect(h.level); setOpen(false); }}
              className={`w-full text-left px-3 py-1.5 hover:bg-gray-800 transition-colors text-white ${h.size}`}
            >
              H{h.level} — {h.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Toolbar);
