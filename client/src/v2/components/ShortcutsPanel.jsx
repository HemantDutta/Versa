import { useEffect, useCallback, memo } from "react";
import { useFocusTrap } from "../hooks/useFocusTrap";

const shortcuts = [
  {
    group: "Editing",
    items: [
      { keys: ["Ctrl", "S"], desc: "Save to browser storage" },
      { keys: ["Ctrl", "B"], desc: "Insert bold (**text**)" },
      { keys: ["Ctrl", "I"], desc: "Insert italic (*text*)" },
      { keys: ["Tab"], desc: "Insert 4 spaces (indent)" },
    ],
  },
  {
    group: "Navigation",
    items: [
      { keys: ["?"], desc: "Toggle this shortcuts panel" },
      { keys: ["Esc"], desc: "Close any open panel / modal" },
    ],
  },
  {
    group: "Markdown Tips",
    items: [
      { keys: ["---"], desc: "Force a slide break", isText: true },
      { keys: ["# … ######"], desc: "Headings (H1 — H6)", isText: true },
      { keys: ["- item"], desc: "Unordered list", isText: true },
      { keys: ["1. item"], desc: "Ordered list", isText: true },
      { keys: ["- [x]"], desc: "Task / checkbox", isText: true },
      { keys: ["> quote"], desc: "Blockquote", isText: true },
      { keys: ["`code`"], desc: "Inline code", isText: true },
      { keys: ["```lang"], desc: "Fenced code block", isText: true },
      { keys: ["![alt](url)"], desc: "Image", isText: true },
      { keys: ["[text](url)"], desc: "Link", isText: true },
      { keys: ["~~text~~"], desc: "Strikethrough", isText: true },
    ],
  },
];

/**
 * ShortcutsPanel — Overlay showing all keyboard shortcuts and Markdown
 * syntax cheatsheet. Toggled by pressing "?".
 */
export const ShortcutsPanel = ({ open, onClose }) => {
  const trapRef = useFocusTrap(open);

  // Close on Escape
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard Shortcuts"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={trapRef} className="relative w-full max-w-lg bg-[#141414] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-800 grid place-items-center">
              <i className="fa-solid fa-keyboard text-sm text-gray-400" />
            </div>
            <h2 className="text-white text-lg font-bold" style={{ fontFamily: "'Jost', sans-serif" }}>
              Keyboard Shortcuts
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 grid place-items-center rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            title="Close (Esc)"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto space-y-5">
          {shortcuts.map((group) => (
            <div key={group.group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                {group.group}
              </h3>
              <div className="space-y-1.5">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1">
                    <span className="text-gray-300 text-sm">{item.desc}</span>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                      {item.isText ? (
                        <code className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-xs font-mono">
                          {item.keys[0]}
                        </code>
                      ) : (
                        item.keys.map((k, j) => (
                          <span key={j} className="flex items-center gap-1">
                            {j > 0 && <span className="text-gray-600 text-xs">+</span>}
                            <kbd className="inline-block min-w-[24px] text-center bg-gray-800 border border-gray-700 text-gray-300 px-1.5 py-0.5 rounded text-xs font-mono shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
                              {k}
                            </kbd>
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">
            Press <kbd className="bg-gray-800 px-1.5 py-0.5 rounded text-[10px] font-mono">?</kbd> anytime to toggle this panel
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ShortcutsPanel);
