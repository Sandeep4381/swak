"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/70 backdrop-blur-md">
      <div className="relative flex items-center justify-center">

        {/* Rotating Circle */}
        <div
          className="absolute h-24 w-24 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"
          style={{ animationDuration: "0.8s" }}
        />

        {/* Logo */}
        <div
  className="absolute h-24 w-24 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"
/>

<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
<Image
  src="/assest/icon_logo.webp"
  alt="Rent Cars Online"
  width={60}
  height={60}
  priority
  className="rounded-full"
  style={{
    width: 'auto',
    height: 'auto',
    animation: "spin 1s linear infinite reverse",
  }}
/>
</div>

      </div>
    </div>
  );
}