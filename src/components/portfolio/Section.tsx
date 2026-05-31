import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--cyan)]">
            <span className="h-px w-8 bg-[var(--cyan)]" /> {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {title.split(" ").map((w, i, a) => (
              <span key={i} className={i === a.length - 1 ? "text-gradient" : ""}>
                {w}{" "}
              </span>
            ))}
          </h2>
          {subtitle && <p className="mt-4 text-foreground/60">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
