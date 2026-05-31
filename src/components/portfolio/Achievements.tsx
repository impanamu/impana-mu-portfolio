import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Award, Code2, GraduationCap, Trophy } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 8.73, suffix: "", label: "CGPA", decimals: 2 },
  { icon: Trophy, value: 1, suffix: "", label: "Smart India Hackathon — Institute Round Qualifier", small: true },
  { icon: Code2, value: 8, suffix: "+", label: "Full Stack Projects Shipped" },
  { icon: Award, value: 4, suffix: "+", label: "Coursera Certifications" },
];

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    const unsub = mv.on("change", (v) => setDisplay(v.toFixed(decimals)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, decimals, mv]);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones along the way."
      subtitle="A few highlights that reflect consistent effort and curiosity."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="surface surface-hover relative overflow-hidden rounded-2xl p-6"
          >
            <span className="grid size-9 place-items-center rounded-xl border border-[var(--copper)]/25 bg-[var(--copper)]/10 text-copper">
              <s.icon className="size-4" />
            </span>
            {s.small ? (
              <div className="mt-5 text-[15px] font-medium leading-snug tracking-tight text-foreground">
                {s.label}
              </div>
            ) : (
              <>
                <div className="mt-5 text-4xl font-semibold tracking-tight text-foreground">
                  <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />
                </div>
                <div className="mt-1 text-[13px] text-muted-foreground">{s.label}</div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
