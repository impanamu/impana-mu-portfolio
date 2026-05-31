import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send, Terminal } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

const channels = [
  { icon: Mail, label: "Email", value: "impana.mu@gmail.com", href: "mailto:impana.mu@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/impana", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/impana", href: "#" },
  { icon: Download, label: "Resume", value: "Download PDF", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open a channel"
      subtitle="Drop a line — I'll respond within a day."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Channels */}
        <div className="space-y-3 lg:col-span-2">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 6 }}
                className="border-glow glass group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white/[0.06]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/30 to-[var(--cyan)]/30 text-[var(--cyan)]">
                  <Icon className="size-5" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    {c.label}
                  </div>
                  <div className="text-sm text-foreground/90 transition-colors group-hover:text-[var(--cyan)]">
                    {c.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Terminal form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-glow glass-strong overflow-hidden rounded-2xl lg:col-span-3"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-foreground/50">
              <Terminal className="size-3" /> impana@portfolio:~/contact
            </div>
            <span className="w-12" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-4 p-6 font-mono text-sm"
          >
            <Field label="name" placeholder="your name" />
            <Field label="email" type="email" placeholder="you@domain.com" />
            <div>
              <label className="mb-1.5 block text-xs text-[var(--cyan)]">{">"} message</label>
              <textarea
                rows={5}
                placeholder="type your message..."
                className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-[var(--neon)] focus:shadow-[0_0_25px_-5px_var(--neon)]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--neon)] to-[var(--cyan)] px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              {sent ? "Message sent ✓" : (<>execute --send <Send className="size-3.5" /></>)}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-[var(--cyan)]">{">"} {label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-[var(--neon)] focus:shadow-[0_0_25px_-5px_var(--neon)]"
      />
    </div>
  );
}
