import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full rounded-t-lg transition-colors duration-500 border-t border-outline-variant/40">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <Logo />
          <p className="font-body text-sm tracking-wide text-on-surface-variant max-w-xs">
            &copy; {new Date().getFullYear()}{" "}Connect &amp; Grow. A Sanctuary for Healing.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6">
          <Link
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/emergency-resources"
          >
            Emergency Resources
          </Link>
          <Link
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
