import { useState, useEffect } from "react";
import { useToast } from "./Toast";

/* ── The prompt users will copy and give to their LLM ────── */
const VERSA_PROMPT = `You are helping me create content for a LinkedIn carousel. The carousel will be built using a Markdown-based tool called Versa, which converts Markdown into a multi-slide PDF carousel.

Here's how the formatting works:

SLIDE BREAKS
- Use --- (horizontal rule) on its own line to separate slides.
- Each section between --- becomes one slide.
- Keep each slide concise — aim for 3–5 short bullet points or 2–3 short paragraphs max.

FORMATTING RULES
- Use # for the main title (first slide heading).
- Use ## for slide headings on subsequent slides.
- Use **bold** for emphasis and key terms.
- Use - or * for bullet lists.
- Use 1. 2. 3. for numbered/ordered lists.
- Use > for blockquotes or callouts.
- Use \`inline code\` for technical terms, commands, or tools.
- Use tables (| Col1 | Col2 |) when comparing items.
- Keep text scannable — short lines, white space, visual hierarchy.

STRUCTURE GUIDELINES
- Slide 1: Hook — bold title or provocative question that makes people stop scrolling.
- Slides 2–N: Body — one key idea per slide, clear heading + supporting points.
- Last slide: CTA — tell the reader what to do next (follow, comment, share, visit a link).

STYLE TIPS
- Write in a direct, conversational tone.
- Front-load value — don't bury the insight.
- Use numbers and data when possible.
- Keep slides self-contained — each one should make sense on its own while contributing to the overall narrative.

Now, using the rules above, create a LinkedIn carousel in Markdown about the following topic:

`;

const PromptCopyModal = ({ open, onClose }) => {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  /* Reset copied state when modal opens */
  useEffect(() => {
    if (open) setCopied(false);
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(VERSA_PROMPT);
      setCopied(true);
      toast("Prompt copied to clipboard", "success");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* fallback */
      const ta = document.createElement("textarea");
      ta.value = VERSA_PROMPT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      toast("Prompt copied to clipboard", "success");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* modal card */}
      <div
        className="relative w-[90vw] max-w-lg bg-[#141414] border-2 border-white/10 rounded-xl p-6 md:p-8 text-white font-[Jost] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors text-lg"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        {/* heading */}
        <h2 className="text-xl md:text-2xl font-black tracking-tight mb-1">
          AI-Assisted Carousel
        </h2>
        <p className="text-neutral-400 text-sm mb-6">
          Use any LLM to generate carousel-ready Markdown in seconds.
        </p>

        {/* steps */}
        <div className="space-y-4 mb-6">
          {[
            { num: "1", icon: "fa-solid fa-copy", text: "Copy the prompt below" },
            { num: "2", icon: "fa-solid fa-pen", text: "Add your topic / idea at the end" },
            { num: "3", icon: "fa-solid fa-robot", text: "Give it to ChatGPT, Claude, Gemini — any LLM" },
            { num: "4", icon: "fa-solid fa-paste", text: "Paste the Markdown output here in Versa" },
          ].map((s) => (
            <div key={s.num} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-versa-one/20 text-versa-one flex items-center justify-center text-xs font-black">
                {s.num}
              </span>
              <div className="flex items-center gap-2 pt-1">
                <i className={`${s.icon} text-neutral-500 text-xs`} aria-hidden="true" />
                <span className="text-sm text-neutral-200">{s.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* GIF placeholder */}
        <div className="w-full aspect-video bg-[#0d0d0d] border border-white/10 rounded-lg flex items-center justify-center mb-6">
          <span className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
            Demo GIF Coming Soon
          </span>
        </div>

        {/* copy button */}
        <button
          onClick={handleCopy}
          className={`w-full py-3 rounded-lg font-black text-sm uppercase tracking-widest transition-colors ${
            copied
              ? "bg-green-500 text-black"
              : "bg-versa-one text-black hover:bg-white"
          }`}
        >
          {copied ? (
            <>
              <i className="fa-solid fa-check mr-2" />
              Copied to Clipboard!
            </>
          ) : (
            <>
              <i className="fa-solid fa-copy mr-2" />
              Copy Prompt
            </>
          )}
        </button>

        <p className="text-neutral-600 text-[11px] text-center mt-3">
          Paste your topic at the end of the prompt before sending it to the LLM.
        </p>
      </div>
    </div>
  );
};

export default PromptCopyModal;
