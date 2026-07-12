"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

export default function SuccessModal({ open, message = "Submitted successfully.", onClose }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      onClose?.();
    }, 1800);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose?.()} />

      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
        <button
          type="button"
          aria-label="Close success"
          onClick={() => onClose?.()}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>

        <h3 className="text-lg font-bold text-slate-700">Success</h3>
        <p className="mt-2 text-sm text-slate-600">{message}</p>
      </div>
    </div>
  );
}
