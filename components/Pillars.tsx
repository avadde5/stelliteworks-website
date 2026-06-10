"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl space-y-20 px-5 sm:space-y-28 sm:px-8">
        {PILLARS.map((p, i) => (
          <div
            key={p.tag}
            className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14"
          >
            {/* Left: heading + lede + outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-steel-2">
                <span className="h-px w-6 bg-steel/60" />
                SAP {p.tag}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-chalk sm:text-4xl">
                {p.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-fog">{p.lede}</p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {p.outcomes.map((o) => (
                  <li
                    key={o}
                    className="inline-flex items-center gap-2 rounded-lg ring-line bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-mist"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 6.5l2.2 2.2L9.5 3.5" stroke="#8aa0ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: feature grid */}
            <div
              className={`grid gap-4 sm:grid-cols-2 lg:col-span-7 ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              {p.features.map((f, j) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease, delay: j * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="alloy-border group relative overflow-hidden p-6"
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-steel/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="font-mono text-xs text-fog/50">
                    0{j + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-chalk">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
