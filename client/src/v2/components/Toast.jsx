import { useState, useEffect, useCallback, createContext, useContext } from "react";

/* ── Context ───────────────────────────────────────────── */
const ToastContext = createContext(null);

/**
 * useToast — call toast("message") or toast("msg", "error") from any component.
 * Types: "success" | "error" | "info"
 */
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
};

/* ── Provider ──────────────────────────────────────────── */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success", duration = 3500) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

    setTimeout(() => {
      // Mark as exiting (triggers slide-out animation)
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
      // Remove after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, duration);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
};

/* ── Toast container ───────────────────────────────────── */
const ToastContainer = ({ toasts, dismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} dismiss={dismiss} />
      ))}
    </div>
  );
};

/* ── Single toast ──────────────────────────────────────── */
const ICONS = {
  success: "fa-solid fa-circle-check",
  error: "fa-solid fa-circle-xmark",
  info: "fa-solid fa-circle-info",
};
const COLORS = {
  success: { border: "border-green-500/40", icon: "text-green-400" },
  error: { border: "border-red-500/40", icon: "text-red-400" },
  info: { border: "border-blue-500/40", icon: "text-blue-400" },
};

const ToastItem = ({ toast, dismiss }) => {
  const { id, message, type, exiting } = toast;
  const c = COLORS[type] || COLORS.info;

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-lg border ${c.border} bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg text-sm text-white transition-all duration-300 ${
        exiting
          ? "opacity-0 translate-x-8"
          : "opacity-100 translate-x-0 animate-[slideInRight_0.3s_ease-out]"
      }`}
      role="alert"
    >
      <i className={`${ICONS[type] || ICONS.info} ${c.icon} mt-0.5`} aria-hidden="true" />
      <span className="flex-1 leading-snug">{message}</span>
      <button
        onClick={() => dismiss(id)}
        className="text-neutral-500 hover:text-white transition-colors ml-2 -mr-1"
        aria-label="Dismiss"
      >
        <i className="fa-solid fa-xmark text-xs" />
      </button>
    </div>
  );
};

export default ToastProvider;
