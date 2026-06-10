import { APPROACH } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative scroll-mt-24 border-y border-line bg-ink-2/40 py-24 sm:py-32"
    >
      {/* faint blueprint backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-fade bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Approach"
          title={
            <>
              The way we forge.{" "}
              <span className="text-gradient-warm">Assay to sustain.</span>
            </>
          }
          blurb="An alloy is only as good as its process. Ours is built to remove risk at every phase — so go-live is the quiet part."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl ring-line sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((step, i) => (
            <Reveal
              key={step.no}
              delay={i * 0.08}
              className="group relative bg-surface/40 p-7 transition-colors hover:bg-surface-2/60"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(138,160,255,0.5)]">
                  {step.no}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-steel/40 to-transparent" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-chalk">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
