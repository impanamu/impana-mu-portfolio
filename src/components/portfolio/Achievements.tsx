import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Code2, Rocket, Star, Trophy } from "lucide-react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.floor(v)}${suffix}`);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" });
  }, [inView, mv, to]);
  return (
    <motion.span ref={ref} className="font-display text-5xl font-bold text-gradient">
      {rounded}
    </motion.span>
  );
}

const stats = [
  { icon: Code2, label: "Problems Solved", value: 600, suffix: "+" },
  { icon: Trophy, label: "Hackathons", value: 8 },
  { icon: Award, label: "Certifications", value: 12 },
  { icon: Star, label: "CGPA", value: 9, suffix: ".1" },
  { icon: Rocket, label: "Projects Built", value: 15, suffix: "+" },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="By the numbers">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-glow glass relative overflow-hidden rounded-2xl p-6"
            >
              <Icon className="mb-4 size-6 text-[var(--cyan)]" />
              <Counter to={s.value} suffix={s.suffix ?? ""} />
              <div className="mt-2 text-sm text-foreground/60">{s.label}</div>
              <div className="absolute -bottom-10 -right-10 size-32 rounded-full bg-[var(--neon)]/20 blur-3xl" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
