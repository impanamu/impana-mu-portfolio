import { motion } from "framer-motion";
import { GraduationCap, Heart, Sparkles, Target, User } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    icon: User,
    title: "Introduction",
    body: "I'm Impana — a builder who loves shipping polished, fast software. I care about clean systems, beautiful UX, and the math behind them.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.E. in Computer Science. Strong foundation in algorithms, operating systems, and distributed computing.",
    span: "md:col-span-2",
  },
  {
    icon: Heart,
    title: "Interests",
    body: "Systems design, AI tooling, design engineering, competitive programming.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "Current Focus",
    body: "Full-stack platforms with React, TypeScript, and modern infra. Sharpening DSA daily.",
    span: "",
  },
  {
    icon: Target,
    title: "Career Goal",
    body: "Engineer at a product-led company building tools that millions love to use.",
    span: "md:col-span-2",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A quick look at me" subtitle="Five things worth knowing.">
      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`border-glow glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 ${c.span}`}
            >
              <div className="flex items-center justify-between">
                <Icon className="size-6 text-[var(--cyan)] transition-colors group-hover:text-[var(--neon)]" />
                <span className="font-mono text-[10px] text-foreground/40">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-semibold">{c.title}</h3>
                <p className="text-sm text-foreground/65">{c.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
