import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Neural Notebook",
    desc: "AI-augmented note-taking workspace with semantic search and instant recall.",
    tags: ["Next.js", "OpenAI", "Postgres", "pgvector"],
    gradient: "from-[#8B5CF6] via-[#6366F1] to-[#22D3EE]",
  },
  {
    title: "Algo Visualizer",
    desc: "Interactive visualizer for 30+ algorithms with step-by-step playback and timing graphs.",
    tags: ["React", "TypeScript", "D3", "Canvas"],
    gradient: "from-[#22D3EE] via-[#0EA5E9] to-[#8B5CF6]",
  },
  {
    title: "DevPulse",
    desc: "Realtime developer analytics dashboard tracking commits, PRs, and team velocity.",
    tags: ["Node", "WebSockets", "Redis", "Recharts"],
    gradient: "from-[#A855F7] via-[#EC4899] to-[#22D3EE]",
  },
  {
    title: "CloudCanvas",
    desc: "Drag-and-drop infrastructure designer that compiles to Terraform with one click.",
    tags: ["React Flow", "Terraform", "AWS"],
    gradient: "from-[#22D3EE] via-[#8B5CF6] to-[#EC4899]",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A handful of things I've built recently."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all hover:border-[var(--neon)]/50 hover:shadow-[0_0_60px_-10px_oklch(0.68_0.22_295/0.5)]"
          >
            {/* preview */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute right-4 top-4 glass rounded-full px-3 py-1 font-mono text-[10px] text-white/90">
                LIVE
              </div>
              <div className="absolute bottom-4 left-4 font-display text-3xl font-bold text-white drop-shadow-lg">
                {p.title}
              </div>
            </div>

            {/* body */}
            <div className="p-6">
              <p className="mb-4 text-sm text-foreground/70">{p.desc}</p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-foreground/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all hover:bg-white/10 hover:text-[var(--cyan)]"
                >
                  <Github className="size-3.5" /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon)] to-[var(--cyan)] px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
                >
                  Live Demo <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
