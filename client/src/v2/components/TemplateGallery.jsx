import { memo, useCallback, useEffect } from "react";
import { useFocusTrap } from "../hooks/useFocusTrap";
import templates from "../data/templates";
import useCarouselStore from "../store/useCarouselStore";
import { useToast } from "./Toast";

/**
 * TemplateGallery — Shows starter templates when the editor is empty
 * or accessed via the toolbar. Each card previews a template and loads
 * it into the editor on click.
 */
export const TemplateGallery = ({ onClose }) => {
  const setMarkdown = useCarouselStore((s) => s.setMarkdown);
  const toast = useToast();
  const trapRef = useFocusTrap(true);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handlePick = useCallback(
    (tmpl) => {
      setMarkdown(tmpl.markdown);
      toast(`"${tmpl.label}" template loaded`, "success");
      onClose?.();
    },
    [setMarkdown, toast, onClose]
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label="Template Gallery"
        className="relative w-full max-w-2xl bg-[#141414] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <div>
            <h2 className="text-white text-lg font-bold" style={{ fontFamily: "'Jost', sans-serif" }}>
              Start with a Template
            </h2>
            <p className="text-gray-400 text-sm mt-0.5">
              Pick a layout to jumpstart your carousel
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 grid place-items-center rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            title="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-6 pb-6 pt-2 max-h-[60vh] overflow-y-auto">
          {templates.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => handlePick(tmpl)}
              className="group text-left p-4 rounded-xl border border-gray-800 bg-[#0e0e0e] hover:border-[#F875AA]/50 hover:bg-[#1a1018] transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-gray-800 group-hover:bg-[#F875AA]/20 grid place-items-center transition-colors">
                  <i className={`${tmpl.icon} text-sm text-gray-400 group-hover:text-[#F875AA] transition-colors`} />
                </div>
                <span className="text-white font-semibold text-sm">{tmpl.label}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">{tmpl.description}</p>
              <div className="mt-3 text-[11px] text-gray-600 font-mono truncate">
                {tmpl.markdown.split("\n")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="px-6 pb-4 text-center">
          <p className="text-gray-600 text-xs">
            You can always edit the content after loading a template
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(TemplateGallery);
