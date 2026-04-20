"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0px_12px_40px_rgba(2,132,144,0.08)] transition-all duration-500 border-b border-outline-variant/40">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
        <Link
          href="/"
          className="font-headline text-2xl font-bold text-on-background"
        >
          Connect &amp; Grow
        </Link>
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
          className="bg-inverse-surface text-inverse-on-surface px-6 py-2.5 rounded-lg font-label font-semibold scale-95 active:scale-90 transition-transform hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
