import { NAV, CONTACT_EMAIL } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-[15px] font-semibold tracking-tight text-chalk">
                Stellite<span className="text-fog"> Works</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              SAP consulting and implementation — AMS, S/4HANA, EWM, and FI/CO.
              Landscapes engineered to endure.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-20">
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog/60">
                Explore
              </span>
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-mist transition-colors hover:text-chalk"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-fog/60">
                Contact
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-mist transition-colors hover:text-chalk"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href="/#contact"
                className="text-sm text-mist transition-colors hover:text-chalk"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-fog/70">
            © {new Date().getFullYear()} Stellite Works. All rights reserved.
          </p>
          <p className="font-mono text-xs text-fog/60">
            SAP® and S/4HANA® are trademarks of SAP SE. Stellite Works is an
            independent consultancy.
          </p>
        </div>
      </div>
    </footer>
  );
}
