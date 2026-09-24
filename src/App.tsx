import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import { Trophy, X } from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClubSections from "@/components/ClubSections";
import FanZoneChatbot from "@/components/FanZoneChatbot";
import ContactFooter from "@/components/ContactFooter";
import { CLUB, IMAGES } from "@/data/clubData";

const CONFETTI_COLORS = ["#fbbf24", "#f59e0b", "#34d399", "#ffffff", "#fde68a"];

function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -40, x: `${(i % 10) * 10}%`, opacity: 1, rotate: 0 }}
          animate={{ y: "110vh", rotate: 360 + (i % 5) * 120, opacity: [1, 1, 0.8] }}
          transition={{ duration: 2.6 + (i % 5) * 0.4, delay: (i % 12) * 0.12, ease: "easeIn" }}
          className="absolute top-0 h-2.5 w-1.5 rounded-sm"
          style={{ backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
        />
      ))}
    </div>
  );
}

function CelebrationModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const id = setTimeout(onClose, 6500);
    return () => clearTimeout(id);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-emerald-950/85 backdrop-blur-md"
    >
      <Confetti />
      <motion.div
        initial={{ scale: 0.85, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="relative mx-4 w-full max-w-md overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-emerald-900 to-[#022c22] p-8 text-center shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-emerald-950/60 text-emerald-100 hover:bg-emerald-800"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <motion.img
          src={IMAGES.trophy}
          alt="Championship trophy"
          initial={{ rotate: -6, scale: 0.9 }}
          animate={{ rotate: [-6, 6, -6], scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="mx-auto h-28 w-28 rounded-2xl object-cover ring-2 ring-amber-400/50"
        />
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
          <Trophy size={16} weight="fill" /> {CLUB.championBadge}
        </div>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-wide text-white">
          We Are Champions!
        </h2>
        <p className="mt-3 text-sm text-emerald-100/80">
          {CLUB.name} lifts the Luac Malou First Edition Trophy. Hai Referendum, this one is for you.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 text-base font-bold text-emerald-950 transition-transform hover:scale-[1.02] active:scale-95"
        >
          Enter the Clubhouse
        </button>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(true);

  return (
    <div className="min-h-screen bg-[#022c22] text-emerald-50">
      <AnimatePresence>{celebrate && <CelebrationModal onClose={() => setCelebrate(false)} />}</AnimatePresence>

      <Navbar onOpenChat={() => setChatOpen(true)} />
      <main>
        <Hero />
        <ClubSections />
        <FanZoneChatbot
          chatOpen={chatOpen}
          onOpenChat={() => setChatOpen(true)}
          onCloseChat={() => setChatOpen(false)}
        />
        <ContactFooter />
      </main>

      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            background: "#064e3b",
            color: "#ecfdf5",
            border: "1px solid rgba(251,191,36,0.35)",
          },
        }}
      />
    </div>
  );
}

export default App;
