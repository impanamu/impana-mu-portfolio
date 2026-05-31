import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Download, Send } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const links = [
  { icon: Mail, label: "Email", value: "impana.mu@example.com", href: "mailto:impana.mu@example.com" },
  { icon: Github, label: "GitHub", value: "github.com/impana-mu", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/impana-mu", href: "https://linkedin.com" },
  { icon: Download, label: "Resume", value: "Download PDF", href: "/Impana_MU_Resume.pdf" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent. I'll get back to you soon.");
    }, 700);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great."
      subtitle="Open to SDE roles, internships, and collaborations. The best way to reach me is below."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <div className="surface rounded-3xl p-7">
          <div className="space-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-transparent p-4 transition-all hover:border-white/[0.06] hover:bg-white/[0.03]"
              >
                <span className="grid size-10 place-items-center rounded-xl border border-[var(--copper)]/25 bg-[var(--copper)]/10 text-copper">
                  <l.icon className="size-4" />
                </span>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {l.label}
                  </div>
                  <div className="text-[14.5px] font-medium tracking-tight text-foreground">
                    {l.value}
                  </div>
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-copper">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="surface rounded-3xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-base"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-base"
                placeholder="you@company.com"
              />
            </Field>
          </div>
          <Field label="Message" className="mt-4">
            <textarea
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-base resize-none"
              placeholder="Tell me about the role, project, or idea…"
            />
          </Field>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[12px] text-muted-foreground">
              {form.message.length}/1000
            </span>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--copper)] px-5 py-2.5 text-[13.5px] font-medium text-[#111] transition-all hover:bg-[#d9a572] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"}
              <Send className="size-3.5" />
            </button>
          </div>
        </motion.form>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s ease, background .2s ease;
        }
        .input-base::placeholder { color: var(--muted-foreground); }
        .input-base:focus { border-color: rgba(198,142,85,0.45); background: rgba(255,255,255,0.04); }
      `}</style>
    </Section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
