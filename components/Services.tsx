"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Services"
          title={
            <>
              Four disciplines.{" "}
              <span className="text-gradient">One hardened landscape.</span>
            </>
          }
          blurb="From the first blueprint to round-the-clock support, we cover the SAP capabilities that keep operations running."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="alloy-border group relative overflow-hidden p-7 sm:p-8"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-steel/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-steel-2">
                  SAP {s.tag}
                </span>
                <span className="font-mono text-xs text-fog/50">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-chalk sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-fog">{s.body}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-lg ring-line bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-mist"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
