import React from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#99A0F9';

const anchor = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CompliancePage = () => {
  const regs = [
    {
      title: 'DPDP Act 2023',
      subtitle: 'Digital Personal Data Protection',
      mandate: 'Absolute accountability for consent management (Sec 6) and security safeguards (Sec 8).',
      warning: 'Non-compliance risks penalties up to INR 250 Crore.',
      enablement:
        'The Regulatory Module dynamically excludes non-consented records from data views in real-time during consumption.',
      templates: 'Configurable "Creation to Deletion" lifecycle management triggers.',
      audit: 'AssetViz provides 100% data visibility and real-time monitoring for rapid breach reporting.',
    },
    {
      title: 'GDPR',
      subtitle: 'General Data Protection Regulation',
      mandate: 'Strict PII enforcement and the "Right to be Forgotten".',
      enablement:
        'Auto-detects and masks sensitive PII down to the cell level using automated entitlements (RBAC + ABAC).',
      templates: 'Built-in PII and sensitivity tagging templates.',
      audit: 'Ability to audit all data requests, consumption, and costs linked to each project.',
    },
    {
      title: 'BCBS 239',
      subtitle: 'Banking Risk Data Aggregation',
      mandate: 'Principles for effective risk data aggregation and reporting.',
      enablement:
        'Provides a single control plane for enterprise data to ensure consistency across reporting lines.',
      templates: 'Data quality sensors and validation rules deployed directly on pipelines.',
      audit: 'Real-time lineage tracking to answer exactly who accessed what, when, and why.',
    },
    {
      title: 'SOX & HIPAA',
      subtitle: 'Financial & Healthcare Compliance',
      mandate: 'Robust monitoring and protection for financial reporting and PHI.',
      enablement:
        'PrivBox secure containers host sensitive assets and analytics tools in an audited environment.',
      templates: 'Geofence control templates for cross-border data flow reviews.',
      audit:
        'Incident reporting captures full context, including cause and financial impact tied directly to regulatory references.',
    },
  ];

  return (
    <section className="bg-[#0c0e1a] text-white min-h-screen pt-40 pb-20 relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          id="compliance"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Navigate Global Mandates with{' '}
              <span style={{ color: ACCENT }}>Absolute Accountability</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-[16px] text-white/55 font-medium leading-relaxed max-w-3xl mx-auto">
              The unified operating system to enforce active compliance and generate audit-ready evidence across your
              hybrid estate.
            </p>
          </div>
        </motion.div>

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
            The <span style={{ color: ACCENT }}>Compliance Matrix</span>
          </h2>
          <div
            className="h-px w-16 mx-auto bg-gradient-to-r from-transparent to-transparent"
            style={{ backgroundImage: `linear-gradient(to right, transparent, ${ACCENT}B3, transparent)` }}
          />
        </div>

        <div className="space-y-10">
          {regs.map((reg, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={reg.title}
                id={anchor(reg.title)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="scroll-mt-28 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 md:p-10"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-start ${
                    isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="box-copy text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      {reg.title}{' '}
                      <span className="text-white/45 text-[14px] md:text-[16px] font-semibold">
                        ({reg.subtitle})
                      </span>
                    </h3>

                    <div className="mt-6 space-y-6">
                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          The Mandate
                        </div>
                        <p className="text-white/60 text-[14px] leading-relaxed font-medium">{reg.mandate}</p>
                        {reg.warning ? (
                          <p className="mt-3 text-[13px] font-semibold" style={{ color: ACCENT }}>
                            {reg.warning}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <div className="text-[12px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                          Torro Enablement
                        </div>
                        <p className="text-white/60 text-[14px] leading-relaxed font-medium">{reg.enablement}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                          <div className="text-[11px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                            Templates
                          </div>
                          <p className="text-white/55 text-[13px] leading-relaxed font-medium">{reg.templates}</p>
                        </div>
                        <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                          <div className="text-[11px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
                            Audit Readiness
                          </div>
                          <p className="text-white/55 text-[13px] leading-relaxed font-medium">{reg.audit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/5 h-[260px] md:h-[320px] flex items-center justify-center text-white/25 text-sm font-semibold">
                    Image / Screenshot Placeholder
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Torro Edge in Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
              The Torro Edge in <span style={{ color: ACCENT }}>Compliance</span>
            </h2>
            <div className="h-px w-full bg-white/5 mb-8" />

            <div className="bg-gradient-to-b from-[#11152a] to-[#0a0d1a] border border-[#1e2343]/50 rounded-2xl p-8 md:p-10">
              <ul className="space-y-4 text-white/75">
                {[
                  {
                    k: 'Regulatory Tagging',
                    v: 'Tag data policies directly to regulatory references, creating a full audit trail.',
                  },
                  {
                    k: 'Logic on Infrastructure',
                    v: 'Apply policy logic directly on hybrid infrastructure without complex coding.',
                  },
                  {
                    k: 'Automated Evidence Generation',
                    v: 'Replace manual audit firefighting with defensible automated reports.',
                  },
                  {
                    k: 'Collaborative Governance',
                    v: 'Unified workflows across Business, IT, Risk, and Legal teams.',
                  },
                ].map((item) => (
                  <li key={item.k} className="flex items-start gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: ACCENT }}
                      aria-hidden="true"
                    />
                    <span className="text-[14px] md:text-[15px] leading-relaxed font-medium">
                      <span className="font-black text-white">{item.k}:</span> {item.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Defensible CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
              Is Your Institution <span style={{ color: ACCENT }}>Defensible?</span>
            </h2>
            <p className="text-[15px] text-white/50 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              Non-compliance in the DPDP era is no longer a “reasonable measures” discussion. It is about absolute infrastructure reality.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-7 py-3.5 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] hover:bg-[#f0b04d] transition-colors"
            >
              Evaluate Your Institutional Readiness — Book a Compliance Deep Dive
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompliancePage;

