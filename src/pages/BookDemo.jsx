import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Play,
  Map,
  Lock,
} from 'lucide-react';

const ACCENT = '#99A0F9';
const GOLD = '#F8BD64';

const expectItems = [
  {
    icon: Clock,
    title: 'Response in < 24 hours',
    desc: 'A governance architect reviews your request and gets back quickly.',
  },
  {
    icon: ShieldCheck,
    title: '30-minute gap assessment',
    desc: 'We map compliance exposure across your hybrid estate.',
  },
  {
    icon: Play,
    title: 'Live platform walkthrough',
    desc: 'See Torro enforce policies and lineage in real time.',
  },
  {
    icon: Map,
    title: 'Custom readiness roadmap',
    desc: 'Leave with a clear DPDP and governance path forward.',
  },
];

const fieldClass =
  'h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[14px] text-white shadow-sm transition-all placeholder:text-white/30 focus:border-[#99A0F9]/45 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#99A0F9]/20';

const BookDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] pb-20 pt-[calc(var(--header-height)+2rem)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.10)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(248,189,100,0.06)_0%,transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <div className="mb-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5">
            <CalendarCheck className="h-4 w-4" style={{ color: ACCENT }} />
            <span className="text-[12px] font-black uppercase tracking-[0.35em]" style={{ color: ACCENT }}>
              Book a Demo
            </span>
          </div>

          <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
            Evaluate readiness in <span style={{ color: ACCENT }}>30 minutes</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
            Talk to a Torro governance architect. We&apos;ll map your estate, identify gaps, and show what full
            compliance looks like in 4 weeks.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex h-full flex-col rounded-2xl border border-[#1e2343]/60 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-6 md:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="box-copy text-left">
                <h2 className="!text-left text-xl font-black tracking-tight text-white md:text-2xl">
                  Schedule a session
                </h2>
                <p className="!mx-0 mt-1.5 !text-left text-[13px] font-medium text-white/45">
                  Architecture-level deep dive · No commitment
                </p>
              </div>
              <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50 sm:inline-flex">
                <Lock className="h-3 w-3" style={{ color: ACCENT }} />
                Secure
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="box-copy space-y-4 text-left"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-white/40">
                        Full Name *
                      </label>
                      <input type="text" required className={fieldClass} placeholder="e.g. Rajiv Nair" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-white/40">
                        Business Email *
                      </label>
                      <input type="email" required className={fieldClass} placeholder="ciso@company.com" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-white/40">
                        Company *
                      </label>
                      <input type="text" required className={fieldClass} placeholder="Your organization" />
                    </div>
                    <div className="relative space-y-1.5">
                      <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-white/40">
                        Your Role *
                      </label>
                      <select required className={`${fieldClass} cursor-pointer appearance-none pr-10`}>
                        <option value="" className="bg-[#11152a]">
                          Select role
                        </option>
                        <option className="bg-[#11152a]">CISO / CTO</option>
                        <option className="bg-[#11152a]">Data Architect</option>
                        <option className="bg-[#11152a]">Privacy Officer</option>
                        <option className="bg-[#11152a]">Engineering Manager</option>
                        <option className="bg-[#11152a]">Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-[2.15rem] text-white/40" aria-hidden="true">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="pl-0.5 text-[11px] font-black uppercase tracking-widest text-white/40">
                      Primary governance challenge (optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[14px] text-white shadow-sm transition-all placeholder:text-white/30 focus:border-[#99A0F9]/45 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#99A0F9]/20"
                      placeholder="DPDP readiness, lineage gaps, access control, audit evidence…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 text-[12px] font-black uppercase tracking-[0.2em] text-black transition-all hover:brightness-105 active:scale-[0.98]"
                    style={{
                      backgroundColor: GOLD,
                      boxShadow: '0 14px 34px -18px rgba(248,189,100,0.55)',
                    }}
                  >
                    Book a Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-14 text-center"
                >
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border"
                    style={{
                      backgroundColor: 'rgba(153,160,249,0.12)',
                      borderColor: 'rgba(153,160,249,0.3)',
                    }}
                  >
                    <CheckCircle2 className="h-8 w-8" style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mb-2 text-2xl font-black text-white">Request received</h3>
                  <p className="max-w-sm text-[14px] font-medium leading-relaxed text-white/50">
                    A Torro governance architect will contact you within 24 hours.
                  </p>
                  <Link
                    to="/torro-onedata"
                    className="mt-8 inline-flex items-center gap-2 text-[13px] font-bold transition-colors hover:text-white"
                    style={{ color: ACCENT }}
                  >
                    Explore the platform <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* What to expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="box-copy flex h-full flex-col rounded-2xl border border-[#1e2343]/60 bg-gradient-to-b from-[#11152a]/80 to-[#0a0d1a] p-6 text-left md:p-8"
          >
            <h2 className="!text-left text-xl font-black tracking-tight text-white md:text-2xl">What to expect</h2>
            <p className="!mx-0 mt-1.5 !text-left text-[13px] font-medium text-white/45">
              Built for CISOs, data leaders, and compliance teams.
            </p>

            <div className="mt-6 flex flex-1 flex-col justify-between gap-3">
              {expectItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex flex-1 items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-3.5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      backgroundColor: 'rgba(153,160,249,0.1)',
                      borderColor: 'rgba(153,160,249,0.22)',
                    }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <div className="text-[14px] font-black tracking-tight text-white">{item.title}</div>
                    <p className="!mx-0 mt-0.5 !text-left text-[13px] font-medium leading-snug text-white/45">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/5 pt-4 text-[12px] font-bold tracking-wide text-white/35">
              No commitment · 30 minutes · Architecture-level deep dive
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
