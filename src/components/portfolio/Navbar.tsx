import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/[0.06] px-3 py-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-[#1A1A1A]/85 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "bg-[#1A1A1A]/40"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 px-3">
          <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-[var(--copper)] to-[#8a5a30] text-xs font-bold text-[#111]">
            IM
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:block">
            Impana <span className="text-muted">/ MU</span>
          </span>
        </a>
        <div className="hidden gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              {it.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-[var(--copper)] px-4 py-2 text-[13px] font-medium text-[#111] transition-all hover:bg-[#d9a572]"
        >
          Get in touch
        </a>
      </div>
    </motion.nav>
  );
}
