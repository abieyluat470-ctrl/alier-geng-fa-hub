import { useState } from "react";
import { motion } from "framer-motion";
import {
  Envelope,
  Phone,
  MapPin,
  PaperPlaneTilt,
  WhatsappLogo,
  FacebookLogo,
  MessengerLogo,
  Trophy,
  CheckCircle,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { CLUB, IMAGES, SOCIALS, SUBJECT_OPTIONS } from "@/data/clubData";
import type { ContactFormState, Social } from "@/types";

const SOCIAL_ICONS: Record<Social["icon"], typeof WhatsappLogo> = {
  whatsapp: WhatsappLogo,
  facebook: FacebookLogo,
  messenger: MessengerLogo,
};

const EMPTY: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  subject: SUBJECT_OPTIONS[0],
  message: "",
};

export default function ContactFooter() {
  const [form, setForm] = useState<ContactFormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof ContactFormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.message.trim()) next.message = "Tell us a little about your message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSent(true);
    toast.success("Message sent! The champions of Alier Geng FA will reply soon.");
    setForm(EMPTY);
  };

  const field =
    "w-full rounded-xl border bg-emerald-900/50 px-4 py-3 text-sm text-white placeholder:text-emerald-300/50 focus:outline-none transition-colors";

  return (
    <>
      <section id="contact" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">Get In Touch</span>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
              Contact the Club
            </h2>
            <p className="mt-3 text-emerald-100/70">
              Join the academy, sponsor the champions, or plan a community event with us.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Info + socials */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
                    <MapPin size={22} weight="fill" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-300/70">Home Ground</div>
                    <div className="font-semibold text-white">{CLUB.base}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
                    <Envelope size={22} weight="fill" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-300/70">Email</div>
                    <div className="font-semibold text-white">info@aliergengfa.org</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/15 text-amber-400">
                    <Phone size={22} weight="fill" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-emerald-300/70">Phone</div>
                    <div className="font-semibold text-white">+211 900 000 000</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-900/40 p-6">
                <div className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">Follow the Champions</div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {SOCIALS.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon];
                    return (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/25 bg-emerald-950/50 px-3 py-3 text-sm font-semibold text-emerald-50 transition-colors hover:border-amber-400/60 hover:bg-amber-400/10"
                      >
                        <Icon size={20} weight="fill" className="text-amber-400" />
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-emerald-900/60 to-emerald-950/60 p-6 sm:p-8"
            >
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-amber-400/15 text-amber-400"
                  >
                    <CheckCircle size={44} weight="fill" />
                  </motion.span>
                  <h3 className="mt-5 font-display text-3xl tracking-wide text-white">Message Received!</h3>
                  <p className="mt-2 max-w-sm text-emerald-100/75">
                    Thank you for reaching out to {CLUB.name}. A member of our community team will reply shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-amber-400/40 px-6 py-2.5 text-sm font-bold text-amber-300 transition-colors hover:bg-amber-400/10"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-emerald-200/70">Full Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Your name"
                      className={`${field} ${errors.name ? "border-red-400/60" : "border-emerald-400/15 focus:border-amber-400/50"}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-emerald-200/70">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+211 ..."
                      className={`${field} ${errors.phone ? "border-red-400/60" : "border-emerald-400/15 focus:border-amber-400/50"}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-emerald-200/70">Email</label>
                    <input
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@example.com"
                      className={`${field} ${errors.email ? "border-red-400/60" : "border-emerald-400/15 focus:border-amber-400/50"}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-emerald-200/70">Subject Interest</label>
                    <select
                      value={form.subject}
                      onChange={(e) => set("subject", e.target.value)}
                      className={`${field} border-emerald-400/15 focus:border-amber-400/50`}
                    >
                      {SUBJECT_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-emerald-950 text-white">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-widest text-emerald-200/70">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={4}
                      placeholder="How can the champions help?"
                      className={`${field} resize-none ${errors.message ? "border-red-400/60" : "border-emerald-400/15 focus:border-amber-400/50"}`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-2 mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3.5 text-base font-bold text-emerald-950 shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <PaperPlaneTilt size={20} weight="fill" />
                    Send Message
                  </button>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-400/15 bg-emerald-950/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={IMAGES.crest} alt="Alier Geng FA crest" className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-400/50" />
                <div>
                  <div className="font-display text-2xl tracking-wide text-white">{CLUB.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">{CLUB.tagline}</div>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm text-emerald-100/70">
                Defending Champions of the Luac Akook Yieu / Luac Malou First Edition. Proudly representing {CLUB.base}.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300">
                <Trophy size={14} weight="fill" /> {CLUB.championBadge}
              </div>
            </div>
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">Affiliation</div>
              <p className="text-sm text-emerald-100/70">Luach Akook Yieu Football Federation</p>
              <p className="mt-1 text-sm text-emerald-100/70">President: Awuol Peter Lino</p>
              <p className="mt-1 text-sm text-emerald-100/70">{CLUB.base}</p>
            </div>
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">Connect</div>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon];
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-emerald-100/75 transition-colors hover:text-amber-300"
                    >
                      <Icon size={18} weight="fill" className="text-amber-400" /> {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-emerald-400/10 pt-6 text-center text-xs text-emerald-300/60">
            © 2026 {CLUB.name}. All rights reserved. Home of the Champions.
          </div>
        </div>
      </footer>
    </>
  );
}
