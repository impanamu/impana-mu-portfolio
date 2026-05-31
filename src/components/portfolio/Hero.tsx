import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Cpu, Database, Github, Globe, Sparkles, Terminal, Zap } from "lucide-react";
import { Particles } from "./Particles";

const roles = ["Software Engineer", "Problem Solver", "DSA Enthusiast", "Full Stack Developer"];

const orbitIcons = [Code2, Database, Globe, Terminal, Cpu, Zap];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 grid-bg" />
      <Particles />
      {/* light streak */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-0 h-px w-full overflow-hidden"
      >
        <div
          className="h-px w-1/3 bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent"
          style={{ animation: "streak 7s linear infinite" }}
        />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2 md:items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs"
          >
            <span className="size-2 animate-pulse-glow rounded-full bg-[var(--cyan)] shadow-[0_0_10px_var(--cyan)]" />
            <span className="text-foreground/70">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl"
          >
            <span className="block text-foreground">IMPANA</span>
            <span className="block text-gradient">MU</span>
          </motion.h1>

          <div className="mt-6 flex h-10 items-center gap-3 font-mono">
            <span className="text-[var(--cyan)]">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[i]}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-lg text-foreground/90 md:text-xl"
              >
                {roles[i]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[var(--neon)]" />
          </div>

          <p className="mt-6 max-w-md text-foreground/60">
            Crafting performant, beautifully engineered software at the intersection of design,
            systems, and data structures.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="border-glow rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan)] px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Github className="mr-2 inline size-4" /> Get in touch
            </a>
          </div>
        </div>

        {/* Right: 3D floating card with orbiting icons */}
        <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--neon),transparent_60%)] opacity-30 blur-2xl" />
          {/* orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute size-[300px] rounded-full border border-white/10" />
            <div className="absolute size-[380px] rounded-full border border-white/5" />
            {orbitIcons.map((Icon, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{
                  animation: `orbit ${14 + idx * 2}s linear infinite`,
                  animationDelay: `${-idx * 2}s`,
                }}
              >
                <div className="glass flex size-11 items-center justify-center rounded-xl text-[var(--cyan)] glow-cyan">
                  <Icon className="size-5" />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileHover={{ rotateY: 8, rotateX: -6 }}
            style={{ transformStyle: "preserve-3d" }}
            className="border-glow glass-strong absolute left-1/2 top-1/2 flex h-56 w-72 -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-2xl p-5 glow-purple animate-float"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-[var(--neon)]" />
                <span className="size-2 rounded-full bg-[var(--cyan)]" />
                <span className="size-2 rounded-full bg-white/30" />
              </div>
              <span className="font-mono text-[10px] text-foreground/50">PROFILE.SYS</span>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)] to-[var(--cyan)] text-xl font-bold text-background">
                  IM
                </div>
                <div>
                  <div className="font-semibold">Impana MU</div>
                  <div className="font-mono text-xs text-foreground/60">@impana.dev</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
                <div className="rounded-md border border-white/10 px-2 py-1 text-center">
                  <div className="text-[var(--cyan)]">600+</div>
                  <div className="text-foreground/50">DSA</div>
                </div>
                <div className="rounded-md border border-white/10 px-2 py-1 text-center">
                  <div className="text-[var(--neon)]">12+</div>
                  <div className="text-foreground/50">Projects</div>
                </div>
                <div className="rounded-md border border-white/10 px-2 py-1 text-center">
                  <div className="text-foreground">9.1</div>
                  <div className="text-foreground/50">CGPA</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-foreground/60">
              <span className="flex items-center gap-1">
                <Sparkles className="size-3 text-[var(--cyan)]" /> Online
              </span>
              <span>v2.0</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
