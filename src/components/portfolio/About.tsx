import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Target, User2 } from "lucide-react";
import { Section } from "./Section";

const focus = [
  "Data Structures & Algorithms",
  "Full Stack Development",
  "System Design Fundamentals",
  "AI Applications",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A student engineer building with intent."
      subtitle="A snapshot of who I am, what I focus on, and where I'm heading."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2">
        {/* Who I Am */}
        <Card delay={0} className="md:col-span-4">
          <Header icon={User2} title="Who I Am" />
          <p className="mt-4 text-[15.5px] leading-relaxed text-foreground/85">
            Information Science Engineering student with a strong foundation in software
            development, problem solving, and modern web technologies. I enjoy turning ideas into
            polished, performant products and learning the systems that make them work.
          </p>
        </Card>

        {/* Education */}
        <Card delay={0.05} className="md:col-span-2 md:row-span-2">
          <Header icon={GraduationCap} title="Education" />
          <div className="mt-5 space-y-1.5">
            <div className="text-[15px] font-medium text-foreground">PES College of Engineering</div>
            <div className="text-sm text-muted-foreground">Mandya, Karnataka</div>
          </div>
          <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/30 p-4">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              CGPA
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-tight text-copper">8.73</span>
              <span className="text-sm text-muted-foreground">/ 10</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            B.E. — Information Science & Engineering
          </div>
        </Card>

        {/* Current Focus */}
        <Card delay={0.1} className="md:col-span-2">
          <Header icon={Sparkles} title="Current Focus" />
          <ul className="mt-4 space-y-2">
            {focus.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                <span className="size-1 rounded-full bg-[var(--copper)]" />
                {f}
              </li>
            ))}
          </ul>
        </Card>

        {/* Career Goal */}
        <Card delay={0.15} className="md:col-span-2">
          <Header icon={Target} title="Career Goal" />
          <p className="mt-4 text-sm leading-relaxed text-foreground/85">
            Secure an SDE role at a top technology company while continuously improving technical
            and communication skills.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`surface surface-hover rounded-3xl p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Header({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-xl border border-[var(--copper)]/25 bg-[var(--copper)]/10 text-copper">
        <Icon className="size-4" />
      </span>
      <h3 className="text-[15px] font-medium tracking-tight">{title}</h3>
    </div>
  );
}
