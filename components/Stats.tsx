"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import { STATS, type Stat } from "@/lib/site";

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  const decimals = stat.value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, stat.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return controls.stop;
  }, [start, mv, stat.value, decimals]);

  return (
    <span className="font-display text-5xl font-bold tracking-tight text-chalk sm:text-6xl">
      {display}
      <span className="text-gradient">{stat.suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="outcomes" ref={ref} className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl ring-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink p-8 sm:p-9"
            >
              <Counter stat={stat} start={inView} />
              <p className="mt-3 text-sm leading-relaxed text-fog">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
