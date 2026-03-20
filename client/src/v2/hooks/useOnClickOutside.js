import { useEffect } from "react";

/**
 * Calls `handler` when a mousedown occurs outside the element
 * referenced by `ref`. No-ops when `active` is false.
 */
export function useOnClickOutside(ref, handler, active = true) {
  useEffect(() => {
    if (!active) return;
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler, active]);
}
