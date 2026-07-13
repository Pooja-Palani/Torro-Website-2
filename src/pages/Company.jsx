import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Eye, ArrowRight, Sparkles } from 'lucide-react';

const ACCENT = '#99A0F9';

const timeline = [
  {
    year: '2019',
    title: 'The Spark',
    body: 'We saw a critical gap in regulatory technology—and set out to simplify complex data ecosystems with a future-forward, unified platform for governance and digital agility.',
  },
  {
    year: '2021',
    title: 'Incorporation & Open Source',
    body: 'Torro.AI was officially incorporated. Our open-source build—contributed to by talented Google engineers—set a new benchmark for collaborative tech innovation.',
  },
  {
    year: '2022',
    title: 'Industry Validation',
    body: 'Google Professional Services recommended our solution for a leading Hong Kong-based bank—reinforcing that deep domain expertise, trust, and simplicity must drive transformation.',
  },
  {
    year: '2023',
    title: 'Landmark Year',
    body: 'Our client was awarded by Google for best cloud solution. We launched Torro OneData: Enterprise Edition—an end-to-end, AI-powered data governance platform for enterprises worldwide.',
  },
  {
    year: 'Today',
    title: 'Your Data Ally',
    body: 'Backed by experts with two decades in top-tier banks, powered by partnerships with Microsoft, Google Cloud, and Databricks, and trusted from banking to real estate—we simplify, unify, and accelerate data transformation.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

const Company = () => {
  return (
    <section className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] pb-20 pt-[calc(var(--header-height)+2rem)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(153,160,249,0.09)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(153,160,249,0.05)_0%,transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6 md:px-12">
        {/* Hero */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-4xl scroll-mt-28 text-center md:mb-20"
        >
          <div className="mb-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 shadow-[0_0_22px_rgba(153,160,249,0.10)]">
            <Users className="h-4 w-4" style={{ color: ACCENT }} />
            <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
              About Us
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-[1.05] md:text-5xl lg:text-6xl">
            The Torro story, built for <span style={{ color: ACCENT }}>modern enterprise</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
            Governance, privacy compliance, and AI—unified on one platform so regulated enterprises can move faster with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black transition-transform hover:scale-[1.02] active:scale-95"
              style={{ backgroundColor: ACCENT, boxShadow: '0 14px 34px -18px rgba(153,160,249,0.55)' }}
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/torro-onedata"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              Explore Platform
            </Link>
          </div>
        </motion.div>

        {/* Our Story — Timeline */}
        <motion.section {...fadeUp()} className="mb-16 md:mb-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Our <span style={{ color: ACCENT }}>Story</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[14px] font-medium text-white/45 md:text-[15px]">
              From a RegTech gap to an enterprise platform trusted across regulated industries.
            </p>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute bottom-6 left-[15px] top-6 w-px bg-gradient-to-b from-[#99A0F9]/55 via-[#99A0F9]/25 to-transparent sm:left-[19px]"
              aria-hidden="true"
            />

            <div className="space-y-5 md:space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  {...fadeUp(0.05 * idx)}
                  className="relative flex gap-4 sm:gap-6"
                >
                  <div className="relative z-10 mt-5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#99A0F9]/40 bg-[#0c0e1a] shadow-[0_0_16px_rgba(153,160,249,0.25)] sm:h-10 sm:w-10">
                    <span className="h-2 w-2 rounded-full bg-[#99A0F9]" />
                  </div>

                  <div className="min-w-0 flex-1 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-5 transition-colors hover:border-white/15 md:p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em]"
                        style={{ color: ACCENT }}
                      >
                        {item.year}
                      </span>
                      <h3 className="!mb-0 !text-left text-base font-black tracking-tight text-white md:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <div className="box-copy text-left">
                      <p className="!mx-0 !text-left text-[14px] font-medium leading-relaxed text-white/55 md:text-[15px]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Foundation */}
        <motion.section {...fadeUp(0.05)} className="mb-16 md:mb-20">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Our <span style={{ color: ACCENT }}>Foundation</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[14px] font-medium text-white/45 md:text-[15px]">
              What we build toward—and how we show up for every client.
            </p>
            <div
              className="mx-auto mt-5 h-px w-16"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
            />
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <motion.div
              {...fadeUp(0.06)}
              className="rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-7 transition-colors hover:border-white/15 md:p-8"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: 'rgba(153,160,249,0.12)',
                  borderColor: 'rgba(153,160,249,0.22)',
                  color: 'rgba(153,160,249,0.95)',
                }}
              >
                <Target className="h-5 w-5" />
              </div>
              <div className="mb-3 text-[12px] font-black uppercase tracking-[0.28em] text-white/35">Our Mission</div>
              <div className="box-copy text-left">
                <p className="!mx-0 !text-left text-[14px] font-medium leading-relaxed text-white/60 md:text-[15px]">
                  Uncomplicate data. We combine banking, governance, and analytics expertise to remove the friction that
                  slows digital transformation—delivering GenAI-assisted governance and hybrid architectures that make
                  data a true asset, not a burden.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-7 transition-colors hover:border-white/15 md:p-8"
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: 'rgba(153,160,249,0.12)',
                  borderColor: 'rgba(153,160,249,0.22)',
                  color: 'rgba(153,160,249,0.95)',
                }}
              >
                <Eye className="h-5 w-5" />
              </div>
              <div className="mb-3 text-[12px] font-black uppercase tracking-[0.28em] text-white/35">Our Vision</div>
              <div className="box-copy text-left">
                <p className="!mx-0 !text-left text-[14px] font-medium leading-relaxed text-white/60 md:text-[15px]">
                  Lead enterprises into digital-first, cloud-powered, data-centric operations. We provide a
                  command-and-control platform for seamless data management, fortified security, and agile utilization
                  across complex landscapes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.12)}
            className="mx-auto mt-6 max-w-5xl rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-7 md:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: 'rgba(153,160,249,0.12)',
                  borderColor: 'rgba(153,160,249,0.22)',
                  color: 'rgba(153,160,249,0.95)',
                }}
              >
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="mb-3 text-[12px] font-black uppercase tracking-[0.28em] text-white/35">Our Team</div>
                <div className="box-copy text-left">
                  <p className="!mx-0 !text-left text-[14px] font-medium leading-relaxed text-white/60 md:text-[15px]">
                    Domain experts, data scientists, engineers, and architects—working as one to solve real-world
                    challenges. We merge innovation with precision so every client gets deep industry insight,
                    cutting-edge technology, and a partnership rooted in trust and performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section
          {...fadeUp(0.08)}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] px-6 py-10 text-center md:px-12 md:py-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(153,160,249,0.14), transparent 55%)',
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Ready to uncomplicate your <span style={{ color: ACCENT }}>data future</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[14px] font-medium text-white/50 md:text-[15px]">
              See how Torro OneData brings governance, privacy, and visibility together for regulated enterprises.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-black transition-transform hover:scale-[1.02] active:scale-95"
                style={{ backgroundColor: ACCENT, boxShadow: '0 14px 34px -18px rgba(153,160,249,0.55)' }}
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                View Resources
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Company;
