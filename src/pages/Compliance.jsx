import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ComplianceMock } from '../components/mocks/ComplianceMocks';

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
    <section className="relative min-h-screen border-t border-white/5 bg-[#0c0e1a] pb-20 pt-40 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,160,249,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          id="compliance"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Navigate Global Mandates with{' '}
              <span style={{ color: ACCENT }}>Absolute Accountability</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-relaxed text-white/55 md:text-[16px]">
              The unified operating system to enforce active compliance and generate audit-ready evidence across your
              hybrid estate.
            </p>
          </div>
        </motion.div>

        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white">
            The <span style={{ color: ACCENT }}>Compliance Matrix</span>
          </h2>
          <div
            className="mx-auto h-px w-16"
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
                className="scroll-mt-28 rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-8 md:p-10"
              >
                <div
                  className={`grid items-start gap-10 lg:grid-cols-2 ${
                    isReversed ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="box-copy text-left">
                    <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                      {reg.title}{' '}
                      <span className="text-[14px] font-semibold text-white/45 md:text-[16px]">({reg.subtitle})</span>
                    </h3>

                    <div className="mt-6 space-y-6">
                      <div>
                        <div className="mb-2 text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                          The Mandate
                        </div>
                        <p className="text-[14px] font-medium leading-relaxed text-white/60">{reg.mandate}</p>
                        {reg.warning ? (
                          <p className="mt-3 text-[13px] font-semibold" style={{ color: ACCENT }}>
                            {reg.warning}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <div className="mb-2 text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                          Torro Enablement
                        </div>
                        <p className="text-[14px] font-medium leading-relaxed text-white/60">{reg.enablement}</p>
                      </div>

                      <div className="grid gap-4 border-t border-white/5 pt-4 md:grid-cols-2">
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                            Templates
                          </div>
                          <p className="text-[13px] font-medium leading-relaxed text-white/55">{reg.templates}</p>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                            Audit Readiness
                          </div>
                          <p className="text-[13px] font-medium leading-relaxed text-white/55">{reg.audit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ComplianceMock title={reg.title} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-4xl">
              The Torro Edge in <span style={{ color: ACCENT }}>Compliance</span>
            </h2>
            <div className="mb-8 h-px w-full bg-white/5" />

            <div className="rounded-2xl border border-[#1e2343]/50 bg-gradient-to-b from-[#11152a] to-[#0a0d1a] p-8 md:p-10">
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
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                      aria-hidden="true"
                    />
                    <span className="text-[14px] font-medium leading-relaxed md:text-[15px]">
                      <span className="font-black text-white">{item.k}:</span> {item.v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
              Is Your Institution <span style={{ color: ACCENT }}>Defensible?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[15px] font-medium leading-relaxed text-white/50">
              Non-compliance in the DPDP era is no longer a “reasonable measures” discussion. It is about absolute
              infrastructure reality.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center rounded-xl bg-[#F8BD64] px-7 py-3.5 text-[12px] font-black uppercase tracking-[0.22em] text-black shadow-[0_14px_34px_-18px_rgba(248,189,100,0.55)] transition-colors hover:bg-[#f0b04d]"
            >
              Evaluate Your Institutional Readiness — Book a Compliance Deep Dive
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompliancePage;
