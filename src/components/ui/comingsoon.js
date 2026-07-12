"use client";

import { Clock3, Smartphone, X, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import UserForm from "./userfrom";

const popupContent = {
  user: {
    label: "We're Building Something Awesome",
    title: "Coming Soon",
    message:
      "The SwariKaro app is still being built—but you're officially ahead of the crowd.",
    accent: "bg-orange-500",
    soft: "bg-orange-50 text-orange-600",
  },
  partner: {
    label: "You're Early",
    title: " Coming Soon",
    message:
      "The SwariKaro app is still under development, and you're among the first to discover it..",
    accent: "bg-[#073d4c]",
    soft: "bg-sky-50 text-[#073d4c]",
  },
};

export default function ComingSoonButton({
  children,
  className = "",
  ariaLabel = "Download app",
  style,
  variant = "user",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [preferForm, setPreferForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const content = popupContent[variant] ?? popupContent.user;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => {
          setIsOpen(true);
          if (preferForm) setShowForm(true);
        }}
        className={className}
        style={style}
      >
        {children}
      </button>

      {mounted && isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
          >
            <button
              type="button"
              aria-label="Close coming soon popup"
              onClick={() => {
                setIsOpen(false);
                setShowForm(false);
              }}
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            />

            <div className="relative w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl bg-white text-center shadow-2xl">
              <div className={`h-1.5 w-full ${content.accent}`} />
              <button
                type="button"
                aria-label="Close coming soon popup"
                onClick={() => {
                  setIsOpen(false);
                  setShowForm(false);
                }}
                className="absolute right-3 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-6 pb-6 pt-7">
                <div
                  className={`mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-extrabold ${content.soft}`}
                >
                  <Clock3 className="h-3.5 w-3.5" />
                  {content.label}
                </div>

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  <Smartphone className="h-8 w-8 text-slate-800" />
                </div>

                <h2
                  id="coming-soon-title"
                  className="text-2xl font-extrabold text-[#073d4c]"
                >
                  {content.title}
                </h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  {content.message}
                </p>

                <div className="mt-5 text-left">
                  {variant === "user" ? (
                    showForm ? (
                      <UserForm
                        onSuccess={() => {
                          setIsOpen(false);
                          setShowForm(false);
                        }}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setShowForm(true);
                          setPreferForm(true);
                        }}
                        className={`mt-4 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-extrabold text-white transition hover:opacity-90 ${content.accent}`}
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Notify Me
                      </button>
                    )
                  ) : (
                    <button
                      type="button"
                      onClick={() => router.push('/partner')}
                      className={`mt-4 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-extrabold text-white transition hover:opacity-90 ${content.accent}`}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notify Me
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
