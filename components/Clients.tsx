import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Clients"
          align="center"
          title={
            <>
              Operations that{" "}
              <span className="text-gradient">cannot go down.</span>
            </>
          }
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <figure className="alloy-border relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-steel/15 blur-3xl" />
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              className="text-steel-2"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 7L7 12h3v5H4v-5l3-5h3zm10 0l-3 5h3v5h-6v-5l3-5h3z" opacity="0.7" />
            </svg>
            <blockquote className="mt-5 text-balance font-display text-xl font-medium leading-relaxed text-mist sm:text-2xl">
              “Stellite Works runs our SAP landscape like it’s their own. When
              the warehouse is moving freight at 2 a.m., their AMS team is the
              reason we don’t even notice the system underneath it.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-steel to-lilac font-display text-sm font-bold text-ink">
                RD
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-chalk">
                  Operations Leadership
                </span>
                <span className="block text-fog">Radiant Delivers</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* logo strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
            {["Radiant Delivers", "Logistics", "Manufacturing", "Distribution", "Retail"].map(
              (name) => (
                <span
                  key={name}
                  className="font-display text-lg font-semibold tracking-tight text-fog"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
