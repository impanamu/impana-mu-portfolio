import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    when: "2024 — Present",
    role: "Software Engineering Intern",
    org: "Stealth Startup",
    body: "Building core product features across the stack — React, Node, Postgres. Owning end-to-end delivery.",
  },
  {
    when: "2023 — 2024",
    role: "Open Source Contributor",
    org: "Various Projects",
    body: "Shipped patches to TypeScript-based tooling and React component libraries.",
  },
  {
    when: "2022 — 2023",
    role: "Technical Lead",
    org: "College CS Club",
    body: "Led workshops on algorithms and system design. Mentored 40+ juniors through DSA fundamentals.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon)] via-[var(--cyan)] to-transparent md:left-1/2" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"} pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-5 size-3 rounded-full bg-[var(--cyan)] shadow-[0_0_15px_var(--cyan)] left-[10px] md:left-auto ${
                  i % 2 ? "md:-left-1.5" : "md:-right-1.5"
                }`}
              />
              <div className="border-glow glass rounded-2xl p-6">
                <div className="font-mono text-xs text-[var(--cyan)]">{it.when}</div>
                <div className="mt-1 font-display text-xl font-semibold">{it.role}</div>
                <div className="mb-3 text-sm text-foreground/60">{it.org}</div>
                <p className="text-sm text-foreground/75">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
