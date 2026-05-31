import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Grocery Hut",
    tag: "Full Stack · E-Commerce",
    desc:
      "Online grocery management platform with authentication, cart management, inventory tracking, and order processing — engineered for reliability and clarity.",
    tech: ["React", "Django", "DRF", "SQLite"],
    github: "https://github.com/impana-mu",
    live: "https://github.com/impana-mu?tab=repositories",
    accent: "from-[#C68E55]/25 to-transparent",
  },
  {
    title: "EmotionSense AI",
    tag: "AI · Analytics",
    desc:
      "AI-powered emotion analytics platform combining facial emotion detection and text sentiment analysis to surface actionable insights from human signals.",
    tech: ["React", "Django", "Machine Learning"],
    github: "https://github.com/impana-mu",
    live: "https://github.com/impana-mu?tab=repositories",
    accent: "from-[#E8D8C4]/15 to-transparent",
  },
  {
    title: "ResearchGPT",
    tag: "AI · NLP",
    desc:
      "Research paper summarization platform with PDF analysis and AI-generated summaries — turning dense literature into a focused, digestible read.",
    tech: ["React", "Django", "NLP", "OpenAI"],
    github: "https://github.com/impana-mu",
    live: "https://github.com/impana-mu?tab=repositories",
    accent: "from-[#C68E55]/20 to-transparent",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I'm proud of."
      subtitle="A few products that capture how I think, build, and ship."
    >
      <div className="space-y-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover group relative overflow-hidden rounded-3xl"
          >
            <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
              {/* Visual */}
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[340px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Mock browser */}
                <div className="absolute inset-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
                  <div className="flex items-center gap-1.5 border-b border-white/[0.05] bg-[#141414] px-3 py-2">
                    <span className="size-2 rounded-full bg-white/15" />
                    <span className="size-2 rounded-full bg-white/15" />
                    <span className="size-2 rounded-full bg-white/15" />
                    <span className="ml-3 truncate text-[10px] text-muted-foreground">
                      {p.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="h-3 w-2/3 rounded bg-white/[0.08]" />
                    <div className="h-3 w-1/2 rounded bg-white/[0.05]" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-md bg-[var(--copper)]/15 ring-1 ring-[var(--copper)]/20" />
                      <div className="h-16 rounded-md bg-white/[0.04]" />
                      <div className="h-16 rounded-md bg-white/[0.04]" />
                    </div>
                    <div className="mt-2 h-2 w-3/4 rounded bg-white/[0.05]" />
                    <div className="h-2 w-1/2 rounded bg-white/[0.04]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-copper">
                    {p.tag}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-[28px]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[12px] text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--copper)] px-4 py-2 text-[13px] font-medium text-[#111] transition-all hover:bg-[#d9a572]"
                  >
                    Live Demo <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-foreground transition-all hover:border-[var(--copper)]/40"
                  >
                    <Github className="size-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
