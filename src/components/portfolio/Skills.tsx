import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DSA & Core CS",
    items: ["Algorithms", "Data Structures", "OS", "DBMS", "OOP", "Networks", "System Design"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Linux", "Figma", "Vercel", "AWS", "VS Code"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern engineering stack"
      subtitle="Tools, languages, and concepts I use to build production software."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
            className="border-glow glass rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <span className="font-mono text-xs text-foreground/40">{g.items.length} items</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.05 + i * 0.03 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_20px_oklch(0.82_0.16_210/0.4)]"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
