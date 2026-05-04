import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Lock } from 'lucide-react';

/** Platform lavender accent (matches nav, pills, CTAs) */
const LAVENDER = '#99A0F9';

const mandates = [
  {
    num: '01',
    tag: 'Discovery',
    Icon: Search,
    title: 'Stop Operational Drift',
    body:
      'Legacy systems silently bleed data. Torro auto-discovers 100% of sensitive assets across your hybrid estate — cloud, on-prem, dark data stores — before regulators do.',
  },
  {
    num: '02',
    tag: 'Enforcement',
    Icon: Shield,
    title: 'Replace Assumption with Enforcement',
    body:
      "Manually maintained policies are fiction. Torro's automated entitlement engine enforces real-time access controls, classification, and data lineage — no human bottlenecks.",
  },
  {
    num: '03',
    tag: 'Compliance',
    Icon: Lock,
    title: 'Make Your Institution Defensible',
    body:
      "When the RBI examiner arrives or a ₹250 Cr DPDP fine is at stake, Torro's immutable audit trail and compliance posture make your institution bulletproof.",
  },
];

const IndustrialGovernanceMandates = () => {
  return (
    <section
      id="governance"
      className="relative overflow-hidden bg-[#f0f2f6] py-20 md:py-28 border-b border-slate-200/80"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[95rem] px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <h2
            className="text-3xl font-black tracking-tight md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            style={{ color: LAVENDER }}
          >
            Institutional Data Governance
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-600 md:text-lg">
            Built for enterprises where data missteps aren&apos;t just costly — they&apos;re regulatory failures.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {mandates.map((m, i) => {
            const Icon = m.Icon;
            return (
              <motion.article
                key={m.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col rounded-[1.75rem] border border-slate-200/90 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] md:p-9"
              >
                <span
                  className="pointer-events-none absolute right-6 top-6 text-[56px] font-black leading-none select-none md:right-8 md:top-8"
                  style={{ color: 'rgba(153, 160, 249, 0.42)' }}
                  aria-hidden
                >
                  {m.num}
                </span>

                <div className="relative mb-6 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#99A0F9]/20 bg-[#99A0F9]/8 text-[#4b5568]">
                    <Icon className="h-5 w-5 text-[#64708b]" strokeWidth={2} />
                  </div>
                  <span className="mt-1 inline-flex items-center rounded-md border border-[#99A0F9]/30 bg-[#99A0F9]/6 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#99A0F9]">
                    {m.tag}
                  </span>
                </div>

                <h3 className="relative mb-4 text-xl font-black tracking-tight text-slate-900 md:text-[1.35rem]">
                  {m.title}
                </h3>
                <p className="relative flex-1 text-left text-[15px] leading-relaxed text-slate-600 font-medium">
                  {m.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrialGovernanceMandates;
