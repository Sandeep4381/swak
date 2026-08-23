"use client";

import { QrCode, Smartphone, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

/**
 * Floating "Get App" widget
 *
 * Desktop:
 * - Right-side floating Get App pill
 * - Opens download poster on right
 *
 * Mobile:
 * - Bottom sheet
 * - Full viewport width
 * - mob_wigh.png covers complete left → right area
 * - No close X
 * - Rounded top corners
 */
export default function BlogDownloadWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* ============================================================
     CLEAR TIMERS
  ============================================================ */

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  /* ============================================================
     CLOSE PANEL
  ============================================================ */

  const closePanel = useCallback(() => {
    setOpen(false);
  }, []);

  /* ============================================================
     OPEN PANEL
  ============================================================ */

  const openPanel = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, [clearTimers]);

  /* ============================================================
     MOUNT
  ============================================================ */

  useEffect(() => {
    setMounted(true);

    return clearTimers;
  }, [clearTimers]);

  /* ============================================================
     ESCAPE
  ============================================================ */

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closePanel]);

  /* ============================================================
     DESKTOP BODY SPACE
  ============================================================ */

  useEffect(() => {
    if (!mounted || !open) return;

    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) return;

    document.body.style.paddingRight = "280px";

    return () => {
      document.body.style.paddingRight = "";
    };
  }, [open, mounted]);

  /* ============================================================
     OPEN ANIMATION
  ============================================================ */

  useEffect(() => {
    if (!open) {
      setReady(false);
      return;
    }

    const timer = setTimeout(() => {
      setReady(true);
    }, 30);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {/* ========================================================
          COLLAPSED GET APP PILL
      ======================================================== */}

      <button
        type="button"
        aria-label="Get the Swarikaro app"
        aria-expanded={open}
        onClick={openPanel}
        className={[
          "fixed z-50 flex items-center gap-2",
          "rounded-full bg-white py-2.5 pl-3 pr-4",
          "shadow-[0_12px_32px_-10px_rgba(15,38,52,0.35)]",
          "transition-all duration-500",

          "bottom-5 right-4",

          "md:bottom-auto",
          "md:right-0",
          "md:top-1/2",
          "md:-translate-y-1/2",

          !open
            ? "translate-x-0 opacity-100 md:translate-x-[30%] md:hover:translate-x-0"
            : "pointer-events-none translate-x-6 opacity-0 md:translate-x-full",
        ].join(" ")}
      >
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700/10">
          <Smartphone className="h-4 w-4 text-teal-700" />

          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange-500" />
        </span>

        <span className="whitespace-nowrap text-sm font-bold text-slate-900">
          Get App
        </span>
      </button>

      {/* ========================================================
          DOWNLOAD PANEL PORTAL
      ======================================================== */}

      {mounted &&
        open &&
        createPortal(
          <>
            {/* ==================================================
                DESKTOP
            ================================================== */}

            <div
              role="dialog"
              aria-label="Download Swarikaro app"
              className={[
                "fixed right-5 top-1/2 z-50",
                "hidden w-[260px]",
                "-translate-y-1/2",
                "md:block",

                "transition-transform duration-500 ease-out",

                ready ? "translate-x-0" : "translate-x-full",

                !open && "pointer-events-none",
              ].join(" ")}
            >
              <DownloadCard onClose={closePanel} />
            </div>

            {/* ==================================================
                MOBILE BOTTOM SHEET
            ================================================== */}

            <div
              role="dialog"
              aria-label="Download Swarikaro app"
              className={[
                "fixed inset-x-0 bottom-0 z-50",
                "w-screen",
                "md:hidden",

                "transition-transform duration-500 ease-out",

                ready ? "translate-y-0" : "translate-y-full",

                !open && "pointer-events-none",
              ].join(" ")}
            >
              <DownloadCard onClose={closePanel} mobile />
            </div>
          </>,
          document.body,
        )}
    </>
  );
}

/* ================================================================
   DOWNLOAD CARD
================================================================ */

