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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* Background field */}
      <div className="absolute inset-0 -z-10">
        {/* gradient mesh */}
        <div className="absolute left-1/2 top-[-10%] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(110,139,255,0.22),transparent)] blur-2xl" />
        <div className="absolute right-[8%] top-[28%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(176,140,255,0.18),transparent)] blur-2xl" />
        <div className="absolute left-[6%] top-[44%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(255,159,77,0.10),transparent)] blur-2xl" />
        {/* lattice */}
        <LatticeCanvas className="absolute inset-0 h-full w-full opacity-90" />
        {/* blueprint grid */}
        <div className="grid-fade absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px]" />
        {/* fade to page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            custom={0}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full glass ring-line px-3.5 py-1.5 text-xs font-medium text-mist"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            SAP-certified consulting · AMS &amp; implementation
          </motion.div>

          <motion.h1
            custom={1}
            variants={rise}
            initial="hidden"
            animate="show"
            className="font-display text-[40px] font-bold leading-[1.05] tracking-tight text-chalk sm:text-6xl lg:text-7xl"
          >
            SAP landscapes,
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">engineered to endure.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-fog sm:text-xl"
          >
            Stellite Works is an SAP consulting and implementation firm. We
            design, deliver, and run{" "}
            <span className="text-mist">S/4HANA, EWM, and FI/CO</span>{" "}
            landscapes — then keep them running under pressure with managed AMS
            support.
          </motion.p>

          <motion.div
            custom={3}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-chalk px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Book a consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass ring-line px-6 py-3.5 text-sm font-semibold text-mist transition-colors hover:text-chalk sm:w-auto"
            >
              Explore services
            </a>
          </motion.div>

          <motion.p
            custom={4}
            variants={rise}
            initial="hidden"
            animate="show"
            className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-fog/70"
          >
            Trusted to run mission-critical SAP for teams like Radiant Delivers
          </motion.p>
        </div>
      </div>
    </section>
  );
}
