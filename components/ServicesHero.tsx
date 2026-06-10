"use client";

import { motion } from "framer-motion";
import LatticeCanvas from "./LatticeCanvas";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.1 + i * 0.08 },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12%] h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(110,139,255,0.20),transparent)] blur-2xl" />
        <div className="absolute left-[10%] top-[36%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(255,159,77,0.09),transparent)] blur-2xl" />
        <LatticeCanvas className="absolute inset-0 h-full w-full opacity-80" />
        <div className="grid-fade absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full glass ring-line px-3.5 py-1.5 text-xs font-medium text-mist"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-steel" />
            Services · SAP, end to end
          </motion.div>

          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-chalk sm:text-6xl"
          >
            Build it once.{" "}
            <span className="text-gradient">Run it for years.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
          >
            Two flagship practices — SAP implementations and managed AMS — backed
            by deep capability across the SAP stack. Whatever phase you&apos;re
            in, we meet the landscape where it is and harden it from there.
          </motion.p>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-chalk px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              See the practices
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass ring-line px-6 py-3.5 text-sm font-semibold text-mist transition-colors hover:text-chalk"
            >
              Book a consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
