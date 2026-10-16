

export default function Logo({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      {/* Decorative: alt="" because the wordmark beside it already names the
          practice, and the artwork's own "connect share grow" lettering is too
          small to read at this size anyway. Width/height are set so the row
          doesn't reflow while the image loads. */}
      <img
        src="/logo.webp"
        alt=""
        width={160}
        height={160}
        className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-headline text-lg md:text-2xl font-bold text-on-background">
          Connect &amp; Grow
        </span>
        {showTagline && (
          <span className="hidden sm:block font-body text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant">
            Counselling &amp; Therapy Services
          </span>
        )}
      </span>
    </span>
  );
}
