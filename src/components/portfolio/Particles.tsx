import { useMemo } from "react";

export function Particles({ count = 24 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        l: Math.random() * 100,
        t: Math.random() * 100,
        d: 4 + Math.random() * 10,
        s: 2 + Math.random() * 4,
        c: Math.random() > 0.5 ? "var(--neon)" : "var(--cyan)",
      })),
    [count]
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            left: `${d.l}%`,
            top: `${d.t}%`,
            width: d.s,
            height: d.s,
            background: d.c,
            boxShadow: `0 0 ${d.s * 4}px ${d.c}`,
            animationDuration: `${d.d}s`,
            animationDelay: `${-Math.random() * d.d}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
