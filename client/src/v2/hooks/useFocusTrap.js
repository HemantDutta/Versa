import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus inside the element referenced by the returned ref
 * while `active` is true.  Also auto-focuses the first focusable element
 * on mount and restores focus to the previously-active element on unmount.
 */
export function useFocusTrap(active = true) {
  const trapRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!active || !trapRef.current) return;

    previousFocus.current = document.activeElement;

    const focusable = () =>
      Array.from(trapRef.current?.querySelectorAll(FOCUSABLE) ?? []);

    // Auto-focus first focusable element
    const els = focusable();
    if (els.length) els[0].focus();

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const nodes = focusable();
      if (!nodes.length) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [active]);

  return trapRef;
}
