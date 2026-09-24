import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, Megaphone, Users, ShieldStar, StarFour } from "@phosphor-icons/react";
import { CLUB, IMAGES, FINAL_MATCH } from "@/data/clubData";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const TICKER = [
  "Luac Malou First Edition Champions",
  "Final 2 - 1 vs Kuec Atong",
  "Golden Glove: Abiey Luat",
  "Golden Boot: Malou Nyok (9 goals)",
  "Tournament MVP: Chol Thon",
  "Best Coach: Chan Mark",
  "Proudly from Hai Referendum, Juba",
];

function useCountdown(target: string) {
  const [diff, setDiff] = useState(() => Date.now());
  useEffect(() => {
    const t = new Date(target + "T00:00:00").getTime();
    const id = setInterval(() => setDiff(t - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const ms = Math.max(0, diff);
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    mins: Math.floor((ms / 60000) % 60),
    secs: Math.floor((ms / 1000) % 60),
    past: diff <= 0,
  };
}

export default function Hero() {
  const c = useCountdown("2026-02-02");
  const stats = [
    { icon: Trophy, label: "First Edition Title", value: "CHAMPIONS" },
    { icon: ShieldStar, label: "Clean Sheets", value: "5" },
    { icon: StarFour, label: "Goals Scored", value: "16" },
    { icon: Users, label: "Squad Members", value: "24" },
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden pt-[72px]">
      <div className="absolute inset-0 -z-20">
        <img src={IMAGES.hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-950/80 to-[#022c22]" />
      </div>
      <div className="floodlight pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-10 pt-12 text-center sm:px-6 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-sm"
        >
          <Trophy size={18} weight="fill" />
          {CLUB.championBadge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Welcome to Alier Geng FA
          <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Home of the Champions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 max-w-2xl text-base text-emerald-100/90 sm:text-lg"
        >
          {CLUB.subheadline}. A neighborhood from {CLUB.base} that lifted the very first trophy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("squad")}
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3.5 text-base font-bold text-emerald-950 shadow-xl shadow-amber-500/25 transition-transform hover:scale-[1.04] active:scale-95"
          >
            Explore Squad
            <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection("match")}
            className="flex items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-900/40 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-amber-400/50 hover:bg-emerald-800/60 active:scale-95"
          >
            Latest Club News
          </button>
        </motion.div>

        {/* Countdown / celebration ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 w-full max-w-2xl rounded-2xl border border-amber-400/20 bg-emerald-950/60 p-5 backdrop-blur-md"
        >
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <Megaphone size={16} weight="fill" />
            {c.past ? "Title secured on" : "Champions since"}
          </div>
          <div className="mt-1 font-display text-3xl tracking-wide text-white">
            {FINAL_MATCH.date}
          </div>
          <div className="mt-4 flex items-stretch justify-center gap-2 sm:gap-3">
            {[
              { v: c.past ? c.days : Math.abs(c.days), l: "Days" },
              { v: c.hours, l: "Hrs" },
              { v: c.mins, l: "Min" },
              { v: c.secs, l: "Sec" },
            ].map((u) => (
              <div
                key={u.l}
                className="min-w-[62px] rounded-xl bg-emerald-900/70 px-3 py-2 ring-1 ring-amber-400/15"
              >
                <div className="font-display text-3xl leading-none text-amber-400">
                  {String(u.v).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-emerald-200/70">
                  {u.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating victory stats */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-4 backdrop-blur-sm"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
                <s.icon size={22} weight="fill" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl tracking-wide text-white">{s.value}</span>
                <span className="block text-xs text-emerald-200/70">{s.label}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-y border-amber-400/20 bg-emerald-950/80 py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-semibold text-emerald-100/80">
              <Trophy size={16} weight="fill" className="text-amber-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
