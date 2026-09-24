import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Megaphone,
  CalendarCheck,
  MapPin,
  HandWaving,
  PaperPlaneTilt,
  ShieldStar,
  Trophy,
  X,
} from "@phosphor-icons/react";
import { ANNOUNCEMENTS, CHAT_PRESETS, BOT_FALLBACKS, CLUB } from "@/data/clubData";
import type { ChatMessage, Announcement } from "@/types";

const KIND_META: Record<Announcement["kind"], { label: string; classes: string }> = {
  tour: { label: "Victory Tour", classes: "bg-amber-400/15 text-amber-300 border-amber-400/30" },
  clinic: { label: "Youth Clinic", classes: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30" },
  meeting: { label: "Meeting", classes: "bg-yellow-400/15 text-yellow-200 border-yellow-400/30" },
  community: { label: "Community", classes: "bg-teal-400/15 text-teal-200 border-teal-400/30" },
};

function Announcements() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {ANNOUNCEMENTS.map((a, i) => {
        const meta = KIND_META[a.kind];
        return (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest ${meta.classes}`}>
                {meta.label}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <CalendarCheck size={15} /> {a.date}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-white">{a.title}</h3>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-200/70">
              <MapPin size={14} /> {a.location}
            </div>
            <p className="mt-2 text-sm text-emerald-100/75">{a.summary}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m0",
      from: "bot",
      text: "Karibu! I am Abiey Luat, the Golden Glove and IT specialist of Alier Geng FA. Ask me anything about our championship run, goalkeeping, or the next club event. 🧤",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fallbackIdx = useRef(0);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const pushBot = (text: string) => {
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: `b${Date.now()}`, from: "bot", text }]);
      setTyping(false);
    }, 900);
  };

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: `u${Date.now()}`, from: "user", text }]);
    setInput("");
    const lower = text.toLowerCase();
    const preset = CHAT_PRESETS.find((p) =>
      p.label.toLowerCase().split(" ").some((w) => w.length > 3 && lower.includes(w)),
    );
    if (preset) {
      pushBot(preset.answer);
    } else if (lower.includes("penalty") || lower.includes("save")) {
      pushBot(CHAT_PRESETS[0].answer);
    } else if (lower.includes("final") || lower.includes("kuec") || lower.includes("2026")) {
      pushBot(CHAT_PRESETS[2].answer);
    } else if (lower.includes("event") || lower.includes("tour") || lower.includes("clinic")) {
      pushBot(CHAT_PRESETS[4].answer);
    } else if (lower.includes("champion") || lower.includes("win") || lower.includes("club")) {
      pushBot(CHAT_PRESETS[1].answer);
    } else {
      pushBot(BOT_FALLBACKS[fallbackIdx.current % BOT_FALLBACKS.length]);
      fallbackIdx.current += 1;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed inset-x-3 bottom-3 z-[70] mx-auto flex h-[70dvh] max-w-md flex-col overflow-hidden rounded-3xl border border-amber-400/30 bg-emerald-950 shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6"
          >
            <div className="flex items-center justify-between gap-3 border-b border-amber-400/20 bg-gradient-to-r from-emerald-900 to-emerald-950 p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-emerald-950">
                  <ShieldStar size={24} weight="fill" />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-lg tracking-wide text-white">AI Goalkeeper</div>
                  <div className="text-[11px] text-emerald-200/70">Abiey Luat · Golden Glove · Online</div>
                </div>
              </div>
              <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-emerald-900/70 text-emerald-100 hover:bg-emerald-800" aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.from === "user"
                        ? "rounded-br-sm bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-950"
                        : "rounded-bl-sm bg-emerald-900/70 text-emerald-50 ring-1 ring-amber-400/15"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-emerald-900/70 px-4 py-3 ring-1 ring-amber-400/15">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 }}
                        className="h-2 w-2 rounded-full bg-amber-400"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-amber-400/15 p-3">
              <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
                {CHAT_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => send(p.label)}
                    className="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 text-xs font-semibold text-amber-200 transition-colors hover:bg-amber-400/15"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Golden Glove..."
                  className="flex-1 rounded-full border border-emerald-400/20 bg-emerald-900/50 px-4 py-2.5 text-sm text-white placeholder:text-emerald-300/50 focus:border-amber-400/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-950 transition-transform hover:scale-105 active:scale-95"
                  aria-label="Send"
                >
                  <PaperPlaneTilt size={20} weight="fill" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function FanZoneChatbot({
  chatOpen,
  onCloseChat,
  onOpenChat,
}: {
  chatOpen: boolean;
  onCloseChat: () => void;
  onOpenChat: () => void;
}) {
  return (
    <section id="fanzone" className="relative bg-emerald-950/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">Fan Zone</span>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
            Community Board & AI Goalkeeper
          </h2>
          <p className="mt-3 text-emerald-100/70">
            Stay close to the champions. Upcoming events plus a live chat with Abiey Luat, our Golden Glove.
          </p>
        </div>

        <Announcements />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#022c22] p-6 sm:p-10"
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-600 text-emerald-950 shadow-xl">
              <HandWaving size={40} weight="fill" />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-3xl tracking-wide text-white">Chat with the Golden Glove</h3>
              <p className="mt-2 max-w-xl text-emerald-100/80">
                A tribute to H.E. Abiey Luat, our Best Goalkeeper and club IT specialist. Ask how to save a
                penalty, relive the February 2 final, or get goalkeeping tips with champion flair.
              </p>
            </div>
            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3.5 text-base font-bold text-emerald-950 shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.04] active:scale-95"
            >
              <Trophy size={20} weight="fill" />
              Open Chat
            </button>
          </div>
        </motion.div>
      </div>

      <ChatWidget open={chatOpen} onClose={onCloseChat} />

      {/* Floating launcher */}
      <button
        onClick={onOpenChat}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-3.5 font-bold text-emerald-950 shadow-2xl shadow-amber-500/30 transition-transform hover:scale-105 active:scale-95 lg:hidden"
        aria-label={`Open ${CLUB.name} chat`}
      >
        <ShieldStar size={22} weight="fill" />
        Chat
      </button>
    </section>
  );
}
