import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Shield,
  Users,
  Target,
  HandHeart,
  Crown,
  Medal,
  Trophy,
  SoccerBall,
  Quotes,
  CalendarCheck,
  MapPin,
  Check,
  Star,
} from "@phosphor-icons/react";
import {
  CLUB,
  VALUES,
  LEADERSHIP,
  SQUAD,
  SQUAD_FILTERS,
  FILTER_TO_POSITION,
  FINAL_MATCH,
  HONORS,
  AWARDS,
  IMAGES,
} from "@/data/clubData";
import type { Player } from "@/types";

const VALUE_ICONS = { shield: Shield, users: Users, target: Target, heart: HandHeart };

function initials(name: string) {
  return name
    .replace(/^H\.E\.\s+/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">{title}</h2>
      <p className="mt-3 text-emerald-100/70">{sub}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Story"
          title="About the Club & Leadership"
          sub="Rooted in Hai Referendum, driven by unity, crowned by resilience."
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-amber-400/20"
          >
            <img src={IMAGES.trophy} alt="Championship trophy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                <Trophy size={14} weight="fill" /> First Edition Champions
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-amber-400">
              <MapPin size={18} weight="fill" /> {CLUB.base}
            </div>
            {CLUB.about.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-emerald-50/85">{p}</p>
            ))}
            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-emerald-900/40 p-5">
              <div className="flex items-start gap-3">
                <Quotes size={28} weight="fill" className="shrink-0 text-amber-400/70" />
                <p className="text-emerald-50/90">{CLUB.mission}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[v.icon];
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-5 transition-colors hover:border-amber-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
                  <Icon size={22} weight="fill" />
                </span>
                <h3 className="mt-3 font-display text-xl tracking-wide text-white">{v.title}</h3>
                <p className="mt-1 text-sm text-emerald-100/70">{v.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership */}
        <div className="mt-16">
          <h3 className="mb-6 text-center font-display text-3xl tracking-wide text-white">
            Club & Federation Leadership
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {LEADERSHIP.map((l, i) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-b from-emerald-900/70 to-emerald-950/70 p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 font-display text-xl text-emerald-950">
                    {l.initials}
                  </span>
                  <div>
                    <div className="font-display text-2xl leading-none tracking-wide text-white">{l.name}</div>
                    <div className="mt-1 text-sm font-semibold text-amber-400">{l.title}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-emerald-300/70">{l.org}</div>
                <p className="mt-2 text-sm text-emerald-100/75">{l.note}</p>
                <Crown size={64} weight="thin" className="absolute -right-3 -top-3 text-amber-400/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayerCard({ p }: { p: Player }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-5"
    >
      <div className="flex items-start justify-between">
        <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} font-display text-2xl text-emerald-950 shadow-lg`}>
          {p.number ? `#${p.number}` : initials(p.name)}
        </div>
        {p.captain && (
          <span className="rounded-full bg-amber-400/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
            Captain
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl leading-none tracking-wide text-white">{p.name}</h3>
      <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-amber-400">
        <SoccerBall size={16} weight="fill" /> {p.role}
      </div>
      <p className="mt-2 text-sm text-emerald-100/70">{p.bio}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.badges.map((b) => (
          <span key={b} className="rounded-full border border-amber-400/25 bg-amber-400/5 px-2.5 py-0.5 text-[11px] font-semibold text-amber-200">
            {b}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-emerald-400/10 pt-3">
        {p.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-lg leading-none text-white">{s.value}</div>
            <div className="text-[10px] uppercase tracking-wide text-emerald-300/60">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Squad() {
  const [filter, setFilter] = useState<string>("All");
  const allowed = FILTER_TO_POSITION[filter];
  const players = allowed.length ? SQUAD.filter((p) => allowed.includes(p.position)) : SQUAD;

  return (
    <section id="squad" className="relative bg-emerald-950/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Champions"
          title="Squad & Stars Directory"
          sub="The players and coaches who brought the First Edition trophy home."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SQUAD_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-950 shadow-lg shadow-amber-500/20"
                  : "border border-emerald-400/20 bg-emerald-900/40 text-emerald-100/80 hover:border-amber-400/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {players.map((p) => (
              <PlayerCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

const AWARD_ICONS = { trophy: Trophy, glove: Shield, boot: Star, coach: Medal, fan: Users };

function MatchCenter() {
  return (
    <section id="match" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trophy Cabinet"
          title="Honors & Match Center"
          sub="Relive the February 2, 2026 final that crowned a champion."
        />

        {/* Final banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#022c22]"
        >
          <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                <Trophy size={14} weight="fill" /> The Final
              </div>
              <h3 className="mt-4 font-display text-3xl tracking-wide text-white sm:text-4xl">
                {FINAL_MATCH.competition}
              </h3>
              <div className="mt-2 flex items-center gap-4 text-sm text-emerald-200/70">
                <span className="flex items-center gap-1.5"><CalendarCheck size={16} /> {FINAL_MATCH.date}</span>
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Hai Referendum</span>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <span className="font-display text-2xl text-white">Alier Geng</span>
                <span className="rounded-2xl bg-amber-400 px-5 py-2 font-display text-4xl tracking-wide text-emerald-950 shadow-lg shadow-amber-500/25">
                  {FINAL_MATCH.score}
                </span>
                <span className="font-display text-2xl text-emerald-200/80">{FINAL_MATCH.opponent}</span>
              </div>
              <p className="mt-5 leading-relaxed text-emerald-100/80">{FINAL_MATCH.recap}</p>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-950/50 p-5">
              <div className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-400">Match Timeline</div>
              <ol className="relative space-y-4 border-l border-amber-400/20 pl-5">
                {FINAL_MATCH.timeline.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-[26px] top-1 grid h-4 w-4 place-items-center rounded-full ${
                        t.kind === "goal"
                          ? "bg-amber-400"
                          : t.kind === "save"
                          ? "bg-emerald-400"
                          : t.kind === "whistle"
                          ? "bg-yellow-500"
                          : "bg-emerald-600"
                      }`}
                    />
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg text-amber-300">{t.minute}</span>
                      {t.kind === "goal" && <Check size={14} weight="bold" className="text-amber-400" />}
                    </div>
                    <p className="text-sm text-emerald-100/80">{t.event}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Honors */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {HONORS.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-amber-400/20 bg-emerald-900/40 p-5"
            >
              <Trophy size={26} weight="fill" className="text-amber-400" />
              <h4 className="mt-3 font-display text-xl tracking-wide text-white">{h.title}</h4>
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">{h.season}</div>
              <p className="mt-2 text-sm text-emerald-100/70">{h.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Individual awards */}
        <div className="mt-14">
          <h3 className="mb-6 text-center font-display text-3xl tracking-wide text-white">
            First Edition Individual Awards
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {AWARDS.map((a, i) => {
              const Icon = AWARD_ICONS[a.icon];
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-b from-emerald-900/70 to-emerald-950/70 p-5 text-center"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-emerald-950 shadow-lg">
                    <Icon size={26} weight="fill" />
                  </span>
                  <div className="mt-3 text-[11px] font-bold uppercase tracking-widest text-amber-400">{a.category}</div>
                  <h4 className="mt-1 font-display text-xl leading-tight tracking-wide text-white">{a.award}</h4>
                  <div className="text-sm font-semibold text-emerald-200">{a.recipient}</div>
                  <p className="mt-2 text-xs text-emerald-100/65">{a.detail}</p>
                  <Medal size={72} weight="thin" className="absolute -bottom-4 -right-4 text-amber-400/10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ClubSections() {
  return (
    <>
      <About />
      <Squad />
      <MatchCenter />
    </>
  );
}
