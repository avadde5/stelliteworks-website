"use client";

import { motion } from "framer-motion";
import { OFFERINGS } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="relative scroll-mt-24 border-y border-line bg-ink-2/40 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Capabilities"
          title={
            <>
              The full stack of{" "}
              <span className="text-gradient">SAP expertise.</span>
            </>
          }
          blurb="Beyond the two flagship practices, we cover the modules and platforms that make up a modern SAP estate."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl ring-line bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative bg-ink p-7 transition-colors hover:bg-surface/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg ring-line bg-surface-2/60 font-mono text-xs text-steel-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-chalk">
                  {o.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fog">{o.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
