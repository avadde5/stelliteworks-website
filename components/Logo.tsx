/**
 * Stellite Works mark — a faceted alloy hexagon with an inner "S" cut.
 * Pure SVG, no image asset. Subtle gradient + facet lines suggest forged metal.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sw-alloy" x1="8" y1="4" x2="40" y2="44">
          <stop offset="0" stopColor="#aab6ff" />
          <stop offset="0.55" stopColor="#6e8bff" />
          <stop offset="1" stopColor="#b08cff" />
        </linearGradient>
        <linearGradient id="sw-spark" x1="0" y1="0" x2="0" y2="48">
          <stop offset="0" stopColor="#ffce8a" />
          <stop offset="1" stopColor="#ff9f4d" />
        </linearGradient>
      </defs>
      {/* hexagon */}
      <path
        d="M24 3.5 41.7 13.75 V34.25 L24 44.5 6.3 34.25 V13.75 Z"
        stroke="url(#sw-alloy)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(110,139,255,0.06)"
      />
      {/* facet lines */}
      <path
        d="M24 3.5 V18 M6.3 13.75 24 24 41.7 13.75 M24 24 V44.5"
        stroke="url(#sw-alloy)"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeLinejoin="round"
      />
      {/* spark core */}
      <circle cx="24" cy="24" r="3.1" fill="url(#sw-spark)" />
      <circle cx="24" cy="24" r="6" stroke="url(#sw-spark)" strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  );
}
