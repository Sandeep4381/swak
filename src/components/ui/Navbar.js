"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ComingSoonButton from "./comingsoon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Become a Partner", href: "/swarikaro-partner" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
const isPartnerPage = pathname === "/swarikaro-partner";
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white shadow-md border-b border-[#EADFCE]" // 👈 solid background on scroll
      : "bg-transparent" // 👈 fully transparent initially
  }`}
>
  <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
    <div className="flex h-18 items-center justify-between">
      {/* Logo */}
      <Link href="/" aria-label="Swarikaro home" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Swarikaro App"
          width={160}
          height={60}
          priority
         className="h-10 lg:h-12 xl:h-14 w-auto object-contain transition-all duration-300"
        />
      </Link>

      {/* Desktop Menu */}
     {/* Desktop Menu */}
<nav
  className={`hidden lg:flex items-center gap-3 rounded-full p-1 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md" : "bg-transparent"
  }`}
>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-flex items-center rounded-full
px-4 lg:px-5 xl:px-6
py-2 lg:py-2.5 xl:py-3
text-sm xl:text-base
font-medium transition-all duration-300 ${
  pathname === link.href
    ? "bg-orange-500 text-white"
    : isPartnerPage && !isScrolled
    ? "text-white hover:text-orange-400"
    : "text-[#082F49] hover:text-orange-500"
}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Button */}
      <ComingSoonButton
        ariaLabel="Download app"
        className={`hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          isScrolled
            ? "opacity-100 translate-x-0 bg-orange-500 hover:bg-orange-600 text-white"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        <Download size={18} />
        Download App
      </ComingSoonButton>
    </div>
  </div>
</header>


  );
}