function DownloadCard({
  onClose,
  mobile = false,
}: {
  onClose: () => void;
  mobile?: boolean;
}) {
  const appLink =
    process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL ??
    "https://swarikaro.com/app-download";
  const googlePlayLink = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? appLink;
  const appStoreLink = process.env.NEXT_PUBLIC_APP_STORE_URL ?? appLink;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&format=svg&data=${encodeURIComponent(appLink)}`;

  return (
    <div
      className={[
        "relative overflow-hidden bg-white p-6 shadow-[0_20px_60px_-20px_rgba(15,38,52,0.35)]",
        "md:h-[465px] md:w-[260px] md:rounded-[34px] md:border md:border-slate-200",
        mobile
          ? "w-screen rounded-t-3xl pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          : "rounded-l-3xl",
      ].join(" ")}
    >
      {!mobile && (
        <>
          {/* biome-ignore lint/performance/noImgElement: desktop poster background */}
          <img
            src="/poster.png"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute left-1/2 top-3 z-20 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-500/70" />
        </>
      )}

      <button
        type="button"
        aria-label="Close download card"
        onClick={onClose}
        className="
          absolute
          right-3
          top-3
          z-20
          h-8
          w-8
          cursor-pointer
          rounded-full
          text-slate-500
          md:text-white
          transition-colors
          hover:bg-slate-100
          hover:text-slate-900
        "
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative z-10">
        <div
          className={mobile ? "flex justify-center" : "flex items-center gap-2"}
        >
          {/* biome-ignore lint/performance/noImgElement: brand logo asset */}
          <img src="/logo.svg" alt="Swarikaro" className="h-10 w-auto" />
        </div>

        <h2
          className={`mt-2 pr-8 text-xl font-bold leading-tight text-slate-900 md:mt-3 ${
            mobile ? "text-center" : "text-slate-900"
          }`}
        >
          Travel smarter with <span className="text-orange-500">Swarikaro</span>
        </h2>
        <p
          className={`mt-2 text-sm leading-relaxed text-slate-600 md:mt-1 ${
            mobile ? "text-center" : "text-slate-600"
          }`}
        >
          Book rides and explore destinations easily from your phone.
        </p>

        <div
          className={`mt-5 flex rounded-2xl bg-slate-50 md:mt-2 ${
            mobile
              ? "flex-col items-center p-4 text-center"
              : "items-center justify-center p-2"
          }`}
        >
          <div className="rounded-xl bg-white p-2 shadow-sm">
            {/* biome-ignore lint/performance/noImgElement: QR code is generated from the configured download URL */}
            <img
              src={qrCodeUrl}
              alt="Scan to open the Swarikaro app download link"
              width={104}
              height={104}
              className={mobile ? "h-40 w-40" : "h-16 w-16"}
            />
          </div>
          {mobile && (
            <div className="flex flex-col items-center">
              <QrCode className="h-5 w-5 text-teal-700" />
              <p className="mt-2 text-sm font-bold text-slate-900">
                Scan to download
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Open your camera and scan the QR code.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 md:mt-2">
          <a
            href={googlePlayLink}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-2 py-2 text-left text-white transition-colors hover:bg-slate-800"
          >
            <FaGooglePlay className="h-4 w-4 shrink-0 text-[#34a853]" />
            <span>
              <span className="block text-[9px] leading-none">GET IT ON</span>
              <span className="block whitespace-nowrap text-xs font-bold leading-tight">
                Google Play
              </span>
            </span>
          </a>
          <a
            href={appStoreLink}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-slate-950 px-2 py-2 text-left text-white transition-colors hover:bg-slate-800"
          >
            <FaApple className="h-5 w-4 shrink-0" />
            <span>
              <span className="block text-[9px] leading-none">
                Download on the
              </span>
              <span className="block whitespace-nowrap text-xs font-bold leading-tight">
                App Store
              </span>
            </span>
          </a>
        </div>

        {mobile && (
          <div className="mt-5 -mb-6 -mx-6 overflow-hidden">
            {/* biome-ignore lint/performance/noImgElement: decorative travel poster */}
            <img
              src="/poster.png"
              alt="Swarikaro travel in the mountains"
              className="h-48 w-full object-cover object-bottom"
            />
          </div>
        )}
      </div>
    </div>
  );
}
