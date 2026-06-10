import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  blurb,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-steel-2">
          <span className="h-px w-6 bg-steel/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-chalk sm:text-4xl lg:text-[44px]">
          {title}
        </h2>
      </Reveal>
      {blurb && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-fog">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}
