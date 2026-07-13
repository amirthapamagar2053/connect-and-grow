

export default function Logo({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
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
