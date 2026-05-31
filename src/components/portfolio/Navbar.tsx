import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
    >
      <div
        className={`glass-strong flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "scale-95 glow-purple" : ""
        }`}
      >
        <a href="#hero" className="px-4 py-1.5 font-mono text-xs tracking-widest text-gradient">
          IM.MU
        </a>
        <div className="hidden gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it}
              href={`#${it.toLowerCase()}`}
              className="relative rounded-full px-4 py-1.5 text-sm text-foreground/70 transition-all hover:text-foreground hover:bg-white/5"
            >
              {it}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 hidden rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan)] px-4 py-1.5 text-sm font-medium text-background sm:block"
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
}
