export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-foreground/40 md:flex-row">
        <span>© {new Date().getFullYear()} IMPANA MU — All systems nominal.</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--cyan)]" />
          Built with React · TypeScript · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  );
}
