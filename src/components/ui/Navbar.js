"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ComingSoonButton from "./comingsoon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Become a Partner", href: "/swarikaro-partner" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isErrorPage, setIsErrorPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPartnerPage = pathname === "/swarikaro-partner";
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  // Blog post pages have a white hero — navbar text must use the secondary colour.
  const isBlogPostPage = pathname.startsWith("/blog/");
  // Rental pages always show a solid white navbar (no transparent state).
  const isRentalPage =
    pathname === "/car-rental" ||
    pathname === "/bike-rental" ||
    pathname === "/scooter-rental" ||
    pathname.startsWith("/car-rental/") ||
    pathname.startsWith("/bike-rental/") ||
    pathname.startsWith("/scooter-rental/");
  // On error/500 pages the background is light — use readable dark text.
  const isDarkHeroPage = !isErrorPage && (isPartnerPage || isBlogPage);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Detect error pages (set by error.js) for correct nav text color.
    const observer = new MutationObserver(() => {
      setIsErrorPage(document.body.dataset.errorPage === "true");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-error-page"],
    });
    setIsErrorPage(document.body.dataset.errorPage === "true");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isRentalPage || isScrolled
          ? "bg-white shadow-md border-b border-[#EADFCE]" // 👈 solid white on rental pages & on scroll
          : "bg-transparent" // 👈 fully transparent initially
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Swarikaro home"
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Swarikaro App"
              width={100}
              height={60}
              priority
              className="h-10 lg:h-12 xl:h-14 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <nav
            className={`hidden lg:flex items-center gap-3 rounded-full p-1 transition-all duration-300 ${
              isRentalPage || isScrolled
                ? "bg-white shadow-md"
                : "bg-transparent"
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
                    : isBlogPostPage
                      ? "text-secondary hover:text-orange-500"
                      : isDarkHeroPage && !isScrolled && !isRentalPage
                        ? "text-white hover:text-orange-400"
                        : "text-secondary hover:text-orange-500"
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

          {/* Mobile Menu Toggle (right side) */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`inline-flex lg:hidden items-center justify-center h-11 w-11 rounded-full transition-all duration-300 ${
              isRentalPage || isScrolled
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : isBlogPostPage
                  ? "text-secondary hover:text-orange-500"
                  : isDarkHeroPage
                    ? "text-white hover:text-orange-400"
                    : "text-secondary hover:text-orange-500"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="mt-2 mb-4 overflow-hidden rounded-2xl border border-[#EADFCE] bg-white shadow-lg">
              <ul className="py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-5 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-orange-50 text-orange-600"
                          : "text-secondary hover:bg-slate-50 hover:text-orange-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="border-t border-[#EADFCE] px-5 pt-3 pb-4">
                  <ComingSoonButton
                    ariaLabel="Download app"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Download size={18} />
                    Download App
                  </ComingSoonButton>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
