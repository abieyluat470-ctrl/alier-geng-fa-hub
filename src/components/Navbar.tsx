import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, Trophy } from "@phosphor-icons/react";
import { CLUB, IMAGES, NAV_LINKS } from "@/data/clubData";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ onOpenChat }: { onOpenChat: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-emerald-950/90 backdrop-blur-md border-b border-amber-400/20 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3"
          aria-label="Alier Geng FA home"
        >
          <img
            src={IMAGES.crest}
            alt="Alier Geng FA crest"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-amber-400/60"
          />
          <span className="text-left leading-none">
            <span className="block font-display text-2xl tracking-wide text-white">
              {CLUB.name}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
              {CLUB.tagline}
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === link.id
                  ? "text-amber-400"
                  : "text-emerald-50/80 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-amber-400/10 ring-1 ring-amber-400/30"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenChat}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-sm font-bold text-emerald-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
          >
            <Trophy size={18} weight="fill" />
            Fan Zone Chat
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full bg-emerald-900/70 text-amber-300 ring-1 ring-amber-400/30 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-amber-400/10 bg-emerald-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors ${
                    active === link.id
                      ? "bg-amber-400/10 text-amber-400"
                      : "text-emerald-50 hover:bg-emerald-900/60"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenChat();
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-base font-bold text-emerald-950"
              >
                <Trophy size={20} weight="fill" />
                Fan Zone Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
