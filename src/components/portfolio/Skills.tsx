import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Braces,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

const groups = [
  {
    icon: Braces,
    title: "Programming",
    items: ["Java", "Python", "C++", "C"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Django", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "SQLite"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
  {
    icon: Cpu,
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit honed across the stack."
      subtitle="Languages, frameworks, and concepts I work with day to day."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover group rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl border border-[var(--copper)]/25 bg-[var(--copper)]/10 text-copper transition-colors group-hover:bg-[var(--copper)]/15">
                <g.icon className="size-4" />
              </span>
              <h3 className="text-[14px] font-medium tracking-tight">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-[12.5px] text-foreground/85 transition-colors hover:border-[var(--copper)]/30 hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
