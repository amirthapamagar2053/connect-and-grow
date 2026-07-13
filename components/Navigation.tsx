"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0px_12px_40px_rgba(2,132,144,0.08)] transition-all duration-500 border-b border-outline-variant/40">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 w-full max-w-7xl mx-auto">
          {/* Hamburger — mobile only, placed on the left */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 mr-3"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-on-background transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-on-background transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-on-background transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive
                      ? "text-on-background border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  } font-semibold pb-1 font-headline tracking-tight text-lg transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/booking"
            className="bg-inverse-surface text-inverse-on-surface px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-label font-semibold text-sm md:text-base active:scale-90 transition-transform hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Left drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Dim backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Drawer panel */}
          <div
            className="absolute top-0 left-0 h-full w-64 bg-white shadow-2xl flex flex-col pt-20 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-6">
              Menu
            </p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant"
                  } font-headline text-xl py-4 border-b border-outline-variant/20 last:border-0 transition-colors`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-auto pb-10">
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-lg font-label font-semibold transition-opacity hover:opacity-90"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
