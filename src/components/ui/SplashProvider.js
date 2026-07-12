"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TEXTS = [
  "India's Trusted Platform"
];

export default function SplashProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
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
              alt="Swarikaro"
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