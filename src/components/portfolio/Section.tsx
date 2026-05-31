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
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-copper">
            <span className="h-px w-8 bg-[var(--copper)]/60" />
            {eyebrow}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
