import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    title: "Introduction to Cloud Computing & Core AWS Services",
    issuer: "Coursera",
    file: "/certs/cloud-computing.pdf",
  },
  {
    title: "Supervised Machine Learning: Classification",
    issuer: "IBM · Coursera",
    file: "/certs/machine-learning.pdf",
  },
  {
    title: "Agile Project Management",
    issuer: "University of Colorado Boulder · Coursera",
    file: "/certs/cryptography.pdf",
  },
  {
    title: "Full Stack Web Development with Python — Professional",
    issuer: "Coursera",
    file: "/certs/full-stack-web.pdf",
  },
];

export function Experience() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continually learning, formally."
      subtitle="Coursework and credentials that back up the engineering work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {certs.map((c, idx) => (
          <motion.a
            key={c.title}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(198,142,85,0.35), transparent 70%)" }}
            />
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-10 place-items-center rounded-xl border border-[var(--copper)]/25 bg-[var(--copper)]/10 text-copper">
                <Award className="size-4" />
              </span>
              <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-copper" />
            </div>
            <h3 className="mt-5 text-[16px] font-medium leading-snug tracking-tight">
              {c.title}
            </h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground">{c.issuer}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
