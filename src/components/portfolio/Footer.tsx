import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid size-6 place-items-center rounded-full bg-[var(--copper)] text-[10px] font-bold text-[#111]">
            IM
          </span>
          © {new Date().getFullYear()} Impana MU. Crafted with care.
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="mailto:impana.mu@example.com" className="transition-colors hover:text-copper">
            <Mail className="size-4" />
          </a>
          <a href="https://github.com" className="transition-colors hover:text-copper">
            <Github className="size-4" />
          </a>
          <a href="https://linkedin.com" className="transition-colors hover:text-copper">
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
