"use client";

import { motion } from "framer-motion";
import { ENGAGEMENTS } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Engagements() {
  return (
    <section id="engagements" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="How we engage"
          align="center"
          title={
            <>
              Three ways to{" "}
              <span className="text-gradient-warm">work with us.</span>
            </>
          }
          blurb="Pick the model that fits where you are — or blend them as the program evolves."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {ENGAGEMENTS.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="alloy-border group relative flex flex-col overflow-hidden p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-lilac/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-steel-2">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-chalk">
                {e.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                {e.body}
              </p>
              <p className="mt-6 border-t border-line pt-4 text-xs font-medium text-mist">
                {e.best}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
