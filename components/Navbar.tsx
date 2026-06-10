"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/site";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-3 rounded-2xl glass ring-line py-3"
            : "my-4 py-3"
        }`}
      >
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Stellite Works home"
        >
          <Logo className="h-8 w-8" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-chalk">
            Stellite<span className="text-fog"> Works</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-fog transition-colors hover:text-chalk"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="group relative hidden overflow-hidden rounded-xl bg-chalk px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <span className="relative z-10">Book a consultation</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl ring-line text-mist transition-colors hover:text-chalk md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all ${
                  open ? "top-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all ${
                  open ? "top-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-1 overflow-hidden rounded-2xl glass ring-line p-2 md:hidden"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base text-mist transition-colors hover:bg-surface-2 hover:text-chalk"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-chalk px-4 py-3 text-center text-base font-medium text-ink"
            >
              Book a consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
