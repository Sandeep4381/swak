"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TEXTS = [
  "India's Trusted Platform"
];
const SPLASH_CACHE_KEY = "swarikaro-splash-last-shown";
const SPLASH_CACHE_MS = 10 * 60 * 1000;

export default function SplashProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const now = Date.now();
    const lastShownRaw = window.localStorage.getItem(SPLASH_CACHE_KEY);
    const lastShown = lastShownRaw ? Number(lastShownRaw) : 0;
    const shouldShowSplash = !lastShown || now - lastShown >= SPLASH_CACHE_MS;

    if (!shouldShowSplash) {
      setLoading(false);
      return;
    }

    window.localStorage.setItem(SPLASH_CACHE_KEY, String(now));

    const changeText = setInterval(() => {
      setIndex((prev) => {
        if (prev < TEXTS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 650);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(changeText);
    };
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <div className="splash-bg"></div>

        <div className="splash-content">
          <div className="logo-wrapper">
            <Image
              src="/logo.png"
              alt="Become a Swarikaro Partner"
              width={500}
              height={150}
              priority
              className="splash-logo"
              style={{ height: 'auto' }}
            />
          </div>

          <div className="splash-texts">
            {TEXTS.map((text, i) => (
              <p
                key={i}
                className={`splash-line ${
                  i <= index ? "show-line" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="loader">
            <div className="loader-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
