import Reveal from "./Reveal";
import { CONTACT_EMAIL } from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl ring-line bg-gradient-to-b from-surface to-ink-2 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* glow + grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(110,139,255,0.25),transparent)] blur-2xl" />
            <div className="grid-fade absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel-2">
              Start the conversation
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-3xl font-bold tracking-tight text-chalk sm:text-5xl">
              Let’s pressure-test your SAP roadmap.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
              Whether you’re planning an S/4HANA move or need an AMS partner who
              actually answers, we’ll bring a clear, no-jargon assessment.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-chalk px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Book a consultation
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass ring-line px-7 py-3.5 text-sm font-semibold text-mist transition-colors hover:text-chalk sm:w-auto"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
