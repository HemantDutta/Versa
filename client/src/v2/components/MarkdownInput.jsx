import { useRef, useEffect, useCallback } from "react";
import useCarouselStore from "../store/useCarouselStore";
import { tools } from "../../shared/utils/tools";

export const MarkdownInput = () => {
  const textareaRef = useRef(null);
  const { markdown, setMarkdown, save } = useCarouselStore();

  // Handle tab insertion
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const val = e.target.value;
        e.target.value = val.substring(0, start) + "    " + val.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 4;
        setMarkdown(e.target.value);
      }
    },
    [setMarkdown]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleShortcuts = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        save();
      }
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        insertText("bold");
      }
      if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        insertText("italic");
      }
    };
    window.addEventListener("keydown", handleShortcuts);
    return () => window.removeEventListener("keydown", handleShortcuts);
  }, [save]);

  // Insert markdown snippet at cursor position
  const insertText = useCallback(
    (type) => {
      const ta = textareaRef.current;
      if (!ta) return;
      const pos = ta.selectionStart;
      const before = ta.value.substring(0, pos);
      const after = ta.value.substring(pos);
      const snippet = tools[type] || "";
      ta.value = before + snippet + after;
      setMarkdown(ta.value);
      ta.focus();
      ta.selectionStart = ta.selectionEnd = pos + snippet.length;
    },
    [setMarkdown]
  );

  // Auto-save every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      save();
    }, 60000);

    const handleBeforeUnload = () => save();
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [save]);

  // File drop handler
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (!file) return;

      const ext = file.name.slice(-3);
      if (ext === ".md" || file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            setMarkdown(markdown + "\n\n" + reader.result);
          }
        };
        reader.readAsText(file);
      }
    },
    [markdown, setMarkdown]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="markdown-input-container flex flex-col h-full"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <textarea
        ref={textareaRef}
        className="markdown-textarea w-full flex-1 bg-transparent text-white p-5 outline-none resize-none font-mono text-base leading-relaxed"
        placeholder="Type your markdown here... Use --- for slide breaks"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
      />
    </div>
  );
};

export default MarkdownInput;
