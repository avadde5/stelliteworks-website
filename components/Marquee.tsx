import { MODULES } from "@/lib/site";

export default function Marquee() {
  const row = [...MODULES, ...MODULES];
  return (
    <section aria-label="SAP modules we work across" className="relative py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-fog/70">
          Across the SAP stack
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {row.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="flex items-center gap-2 rounded-full ring-line bg-surface/60 px-5 py-2.5 text-sm font-medium text-mist"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-steel" />
              SAP {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
