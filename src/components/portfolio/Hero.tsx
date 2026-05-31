import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Trophy, Code2, Cpu, Rocket } from "lucide-react";
import portrait from "@/assets/impana.jpg";

const roles = ["Software Engineer", "Problem Solver", "Full Stack Developer", "AI Enthusiast"];

const badges = [
  { icon: Trophy, label: "CGPA 8.73", pos: "top-4 -left-2 md:-left-6" },
  { icon: Code2, label: "Full Stack Developer", pos: "top-1/3 -right-4 md:-right-10" },
  { icon: Cpu, label: "AI Projects", pos: "bottom-12 -left-6 md:-left-12" },
  { icon: Rocket, label: "Aspiring SDE", pos: "-bottom-2 right-4 md:right-0" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      {/* soft copper ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 75% 30%, rgba(198,142,85,0.18), transparent 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 md:grid-cols-[1.05fr_1fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-muted-foreground backdrop-blur-md"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--copper)] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[var(--copper)]" />
            </span>
            Available for SDE opportunities · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
          >
            Impana <span className="text-copper">MU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-foreground/80"
          >
            Information Science Engineering Student
          </motion.p>

          <div className="mt-3 flex h-8 items-center gap-2 text-[15px] text-muted-foreground">
            <span className="text-copper">—</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted-foreground"
          >
            Passionate about building scalable applications, solving complex problems through data
            structures and algorithms, and continuously learning modern software technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="/Impana_MU_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--copper)] px-5 py-3 text-sm font-medium text-[#111] transition-all hover:bg-[#d9a572]"
            >
              <Download className="size-4" />
              View Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[var(--copper)]/40 hover:bg-white/[0.06]"
            >
              Explore Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right - portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[420px] w-[420px] max-w-full"
        >
          {/* copper halo */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(198,142,85,0.45), transparent 65%)",
              filter: "blur(20px)",
            }}
          />
          {/* ring */}
          <div className="absolute inset-6 rounded-full border border-[var(--copper)]/25" />
          <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

          {/* portrait */}
          <div className="absolute inset-10 overflow-hidden rounded-full ring-1 ring-white/10 copper-glow">
            <img
              src={portrait}
              alt="Portrait of Impana MU"
              className="size-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#111]/40 via-transparent to-transparent" />
          </div>

          {/* floating badges */}
          {badges.map((b, idx) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.12, duration: 0.6 }}
              className={`absolute ${b.pos}`}
            >
              <div
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#1A1A1A]/90 px-3 py-1.5 text-[12px] text-foreground/90 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md animate-float"
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                <b.icon className="size-3.5 text-copper" />
                {b.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
