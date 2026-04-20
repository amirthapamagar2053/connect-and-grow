export default function Footer() {
  return (
    <footer className="bg-surface-container w-full rounded-t-lg transition-colors duration-500 border-t border-outline-variant/40">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4">
          <span className="font-headline text-xl italic text-primary">
            Connect &amp; Grow
          </span>
          <p className="font-body text-sm tracking-wide text-on-surface-variant max-w-xs">
            &copy; 2024 Connect &amp; Grow. A Sanctuary for Healing.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6">
          <a
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Emergency Resources
          </a>
          <a
            className="text-secondary font-body text-sm tracking-wide hover:underline decoration-secondary underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
